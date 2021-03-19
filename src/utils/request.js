import axios from "axios";
import qs from "qs";

// 设置路径
const baseUrl = "/api";

// 设置响应拦截
axios.interceptors.response.use(res => {
  console.group('本次响应的路径为：' + res.config.url)
  console.log(res);
  return res;
})

// 添加菜单
export const addMenu = (data) => {
  return axios({
    method: 'post',
    url: baseUrl + '/api/menuadd',
    data: qs.stringify(data)
  })
}

// 添加角色
export const addRole = (data) => {
  return axios({
    method:'post',
    url:baseUrl+'/api/roleadd',
    data:qs.stringify(data)
  })
}

// 添加管理员
export const addManager = (data) =>{
  return axios({
    method:'post',
    url:baseUrl+'/api/useradd',
    data:qs.stringify(data)
  })
}



// 添加商品分类列表
export const addCate = (data) =>{
  var form = new FormData();
  for(let i in data){
    form.append(i,data[i])
  }
  return axios({
    method:'post',
    url:baseUrl+'/api/cateadd',
    data:form
  })
}

// 添加规格管理列表
export const addSpec = (data) =>{
  return axios({
    method:'post',
    url: baseUrl+'/api/specsadd',
    data:qs.stringify(data)
  })
}

// 菜单列表
export const getMenu = (params) => {
  return axios({
    method: 'get',
    url: baseUrl + '/api/menulist',
    params,
  })
}



// 角色列表
export const getRole = (params)=>{
  return axios({
    method:'get',
    url:baseUrl + '/api/rolelist',
    params,
  })
}

// 管理员列表
export const getManager = (params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/userlist',
    params,
  })
}

// 商品分类列表
export const getCate = (params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/catelist',
    params
  })
}

// 商品规则列表
export const getSpec = (params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/specslist',
    params
  })
}
// 修改菜单
export const updateMenu = (data) => {
  return axios({
    method: 'post',
    url: baseUrl + '/api/menuedit',
    data: qs.stringify(data)
  })
}
// 修改角色
export const updateRole = (data) => {
  return axios({
    method:'post',
    url:baseUrl+'/api/roleedit',
    data:qs.stringify(data)
  })
}
// 修改管理员
export const updateManager = (data) =>{
  return axios({
    method:'post',
    url:baseUrl+'/api/useredit',
    data:qs.stringify(data)
  })
}
// 修改商品分类
export const updateCate = (data) =>{
  var form = new FormData();
  for(let i in data){
    form.append(i,data[i])
  }
  return axios({
    method:'post',
    url:baseUrl+'/api/cateedit',
    data:form
  })
}
// 修改商品规格
export const updateSpec = (data) =>{
  return axios({
    method:'post',
    url:baseUrl+'/api/specsedit',
    data:qs.stringify(data)
  })
}
// 删除菜单
export const delMenu = (data) => {
  return axios({
    method: 'post',
    url: baseUrl + '/api/menudelete',
    data: qs.stringify(data)
  })
}
// 删除角色
export const delRole = (data) =>{
  return axios({
    method:'post',
    url:baseUrl+'/api/roledelete',
    data:qs.stringify(data)
  })
}
// 删除管理员
export const delManager = (data) =>{
  return axios({
    method:'post',
    url:baseUrl+'/api/userdelete',
    data:qs.stringify(data)
  })
}


// 删除商品分类
export const delCate = (data) =>{
  return axios({
    method:'post',
    url:baseUrl+'/api/catedelete',
    data:qs.stringify(data)
  })
}

// 删除规格列表
export const delSpec = (data) =>{
  return axios({
    method:'post',
    url:baseUrl+'/api/specsdelete',
    data:qs.stringify(data)
  })
}
// 获取一条菜单
export const oneMenu = (params) => {
  return axios({
    method: 'get',
    url: baseUrl + '/api/menuinfo',
    params,
  })
}

// 获取一条角色
export const oneRole = (params) =>{
  return axios({
    method:'get',
    url:baseUrl+'/api/roleinfo',
    params,
  })
}

// 获取一条管理员
export const oneManager = (params) =>{
  return axios({
    method:'get',
    url:baseUrl+'/api/userinfo',
    params,
  })
}
// 获取一条商品分类
export const oneCate = (params) =>{
  return axios({
    method:'get',
    url:baseUrl+'/api/cateinfo',
    params,
  })
}
// 获取一条商品规格
export const oneSpec = (params) =>{
  return axios({
    method:'get',
    url:baseUrl+'/api/specsinfo',
    params,
  })
}
// 获取管理员总数
export const managerCount = () =>{
  return axios({
    method:'get',
    url:baseUrl+'/api/usercount',
  })
}

// 获取商品规格总数
export const specCount = () =>{
  return axios({
    method:'get',
    url:baseUrl+'/api/specscount',
  })
}

// 登录
export const requestLogin = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/userlogin',
    data:qs.stringify(data)
  })
}
