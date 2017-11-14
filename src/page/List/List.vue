<template>
	<div class="box">
		<section class="loading" v-if="isShowLoading">
      <loading></loading>
    </section>
    <section class="banner" v-if="listData!=''">
			<swiper-banner :bannerList="listData.banner"></swiper-banner>
		</section>
		<section class="content" v-if="listData!=''">
			<ul >
				<li v-for="(item, index) in listData.content" :key="index">
					<type-a v-if="item.imglist.length===3" :content="item"></type-a>
					<type-b v-else :content="item"></type-b>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
import {listList} from 'src/service/getData.js'

import loading from 'src/components/common/loading.vue'
import swiperBanner from 'src/components/common/swiperBanner.vue'
import typeA from 'components/listView/typeA'
import typeB from 'components/listView/typeB'


export default {

  name: 'List',

  data () {
    return {
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
  beforeMount () {
    setTimeout(()=>{

    	this.init()
    },500)
  },
  
  methods: {
  	async init(){
     let res = await listList() 
     this.listData = Object.assign({},res.list.data)
     this.isShowLoading = false;
  	}
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
  li {
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
</style>