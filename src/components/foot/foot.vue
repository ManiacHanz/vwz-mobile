<template>
	<div class="foot">
		<ul :class="theme">
        <li
          v-for="(item, index) in menuBtnList"
        	v-if=" item.title && (item.link || item.type)"
          :class="[mobileActive===index?'active':'', item.icon==''? 'no-icon': '']"  
          @click="_switchPanel(item.type, index, item.default)">
            <div class="icon">
              <img :src="item.icon"></img>
            </div>
            <p>{{ item.title }}</p>
          </li>
      </ul>
		
	</div>
</template>

<script>
export default {

  name: 'foot',

  data () {
    return {
    	mobileActive:0,
    }
  },
  props: ['menuBtnList','theme'],
  mounted () {
  	this.menuBtn = this.menuBtnList
  },
  methods: {
  	_switchPanel (type, index, _default) {
  		this.mobileActive = index
  		if(!type) {
  			this.$router.push(_default)
  		}
  		else {
  			if(type=='home' || type == 'list' || type == 'user' ) {
  				this.$router.push(type)
  			}
  			else {
  				//匹配是网页还是 home 这些
	  			let reg=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/
	  			let result = reg.test(type)
	  			if(result){
	  				this.$router.push('/other?'+result)
	  			}
	  			else {
	  				this.$router.push('/notFound')
	  			}
  			}
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
		opacity: 0.7;
		&.active {
			opacity: 1;
		}
		.icon {
			margin-top: 0.06rem;
			height:60%;
			text-align: center;
			img {
				height: 90%;
				margin-top: 2px;
			}
		}
		p {
			.fs(0.24rem);
			text-align: center;
		}
	}
	.blue {
		.no-icon:first-of-type {
			background: url('/static/img/menuicon_01.png')  center 10% no-repeat;
			background-size: 30%;
		}
		.no-icon:last-of-type {
			background: url('/static/img/menuicon_04.png')  center 10% no-repeat;
			background-size: 30%;
		}
		.no-icon:nth-last-child(2) {
			background: url('/static/img/menuicon_05.png')  center 10% no-repeat;
			background-size: 30%;
		}
	}
	.dark {
		.no-icon:first-of-type {
			background: url('/static/img/menuicon_01_dark.png')  center 10% no-repeat;
			background-size: 30%;
		}
		.no-icon:last-of-type {
			background: url('/static/img/menuicon_04_dark.png')  center 10% no-repeat;
			background-size: 30%;
		}
		.no-icon:nth-last-child(2) {
			background: url('/static/img/menuicon_05_dark.png')  center 10% no-repeat;
			background-size: 30%;
		}
	}
	.green {
		.no-icon:first-of-type {
			background: url('/static/img/menuicon_01_green.png')  center 10% no-repeat;
			background-size: 30%;
		}
		.no-icon:last-of-type {
			background: url('/static/img/menuicon_04_green.png')  center 10% no-repeat;
			background-size: 30%;
		}
		.no-icon:nth-last-child(2) {
			background: url('/static/img/menuicon_05_green.png')  center 10% no-repeat;
			background-size: 30%;
		}
	}
}
</style>