<template>
	<div class="box" :class="theme" v-if="!userLink">
		<section class="loading" v-if="isShowLoading">
      <loading></loading>
    </section>
		<section class="top">
			<img src="/static/img/ad_01.jpg">
		</section>
		<ul class="ctr-list" v-if="userData!=''">
			<li v-for="(item, index) in userData.content" :key="index" @click="_gotoDetail(item.link)">
				<img :src="imgBaseUrl+item.icon">
				<span>{{item.title}}</span>
			</li>
		</ul>
	</div>
  <div v-else>
    <iframe :src="userLink" frameborder="0" id="iframe">
      
    </iframe>
  </div>
</template>

<script>
import axios from 'axios'

import {mapState, mapMutations} from 'vuex'

import {baseUrl,imageBaseUrl} from 'src/utils/env'
import {jsonParse, getStore} from 'src/utils/mUtils.js'

import loading from 'src/components/common/loading.vue'
export default {

  name: 'User',

  data () {
    return {
			isShowLoading: true,
    	userData:'',
    	imgBaseUrl: imageBaseUrl,
    }
  },
  components: {
    loading,
  },
  computed: {
    ...mapState([
        'uid','theme','userLink'
      ])
  },
  mounted () {
  	this.init()
  },
  methods: {
  	init(){
  		let that = this
		  if(!that.uid){
		  	// this.$route.hash = ''
		  	// console.log(this.$route.hash)
        this.$router.push('/')
      }
      // alert(that.uid)
      axios.get(baseUrl+'/front/service?uid='+ that.uid)
        .then(res=> {
          console.log(res)
          that.userData = Object.assign({},jsonParse(res.data.data))
          that.isShowLoading = false;
        })
  	},
  	_gotoDetail (link) {
      let reg=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/
      let result = reg.test(link)
      if(!result) {
        //非网站
        this.$router.push('/detail/'+link)
      }
      else {
        let newlink = link.replace('http://', '')
        
        this.$router.push('/other/'+newlink)
      }
    },
  }
}
</script>

<style lang="less" scoped>
@import "../../style/common.less";

.box {
	overflow-y: auto;
}
.loading {
  width:100%;
  height: 90vh;
}
.top {
	height: 20vh;
	position: relative;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
	}
}
.ctr-list {
	li {
		font-size: 0.26rem;
		height: 10vh;
		line-height: 10vh;
		border-bottom: 1px solid @borderGrey;
		background: url('/static/img/arrow.png') no-repeat;
		background-position: 95% center;
		background-size: 0.18rem;
		padding-left: 4vw;
		position: relative;
	}
	img {
		width: 5vh;
		height: 5vh;
		margin-right: 4vw;
	  vertical-align: middle;
	}
}
.dark {
	background-color: @dark_back;
	.ctr-list {
		li {
			background: url('/static/img/arrow_dark.png') no-repeat;
			background-position: 95% center;
			background-size: 0.18rem;
      border-color: @dark_border;
		}
		li span{
			color: @dark_lightFont;
		}
	}
}
#iframe {
  width: 100%;
  height: 100%;
}
</style>