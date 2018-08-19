module.exports = {
  table: {
        '/user': {    //将www.exaple.com印射为/apis
            target: 'http://39.104.96.2:8080',  // 接口域名
            changeOrigin: true, 
        },
        '/': {    //将www.exaple.com印射为/apis
          target: 'http://39.104.96.2:8080',  // 接口域名
          changeOrigin: true, 
        }
  }
}