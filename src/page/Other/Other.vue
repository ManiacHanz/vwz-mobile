<template>
	<div class="box">
		<iframe :src="url" frameborder="0" id="iframe">
			
		</iframe>
	</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {

  name: 'Other',

  data () {
    return {
    	url:''
    }
  },
  computed: {
    ...mapState([
        'uid','iframeUrl'
      ])
  },
  mounted(){
  	if(!this.uid){
      this.$router.push('/')
    }
  },
}
</script>

<style lang="css" scoped>
iframe {
	width: 100%;
	height: 100%;
}
</style>