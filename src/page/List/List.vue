<template>
	<div class="box" :class="theme" v-if="!listLink">
		<section class="loading" v-if="isShowLoading">
      <loading></loading>
    </section>
    <section class="banner" v-if="listData!=''">
			<swiper-banner :bannerList="listData.banner"></swiper-banner>
		</section>
		<section class="content" v-if="listData!=''">
			<ul >
				<li v-for="(item, index) in listData.content" :key="index" @click="_gotoDetail(item.link)">
					<type-a v-if="item.imglist.length===3" :content="item"></type-a>
					<type-b v-else :content="item"></type-b>
				</li>
			</ul>
		</section>
	</div>
  <div v-else>
    <iframe :src="listLink" frameborder="0" id="iframe">
      
    </iframe>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState, mapMutations} from 'vuex'
import {baseUrl,imageBaseUrl} from 'src/utils/env'
import {jsonParse, getStore} from 'src/utils/mUtils.js'

import loading from 'src/components/common/loading.vue'
import swiperBanner from 'src/components/common/swiperBanner.vue'
import typeA from 'components/listView/typeA'
import typeB from 'components/listView/typeB'


export default {

  name: 'List',

  data () {
    return {
      imgBaseUrl: imageBaseUrl,
    	isShowLoading: true,
    	listData:'',
    }
  },
  components: {
  	swiperBanner,
    loading,
    typeA,
    typeB,
  },
  computed: {
    ...mapState([
        'uid','theme','listLink'
      ])
  },
  mounted (){
    this.init()
  },
  methods: {
  	init(){
      let that = this
      if(!that.uid){
        this.$router.push('/')
      }
      axios.get(baseUrl+'/front/news?uid='+ that.uid)
        .then(res=> {
          console.log(res)
          that.listData = Object.assign({},jsonParse(res.data.data))
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
	overflow-y: scroll;
}
.loading {
  width:100%;
  height: 90vh;
}
.banner {
	height: 28vh;
}
.content {
  li:not(:last-of-type) {
    border-bottom: 1px solid #dedede;
  }
}
.dark {
  background-color: @dark_back;
  .content {
    li {
      border-color: @dark_border;
    }
  }
}
#iframe {
  width: 100%;
  height: 90vh;
}
</style>