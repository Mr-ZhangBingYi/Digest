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
	export default {


		data() {
			return {
				InputBottom: 0,
				music: [{
						src: '../../static/muisc/我爱你.mp3',
						controls: true,
						loop: true,
						name: '我爱你',
						author: 'Ayasa',
						poster: 'https://img1.baidu.com/it/u=4238255077,3779265094&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						txt: '您目前的设备不支持音频播放',
					}, {
						src: '../../static//muisc/风居住的街道.mp3',
						controls: true,
						loop: true,
						name: '风居住的街道',
						author: '矶村由纪子',
						poster: 'https://img0.baidu.com/it/u=766982000,631803514&fm=253&fmt=auto&app=138&f=PNG?w=834&h=500',
						txt: '您目前的设备不支持音频播放',
					},

					{
						src: '../../static/muisc/惊鸿.mp3',
						controls: true,
						loop: true,
						name: '惊鸿',
						author: 'jannik',
						poster: 'https://img2.baidu.com/it/u=2776626767,396575843&fm=253&fmt=auto&app=138&f=JPEG?w=848&h=500',
						txt: '您目前的设备不支持音频播放',
					}, {
						src: '../../static/muisc/浮光.mp3',
						controls: true,
						loop: true,
						name: '浮光',
						author: 'jannik',
						poster: 'https://img0.baidu.com/it/u=633272234,2989008817&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						txt: '您目前的设备不支持音频播放',
					}, {
						src: '../../static/muisc/告白之夜.mp3',
						controls: true,
						loop: true,
						name: '告白之夜',
						author: 'Ayasa',
						poster: 'https://img1.baidu.com/it/u=4238255077,3779265094&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						txt: '您目前的设备不支持音频播放',
					}, {
						src: '../../static/muisc/穿越时空的思念.mp3',
						controls: true,
						loop: true,
						name: '穿越时空的思念',
						author: '和田薰',
						poster: 'https://img2.baidu.com/it/u=2456911483,808228634&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						txt: '您目前的设备不支持音频播放',
					}, {
						src: '../../static/muisc/回梦游仙.mp3',
						controls: true,
						loop: true,
						name: '回梦游仙',
						author: '骆集益',
						poster: 'https://img2.baidu.com/it/u=4026980470,42212142&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375',
						txt: '您目前的设备不支持音频播放',
					}, {
						src: '../../static/muisc/千年的祈祷.mp3',
						controls: true,
						loop: true,
						name: '千年的祈祷',
						author: '姬神',
						poster: 'https://img1.baidu.com/it/u=398392613,1439001443&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=500',
						txt: '您目前的设备不支持音频播放',
					}, {
						src: '../../static/muisc/你离开的事实.mp3',
						controls: true,
						loop: true,
						name: '你离开的事实',
						author: '高至豪',
						poster: 'https://img2.baidu.com/it/u=849630156,841345231&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=401',
						txt: '您目前的设备不支持音频播放',
					}, {
						src: '../../static/muisc/炳灵.mp3',
						controls: true,
						loop: true,
						name: '炳灵',
						author: '关大洲',
						poster: 'https://img0.baidu.com/it/u=2092023985,3250666235&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=331',
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
