<template>
    <div>
        <h2>简易加法计算器</h2>
        <div>
            <input type="button" value="-" @click="drec({de:5})" />
            <span>{{count}}</span>
            <input type="button" value="+" @click="incre" />
            <p>{{num2}}</p>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    // import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

    export default {
        // computed:mapState({
            // num:state => state.count
            // num:'count'
            // num(state){
            //     return state.count+100
            // }
            // count:'count'
        // }),
            // computed:mapState(['count']),
            computed:{
                abc(){
                    return 123
                },
               ...mapGetters({
                   num2:'filterCount'
               }),
                ...mapState(['count'])
            },
    //   computed: {
    //     ...mapGetters({
    //       num2: 'filterCount'
    //     }),
    //     ...mapState(['count'])
    //   }
    //   ,
    //   methods: {
    //     ...mapActions({
    //       addHandle: 'addAction'
    //     }),
    //     ...mapMutations({
    //       deHandle:'deIncrement'
    //     })
    //   }
    // computed:{
    //     num(){
            // return this.$store.state.count 

        // },
        // count(){
        //     return this.$store.getters.filterCount
        // }
    // },
    methods: {
        ...mapActions({
            incre:'addAction'
        }),
        ...mapMutations({
           drec :'drec'
        }),
        incre(){
            //点击的时候需要改变状态，提交mutation addIcre
            // this.$store.commit('addIcre')
        //    this.$store.commit('addIcre',{
        //        n:5
        //    });
        //触发一个action
        this.$store.dispatch('addAction')
        },
        // drec(){
        //    this.$store.commit({
        //        type:'drec',
        //        de:5
        //    });
        // }
    }
    }
</script>
<style>

</style>
