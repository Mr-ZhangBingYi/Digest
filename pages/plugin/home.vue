<template name="components">
	<view>

		<view>
			<img src="https://img2.baidu.com/it/u=2532418673,3876881769&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
				alt="" class="background">
		</view>
		<view class="books">
			书单 ：
		</view>
		<!-- 列表 -->
		<view class="list">
			<!-- 已读 -->
			<view class="Read cc" @click="a">
				<view class="Read">
					已读
				</view>
				<image src="../../static/listicon.svg" mode="" class="aaa"></image>
			</view>
			<view class="A_list" v-if="show">
				<ol>
					<li v-for="(a,b) in Booklist_A" :key="b">{{a.a}}</li>


				</ol>
			</view>
			<!-- 未读 -->
			<view class="Unread cc" @click="b">
				<view class="Unread">
					未读
				</view>

				<image src="../../static/listicon.svg" mode="" class="aaa"></image>

			</view>
			<view class="B_list" v-if="shwo">
				<ol>
					<li v-for="(a,b) in Booklist_B" :key="b">{{a.a}}</li>

				</ol>
			</view>
			<!-- 语句 -->
			<view class="Unread cc" @click="c">
				<view class="Unread">
					文摘
				</view>

				<image src="../../static/listicon.svg" mode="" class="aaa"></image>

			</view>

			<view class="B_lista" v-if="yuju">
				<ol>
					<li v-for="(a,b) in Sentence" :key="b">{{a.a}}</li>

				</ol>
			</view>
		</view>
	</view>
</template>

<script>
	import database from "@/static/Database/database.js";
	export default {
		name: "components",
		data() {
			return {
				show: false,
				shwo: false,
				yuju: false,

				Booklist_A: database.Booklist_A,
				Booklist_B: database.Booklist_B,
				Sentence: database.Sentence,
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				// 已读

				list: [
					// {
					// 	title: '',
					// 	img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
					// 	url: '../plugin/indexes'
					// },
					// {
					// 	title: '微动画',
					// 	img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
					// 	url: '../plugin/animation'
					// },
					// {
					// 	title: '全屏抽屉',
					// 	img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
					// 	url: '../plugin/drawer'
					// },
					// {
					// 	title: '垂直导航',
					// 	img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
					// 	url: '../plugin/verticalnav'
					// }
				]
			};
		},
		methods: {
			toChild(e) {
				uni.navigateTo({
					url: e.currentTarget.dataset.url
				})

			},
			a() {
				this.show = !this.show;
				this.shwo = false;
				this.yuju = false;
			},
			b() {
				this.shwo = !this.shwo;
				this.show = false;
				this.yuju = false;
			},
			c() {
				this.yuju = !this.yuju;
				this.show = false;
				this.shwo = false
			}
		},
	}
</script>

<style>
	.cc {
		background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);
	}

	.B_lista>ol>li {
		margin-top: 10rpx;
		padding-left: 10rpx !important;
		padding-right: 20rpx;

	}

	.B_lista {
		height: 570rpx !important;
		overflow-y: auto;
		border: 1rpx solid gray !important;
		background-color: white !important;
		padding-left: 10rpx !important;
		line-height: 50rpx !important;

	}

	.B_list {
		height: 570rpx !important;
		overflow-y: auto;
		border: 1rpx solid gray !important;
		background-color: white !important;

	}

	.A_list {
		height: 570rpx !important;
		width: 100%;
		overflow-y: auto;
		border: 1rpx solid gray !important;
		background-color: white !important;
	}

	.aaa {
		display: inline-block;
		width: 50rpx;
		height: 50rpx;
		text-align: right;
		margin-left: 470rpx;
		margin-top: 20rpx;
		/* line-height: 100rpx; */
	}

	.books {
		margin-left: 25px;
		font-size: 60rpx;
		font-weight: 700;
	}

	.list>view {
		display: flex;
		background-color: #fff;
		border: 1px solid black;
		margin-top: 20rpx;
		width: 87%;
		padding: 10rpx;
		border-radius: 10rpx;
		height: 100rpx;
		line-height: 100rpx;
		padding-left: 30rpx;
	}

	.list {
		padding-left: 39rpx;
		overflow-y: auto;
		height: 950rpx;


	}

	.background {
		width: 100%;
		height: 45%;
	}

	.top_one {
		text-align: center;
		padding: 20rpx;
		font-weight: 900;
		font-size: 50rpx;
		margin-top: 50rpx;
	}

	.top {
		text-align: center;
		padding: 20rpx;
		font-weight: 900;
		font-size: 35rpx;
		font-family: "仿宋";
	}

	.page {
		height: 100vh;
	}

	.cardTitle {
		color: #fff;
		padding: 90upx 60upx;
		font-size: 40upx;
		font-weight: 300;
		transform: skew(-10deg, 0deg);
		position: relative;
		text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3)
	}

	.cardTitle::before {
		content: "";
		position: absolute;
		width: 60upx;
		height: 6upx;
		border-radius: 20upx;
		background-color: #fff;
		display: block;
		top: 60upx;
		left: 50upx;
		transform: skew(10deg, 0deg);
	}

	.cardTitle::after {
		content: "";
		position: absolute;
		width: 140upx;
		border-radius: 6upx;
		height: 24upx;
		background-color: #fff;
		display: block;
		bottom: 76upx;
		left: 90upx;
		transform: skew(10deg, 0deg);
		opacity: 0.1;
	}
</style>
