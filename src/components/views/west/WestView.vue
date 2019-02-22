<template>
	<div class="west">
		<div class="panel">
			<div class="header">
				<span class="title">West</span>
				<img
				 class="slide-btn"
				 src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
				>
			</div>
			<WestAccordian />
		</div>
		<div class="split-slider"></div>
	</div>
</template>

<script>
import WestAccordian from './WestAccordian';

export default {
	components: {
		WestAccordian: WestAccordian,
	},
};
</script>

<style scoped>
.west {
	left: 0;
	bottom: 0;
	width: 208px;
	height: 100%;
	position: absolute;
}

.panel {
	float: left;
	height: 100%;
	width: 200px;
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

.split-slider {
	cursor: pointer;
	width: 50px;
	height: 7px;
	/* background-image: url(src/assets/icons/mini-top.png); */
	left: 179px;
	margin: 0;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	transform: rotate(270deg);
}
</style>
