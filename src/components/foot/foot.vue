<template>
	<div class="foot" :class="[theme, 'length'+dataLength]" v-show="showFoot">
		<ul :class="theme">
        <li
          v-for="(item, index) in dataList"
        	v-if=" item.title && (item.link || item.type) && item.display"
          :class="[footActive===index?'active':'', item.icon==''? 'no-icon': '']"  
          @click="_switchPanel(item.type, index, item.link)">
            <div class="icon">
              <img :src="item.icon ? imgBaseUrl+item.icon : defaultIcon[index]"></img>
            </div>
            <p>{{ item.title }}</p>
          </li>
      </ul>
		
	</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {imageBaseUrl,baseUrl} from 'src/utils/env'
import { getParams, jsonParse, setStore, getStore} from 'src/utils/mUtils.js'
import axios from 'axios'


export default {

  name: 'foot',

  data () {
    return {
    	// mobileActive:0,
    	imgBaseUrl: imageBaseUrl,
    	dataList: '',
    	dataLength: '',
    	defaultIcon: [],  // 给面板菜单按钮默认图标
    }
  },
  // props: ['menuBtnList','theme'],
  computed: {
  	...mapState([
  			'uid','theme','showFoot','footActive'
  		]),
  },
  created () {

  },
  watch: {
  	/*
			defaultIcon有几种变量来控制
			1、theme的不同，造成这个数组里面的内容不同，一共有3中数组
			2、button长度的不同，造成defaulticon数组长度的不同，这样才可以根据index渠道相应的图片
  	 */
  	theme: function(newVal) {
  		//通过监听默认主题给菜单配置默认的图标 因为初始化数据中可能没传这里
  		if(newVal==='blue'){
  			// this.defaultIcon = ['/static/img/menuicon_01.png','','','/static/img/menuicon_04.png','/static/img/menuicon_05.png']
  			this.defaultIcon = ['/static/img/menuicon_01.png','/static/img/menuicon_04.png','/static/img/menuicon_05.png']
  			
  			// if(this.dataLength == 3 ) {
	  		// 	this.defaultIcon.splice(1,1)
	  		// }
  		}
  		else if(newVal==='dark'){
				this.defaultIcon = ['/static/img/menuicon_01_dark.png','/static/img/menuicon_04_dark.png','/static/img/menuicon_05_dark.png']
				if(this.dataLength == 3 ) {
	  			this.defaultIcon.splice(1,1)
	  		}
  		}
  		else if(newVal==='green'){
				this.defaultIcon = ['/static/img/menuicon_01_green.png','/static/img/menuicon_04_green.png','/static/img/menuicon_05_green.png']
				if(this.dataLength == 3 ) {
	  			this.defaultIcon.splice(1,1)
	  		}
  		}
  	},
  	
  },
  mounted () {
  	// alert('foot mount')
  	if(!this.uid) {			// 为了在二级页面刷新的时候其实这里也会重新加载  所以这里要单独取得uid 。因为 other是覆盖在foot的上面。。不是没加载foot。。。
  		let id = getStore('uid')
  		this.SAVE_USERID(id)
  	}
  	let that = this
  	// console.log('uid:', this.uid)
  	// this.menuBtn = this.menuBtnList
  	axios.get(baseUrl+'/front/menu?uid='+ that.uid)
      .then(res=> {
        let jpRes = jsonParse(res.data.data)
        this.dataList = jpRes.button
        // for (let i in this.dataList) {
        // 	if(this.dataList[i].display) {
        // 		this.mobileActive = i -1
        // 	}
        // }
        if(this.dataList.length == 4) {
        	this.dataLength = 3
        }
        else{
        	this.dataLength = 5
        	for (let i in this.dataList) {
        		if(this.dataList[i].type == '' && this.dataList[i].title == '' && this.dataList[i].link == ''){
        			this.dataLength = 4
        			break
        		}
        	}
        }
        // window.location.href='http://192.168.100.24:12345/#/home'
      })
  },
  methods: {
  	...mapMutations([
  			'SAVE_USERID','SET_FOOTACTIVE'
  		]),
  	_switchPanel (type, index, link) {
  		// console.log(type,index,link)    //link  是配的网址 type是原来的板块
  		this.SET_FOOTACTIVE(index)
  		if(!type) {						// 这里是自定义的两个板块  直接连到网页
  			// this.$router.push({path: '/other', params: {'url': link}})
  			let newlink = link.replace('http://', '')

        this.$router.push('/other/'+newlink)
  		}
  		else {									// 这里是默认的三个模块 只能连接到网页  或者 连接到默认
  			this.$router.push('/'+type)
  			/* 下面的应该不需要了 */
				// if(!link){				// 默认板块 并且没有配置自定义网页
				// 	this.$router.push('/'+type)
				// }
				// else {
				// 	//配置了自定义网页
				// 	let reg=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/
				// 	let result = reg.test(link)			// 证明配的是第三方网页
				// 	if (result) {
				// 		// alert(2)
				// 		this.$router.push({path: '/other', query: {'url': link}})
				// 	}
				// 	else {
				// 		alert('没有配置正确的网站地址，无法读取菜单内容，请重新配置此按钮')
				// 		return false
				// 	}
				// }
  			
  		}
  	}
  }

}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.foot {
	border-top: 1px solid #dddddd;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 10vh;
	.dark {
		border-top-color: @dark_font;
	}
	ul {
		.flexsp();
		width: 100%;
		height: 100%;
		&.blue p {
			color: @lightBlue;
		}
		&.dark p {
			color: @dark_lightFont;
		}
		&.green p {
			color: @green_font;
		}
	}
	li {
		flex-grow: 1;
		height: 100%;
		margin: 0 1px;
		position: relative;
		opacity: 0.5;
		&.active {
			opacity: 1;
		}
		.icon {
			margin-top: 0.06rem;
			height:60%;
			text-align: center;
			img {
				height: 90%;
				// margin-top: 2px;
			}
		}
		p {
			.fs(0.24rem);
			text-align: center;
		}
	}
	.blue {
		background-color: #fff;
		// .no-icon:first-of-type .icon{
		// 	background: url('/static/img/menuicon_01.png')  center 10% no-repeat;
		// 	background-size: 30%;
		// }
		// .no-icon:last-of-type .icon {
		// 	background: url('/static/img/menuicon_04.png')  center 10% no-repeat;
		// 	background-size: 30%;
		// }
		// .no-icon:nth-last-child(2) .icon {
		// 	background: url('/static/img/menuicon_05.png')  center 10% no-repeat;
		// 	background-size: 30%;
		// }
	}
	.dark {
		background-color: @dark_back;
		// .no-icon:first-of-type .icon {
		// 	background: url('/static/img/menuicon_01_dark.png')  center 10% no-repeat;
		// 	background-size: 30%;
		// }
		// .no-icon:last-of-type .icon {
		// 	background: url('/static/img/menuicon_04_dark.png')  center 10% no-repeat;
		// 	background-size: 30%;
		// }
		// .no-icon:nth-last-child(2) .icon {
		// 	background: url('/static/img/menuicon_05_dark.png')  center 10% no-repeat;
		// 	background-size: 30%;
		// }
	}
	.green {
		background-color: #fff;
		// .no-icon:first-of-type  .icon{
		// 	background: url('/static/img/menuicon_01_green.png')  center 10% no-repeat;
		// 	background-size: 30%;
		// }
		// .no-icon:last-of-type  .icon{
		// 	background: url('/static/img/menuicon_04_green.png')  center 10% no-repeat;
		// 	background-size: 30%;
		// }
		// .no-icon:nth-last-child(2) .icon {
		// 	background: url('/static/img/menuicon_05_green.png')  center 10% no-repeat;
		// 	background-size: 30%;
		// }
	}
}
.length4 {
	li {
		width: calc(~'100vw / 4');
	}
	.no-icon .icon {
		background-size: 38% !important;
	}
}
.length5{
	li {
		width: calc(~'100vw / 5');
	}
	.no-icon .icon {
		background-size: 46% !important;
	}
}
</style>