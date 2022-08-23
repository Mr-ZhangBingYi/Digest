<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">纯音乐</block>
		</cu-custom>
		<view class="top" v-for="item in music" key="item.name">
			<audio :src="item.src" :controls="item.controls" :loop="item.loop" :name="item.name" :poster="item.poster"
				:author="item.author">
				{{item.txt}}  <source :src="item.src"  type="audio/mpeg" />
			</audio>
		</view>
	</view>
</template>
<script>

	
	export default {
		
		
		data() {
			return {
				InputBottom: 0,
				music: [{
						src: '../../static//muisc/The truth that you leave.mp3',
						controls: true,
						loop: true,
						name: '你离开的事实',
						author: '高志豪',
						poster: 'https://img1.baidu.com/it/u=1552334058,844280562&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						txt: '您目前的设备不支持音频播放',
					},
					{
						src: '../../static/muisc/wind.mp3',
						controls: true,
						loop: true,
						name: '风居住的街道',
						author: '矶村由纪子',
						poster: 'https://img0.baidu.com/it/u=766982000,631803514&fm=253&fmt=auto&app=138&f=PNG?w=834&h=500',
						txt: '您目前的设备不支持音频播放',
					},
				]
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
