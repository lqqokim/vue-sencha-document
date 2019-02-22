<template>
	<div class="content">
		<div class="top">
			<button>test</button>
		</div>
		<div class="tabcontent letter">
			<p>A TabPanel component can be a region.</p>
		</div>
		<div class="tabcontent table">
			<table>
				<tr>
					<th class="name">
						<span>Name</span>
						<span class="sort-btn"></span>
					</th>
					<th class="value">
						<span>Value</span>
						<span class="sort-btn"></span>
					</th>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
	height: calc(100% - 42px);
	background-color: white;
}

.top {
	padding: 6px 0 6px 177px;
}

.top button {
	width: 39.344px;
	height: 24px;
	cursor: pointer;
	color: #736c6c;
	font-family: helvetica, arial, verdana, sans-serif;
	background-color: #ececec;
	font-weight: bold;
	font-size: 12px;
	border-radius: 3px;
}

.tabcontent {
	display: none;
}
</style>
