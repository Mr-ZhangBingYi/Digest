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
	export default {
		name: "basics",
		data() {
			return {
				elements: [{
						title: '经济',
						name: 'Economics',
						color: 'cyan',
						cuIcon: 'newsfill'
					},
					{
						title: '心理学',
						name: 'Psychology',
						color: 'blue',
						cuIcon: 'colorlens'
					},
					{
						title: '医学',
						name: 'MedicalScience',
						color: 'green',
						cuIcon: 'loading2'
					},
					{
						title: '诗词',
						name: 'Poetry',
						color: 'orange',
						cuIcon: 'icloading'
					},
					{
						title: '宗教 ',
						name: 'Religion',
						color: 'mauve',
						cuIcon: 'cuIcon'
					},
					{
						title: '小说',
						name: 'novel',
						color: 'purple',
						cuIcon: 'font'
					},

					// {
					// 	title: '按钮',
					// 	name: 'button',
					// 	color: 'pink',
					// 	cuIcon: 'btn'
					// },
					// {
					// 	title: '标签',
					// 	name: 'tag',
					// 	color: 'brown',
					// 	cuIcon: 'tagfill'
					// },
					// {
					// 	title: '头像',
					// 	name: 'avatar',
					// 	color: 'red',
					// 	cuIcon: 'myfill'
					// },

					// {
					// 	title: '边框阴影',
					// 	name: 'shadow',
					// 	color: 'olive',
					// 	cuIcon: 'copy'
					// },

				],
			};
		},
		onShow() {
			console.log("success")
		}
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
