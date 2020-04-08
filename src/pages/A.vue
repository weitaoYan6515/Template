<template>
    <div>
        <input type="text" v-model="ipt">
        <button v-on:click="add">添加</button>
        <ul>
            <li v-for="(item,index) in this.$store.state.music.musicList" :key="index"><span>{{item}}</span><button v-on:click="del(index)">删除</button></li>
        </ul>
    </div>
</template>

<script>

import {mapActions,mapGetters,createNamespacedHelpers} from 'vuex'

export default {
    name:'A',
    data() {
        return {
            ipt:'',
        }
    },
    methods: {
        add:function(){
            if(this.ipt!=''){
                this.$store.dispatch('music/add',this.ipt)
            }
            this.ipt=''
        },
        del:function(value){
            this.$store.dispatch('music/del',value)
        }
    },
    mounted() {
        
    },
}
</script>

<style scoped>

</style>
