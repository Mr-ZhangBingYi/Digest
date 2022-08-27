<template>
	<view class="box">
	
		<view class="index">
			<view class="index_one">
				非博学无以广才，非志无以成学。
			</view>
			<view class="index_two">
				一 一 &nbsp; &nbsp;&lt; &lt; 东汉·诫子书 &gt; &gt;
			</view>
			<view class="zhiling">
				<view class="anhao">
					今夜口令：
				</view>
				<input type="number"  :placeholder="input.placeholder"  v-model="input.value" />
			</view>
			<view class="button">
			<button type="default"  @click="goIndex()" :disabled="input.value==9527?false:true">	  进入书摘 </button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				input: {
					placeholder: '芝麻开门',
				},
			
			};
			

		},
		methods: {
			goIndex(){
			uni.navigateTo({
			 url: '././index/index'
			});
			}
		}
	}
</script>

<style scoped>
	.jinru {
		width: 100%;
		height: 100%;
	}

	.anhao {
		background-color: antiquewhite;
		text-align: center;
		line-height: 50rpx;
		line-height: 50rpx;
		font-family: "楷书";
		font-size: 30rpx;
		width: 200rpx;
		padding-top: 10rpx;

	}
	input {
		border: 2rpx solid black;
		width: 300rpx;
		text-align: center;
		height: 70rpx;

	}

	.zhiling {
		display: flex;
		margin: 90rpx 30rpx;
	}
    button{
		border-radius: 10rpx;
		border: 3rpx solid  black;
	}
	button:hover{

	}
	.button {
		margin-top: 39%;
		padding: 5%;
		width: 43%;
		margin-left: 30%;
		border-radius: 20rpx;
		font-family: "楷书";
	}

	.index_two {
		text-align: right;
		margin-top: 20%;
		font-size: 35rpx;
		
	}

	.index {
		margin-top: 49%;
		padding: 7%;
		text-align: center;
		font-size: 43rpx;
		font-weight: 900;
		font-family: "仿宋";
	}

	.box {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0;
		padding: 0;
		position: fixed;
	}
</style>
