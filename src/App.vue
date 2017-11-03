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
import {alertOrientation} from 'src/utils/mUtils.js'

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
  mounted () {
    alertOrientation()
    homeList().then( res => {
      // console.log(res.home)
      this.homePageList = res.home.data
    })
  },
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
  transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}

</style>
