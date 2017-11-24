<template>
	<div :class="theme" v-if="!homeLink">
    <section class="loading" v-if="isShowLoading" >
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
      <div class="left temp_0" @click="_gotoDetail(homeData.content[0].link)">
        <img class="plate-icon" :src="imgBaseUrl + homeData.content[0].icon">
        <p class="plate-name">{{homeData.content[0].tempName}}</p>
      </div>
      <div class="right">
        <div class="up">
          <div class="temp_1" @click="_gotoDetail(homeData.content[1].link)">
            <img class="plate-icon" :src="imgBaseUrl + homeData.content[1].icon">
            <p class="plate-name">{{homeData.content[1].tempName}}</p>
          </div>
          <div class="temp_2" @click="_gotoDetail(homeData.content[2].link)">
            <img class="plate-icon" :src="imgBaseUrl + homeData.content[2].icon">
            <p class="plate-name">{{homeData.content[2].tempName}}</p>
          </div>
        </div>
        <div class="down">
          <div class="temp_3"  @click="_gotoDetail(homeData.content[3].link)">
            <img class="plate-back" v-if="homeData.content[3].back" :src="imgBaseUrl + homeData.content[3].back">
            <p class="plate-describe" v-if="homeData.content[3].describe">{{ homeData.content[3].describe }}</p>
            <p class="plate-name">{{homeData.content[3].tempName}}</p>
          </div>
        </div>
      </div>
			
		</section>
	</div>
  <div v-else>
    <iframe :src="homeLink" frameborder="0" id="iframe">
      
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


export default {

  name: 'Home',

  data () {
    return {
      isShowLoading: true,
    	homeData: '',
      homeBannerId: 'homeBanner',
      imgBaseUrl: imageBaseUrl,
      // uid: ''
    }
  },
  components: {
  	swiperBanner,
    loading,
  },
  computed: {
    ...mapState([
        'uid','theme','homeLink'
      ])
  },
  // beforeMount () {
  //   setTimeout(()=>{
  //     this.uid = getStore('uid')
  //     this.init()
  //   },500)
  // },
  // mounted () {
		
  // },
  created (){
    this.init()
  },
  methods: {
    ...mapMutations([
        'SET_PANELLINK'
      ]),
  	init(){
  		let that = this
      // alert(that.uid)
      axios.get(baseUrl+'/front/menu?uid='+ that.uid)
        .then(res=> {
          console.log(res)
          that.homeData = Object.assign({},jsonParse(res.data.data))
          that.isShowLoading = false
          let buttonType = jsonParse(res.data.data).button
          // console.log("buttonType:",buttonType)
          buttonType.forEach(function(item,index){
            if(item.type && item.link) {
              let data = {
                name: item.type,
                link: item.link,
              }
              that.SET_PANELLINK(data)
            }
            // 这里没做反向 判断 等于说手机上没做成热刷新
          })
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
        this.$router.push('/other/'+link)
      }
    },
    handler(a) {
      console.log(a)
    },
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
}
.dark {
  background: @dark_back;
  .introduce {
    border-color: @dark_border;
    .title {
      color: @dark_lightFont;
    }
    .content {
      color: @dark_font;
    }
    .category {
      color: @dark_lightFont;
    }
  }
  .plate {
    .temp_0 {
      background-color: @dark_plate0;
    }
    .temp_1 {
      background-color: @dark_plate1;
    }
    .temp_2 {
      background-color: @dark_plate2;
    }
    .temp_3 {
      background-color: @dark_plate3;
      .plate-describe {
        color: @dark_font;
      }
    }
  }
}
.green {
  .plate {
    .temp_0 {
      background-color: @green_plate0;
    }
    .temp_1 {
      background-color: @green_plate1;
    }
    .temp_2 {
      background-color: @green_plate2;
    }
    .temp_3 {
      background-color: @green_plate3;
    }
  }
}
#iframe {
  width: 100%;
  height: 100%;
}
</style>