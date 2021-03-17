import {getCate} from "../../utils/request";
const state = {
    cateList:[],
}

const mutations = {
    changecateList(state,arr){
      state.cateList = arr;
    }
}

const actions = {
    cateListActions(context){
        // 发起获取分类列表请求
     getCate({istree:true}).then(res=>{
       context.commit('changecateList',res.data.list)
     })
    }
}

const getters = {
    cateList(state){
        return state.cateList;
    }
}

export default{
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}