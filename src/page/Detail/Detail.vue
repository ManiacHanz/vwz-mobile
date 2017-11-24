<template>
	<div class="detail-box">
		<div class="top-bar" @click="_backRouter">
      文章详情
    </div>
    <div class="content">
      <div class="title">{{artDetail.title}}</div>
      <div class="info">
        <span class="time">{{artDetail.operateTimeStr}}</span>
        <span class="author">{{artDetail.author}}</span>
      </div>
      <div class="detail" v-html="artDetail.content"></div>
    </div>
	</div>
</template>

<script>
import axios from 'axios'
import {baseUrl} from 'src/utils/env'
export default {

  name: 'Detail',

  data () {
    return {
      artId: '',
      artDetail: '',
    }
  },
  methods: {
  	_backRouter () {
  		this.$router.back()
  	}
  },
  beforeRouteEnter (to,from,next) {

    next(vm=>{
      let id = vm.$route.params.id
      axios.get(baseUrl + '/front/detail?id=' + id)
        .then(res=>{
          console.log(res)
          vm.artDetail = res.data.data
        })
    })
  }
}
</script>

<style lang="less" scoped>
.detail-box {
	height: 100vh !important;
	position: relative;
	background-color: #fff;
	z-index: 1;
	overflow-y: auto;
}
.top-bar {
  font-size: 0.26rem;
  text-align: center;
  height: 6vh;
  line-height: 6vh;
  border-bottom: 1px solid #dedede;
  box-shadow: 0 0 10px 2px #ddd;
  background: url('/static/img/left_arrow.png') no-repeat;
  background-size: 0.5rem;
  background-position: 0.2rem 0.1rem;
}
.content {
  height: 94vh;
  padding: 0 0.3rem;
  .title {
    color: #111;
    font-size: 0.30rem;
    padding-top: 0.3rem ;
    max-height: 1.2rem;
    overflow-y: hidden;
    line-height: 150%;
    margin-bottom: 0.18rem;
  }
  .info {
    font-size: 0.20rem;
    margin-bottom: 0.2rem;
  }
  .time {
    color: #999;
    margin-right: 0.2rem;
  }
  .author {
    color: #607fa6;
  }
}
</style>