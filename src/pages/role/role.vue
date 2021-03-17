<template>
<div>
   <el-button type="success" @click="add">添加</el-button>
   <!-- 添加组件 -->
   <v-add :info='info' ref = add></v-add>
   <v-list @edit='edit'></v-list>
   </div>
</template>

<script>
 import vAdd from "./components/add";
 import vList from "./components/list";
export default {
    data(){
      return {
          info:{
              show:false,
              title:'',
              isAdd:true,
          }
      }
    },
     methods:{
        add(){
            this.info.show = true;
            this.info.title = "添加角色";
            this.info.isAdd = true;
        },
        edit(id){
            this.info.show = true;
            this.info.title = "编辑角色";
            this.info.isAdd = false;
            console.log(this.$refs.add);
            this.$refs.add.getDetail(id);
        } 
          
      },
    // 注册组件
  components:{
   vAdd,
   vList
  }
}
</script>

<style scoped>

</style>
    
