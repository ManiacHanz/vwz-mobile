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
        'uid'
      ])
  },
  mounted(){
  	if(!this.uid){
      this.$router.push('/')
    }
  },
  watch: {
  	'$route': function(to, from) {
  		// console.log(to.params.id)
      this.url = 'http://' + to.params.id
  	}
  },
  beforeRouteEnter (to,from, next) {
    next(vm=>{
  	 vm.url = 'http://'+vm.$route.params.id
    })
  },
}
</script>

<style lang="css" scoped>
iframe {
	width: 100%;
	height: 100%;
}
</style>