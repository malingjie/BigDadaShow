<template>
  <div class="main">
    <div class="loginBox">
      <div class="title-t">
        <strong>基于大数据的运维分析平台</strong>
      </div>
      <div class="username">
        <input type="text" placeholder="username"/>
      </div>

      <div class="password">
        <input type="password" placeholder="password"/>
      </div>

      <button @click="goIndex">登陆</button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        goIndex(){
            sessionStorage.setItem('token','myTest')
            this.$router.push('/home')
        }
    }
};
</script>

<style lang = 'less' scoped>
.main {
  height: 100vh;
  width: 100vw;
  background: url(../../assets/imgs/loginB.jpg) no-repeat;
  background-size: cover;
  position: relative;

  .loginBox {
    position: absolute;
    background-color: white;
    width: 360px;
    height: 260px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .title-t {
      height: 50px;
      background-color: #f1f1f1;
      line-height: 50px;
      border-bottom: 1px solid #c9c9c9;
    }

    .username {
      margin-top: 20px;
      font-size: 20px;
      height: 50px;
      line-height: 50px;

      input {
        display: inline-block;
        background-color: #fbfbfb;
        padding: 4px 6px;
        width: 304px;
        height: 36px;
        padding-left: 17px;
        padding-right: 17px;
        font-size: 14px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
      }
    }

    .password {
      font-size: 20px;
      height: 50px;
      line-height: 50px;

      input {
        display: inline-block;
        background-color: #fbfbfb;
        padding: 4px 6px;
        width: 304px;
        height: 36px;
        padding-left: 17px;
        padding-right: 17px;
        font-size: 14px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
      }
    }

    button {
      width: 304px;
      height: 36px;
      margin-top: 25px;
      font-size: 14px;
      font-weight: bold;
      background: linear-gradient(to bottom, #2d8aeb 0%, #2d8aeb 100%);
      color: #fff;
      border: 1px solid #1465b5;
      border-radius: 3px;
      cursor: pointer;
    }
  }
}

.loginBox input:focus{
    box-shadow:0 0 3px 1px #2d8aeb;
}

.loginBox input:blur{
    box-shadow:none;
}
</style>