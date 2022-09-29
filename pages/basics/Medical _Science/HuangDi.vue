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
						chapter: '黄帝内经【导读】',
						time: '2022-09-29 · 21:22 ',
						text: [{
								words: '素问：偏重于人体生理，病机病理，疾病治疗 人与自然等原则'
							}, {
								words: '灵枢：偏重于人体解剖 腑脏经络 俞穴 针灸治疗等。'
							}, {
								words: '共同特点：都是有关问题的理论论述 治疗和具体的方药'
							}, {
								words: '主张：不治已病而治未病'
							}, {
								words: '后人用皇帝和岐伯对话形式,实非一时之言，亦非一人之手。'
							},

						]
					}, {
						chapter: '黄帝内经【素问--第一节】',
						time: '2022-09-29 · 21:38 ',
						text: [{
								words: '元气决定一个人的寿运，气是生命之源'
							}, {
								words: '养生之道在于遵守天地运行变化的人规律，生活（吃喝、房事）要有节制，不能过于劳累'
							}, {
								words: '志闲少欲 心安不惧 形劳不倦'
							}, {
								words: '法于阴阳 知于术变 饮食有节 起居有常'
							}, {
								words: '以酒为浆 醉以入房 欲竭其真 耗散其真'
							},

						]
					}, {
						chapter: '黄帝内经【素问--第二节】',
						time: '2022-09-29 · 21:38 ',
						text: [{
								words: '女子以七位周期 男子以八位周期'
							}, {
								words: '十四岁来经 具备生育能力 二十八岁巅峰 四十九岁闭经 失去生育能力'
							}, {
								words: '男子三十二巅峰'
							}, {
								words: '外不劳形于事 内无思想之患'
							},

						]
					}, {
						chapter: '黄帝内经【素问--第三节】',
						time: '2022-09-29 · 21:42 ',
						text: [{
								words: '春生 夏长 秋收 冬藏'
							}, {
								words: '发陈 蕃秀 容平 闭藏'
							}, {
								words: '阳气-保护人体外部不受伤害，阴气 -精化阳'
							}, {
								words: '淫邪 阴精日渐消亡 遂伤肝'
							}, {
								words: '饮酒过度 气逆'
							}, {
								words: '饮食过饱 经脉驰纵 痢疾 痔疮等'
							}, {
								words: '用力过度 伤肾 腰脊'
							}, {
								words: '阴平阳秘-阴阳动态平衡'
							}, {
								words: '阴经产生于 饮食五味 藏于五脏也会因五味而伤'
							}, {
								words: '过酸 肝气亢盛 导致脾胃衰竭'
							}, {
								words: '过咸 骨骼损伤 心气抑郁'
							}, {
								words: '过甜 心气满闷 气逆作喘 肾失衡'
							}, {
								words: '过苦 脾气过燥 胃气滞'
							}, {
								words: '过辛 静脉败坏 精神受损'
							},

						]
					}, {
						chapter: '黄帝内经【素问--第四节】',
						time: '2022-09-29 · 21:47 ',
						text: [{
								words: '春季 东风 发病在肝经 表现在头部'
							}, {
								words: '南风夏季 发病心经 在心 '
							}, {
								words: '西风 秋季 肺 肩背'
							}, {
								words: '北风 冬季 四肢'
							}, {
								words: '腹阴背阳，脏阴腑阳 '
							}, {
								words: '肝 心 脾 肺 肾 属于阴'
							}, {
								words: '胆 胃 大肠 小肠 膀胱 三焦 属于阳'
							}, {
								words: '阴平阳秘-阴阳动态平衡'
							}, {
								words: '阳阳心，阳阴肺。阴阴肾，阴阳肝，阴中至阴脾'
							}, {
								words: '...'
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
