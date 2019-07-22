<template>
<div class="container">
    <div class="login">
     <img src="/static/imgs/guide_bg.jpg" alt="">
      <div class="learn">
        <button open-type="getUserInfo" @getuserinfo="getUserInfo">开始学习</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
		getUserInfo(e){
			console.log(e);
			console.log(e.mp.detail.userInfo)
		  let edata = e.mp.detail.userInfo;
			this.$store.dispatch('setIsAuthenticated',true);
			this.$store.dispatch('setUser',edata);
	     console.log('123');

			 //调用code
			 this.getCode();
		},
		getCode(){
			wx.login(
			{
				success:res =>{


					//获取 openid
					this.getOpenid(res.code);
				}
			}
			)
		},
		getOpenid(code){
			  let appId = "wx239ac4c4aa22568f";
				let appKey ="78a507ca33264640cf8ccea0bb2dca37";

				var that = this;
				// 发送get请求
				this.$https.request({
					url:this.$interfaces.getOpenid + appId + "/"+appKey + "/" +code,
					method:"get",

				}).then(res =>{
					// 测试结束 将数据
          //
          wx.redirectTo({
            url:'../question/main'
          })
           this.$store.dispatch("setOpenId", res.openid);
           //
           this.isLearn(res.openid);
				}).catch(err =>{
               // 未测试
               // 转到测试页面

				})

		},// end

    isLearn(openid){
      this.$https.request({
        url:this.$interfaces.getMyLesson + openid,
        method:'get',

      }).then(
      res=>{

        wx.switchTab(
        {url:"../learn/main"})

      }).catch()
    },
		// getgetMyLesson  函数
		getMyLesson(data){
			wx.request(
			{
				url:this.$interfaces.getMyLesson + data,
				method:'get',
				success(res){
					console.log('完成测试')
					wx.redirectTo({
						url:"../question/main"
					})
				},
				fail(){
					console.log('还没测试')
				}
			})
		}

	}
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.login{
  width: 100%;
  height: 100%;
  position: relative;
}
.login img{
  display: inline-block;
  width: 100%;
  height: 100%;
}
.login .learn{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}
.learn button{
  position: absolute;
  top: 90%;
  left: 10%;
  width: 80%;
  background-color: #009eef;
  color: white;
}


</style>
