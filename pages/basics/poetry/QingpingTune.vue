<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">书摘</block>
		</cu-custom>
		<view class="Digest">
			<view class="title">
				<!-- 标题 -->
				清平调
			</view>
			<view class="name">
				<!-- 作者 -->
				唐·李白
			</view>
			<view class="text">
				云想衣裳花想容， <br>春风拂槛露华浓。 <br>
				若非群玉山头见， <br>会向瑶台月下逢。 <br>
			</view>
		</view>
	</view>
</template>


<style scoped>
	.text{
		text-align: center;
		font-size: 33rpx;
	    line-height: 70rpx;
	}
	.name{
		text-align: right;
		padding-right: 30%;
		padding-bottom: 5%;
		font-family: "仿宋";
		font-size: 30rpx;
	}
	.title{
		text-align: center;padding: 5%;
		font-size: 35rpx;
		font-weight: 900;
	}
	.Digest {
		background-color: bisque;
		margin: 0;
		padding: 0;
		top: 85rpx;
		bottom: 0;
		left: 0;
		right: 0;
		position: fixed;
		/* 滚动条 */
		overflow-y: scroll;
	}

	
</style>
