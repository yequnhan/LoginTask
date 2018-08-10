<template>
  <div class="login-box">
    <div class="content">
      <input type="text" placeholder="Username or email"/>
    </div>
    <div class="content">
      <input type="text" placeholder="Password"/>
    </div>
    <div class="login-btn">
      Login
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .login-box{
    width: 400px;
    margin: 0 auto;
    .content {
      margin-top: 10px;
      input {
        height: 40px;
        width: 100%;
        border-radius: 5px;
        outline: 0;
        border: 1px solid #d2d2d2;
        padding: 5px 10px;
        font-size: 14px;
        color: #333;
        box-sizing: border-box;
      }
    }
    .login-btn{
      text-align: center;
      width: 100%;
      height: 36px;
      line-height: 36px;
      margin-top: 20px;
      border: 1px solid #07c;
      background-color: #0070c9;
      color: #fff;
      font-size: 18px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
</style>
