<template>
	<div class="box">
		<img :src="content.imglist[0]">
		<div class="right">
			<p class="title">{{ content.title }}</p>
			<p class="time">{{ content.time }}</p>
		</div>
	</div>
</template>

<script>
export default {

  name: 'typeB',

  data () {
    return {

    }
  },
  props: ['content'],

}
</script>

<style lang="less" scoped>
@import '../../style/common.less';

.box {
	padding: 8px 6px;
	display: flex;
}
img {
	display: block;
	width: 80px;
	height: 56px;
	margin-right: 8px;
}
.right {
	flex-grow: 1;
	height: 56px;
	.title {
		height: 38px;
		overflow-y: hidden;
		margin-bottom: 2px;
	}
	.time {
		font-size: 12px;
		color: #999999;
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