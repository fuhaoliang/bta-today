<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
// https://juejin.cn/post/6844903589035376647

export default {
  name: 'About',
  data() {
    return { message: 'vue life cycle' }
  },
  methods: {
    log: function (text) {
        console.log("%c%s", "color:red", text)
    }
  },
  beforeCreate: function () {
      // 开始实例化AboutVue类
      // 如果watch: immediate=true 则 自执行一下
      console.group('beforeCreate 创建前状态===============》');
      console.log('el: ' + this.$el);
      console.log('data: ' + this.$data);
      console.log('message: ' + this.message);
      console.log('methods: ' + this.$options.methods, this.$options);
  },
  created: function () {
      // 结束实例化AboutVue类, data/methods映射到vm._data上, 通过call将data()的this指向当前的实例vm
      this.log('created')
      console.group('created 创建后状态===============》');
      console.log('el: ' + this.$el);
      console.log(this.$el);
      console.log('data: ' + this.$data);
      console.log('message: ' + this.message);
      console.log('methods: ' + this.$options.methods, this.log);
  },
  beforeMount: function () {
      // 开始模版编译，挂载前
      console.group('beforeMount 模板加载前状态===============》');
      console.log('el: ' + this.$el);
      console.log(this.$el);
      console.log('data: ' + this.$data);
      console.log('message: ' + this.message);
      console.log('methods: ' + this.$methods);
  },
  mounted() {
      // 执行computed(如果模版未使用，则不执行)
      // 结束模版编译，挂载后
      this.log('mounted')
      console.group('mounted 模板加载后状态===============》');
      console.log('el: ' + this.$el);
      console.log(this.$el);
      console.log('data: ' + this.$data);
      console.log('message: ' + this.message);
      console.log('methods: ' + this.$methods);
  },
  beforeUpdate() {
    // 父组件
    // 1:watch
    // 2:beforeUpdate
    // 3:computed
  },
  updated() {
    // 父组件最后
  },

  beforeDestroy() {
      console.group('beforeDestory 销毁前状态===============》');
      console.log('el: ' + this.$el);
      console.log(this.$el);
      console.log('data: ' + this.$data);
      console.log('message: ' + this.message);
      console.log('methods: ' + this.$methods);
  },
  destroyed() {
      console.group('destoryed 创建前状态===============》');
      console.log('el: ' + this.$el);
      console.log(this.$el);
      console.log('data: ' + this.$data);
      console.log('message: ' + this.message);
      console.log('methods: ' + this.$methods);
  }
}
</script>