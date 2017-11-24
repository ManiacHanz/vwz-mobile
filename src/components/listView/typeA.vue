<template>
	<div class="box">
		<p class="title">{{ content.title }}</p>
		<div class="imglist" >
			<img :src="imgBaseUrl+item" v-for="item in content.imglist">
		</div>
		<p class="time">{{ content.time }}</p>
	</div>
</template>

<script>
import {imageBaseUrl} from 'src/utils/env'

export default {

  name: 'typeA',

  data () {
    return {
      imgBaseUrl: imageBaseUrl,

    }
  },
  props: ['content']
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.box {
	padding: 0 3vw;
}
.title {
	font-size: 0.24rem;
	height: 0.5rem;
	line-height: 0.5rem;
	.ellipsis()
}
.imglist {
	display: flex;
	justify-content: space-between;
	img {
		display: block;
		width: 28vw;
		height: 20vw;
	}
}
.time {
	font-size: 0.2rem;
	color: #999999;
	line-height: 0.4rem;
}
.dark {
	background: @dark_back;
	.title {
		color: @dark_lightFont;
	}
	.time {
		color: @dark_font;
	}
}
</style>