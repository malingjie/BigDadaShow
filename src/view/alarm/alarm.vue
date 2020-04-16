<template>
  <div class="main">
      <banner-top></banner-top>
  </div>
</template>

<script>
import Banner from '../../components/banner/banner'
export default {
    components:{
        'banner-top':Banner
    }

}
</script>

<style lang = 'less' scoped>
.main {
  width: 100vw;
  height: 100vh;
  background: url(../../assets/imgs/homeB.jpg) no-repeat;
  background-size: cover;
  color: white;
}
</style>