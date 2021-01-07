<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" />
    <h2>{{ watchMsg }}</h2>
    <h3>{{ computedMsg }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data(){
    return {
      msg: 'Welcome to Your Vue.js App',
      watchMsg: ''
    }
  },
  computed:{
    computedMsg(){
      console.info('home-->computed')
      // this.msg = this.msg + 1
      return 'home-->computedMsg: -->' + this.msg
    }
  },
  watch:{
    msg: {
      handler: function(data){
        console.info('home-->watch', data)
        this.watchMsg = 'home-->watch: --> ' + data
      },
      // immediate: true
    }
  },
  beforeCreate() {
    console.info('home-->beforeCreate', )
  },
  created(){
    console.info('home-->created', )
  },
  beforeMount() {
    console.info('home-->beforeMount', )
  },
  mounted() {
    console.info('home-->mounted')
    setTimeout(()=> {
      this.msg = '1234'
    },5000)
  },
  beforeUpdate() {
    console.info('home-->beforeUpdate', )
  },
  updated() {
    console.info('home-->updated', )
  },
};
</script>
