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
					<li v-for="(a,b) in avatar" :key="b">{{a.chapter}}
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
	export default {
		data() {
			return {

				avatar: [{
						chapter: '第一章',
						time: '2022-08-22+ ',
						text: [{
								words: '在长期主义之路上，与伟大格局观者同行，做时间的朋友。'
							},

						]
					},

				],

			};
		}
	}
</script>

<style scoped>
	@import url("../../../static/Css/abstract.css");
</style>
