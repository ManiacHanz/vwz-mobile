<template>
	<div class="box">
		<iframe :src="url" frameborder="0" id="iframe">
			
		</iframe>
	</div>
</template>

<script>
export default {

  name: 'Other',

  data () {
    return {
    	url:''
    }
  },
  mounted(){
  	this.url = this.$route.query.url
  },
  watch: {
  	url: function(newVal) {
  		document.querySelector('#iframe')
  		alert(newVal)
  	}
  },
  beforeRouteUpdate () {
  	this.url = this.$route.params.url
  },
}
</script>

<style lang="css" scoped>
iframe {
	width: 100%;
	height: 100%;
}
</style>