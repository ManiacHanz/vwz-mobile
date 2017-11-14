<template>
	<div class="box">
		<section class="loading" v-if="isShowLoading">
      <loading></loading>
    </section>
		<section class="top" v-if="userData!=''">
			<img :src="userData.banner">
		</section>
		<ul class="ctr-list" v-if="userData!=''">
			<li v-for="(item, index) in userData.content" :key="index">
				<img :src="item.icon">
				<span>{{item.title}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import {userList} from 'src/service/getData.js'

import loading from 'src/components/common/loading.vue'
export default {

  name: 'User',

  data () {
    return {
			isShowLoading: true,
    	userData:'',
    }
  },
  components: {
    loading,
  },
  beforeMount () {
    setTimeout(()=>{

    	this.init()
    },500)
  },
  
  methods: {
  	async init(){
     let res = await userList() 
     this.userData = Object.assign({},res.user.data)
     this.isShowLoading = false;
  	}
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
		}
		li span{
			color: @dark_lightFont;
		}
	}
	
}
</style>