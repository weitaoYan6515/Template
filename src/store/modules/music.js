var musicList
if(localStorage.getItem('musicList')){
    musicList=localStorage.getItem('musicList').split(',')
}else{
    musicList=[]
}
export default {
    namespaced:true,//防止多个模块命名重复,dispatch时music/add
    state:{
        musicList:musicList,
        list:1
    },
    getters:{
        musicList_updata:function(state){
            return state.musicList
        }
    },
    mutations:{
        Add:function(state,value){
            state.musicList.push(value)
            localStorage.setItem('musicList',state.musicList.join(','))
        },
        Del:function(state,value){
            state.musicList.splice(value,1)
            localStorage.setItem('musicList',state.musicList.join(','))
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
