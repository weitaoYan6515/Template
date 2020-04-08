<template>
    <div class="back">
        <header>
            <span v-on:click='back'>&lt;</span>
            <p>{{this.$route.meta.title}}</p>
            <span></span>
        </header>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
export default {
    name:'Back',
    data() {
        return {

        }
    },
    methods: {
        back:function(){
            this.$router.go(-1)
        }
    },
}
</script>

<style scoped>
    .back{
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    header{
        height: 0.7rem;
        font-size: 0.3rem;
        background: #eee;
        padding: 0 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    header span{
        font-size: 0.7rem;
    }
    section{
        padding: 0 0.2rem;
        flex: 1;
        overflow: auto;
    }
</style>
