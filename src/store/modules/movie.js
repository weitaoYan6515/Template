var movieList
if(localStorage.getItem('movieList')){
    movieList=localStorage.getItem('movieList').split(',')
}else{
    movieList=[]
}
export default {
    namespaced:true,//防止多个模块命名重复,dispatch时movie/add
    state:{
        movieList:movieList,
        list:2
    }, 
    getters:{
        movieList_updata:function(state){
            return state.movieList
        }
    },
    mutations:{
        Add:function(state,value){
            state.movieList.push(value)
            localStorage.setItem('movieList',state.movieList.join(','))
        },
        Del:function(state,value){
            state.movieList.splice(value,1)
            localStorage.setItem('movieList',state.movieList.join(','))
        }
    },
    actions:{
        add:function(context,value){
            context.commit('Add',value)
        },
        del:function(context,value){
            context.commit('Del',value)
        }
    }
}