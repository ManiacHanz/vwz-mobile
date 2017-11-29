<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view/></router-view>
      </keep-alive>
    </transition>
    <section class="foot">
      <!-- {{homePageList.button}} -->
      <foot :menuBtnList="homePageList.button" :theme="homePageList.themes"></foot>
    </section>
  </div>
</template>

<script>

import axios from 'axios'
import {mapState, mapMutations} from 'vuex'

import {baseUrl} from 'src/utils/env'
import {alertOrientation, getParams, jsonParse, setStore, getStore} from 'src/utils/mUtils.js'

import {homeList} from 'src/service/getData.js'

import foot from 'components/foot/foot.vue'

export default {
  name: 'app',
  data () {
    return {
      homePageList: '',
    }
  },
  components: {
    foot
  },
  computed: {
    ...mapState([
        'uid'
      ])
  },
  created () {

  },
  mounted () {
    const that = this
    this.$nextTick( () => {
      this.init()
      // alert(that.uid)
      axios.get(baseUrl+'/front/menu?uid='+ that.uid)
        .then(res=> {
          console.log(res)
          this.homePageList = jsonParse(res.data.data)
          this.SAVE_THEME(res.data.data.themes)
          document.title = res.data.message     //token和message放反了
          // window.location.href='http://192.168.100.24:12345/#/home'
        })
    })
    
  },
  methods: {
    ...mapMutations([
        'SAVE_USERID','SAVE_THEME','SET_PANELLINK'
      ]),
    init(){
      // alert('init')
      alertOrientation()
      const that = this
      // let webName = window.decodeURI(getStore('name'))
      // alert(webName)
      // document.title = webName
      // this.SAVE_USERID(getStore('uid'))
      // this.SAVE_THEME(getStore('theme'))
    }
  }
}
</script>

<style lang="less">
@import './style/common.less';
body {
  margin: 0;
}
#app {
  .fs();
  &>div {

  height: calc( 100vh - 10% );
  }
}

.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .1s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0.4;
}

</style>
