<template>
    <div>
        <input type="text" v-model="ipt">
        <button v-on:click="add">添加</button>
        <ul>
            <li v-for="(item,index) in this.$store.state.movie.movieList" :key="index"><span>{{item}}</span><button v-on:click="del(index)">删除</button></li>
        </ul>
    </div>
</template>

<script>

import {mapActions,mapGetters,createNamespacedHelpers} from 'vuex'

export default {
    name:'B',
    data() {
        return {
            ipt:''
        }
    },
    methods: {
        add:function(){
            if(this.ipt!=''){
                this.$store.dispatch('movie/add',this.ipt)
            }
            this.ipt=''
        },
        del:function(value){
            this.$store.dispatch('movie/del',value)
        }
    },
    mounted() {
        
    },
}
</script>

<style scoped>

</style>
