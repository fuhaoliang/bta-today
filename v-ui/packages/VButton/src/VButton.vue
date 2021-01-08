<!-- VButton组件 -->
<template>
  <div>
    <button class="VButton">我是VButton组件!</button>
  </div>
</template>

<script>
export default {
  name: "VButton",
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>

<style lang="less" scoped>
.VButton {
  border: 1px solid salmon;
}
</style>
