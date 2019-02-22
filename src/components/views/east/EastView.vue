<template>
	<div class="east">
		<div class="panel">
			<div class="header">
				<span class="title">East Side</span>
				<img class="slide-btn">
			</div>

			<EastTabContent v-bind:propsdata="selectedTab" />

			<div class="tabs">
				<div
				 class="tab first"
				 v-bind:class="activeClass"
				 @click="onClickTab('first')"
				>
					<span class="title">A Tab</span>
				</div>
				<div
				 class="tab second"
				 v-bind:class="activeClass"
				 @click="onClickTab('second')"
				>
					<span class="title">Property Grid</span>
					<span class="close"></span>
				</div>
			</div>
		</div>
		<div class="split-slider"></div>
	</div>
</template>

<script>
import EastTabContent from './EastTabContent';

export default {
	data() {
		return {
			selectedTab: '',
		};
	},
	computed: {
		activeClass: function(e) {
			console.log(e);
			return null;
		},
	},
	components: {
		EastTabContent,
	},
	methods: {
		onClickTab(selectedTab) {
			this.selectedTab = selectedTab;
		},
	},
	created() {
		this.selectedTab = 'first';
	},
};
</script>

<style scoped>
.east {
	width: 233px;
	height: 100%;
	position: absolute;
	right: 0;
}

.panel {
	height: calc(100% - 42px);
}

.header {
	height: 36px;
	background-color: #157fcc;
}

.header .title {
	position: relative;
	top: 7px;
	left: 10px;

	height: 16px;
	color: white;
	line-height: 15px;
	text-transform: none;
}

img.slide-btn {
	/* background-image: url(images/tool-sprites.png); */
	opacity: 0.5;
	background-color: #157fcc;
	background-position: 0 -176px;
	overflow: hidden;
	width: 16px;
	height: 16px;
	margin: 0;
	cursor: pointer;
	position: relative;
	top: 10px;
	left: 136px;
}

img.slide-btn:hover {
	opacity: 0.6;
}

.tabs {
	height: 31px;
	border-top: 5px solid #add2ed;
	background-color: #157fcc;
}

.tab {
	cursor: pointer;
	background-color: #4b9cd7;
	color: white;
}

.tab:hover {
	background-color: #5fa7db;
}

.tab.active {
	background-color: #add2ed;
	color: #157fcc;
}

/* first tab */
.tab.first {
	float: left;
	padding: 6px 12px 6px 12px;
	border-radius: 0px 0px 3px 3px;
	margin-right: 2px;
}

.tab.first span.title {
	line-height: 16px;
}

/* second tab */
.tab.second {
	float: left;
	border-radius: 0px 0px 3px 3px;
	width: 122.797px;
	height: 30.5px;
}

span.title {
	position: relative;
	top: 6px;
	left: 12px;
	display: inline-block;
	line-height: 16px;
}

.close {
	width: 12px;
	height: 12px;
	/* background-image: url(images/tab-default-close.png); */

	display: block;
	margin: -17px 5px 3px 109px;
}
</style>
