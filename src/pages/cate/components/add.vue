<template>
  <div>
 <el-dialog :title="info.title" :visible.sync="info.show">
      <el-form :model="form">
        <el-form-item label="上级分类" :label-width="formLabelWidth">
          <el-select v-model="form.pid">
            <el-option label="--请选择--" disabled value = ""></el-option>
            <el-option label="顶级菜单" :value="0"></el-option>
            <!-- 遍历菜单列表 -->
            <el-option v-for="item in cateList" :key="item.id" :label="item.catename" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="分类名称" :label-width="formLabelWidth" >
          <el-input v-model="form.catename"></el-input>
        </el-form-item>
          <el-form-item label="图片" :label-width="formLabelWidth">
           <div class="box" :label-width="formLabelWidth">
               <h3>+</h3>
               <img v-if="imgSrc"  :src="imgSrc" alt="">
               <input type="file" @change="updateImg">
           </div>
          </el-form-item>  
        <el-form-item label="分类状态" :label-width="formLabelWidth">
          <el-switch
            v-model="form.status"
            active-color="blue"
            inactive-color="grey"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" v-if="info.isAdd" @click="confirm">确 定</el-button>
        <el-button type="primary" v-else @click="update">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex";
import { successAlert,warningAlert} from '../../../utils/alert';
import { oneCate,addCate,updateCate} from '../../../utils/request';

export default {
    props:['info'],
   
    data(){
        return{
             imgSrc:'',
             formLabelWidth:'100px',
             form:{
               pid:0,
               catename:'',
               img:'',
               status:1
            }
        }
    },
    computed:{
     ...mapGetters({
      "cateList":"cate/cateList"
     })
    },
    methods:{
     ...mapActions({
       "requestCateList":"cate/cateListActions"     
     }),
     updateImg(e){
       console.log(e);
      //  取出上传的文件的地址
      var file = e.target.files[0];
      // 判断文件大小是否小于2M
      if(file.size > 2*1024*1024){
       warningAlert("大小不能超过2M");
       return;
      }
      // 判断文件格式是否正确
      var formart = [".jpg",".gif",".init",".jpeg",".png"];
      var formarts = file.name.slice(file.name.lastIndexOf('.'))
      if(!formart.some(item=>item==formarts)){
        warningAlert("格式不正确，请重新上传");
        return;
      }

      this.imgSrc = URL.createObjectURL(file);
      this.form.img = file
     },

     
      getDetail(id){
       oneCate({id}).then(res=>{
         this.form = res.data.list;
         this.form.id = id;
         this.imgSrc = this.$preImg+this.form.img;
       })    
       },
       confirm(){
          addCate(this.form).then(res=>{
          successAlert(res.data.msg);
          this.cancel();
          this.requestCateList()
       })
       },
       cancel(){
         this.info.show = false;
         this.form = {
               pid:0,
               catename:'',
               img:'',
               status:1
          }
         this.imgSrc = "" 
       },
       update(){
         updateCate(this.form).then(res=>{
           successAlert(res.data.msg);
           this.cancel();
           this.requestCateList()
         })
       }
       
    },
    mounted(){
        this.requestCateList()

    },

}
</script>

<style scoped>
  .box{
      width: 120px;
      height: 120px;
      border:1px dashed blueviolet;
  }
  h3{
      text-align: center;
      line-height:120px;

  }
.box input{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
  }
 .box img{
   width: 120px;
   height: 120px;
   position: absolute;
   left: 0;
   top: 0;
 }
</style>
