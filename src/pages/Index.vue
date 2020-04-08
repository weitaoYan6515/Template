<template>
    <div class="index">
        <header>{{this.$route.meta.title}}</header>
        <section>
            <router-view></router-view>
        </section>
        <footer>
            <router-link tag='div' :to="item.path" v-for='(item,index) in navList' :key='index' class="iconfont">
                <span :class="item.icon"></span>
                <p>{{item.name}}</p>
            </router-link>
        </footer>
    </div>
</template>

<script>
export default {
    name:'Index',
    data() {
        return {
            navList:[{'name':'主页','path':'/home','icon':'icon-iconfonticon-shouye'},{'name':'关于','path':'/about','icon':'icon-iconfontwo'},{'name':'其他','path':'/other','icon':'icon-iconfonticon-baobia'}]
        }
    },
}
</script>

<style scoped>
    .index{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    header{
        height: 0.7rem;
        background: #eee;
        font-size: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    section{
        flex: 1;
        overflow: auto;
    }
    footer{
        height: 1.3rem;
        background: #eee;
        font-size: 0.3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    footer>div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    footer span{
        font-size: 0.5rem;
    }
    footer p{
        margin-top: 0.2rem;
    }
    footer .router-link-active{
        color: #ea986c;
    }
</style>
