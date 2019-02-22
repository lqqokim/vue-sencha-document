<template>
	<div class="accordian">
		<div
		 class="item"
		 v-for="(item, index) in items"
		 :key="index"
		>
			<div class="header">
				<img
				 class="tool"
				 :src="item.img"
				>
				<span class="title">{{item.title}}</span>
				<img
				 class="expand-btn"
				 :src="item.button"
				>
			</div>
			<div class="content">
				<p>{{item.content}}</p>
			</div>
		</div>
	</div>
</template>

<script>
import NavigationImg from './../../../assets/icons/folder_go.png';
import SettingsImg from './../../../assets/icons/folder_wrench.png';
import InformationImg from './../../../assets/icons/information.png';
// import ExpandImg from './../../../assets/icons/tool-sprites-dark.png';

export default {
	data() {
		return {
			items: [
				{
					img: NavigationImg,
					title: 'Navigation',
					class: 'navigation',
					content: "Hi. I'm the west panel.",
					// button: ExpandImg,
				},
				{
					img: SettingsImg,
					title: 'Settings',
					class: 'settings',
					content: 'Some settings in here.',
					// button: ExpandImg,
				},
				{
					img: InformationImg,
					title: 'Information',
					class: 'information',
					content: 'Some info in here.',
					// button: ExpandImg,
				},
			],
		};
	},
};
</script>

<style scoped>
.accordian {
	height: calc(100% - 47px);
	background-color: white;
	padding: 5px 5px 0px 5px;
}

.header {
	/* width: 188px; */
	height: 32px;
	background-color: #dfeaf2;
}

.header:hover {
	background-color: #e6f1f9;
}

.header .title {
	position: relative;
	color: #666666;
	text-transform: none;
	top: 5px;
	left: 12px;
}

.navigation .expand-btn {
	left: 63px;
}

.settings .expand-btn {
	left: 78px;
}

.information .expand-btn {
	left: 58px;
}

.item {
	height: 32px;
	transition: all 0.3s;
	position: relative;
}

.item.expand {
	height: calc(100% - 86px) !important;
	background-position: 0 -192px;
}

.item.expand .content {
	display: block;
}

.content {
	display: none;
}

.item:not(:first-child) {
	margin-top: 5px;
}

img {
	width: 16px;
	margin: 0;
	overflow: hidden;
	border: 0;
}

img.tool {
	position: relative;
	top: 8px;
	left: 10px;
}

.expand-btn {
	position: relative;
	top: 0px;
	cursor: pointer;
	opacity: 0.5;
	background-color: #dfeaf2;
	background-position: 16px 128px;
}
/* img.expand-btn {
  background-image: url(src\assets\icons\tool-sprites-dark.png);
} */

img.expand-btn.change-expand {
	background-position: 0 -272px;
}

img.expand-btn:hover {
	opacity: 0.6;
}
</style>
