<template>
	<view class="box">
	
		<view class="index">
			<view class="index_one">
				非博学无以广才，非志无以成学。
			</view>
			<view class="index_two">
				一 一 &nbsp; &nbsp;&lt; &lt; 东汉·诫子书 &gt; &gt;
			</view>
			<view class="button">
				<navigator url="/pages/index/index">  <button type="default">进入书摘</button> </navigator>
			</view>
		</view>
	</view>
</template>

<style scoped>

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
