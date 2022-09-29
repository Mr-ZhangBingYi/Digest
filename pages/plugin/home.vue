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
			<view class="Read" @click="a">
				<view class="Read">
					已读
				</view>
				<image src="../../static/listicon.svg" mode="" class="aaa"></image>
			</view>
			<view class="A_list" v-if="show">
				<ul>
					<li v-for="(a,b) in Booklist_A" :key="b">{{a.a}}</li>


				</ul>
			</view>
			<!-- 未读 -->
			<view class="Unread" @click="b">
				<view class="Unread">
					未读
				</view>

				<image src="../../static/listicon.svg" mode="" class="aaa"></image>

			</view>
			<view class="B_list" v-if="shwo">
				<ul>
					<li v-for="(a,b) in Booklist_B" :key="b">{{a.a}}</li>

				</ul>
			</view>
			<!-- 语句 -->
			<view class="Unread" @click="c">
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
	export default {
		name: "components",
		data() {
			return {
				show: false,
				shwo: false,
				yuju: false,
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				// 已读
				Booklist_A: [{
					a: '《平凡的世界》'
				}, {
					a: '《遥远的救世主》'
				}, {
					a: '《青瓷》'
				}, {
					a: '《沧浪之水》'
				}, {
					a: '《曾国藩的正面与侧面》'
				}, {
					a: '《万历十五年》'
				}, ],
				// 未读
				Booklist_B: [{
					a: '《中国城市建设史》'
				}, {
					a: '《基督山伯爵》'
				}, {
					a: '《中国文化深层结构》'
				}, {
					a: '《八次危机 》'
				}, {
					a: '《盐铁论》'
				}, {
					a: '《矛盾论》'
				}, {
					a: '《实践论》'
				}, {
					a: '《中国社会阶层分析》'
				}, {
					a: '《一的力量》'
				}, {
					a: '《资本论》'
				}, {
					a: '《大败局》'
				}, {
					a: '《放羊》'
				}, {
					a: '《柏拉图》'
				}, {
					a: '《诸子百家》'
				}, {
					a: '《海傲华》'
				}, {
					a: '《三体》'
				}, {
					a: '《三和青年》'
				}, {
					a: '《渡口编年》'
				}, {
					a: '《铁西区》'
				}, {
					a: '《单向度的人》'
				}, {
					a: '《简史》'
				}, {
					a: '《原始社会》'
				}, {
					a: '《鲁迅》'
				}, {
					a: '《中国哲学简史（世界哲学简史）》'
				}, {
					a: '《楞严经》'
				}, {
					a: '《收缩的城市》'
				}, {
					a: '《历代政治得失》'
				}, {
					a: '《君主论》'
				}, {
					a: '《中国社会各阶层分析》'
				}, {
					a: '《结构性改革》'
				}, {
					a: '《被讨厌的勇气》'
				}, ],
				// 语句
				Sentence: [{
					a: '南方比北方口味重 因为它们要用尽可能少的菜下尽可能多的饭'
				}, {
					a: '刚和老家的亲人打完电话，就看到小区一位女主人牵着小狗下来了 阶级还是命运'
				}, {
					a: '春天的道路依然会有泥泞'
				}, {
					a: '一节车厢和另一节车厢车厢的拥挤程度是不同的，因为大部分人潜意识里都只看周围'
				}, {
					a: '扬天贺 杨婉春'
				}, {
					a: '路走窄了'
				}, {
					a: '每一次选择都是一次诀别'
				}, {
					a: '过去发生的事情在无法改变'
				}, {
					a: '时间线 故事情节 人物'
				}, {
					a: '银行里上班的人和外面的妆不一样'
				}, {
					a: '深刻的痛苦比肤浅的快乐更有价值，但对于普通人而言肤浅的快乐更有现实的意义'
				}, {
					a: '一个普通人可能没有书上那样的青春 没有你侬我侬的恋爱 有的只是孤独和落寞'
				}, {
					a: '尤其是1-2岁小孩的眼睛，水汪汪，清澈，无杂陈，这是世上最美丽的风景，犹如赛里木湖的湖水，清澈见底'
				}, {
					a: '外婆家灶火屋 罐子里的糖蒜'
				}, {
					a: '真的想你啊'
				}, {
					a: '年轻人的成长阶段 经济 意识'
				}, {
					a: '任何一门学科都在以自己的方式解读这个世界'
				}, {
					a: '城市森林'
				}, {
					a: '自卑比狂妄更可悲，因为自卑会自己放弃属于他的机会，狂妄有可能会获得不属于他的机会。'
				}, {
					a: '心死为亡'
				}, {
					a: '那时候时间过得真慢'
				}, {
					a: '遗憾是电影里主角的觉醒的开始，但却是现实中人们沉沦的开始'
				}, {
					a: '不是胡一把好牌，打好一把烂牌'
				}, {
					a: '小人物篇'
				}, {
					a: '互联网本来提供的是一个可以让蛙跳出那口井来的机会。结果发现青蛙通过互联网找到了更多蹲在井里的同类，更加坚信了这个世界只有井口这么大。'
				}, ],
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
		background-color: aliceblue;
		margin-top: 20rpx;
		border: 1px solid balck;
		width: 90%;
		padding: 10rpx;
		border-radius: 10rpx;
		height: 100rpx;
		line-height: 100rpx;
		padding-left: 30rpx;
		border: 1px solid blue;
	}

	.list {
		margin-left: 50rpx;
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
