<template>
	<div class="box">
		<p class="title">{{ content.title }}</p>
		<div class="imglist" >
			<img :src="item" v-for="item in content.imglist">
		</div>
		<p class="time">{{ content.time }}</p>
	</div>
</template>

<script>
export default {

  name: 'typeA',

  data () {
    return {

    }
  },
  props: ['content']
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.box {
	padding: 0 6px;
}
.title {
	height: 32px;
	line-height: 32px;
	.ellipsis()
}
.imglist {
	display: flex;
	justify-content: space-between;
	img {
		display: block;
		width: 94px;
		height: 70px;
	}
}
.time {
	font-size: 12px;
	color: #999999;
	line-height: 24px;
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