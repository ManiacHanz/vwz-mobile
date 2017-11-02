<template>
	<div class="foot">
		<ul :class="theme">
        <li
          v-for="(item, index) in menuBtnList"
          :class="[mobileActive===index?'active':'', ]"  
          @click="_switchPanel(item.type, index)">
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
  	_switchPanel (type, index) {
  		this.mobileActive = index
  		this.$router.push(type)
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
	
	
}
</style>