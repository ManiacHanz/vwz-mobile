<template>
	<div>
    <section class="loading" v-if="isShowLoading">
      <loading></loading>
    </section>
		<section class="banner" v-if="homeData!=''">
			<swiper-banner :bannerList="homeData.banner" :id="homeBannerId"></swiper-banner>
		</section>
		<section class="introduce" v-if="homeData!=''" @click="_gotoDetail(homeData.intro.link)">
			<p class="title">{{homeData.intro.title}}</p>
      <div class="content">{{homeData.intro.content}}</div>
      <p class="category">{{homeData.intro.tempName}}</p>
		</section>
		<section class="plate" v-if="homeData!=''">
      <div class="left temp_0">
        <img class="plate-icon" :src="homeData.content[0].icon">
        <p class="plate-name">{{homeData.content[0].tempName}}</p>
      </div>
      <div class="right">
        <div class="up">
          <div class="temp_1">
            <img class="plate-icon" :src="homeData.content[1].icon">
            <p class="plate-name">{{homeData.content[1].tempName}}</p>
          </div>
          <div class="temp_2">
            <img class="plate-icon" :src="homeData.content[2].icon">
            <p class="plate-name">{{homeData.content[2].tempName}}</p>
          </div>
        </div>
        <div class="down">
          <div class="temp_3">
            <img class="plate-back" v-if="homeData.content[3].back" :src="homeData.content[3].back">
            <p class="plate-describe" v-if="homeData.content[3].describe">{{ homeData.content[3].describe }}</p>
            <p class="plate-name">{{homeData.content[3].tempName}}</p>
          </div>
        </div>
      </div>
			<!-- <div v-for="(item, index) in homeData.content" 
      :class="['temp_'+index]" >
        <img v-if="item.back" :src="item.back" class="background">
        <p class="describe" v-if="item.describe">{{ item.describe }}</p>
        <img :src="item.icon" v-if="item.icon">
        <p class="plate-name">{{ item.tempName }}</p>
      </div> -->
		</section>
	</div>
</template>

<script>
import {homeList} from 'src/service/getData.js'

import loading from 'src/components/common/loading.vue'
import swiperBanner from 'src/components/common/swiperBanner.vue'


export default {

  name: 'Home',

  data () {
    return {
      isShowLoading: true,
    	homeData: '',
      homeBannerId: 'homeBanner',
    }
  },
  components: {
  	swiperBanner,
    loading,
  },
  props: ['homePageList'],
  beforeMount () {
    setTimeout(()=>{

    this.init()
    },500)
  },
  // mounted () {
		
  // },
  methods: {
  	async init(){
  		//let that = this
  		// homeList().then( res => {
	   //    that.homeData = res.home.data
	   //  })
     let res = await homeList() 
     this.homeData = Object.assign({},res.home.data)
     this.isShowLoading = false;
  	}
  }
}
</script>

<style lang="less" scoped>
@import "../../style/common.less";
.loading {
  width:100%;
  height: 90vh;
}
.banner {
	height: 28vh;
}
.introduce {
  box-sizing: border-box;
  height: 18vh;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  padding: 2vw 4vw;
  cursor: pointer;
  position: relative;
  .title {
    font-size: 0.26rem;
    font-weight: bold;
    color: #333333;
    margin-bottom: 0.08rem;
  }
  .content {
    font-size: 0.22rem;
    color: #888888;
    line-height: 0.4rem;
  }
  .category {
    font-size: 0.22rem;
    color: #333333;
    text-align: right;
    position: absolute;
    bottom: 8px;
    right: 12px;
  }
}
.plate {
  height: 44vh;
  padding: 4vw;
  position: relative;
  display: flex;
  .left {
    width: 28vw;
    height: 100%;
    margin-right: 4vw;
  }
  .plate-name {
    font-size: 0.22rem;
    color: #fff;
    position: absolute;
    bottom: 0.1rem;
    right: 0.1rem;
  }
  .plate-icon {
    .wh(0.6rem, 0.6rem);
    position: absolute;
    top: calc(~'50% - 0.3rem');
    left: calc(~'50% - 0.3rem');
  }
  .plate-back{
    .wh(100%,100%);
    position: absolute;
  }
  .plate-describe {
    position: absolute;
    padding: 0.1rem;
    font-size: 0.24rem;
    color: #fff;
  }
  .temp_0, .temp_1, .temp_2, .temp_3 {
    border-radius: 5px;
    position: relative;
  }
  .temp_0 {
    background: #f55;
  }
  .temp_1 {
    .wh(28vw, 28vw);
    background: #03a9f4;
  }
  .temp_2 {
    .wh(28vw, 28vw);
    background: #8ecf43;
  }
  .temp_3 {
    .wh(100%, 100%);
    width: 100%;
    background: #f1c43c;
    overflow: hidden;
  }
  .right {
    width: 66%;
    height: 100%;
    .up {
      width: 100%;
      height: 28vw;
      margin-bottom: 4vw;
      .flexsp();
    }
    .down {
      height: calc(~'100% - 32vw');
    }
  }
  /*
  &>div {
    border-radius: 4px;
    position: absolute;
    box-sizing: border-box;
  }
  .plate-name {
    color: #ffffff;
    font-size: 0.24rem;
    position: absolute;
    bottom: 6px;
    right: 6px;
  }
  img {
    width: 30px;
    height: 30px;
    position: absolute;
  }
  .describe {
    color: #ffffff;
    padding: 6px;
  }
  .temp_0 {
    width: 30%;
    height: 94%;
    background: #ff5654;
    top: 8px;
    left: 9px;
    img {
      top: 82px;
      left: 33px;
    }
  }
  .temp_1 {
    width: 30%;
    height: 39%;
    background: #03aaf4;
    top: 8px;
    left: 114px;
    img {
      top: 31px;
      left: 31px;
    }
  }
  .temp_2 {
    width: 30%;
    height: 39%;
    background: #8ed043;
    top: 8px;
    left: 215px;
    img {
      top: 31px;
      left: 31px;
    }
  }
  .temp_3 {
    width: 193px;
    height: 94px;
    background: #f1c53b;
    top: 108px;
    left: 114px;
    p {
      position:absolute;
      z-index:5;
    }
    img {
      top: 32px;
      left: 81px;
    }
    .background {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
  }
  */
}
</style>