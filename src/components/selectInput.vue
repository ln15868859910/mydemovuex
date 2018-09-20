<template>
    <div class="clearFix">
        <input readonly='readonly' class="keyWord" @click="showListHandle" :value="title1" />
        <input type="button" value="GO">
        <span></span>
    </div>
</template>

<script>

export default {
    props:['isShow','title'],
  computed:{
    initShow(){
        return this.isShow;
    },
    title1(){
        return this.$store.state.selectModel.title
    }
  },
  methods: {
    showListHandle(){
       this.$emit('update:isShow',!this.initShow);
    }
  }
}
</script>
