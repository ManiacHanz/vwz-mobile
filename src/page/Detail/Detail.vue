<template>
	<div class="detail-box">
		<div class="top-bar" @click="_backRouter"><</div>
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
.top-bar {
  font-size: 0.4rem;
  padding-left: 4vw;
  height: 6vh;
  line-height: 6vh;
  border-bottom: 1px solid #dedede;
  box-shadow: 0 0 10px 2px #ddd;
}
</style>