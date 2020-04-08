<template>
    <div>
        <span v-for="(item,index) in num.toString().split('').reverse()" :key="index" :style="'background:rgb('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+');padding:10px;float:right'">{{item}}</span>
    </div>
</template>

<script>
export default {
    name:'C',
    data() {
        return {
            num:0
        }
    },
    mounted() {
        var that=this
        var num=0
        for(var i = 0 ; i <10 ; i++){
            num+=(Math.ceil(Math.random()*9)).toString()
        }
        num=Number(num)
        setTimeout(function(){
            var timer = setInterval(function(){
                if(that.num>=num){
                    clearInterval(timer)
                    that.num=num
                    console.log(num,Math.ceil(num/20),that.num-num)
                }else{
                    that.num+=Math.ceil(num/20)
                }
            },20)
        },1000)
    },
}
</script>

<style scoped>
    
</style>
