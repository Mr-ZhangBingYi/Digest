<template name="basics">
	<view>
		<scroll-view scroll-y class="page">
			<view class="width">
			</view>
			<image src="../../static/pulic/Statue_of_Liberty.jpg" mode="widthFix" class="response"></image>
			<view class="nav-list">
				<navigator hover-class="none" :url="'/pages/basics/' + item.name" class="nav-li" navigateTo
					:class="'bg-'+item.color" :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
					v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>
<script>
	import database from "@/static/Database/database.js"
	export default {
		name: "basics",
		data() {
			return {
				elements: database.elements,
			}
		},
		mounted() {}
	}
</script>

<style>
	.response {
		margin-bottom: 20rpx;
	}

	.page {
		height: 100vh;
	}
</style>
