<template>
	<div class="center">
		<div class="left-btn"></div>
		<div class="right-btn"></div>
		<div class="tabs">
			<div class="tab-wrapper">
				<div class="tab first">
					<span class="title">Close Me</span>
					<span class="close"></span>
				</div>
				<div class="tab second">
					<div class="title">Center Panel</div>
				</div>
			</div>
		</div>
		<div class="content"></div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.center {
	background-color: #3892d3;
	left: 208px;
	right: 241px;
	position: absolute;
	height: 100%;
}

.tabs {
	height: 31px;
	background-color: #157fcc;
	border-bottom: 5px solid #b4d1ea;
	/* overflow-x: auto; */
}

.tab {
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
.tabs .first {
	cursor: pointer;
	width: 96.078px;
	height: 31px;
	margin-right: 2px;
	float: left;
	border-radius: 3px 3px 0px 0px;
}

.first .title {
	position: relative;
	top: 6px;
	left: 12px;
}

.close {
	top: -17px;
	left: 82px;
	display: block;
	position: relative;
	font-size: 0;
	line-height: 0;

	width: 12px;
	height: 12px;
	/* background-image: url(src\assets\icons\tab-default-close.png); */
}

/* second tab */
.second {
	cursor: pointer;
	float: left;
	width: 102.484px;
	height: 31px;
	border-radius: 3px 3px 0px 0px;
}

.second .title {
	padding: 8px 0px 0px 12px;
}

/* content */
.content {
	height: calc(100% - 42px);
	background-color: white;
	overflow-y: scroll;
	padding: 5px;
	box-sizing: border-box;

	color: black;
	font-size: 13px;
	font-weight: normal;
	font-family: helvetica, arial, verdana, sans-serif;
}

.content p:not(:first-child) {
	margin-top: 5px;
}
</style>

