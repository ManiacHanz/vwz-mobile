<template>
	<div class="banner">
		<section class="swiper-container" :id="id">
      <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item, index) in bannerList" :key="index" >
        		<img :src="item.img">
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
import 'static/plugin/swiper/swiper.min.js'
import 'static/plugin/swiper/swiper.min.css'

export default {

  name: 'swiperBanner',

  data () {
    return {

    }
  },
  props: ['bannerList','id'],
  mounted () {
  	this.$nextTick(()=>{
  		new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop: true,
        // autoplay: 4000,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
 				observeParents:true,//修改swiper的父元素时，自动初始化swiper
	    })
  	})
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