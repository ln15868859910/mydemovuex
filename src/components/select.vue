<template>
    <section class="warp">
        <div class="searchIpt clearFix">
            <select-input :is-show.sync='listShow'>
            </select-input>
            <list v-show="listShow"></list>
        </div>
        <div class="aaa">
            <router-link to="/increment">计算</router-link>
        </div>

        <router-view/>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'

let listData = [
  {
    title:'js'
    },
    {
    title:'html5+css3'
    },
  {
    title:'html+css'
    },
  {
    title:'jq'
    },
     {
    title:'react'
    },
  {
    title:'vue'
    },
  {
    title:'node'
    }
]
export default {
  data(){
      return {
        listShow: false
    
      }
  },
  methods: {
      titlehander(title){
         this.title = title;
      }
  },
  components: {
    selectInput,
    list
  }
}
</script>
