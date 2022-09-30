<template name="basics">
	<view>
		<scroll-view scroll-y class="page">
			<view class="width">
			</view>
			<image src="https://img0.baidu.com/it/u=2976468595,984718161&fm=253&fmt=auto&app=138&f=JPEG?w=766&h=500"
				mode="widthFix" class="response"></image>
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
	.width {
		width: 100%;
		height: 1%;
	}

	.page {
		height: 100vh;
	}
</style>
