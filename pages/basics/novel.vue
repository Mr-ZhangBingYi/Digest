<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">文学著作</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav text-center fixed" :style="[{top:CustomBar + 'px'}]">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabNav" :key="index"
				@tap="tabSelect" :data-id="index">
				{{tabNav[index]}}
			</view>
		</scroll-view>
		<block v-if="TabCur==0">

			<view class="book">
				<view class="books" v-for="item in F_conduct" :key="item.F_conduct">
					<navigator :url="item.url">
						{{item.name}}
					</navigator>
				</view>
			</view>
		</block>
		<block v-if="TabCur==1">

			<view class="book">
				<view class="books" v-for="item in F_macroscopic" :key="item.F_macroscopic">
					<navigator :url="item.url">
						{{item.name}}
					</navigator>
				</view>
			</view>
		</block>
		<block v-if="TabCur==2">

			<view class="book">
				<view class="books" v-for="item in F_classic" :key="item.F_classic">
					<navigator :url="item.url">
						{{item.name}}
					</navigator>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import database from "@/static/Database/database.js";
	export default {
		data() {
			return {
				F_conduct: database.F_conduct,
				F_macroscopic: database.F_macroscopic,
				F_classic: database.F_classic,
				CustomBar: this.CustomBar,
				TabCur: 0,
				// avatar:['https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'],
				tabNav: ['经典', '小说', '哲理'],

			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
		}
	}
</script>

<style scoped>
	@import url("./../../static/Css/list.css");
</style>
