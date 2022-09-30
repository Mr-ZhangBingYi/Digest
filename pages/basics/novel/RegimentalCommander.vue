<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">书摘</block>
		</cu-custom>
		<view class="Digest">
			<!-- 双循环，二层循环是从一层循环里面拿值做循环 -->
			<view class="">
				<ul>
					<li v-for="(a,b) in regiment" :key="a.chapter">{{a.chapter}}
						<ol>

							<li v-for="(e,f) in a. text" :key="e. text">{{e. words}}</li>
						</ol>
					</li>

				</ul>
			</view>
		</view>
	</view>
</template>

<script>
	import database from "@/static/Database/database.js";
	export default {
		data() {
			return {
				regiment: database.regiment

			};
		}
	}
</script>

<style scoped>
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

	ol>li {

		margin: 20rpx 0rpx;
		margin-left: -80rpx;
		padding: 0 30rpx 0 30rpx;
	}

	ul>li {
		margin-top: 35rpx;
	}
</style>
