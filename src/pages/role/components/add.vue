<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.show">
      <el-form :model="form">
        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input v-model="form.rolename"></el-input>
        </el-form-item>
        <el-form-item label="角色权限" :label-width="formLabelWidth">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-checked-keys="defaultKey"
            :props="defaultProps" ref="tree"
          ></el-tree>
        </el-form-item>

        <el-form-item label="角色状态" :label-width="formLabelWidth">
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
import {mapGetters,mapActions} from "vuex";
import { successAlert } from '../../../utils/alert';

import {addRole,oneRole,updateRole} from "../../../utils/request";
export default {
props:['info'],
  data(){
    return{
     form:{
       rolename:'',
       menus:'',
       status:1,
     },
     formLabelWidth: "120px",
    //  默认选中的值
        defaultKey:[],
        defaultProps: {
          children: 'children',
          label: 'title'
        }
      };


    },
  computed:{
   ...mapGetters({
    "data":"menu/menuList",

   })  
  },
  methods:{
    ...mapActions({
     "requestMenuList":"menu/menuListActions",
     "requestRoleList":"role/roleListActions"
    }),
    cancel(){
      this.info.show = false;
      this.form = {
       rolename:'',
       menus:'',
       status:1,
      }
       this.defaultKey = this.$refs.tree.setCheckedKeys([]);
    },
    // 编辑
    confirm(){
      this.form.menus =JSON.stringify(this.$refs.tree.getCheckedKeys());
     
      
      addRole(this.form).then(res=>{
         console.log(this.form);
        successAlert(res.data.msg);
        this.cancel();
        this.requestRoleList();
      })
    },
    getDetail(id){
      oneRole(id).then(res =>{
        this.form = res.data.list;
        this.form.id = id.id;
        console.log(this.form);
        // 因为后端给我们传过来的是字符串格式，所以这里要进行转换
        this.defaultKey = JSON.parse(this.form.menus);
      })
    },
    // 修改
    update(){

      this.form.menus =JSON.stringify(this.$refs.tree.getCheckedKeys());
      
      updateRole(this.form).then(res=>{
        console.log(this.form);
        successAlert(res.data.msg);
        this.cancel();
        this.requestRoleList()
      })
    }
   
  },
  mounted(){
    this.requestMenuList(); 
  }
 

};
</script >

<style  scoped>


.el-button{
  margin-top: 10px;
}
</style>