<template>
	<div class="question">
		<!-- 这是图片背景-->
		<img src="/static/imgs/test.jpg" alt="" class="bg">
		<!--显示 测试前提示 -->
		<div class = 'qs_content' v-if="questions.length > 0">
		<!--显示 首次测试前提示信息 -->
		 <div v-if="!startqs">
			 <p class="title">提示您：</p>
			 <div class="warn_tag">
				 为了更好的为您制定学习计划,请首先回答以下问题, 我们会为您量身推荐相关的课程.
			 </div>
		 </div>
		 <div v-else>
			 <p class="title">{{questions[current_Index].title}}</p>
			 <div class="response" v-for="(item,index) in questions[current_Index].option" :key = 'index'
			 @click="selectAnswer(index)">
				  <img v-if="item.select" src="/static/imgs/selected.jpg" alt>
          <img v-else src="/static/imgs/unselect.jpg" alt>
				  <spen>{{item.label}}</spen>
			 </div>
		 </div>
		</div>
		<button :disabled = "disabled" class="qs_btn" @click="btn_click">{{btn_title}}</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				questions:[],//请求数据存放处
				startqs:false,// 是否显示当前问题调查
				current_Index:0,
				btn_title:'开始答题',
        lesson:''
			}
		},//data end
		onLoad(){
			this.getData();
		},
		methods:{
			// 请求数据 保存数据
			getData(){
				let that = this;
				wx.request({
					url:this.$interfaces.getQuestions,
					method:'get',
					success(res){
						that.questions = res.data.questions;

					}
				})

			},
			btn_click(){
				// 上面隐藏下面显示 nihao
				// 此时  友好提示在显示 则执行 startqs 取反

				// 第一步控制v-if显示隐藏 实现提示和 答题 模块切换
				// 第二部  确认此时答题阶段 是否完成 切换此时答题内容

				if(!this.startqs){
				// startqs 取反
				this.startqs = true;
				// 改变 按钮内容
				this.btn_title = "下一题";

				}else{
             this.lesson += this.getSelectOption();
					if(this.current_Index < this.questions.length -1){
						// 此时答题阶段未完成 下一题
						this.btn_title = '下一题'
						this.current_Index ++;
            this.lesson += ",";
					if(this.current_Index == this.questions.length -1){
							// 此时答题完成
							this.btn_title = '定制完';

              }




					}else{
             this.sendQuestions();
          }
				}
			},// btn-click end
      selectAnswer(index){
         // 改变选取状态 通过渲染questions 数组中options。select值  改变样式
         // 获取当前 渲染数组（questions.current_index）
         let options = this.questions[this.current_Index].option;
         // 初始化当前所有 选中状态，避免多选
         options.forEach(item =>{
           item.select = false;
         })
         // 找到当前点击对象  改变其 select的值(取反因为会存在重复点击)
         options[index].select = !options[index].select;

      },
      getSelectOption() {
      const option = this.questions[this.current_Index].option;
      let label = "";
      option.forEach(item => {
        if (item.select) label = item.label;
      });
      return label;
    },
    sendQuestions(){
      // 向服务器发送 数据
      this.$https.request({
        url:this.$interfaces.myLesson,
        method:'post',
        data:{
          // 当前 测试结果
          lesson:this.lesson,
          // openid
          openid:this.$store.getters.openId

        }
      }).then(res =>{
         //  存储返回数据 特定课程数据
         this.$store.dispatch("setlessonInfo",res)
         // 跳转 tabbar 页面
         wx.switchTab(
         {url:'../learn/main'}
         )
         console.log('set OK')
      })
    }

		},
      computed:{
         disabled(){
          // 先判断当前是不是 答题阶段
          if(!this.startqs) return false; // 此时为提示阶段 停止操作

          else{
            // 此时为答题阶段
            // 获取当前 渲染数组 select 判断此时 用户有没有选取
            let options = this.questions[this.current_Index].option;
            let select = false;

            //判断当前是否有选中选项
            options.forEach(
             item =>{
               if(item.select) select = true
             }
            )
             return !select;
          }

        }// disabledend
      }


	}
</script>

<style scoped>
	.question {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.question .bg {
  width: 100%;
  height: 100%;
}
.qs_content {
  position: absolute;
  width: 80%;
  height: 50%;
  background: #fff;
  top: 36%;
  left: 10%;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  color: rgb(13, 28, 51);
}
.qs_btn {
  position: absolute;
  top: 90%;
  left: 10%;
  width: 80%;
  background-color: #009eef;
  color: white;
}
.title {
  font-weight: bold;
  margin-bottom: 20px;
  word-break: break-all;
}
.warn_tag {
  padding: 40px 10px;
}
.response {
  padding: 10px;
}
.response img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
