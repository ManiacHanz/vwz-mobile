<template>
	<div class="detail-box">
		<div class="top-bar" @click="_backRouter">返回</div>
	</div>
</template>

<script>
export default {

  name: 'Detail',

  data () {
    return {

    }
  },
  methods: {
  	_backRouter () {
  		this.$router.back()
  	}
  }
}
</script>

<style lang="less" scoped>
.detail-box {
	height: 100vh !important;
	position: relative;
	background-color: #fff;
	z-index: 1;
	overflow-y: auto;
}
</style>