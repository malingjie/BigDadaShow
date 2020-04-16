<template>
<div class="main">
  <banner-top></banner-top>
</div>

</template>

<script>
import Banner from '../../components/banner/banner'
export default {
   components:{
       'banner-top': Banner
   }
}
</script>

<style lang = 'less' scoped>

.main{
    height: 100vh;
    width: 100vw;
    background: url(../../assets/imgs/monitorB.jpg);
    background-size: cover;
    color: white;
}

</style>