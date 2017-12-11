<template>
	<div class="box">
		<img :src="imgBaseUrl+content.imglist[0]">
		<div class="right">
			<p class="title">{{ content.title }}</p>
			<p class="time">{{ content.time }}</p>
		</div>
	</div>
</template>

<script>
import {imageBaseUrl} from 'src/utils/env'

export default {

  name: 'typeB',

  data () {
    return {
      imgBaseUrl: imageBaseUrl,

    }
  },
  props: ['content'],

}
</script>

<style lang="less" scoped>
@import '../../style/common.less';

.box {
	padding: 3vw 3vw;
	display: flex;
}
img {
	display: block;
	width: 25vw;
	height: 17vw;
	margin-right: 3vw;
}
.right {
	// flex-grow: 1;
	height: 56px;
	.title {
		font-size: 0.26rem;
		height: 0.72rem;
		overflow-y: hidden;
		margin-bottom: 2px;
	}
	.time {
		font-size: 0.2rem;
		color: #999999;
		height: calc(~'17vw - 0.7rem');
		display: table-cell;
		vertical-align: bottom;
	}
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