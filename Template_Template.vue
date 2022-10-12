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
					<li v-for="(a,b) in emperor" :key="b">{{a.chapter}}
						<br />
						<ol>
							<li v-for="(e,f) in a. text" :key="f">{{e. words}}</li>
						</ol>
						<p>{{a.time}}</p>
					</li>

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
				emperor: database.emperor,
				// Savior: [{
				// 	chapter: '黄帝内经【素问--第二节】',
				// 	time: '2022-09-29 · 21:38 ',
				// 	text: [{
				// 			words: ''
				// 		}, {
				// 			words: ''
				// 		}, {
				// 			words: ''
				// 		}, {
				// 			words: ''
				// 		},

				// 	]
				// }, ],
			};
		}
	}
</script>

<style scoped>
	@import url("../../../static/Css/abstract.css");
</style>
