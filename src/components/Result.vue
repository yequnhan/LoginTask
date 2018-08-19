<template>
  <div>
    <div @click="click">Hello World!</div>
    <input type="text" v-model="text"/>
    <div class="parent">
      <div class="child">
        <div class="sub-child">
          {{text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/utils/request'
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    click () {
      axios.post('/user/user_info', {
        loginNo: 'hanyequn'
      }).then(r => {
        console.log(r)
      })
    }
  }
}
</script>

<style lang="less">
.parent {
  width:  ~"calc(100%)";;
  height: 36px;
  .child {
    display: inline-block;
    width: ~"calc(100% - 20px)";
    height: 100%;
    .sub-child {
      display: inline-block;
      width: ~"calc(100% - 20px)";
      height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

</style>
