<template>
    <ul class="list">
        <li v-for="(item,index) in getdata" :key="index" @click="getTitle(item.title)">{{item.title}}</li>
    </ul>
</template>
<script>
export default {
  //  props: ['getdata'],
    computed:{
        getdata(){
            return this.$store.state.selectModel.list;
        }
    },
    methods: {
        // getTitle(title){
            // this.$emit('changeTitle',title)

        // }
        getTitle(title){
            this.$store.commit('changeTitle',{title})
        }
    },
    created () {
        //获取数据
        this.$store.dispatch('getlistAction')
    }
}
</script>
<style>
    .list li:hover{
        background: red;
    }
</style>


