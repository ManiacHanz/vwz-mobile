<template>
	<div class="box">
		<div class="load6">
			<div class="bounce1"></div>
			<div class="bounce2"></div>
			<div class="bounce3"></div>
		</div>


	</div>
</template>

<script>


import 'static/plugin/loading/prefixfree.min.js'
export default {

  name: 'loading',

  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.box {
	width: 100%;
	height: 100%;
	background: #fff;
	padding-top: 35vh;
}
.load6 {
  margin: 0 auto 0;
  width: 150px;
  text-align: center;
}
.load6 > div {
  width: 30px;
  height: 30px;
  background-color: #67CF22;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
  animation: bouncedelay 1.4s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.load6 .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.load6 .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}


</style>