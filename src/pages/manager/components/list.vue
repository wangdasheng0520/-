<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      :tree-props="{ children: 'children'}"
    >
      <el-table-column prop="id" label="用户编号"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="rolename" label="所属角色"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template v-slot="prop">
          <el-button type="primary" v-if="prop.row.status==1">启用</el-button>
          <el-button type="danger" v-else>禁止</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="操作">
        <template v-slot="prop">
          <el-button type="primary" @click="edit(prop.row.uid)">编辑</el-button>
          <el-button type="danger" @click="del(prop.row.uid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="2"
      @current-change="cPage"
      :total="count"
    ></el-pagination>
    <!-- prev 上一页 
         pager 本页
         next 下一页
    -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { successAlert } from "../../../utils/alert";
import { delManager } from "../../../utils/request";
export default {
  data() {
    return {};
  },
  methods: {
    // 编辑
    edit(uid) {
      this.$emit("edit", uid);
    },
    cPage(page){
     this.requestPage(page),
     this.requestManagerList()
    },
    // 删除
    del(uid) {
      this.$confirm("确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 发起删除菜单请求
          delManager({ uid }).then((res) => {
            // 已经删除成功
            successAlert(res.data.msg);
            this.requestManagerList();
            this.requestCount();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消删除成功",
          });
        });
    },
    ...mapActions({
      "requestManagerList" : "manager/managerListActions",
      "requestCount":"manager/countListActions",
      "requestPage":"manager/pageActions"
    }),
  },
  // 挂载完成
  mounted() {
    this.requestManagerList();
    this.requestCount();
  },
  computed: {
    ...mapGetters({
      "tableData": "manager/managerList",
      "count":"manager/count"
    }),
  },
};
</script>

<style scoped>
.el-button {
  margin-top: 10px;
}
</style>
