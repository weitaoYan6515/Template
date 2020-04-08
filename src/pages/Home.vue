<template>
    <div class="home">
       <div class="nav">
           <router-link v-for='(item,index) in navList' :key='index' :to='item.path' tag='div'>
               <span></span>
               <div>{{item.name}}</div>
           </router-link>
       </div>
    </div>
</template>

<script>
export default {
    name:'Homer',
    data() {
        return {
            navList:[{'name':'A',path:'/a'},{'name':'B',path:'/b'},{'name':'C',path:'/c'},{'name':'D',path:'/d'}]
        }
    },
    mounted() {
        console.log(this._api)
    },
}
</script>

<style scoped>
    .nav{
        margin-top: 0.2rem;
        display: flex;
        justify-content: space-around;
    }
    .nav>div{
        width: 20%;
        line-height: 1rem;
        text-align: center;
        border-radius: 0.2rem;
        background: orange;
        color: #fff;
    }
</style>
