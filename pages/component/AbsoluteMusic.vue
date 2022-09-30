<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">纯音乐</block>
		</cu-custom>
		<view class="top" v-for="item in music" :key="item.name">
			<audio :src="item.src" :controls="item.controls" :loop="item.loop" :name="item.name" :poster="item.poster"
				:author="item.author">
				{{item.txt}}
				<source :src="item.src" type="audio/mpeg" />
			</audio>
		</view>
	</view>
</template>
<script>
	import database from "@/static/Database/database.js";

	export default {


		data() {
			return {
				InputBottom: 0,
				music: database.music,
			};
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},

		}
	}
</script>

<style>
	.top {
		margin: 5% 10%;
	}

	.box {
		margin: 20upx 0;
	}

	.box view.cu-bar {
		margin-top: 20upx;
	}
</style>
