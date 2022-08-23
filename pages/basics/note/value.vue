<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">书摘</block>
		</cu-custom>
		<view class="Digest">
			<!-- 双循环 -->
			<view class="">
				<ul>
					<li v-for="(a,b) in avatar" :key="a.chapter">{{a.chapter}}
						<ol>

							<li v-for="(e,f) in a.text" :key="e.words">{{e.words}}</li>
						</ol>
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
						text: [{
								words: '在长期主义之路上，与伟大格局观者同行，做时间的朋友。'
							},
							{
								words: '流水不争先，争的是滔滔不绝！'
							},
							{
								words: '以赤子之心，不被嘈杂浇铸；出走半生，归来仍是少年'
							},
							{
								words: '一个人的知识，能力和价值观才是深藏于内心并真正属于自己的“三把火”。'
							},
							{
								words: '构建属于自己的知识体系和思维框架，是塑造投资能力的起点。'
							},
							{
								words: '苏联作家 米哈依尔·肖洛霍夫：《静静的顿河》人们正在那里决定着自己和别人的命运，我却在这儿牧马。怎么能这样呢？应该逃走，不然我就会越陷越深，无法自拔。'
							},
							{
								words: '查理芒格：学习让你每天晚上睡觉的时候都比那天早上醒来时聪明一点点。'
							},
							{
								words: '价值投资不是数学或者推理，必须像社会学田野调查一样，才能看到本质'
							},
							{
								words: '人生很重的一件事儿，找一帮你喜欢的人，真正靠谱的人，一起做有意思的事儿'
							},
							{
								words: '中国不是简单的一、二线城市，三四线城市和农村分层叠加，也不是东中西部地区的简单区隔。每个地区、每个省都有自己独特的自然资源，人口特点和社会特征。'
							},
							{
								words: '中国的消费社会形成、工业化进展是多版本同步迭代中完成的。'
							},
							{
								words: '我始终对三四线城市的崛起充满期待'
							},
							{
								words: '寻求独立或者与世隔绝从来不是我的目标，生活在世外桃源，对真正的社会缺乏了解，这只能让一个人失去理解力和判断力。'
							},

						]
					},
					{
						chapter: '第二章',
						text: [{
							words: '真诚的面对自己内心的想法，比正确的答案更加重要。'
						}, ]
					}

				],

			};
		}
	}
</script>

<style scoped>
	.Digest {
		background-color: bisque;
		margin: 0;
		padding: 0;
		top: 90rpx;
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
	ul>li{
		margin-top: 35rpx;
	}
</style>
