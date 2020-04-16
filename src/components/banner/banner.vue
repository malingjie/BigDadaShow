<template>
  <div class="banner">
    <div class="left-b">基于大数据的IT运维故障诊断分析平台</div>
    <ul class="middle-b">
      <li v-for = '(item,index) of menuList' 
       :class="{active:clickIndex == index}"
       :key="index" :index="index" @click="goTo(index)">{{item.name}}</li>
    </ul>
    <div class="right-b" @click="logOut()">退出</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList:[{
        name: '首页',
        url: '/home'
      },{
        name: '运维监控',
        url: '/monitor'
      },{
        name: '运行大数据统计',
        url: '/statistics'
      },{
        name: '告警与诊断',
        url: '/alarm'
      },{
        name: '运维大数据预测',
        url: '/predict'
      }
      ]
    };
  },
  computed:{
     clickIndex:{
       get(){
          return sessionStorage.getItem('banner_index')
       },
       set(val){
        //  return this.$store.dispatch('actionsChangeIndex', val)
       }
     }
  },
  methods: {
    goTo(index){
      this.$store.dispatch('actionsChangeIndex', index)
      this.clickIndex = index
      this.$router.push(this.menuList[index].url)
    },
    logOut(){
      sessionStorage.clear()
      this.$router.push('/')
    }
  }
};
</script>

<style lang = 'less' scoped>
.banner {
  width: 100vw;
  height: 12vh;
  line-height: 12vh;
  position: relative;

  .left-b {
    position: absolute;
    width: 30%;
    font-size: 25px;
  }

  ul.middle-b {
    width: 100%;
    height: 100%;
    padding-left: 36%;
    padding-right: 10%;
    text-align: left;


    li {
      display: inline-block;
      margin-left: 32px;
      line-height: 5vh;
      padding:0 16px;
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: 16px;
    }
    li:hover{
      transition-duration: 0.6s;
      border: 1px solid white;
    }
    .active{
      border: 1px solid white;
      border-radius: 16px;
      }
  }

  .right-b {
    position: absolute;
    right: 0;
    top: 0;
    width: 10%;
    cursor: pointer;
  }
}

@media screen and(max-width: 1300px) {
  .banner {
    .left-b {
      font-size: 20px;
    }
  }
  ul.middle-b {
    li {
      margin-left: 10px !important;
    }
  }
}
</style>