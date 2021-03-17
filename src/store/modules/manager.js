import {getManager ,managerCount} from "../../utils/request";

const state = {
    managerList:[],
    size:2,
    page:1,
    count:0,
}

const mutations = {
   changeManagerList(state,arr){
       state.managerList = arr;
   },
      //改变记录页码数    
   changeCount(state,num){
       state.count = num;
   },
      //修改当前页码数    
   changePage(state,page){
       state.page = page
   }

}

const actions = {
    managerListActions(context){
        var params ={
            size:context.state.size,
            page:context.state.page
        }
        getManager(params).then(res=>{
            if((res.data.list==null || res.data.length == 0) && context.state.page > 1){
                var pageNum = context.state.page - 1
                context.commit('changePage',pageNum);
                context.dispatch('managerListActions');
                return;
            }
            context.commit('changeManagerList',res.data.list)
        })
    },

    countListActions(context){
        managerCount().then(res=>{
            context.commit('changeCount',res.data.list[0].total);
        })
    },
    pageActions(context,page){
        context.commit('changePage',page)
    }

}

const getters = {
    managerList(state){
        return state.managerList
    },
    count(state){
        return state.count
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true,
}
