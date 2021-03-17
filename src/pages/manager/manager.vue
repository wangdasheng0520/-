<template>
   <div>
    <el-button type="success" @click="add">添加</el-button>
    <v-add :info='info' ref="add"></v-add>
    <v-list @edit='edit'></v-list>
   </div>
</template>

<script>
import vAdd from "./components/add";
import vList from "./components/list";
export default {
    data(){
        return{
          info:{
             show:false,
             title:'',
             isAdd:true,

          }
        }
    },
    methods:{
        // 添加
        add(){
           this.info.show = true;
           this.info.title = '添加管理';
           this.info.isAdd = true;
        },
        edit(uid){
            this.info.show = true;
            this.info.title = '编辑管理';
            this.info.isAdd = false;
            this.$refs.add.getDetail(uid)
        }
    },
    components:{
        vAdd,
        vList
    }

}
</script>

<style scoped>
 .el-button{
     margin-top: 10px;
 }   
</style>
  
