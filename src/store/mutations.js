export const state ={
   user:localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):null
};
export const mutations = {
  changeUser(state,user){
      state.user = user;
      if(user){
        localStorage.setItem('user',JSON.stringify(user))
      }else{
          localStorage.removeItem('user')
      }
  }

};
export const getters = {
   user(state){
       return state.user
   }

}