<template>
  <div>
    <img src="../assets/logo.jpg">
    <div class="login-box">
      <div v-show="noPermission" class="error-tip">Sorry, your username or password is invalid</div>
      <div class="content">
        <input type="text" placeholder="Username or email" v-model="name"/>
      </div>
      <div class="content">
        <input type="text" placeholder="Password" v-model="password"/>
      </div>
      <div class="login-btn" @click="login">
        Login
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/utils/request'
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: 'hanyequn',
      password: '111111',
      noPermission: false
    }
  },
  methods: {
    login () {
      axios.post('/login', {
        loginNo: this.name,
        password: this.password
      }).then(r => {
        console.log(r)
        if (r.status === 200) {
          this.$router.push({
            name: 'Result'
          })
        } else {
          this.noPermission = true
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .login-box{
    width: 400px;
    margin: 0 auto;
    .error-tip {
      color: red;
      line-height: 20px;
      padding-left: 10px;
      text-align: left;
    }
    .content {
      margin-top: 20px;
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
