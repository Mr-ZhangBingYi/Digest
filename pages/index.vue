<template>
	<!-- 自动刷新 -->
	<!-- <meta http-equiv="refresh" content="5"> -->
	<view class="box">

		<view class="index">
			<view class="index_one">
				非博学无以广才，非志无以成学。
			</view>
			<view class="index_two">
				一 一 &nbsp; &nbsp;&lt; &lt; 东汉·诫子书 &gt; &gt;
			</view>

			<view class="Tips" v-show="Tips">
				{{text}}
			</view>
			<view class="zhiling">
				<view class="anhao">
					<image src="../static/security.svg" mode="" ></image>
				</view>
				<input type="password" :placeholder="input.placeholder" v-model="input.value" />
				<view class="button">
					<!-- :disabled="input.value==9527?false:true" -->
					<button type="default" @click="goIndex()"> 进入书摘 </button>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

				Tips: false,
				text: '请输入正确的口令 ！',

				input: {
					placeholder: '请输入今夜口令',
				},
			};
		},
		methods: {
			goIndex() {
				let a = this.input.value;
				let b = 9090;
				// 不能0开头
				if (a == b) {
					uni.navigateTo({
						url: '././index/index',
					});
				} else {
					this.Tips = true,
				    this.input = '',
					// 立即刷新页面
					// location.reload();
					
					// 延迟刷新
					window.setTimeout(function () {
					     window.location.reload();
					},2000)
				};
				this.input = ''
			}
		}
	}
</script>

<style scoped>
	.Tips {
		color: red;
		top: 1170rpx;
		left: 157rpx;
		position: fixed;
		font-size: 32rpx;
	}

	image {
		width: 90rpx;
		height: 70rpx;
		margin-right: 20rpx	;
	}

	input {
		border: 2rpx solid black;
		width: 300rpx;
		text-align: center;
		height: 70rpx;
		border-radius: 0rpx 10rpx 10rpx 0rpx;
	}

	.zhiling {
		display: flex;
		margin: 430rpx 0rpx;
		padding: 0;
	}

	button {
		border-radius: 10rpx;
		border: 3rpx solid black;
		color: white;
		background-color: black;
		height: 70rpx;
		line-height: 70rpx;
		width: 250rpx;
	}

	.button {
		width: 43%;
		font-family: "楷书";
		margin-left: 5%;
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
