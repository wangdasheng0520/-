<template>
  <div>
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt />
    </div>
    <div class="content">
      <el-card class="box-card">
        <div slot="header" class="clearfix hd_list">
          <span>登录</span>
        </div>
        <div class="text item">
          <el-input v-model = 'user.username' placeholder="请输入用户名"></el-input> 
        </div>
        <div class="text item">
          <el-input v-model = 'user.password' placeholder="请输入密码"></el-input> 
        </div>
        <el-button type="primary" @click="login">登录</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {successAlert,warningAlert} from "../../utils/alert";
import {requestLogin} from "../../utils/request";

export default {
  data() {;
    return {
      imgSrc: require("../../assets/img/bd.jpg"),
      user:{
       username:'',
       password:''
      }
     
    };
  },
  methods:{
    ...mapActions({
    'requestUser':'userActions'
    }),
   login(){
  if(this.user.username != '' && this.user.password != ''){
          // 允许发起请求
        requestLogin(this.user).then(res=>{
          console.log(res);
            successAlert(res.data.msg);
            // 将用户信息存入
            if(localStorage.getItem('user') !== null){
              localStorage.removeItem('user')
              return
            }
            localStorage.setItem('user',JSON.stringify(res.data.list))
            this.$router.push('/')
        })
      }else{
        warningAlert('请输入名户名或者密码')
      }
    }
  }
};
</script>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
}
.content {
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.box-card {
  width: 400px;
  height: 300px;
  background-color: rgba(200, 200, 200, 0.5);
}

 .hd_list{
 text-align: center;
  line-height:40px;
  font-weight: bold;
  font-size: 24px;
 } 
 

.text{
  width: 320px;
  margin: 10px  25px;
}

.el-button{
  width: 320px;
 margin:10px 25px ;
}
</style>
