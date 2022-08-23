<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">宗教</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav text-center fixed" :style="[{top:CustomBar + 'px'}]">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabNav" :key="index"
				@tap="tabSelect" :data-id="index">
				{{tabNav[index]}}
			</view>
		</scroll-view>
		<block v-if="TabCur==0">
			<!-- 理财 -->
			<view class="book">
				<view class="books" v-for="item in conduct" :key="item.conduct" >
				           <navigator :url="item.url">
						{{item.name}}
				</navigator>
				</view>
			</view>
		</block>
		<block v-if="TabCur==1">
			<!-- 宏观 -->
			<view class="book">
				<view class="books" v-for="item in macroscopic" :key="item.macroscopic" >
				           <navigator :url="item.url">
						{{item.name}}
				</navigator>
				</view>
			</view>
		</block>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				TabCur: 0,
				// avatar:['https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'],
				tabNav: ['佛', '道', ],
				conduct: [{
					name: '心经',
					url:''
				},{
					name: "金刚经",
					url: ''
				},
				{
					name: "楞严经",
					url: ''
				},
				{
					name: '地藏经',
					url:''
				},{
					name: "法华经",
					url: ''
				},],
				macroscopic:[
					{
						name: '德道经',
						url:''
					},
					{
						name: '',
						url:''
					},{
						name: "",
						url: ''
					},{
						name: "",
						url: ''
					},{
						name: "",
						url: ''
					},
				],
				
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
		}
	}
</script>

<style>
	.books {
		width: 28%;
		height: 250rpx;
		margin: 30rpx 2.5%;
		padding: 0 20rpx;
		background-color: antiquewhite;
		text-align: center;
		line-height: 250rpx;
		/* 文本自动换行 */
		 /* word-wrap:break-word; */
	}
	.book {
		margin-top: 50rpx;
		display: flex;
		/* 元素自动换行 */
		 flex-wrap: wrap;
		
		/* border: 1px solid black; */
	}

	.cu-item {
		width: 43%;
		text-align: center;
	}

	page {
		padding-top: 45rpx;
	}
</style>
