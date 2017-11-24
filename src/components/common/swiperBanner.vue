<template>
	<div class="banner">
		<section class="swiper-container" :id="id" v-if="bannerList">
      <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item, index) in bannerList" :key="index" @click="_gotoDetail(item.link)">
        		<img :src="imgBaseUrl+item.img">
        		<p>
        			<span>{{ item.title }}</span>
        		</p>
          </li>
      </ul>
      <div class="swiper-pagination" :id="'SPagination_'+id"></div>
		</section>
	</div>
</template>

<script>
import {imageBaseUrl} from 'src/utils/env'


import 'static/plugin/swiper/swiper.min.js'
import 'static/plugin/swiper/swiper.min.css'

export default {

  name: 'swiperBanner',

  data () {
    return {
    	imgBaseUrl: imageBaseUrl,
    }
  },
  props: ['bannerList','id'],
  mounted () {
  	this.$nextTick(()=>{
  		new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
 				observeParents:true,//修改swiper的父元素时，自动初始化swiper
	    })
  	})
  },
  methods: {
  	_gotoDetail (link){
  		console.log(1)
  		let reg=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/
      let result = reg.test(link)
      if(!result) {
        //非网站
        this.$router.push('/detail/'+link)
      }
      else {
        this.$router.push('/other/'+link)
      }
  	}
  }
}
</script>

<style lang="less" scoped>
.banner {
	width: 100%;
	height: 100%;
	background: #eeeeee;
	cursor: pointer;
	position: relative;
	.swiper-container {
		height: 100%;
	}
	.swiper-slide {
		position: relative;
		img {
			width: 100%;
			height: 100%;
		}
		p {
			font-size: 15px;
			width: 100%;
			height: 32px;
			line-height: 32px;
			position: absolute;
			bottom: 0;
			left: 0;
			text-indent: 6px;
			overflow: hidden;
			background: rgba(0, 0, 0, 0.5);
			span {
				color: #ffffff;
				display: inline-block;
				width: 80%;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
		}
	}
	.swiper-pagination {
		text-align: right;
		bottom: 8px;
	}
}
</style>