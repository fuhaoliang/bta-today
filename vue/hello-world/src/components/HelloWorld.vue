<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ watchMsg }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data(){
    return {
      watchMsg: ''
    }
  },
  watch: {
    msg: {
      handler: function(data){
        console.info('component-->watch', data)
        this.watchMsg = 'watch: --> ' + data
      },
      // immediate: true
    }
  },
  beforeCreate() {
    console.info('component-->beforeCreate', )
  },
  created() {
    console.info('component-->created', )
  },
  mounted() {
    console.info('component-->mounted', )
  },
  beforeUpdate() {
    console.info('component-->beforeUpdate', )
  },
  updated() {
    console.info('component-->updated', )
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
