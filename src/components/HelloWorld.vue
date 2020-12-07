<template>
  <div class="hello">
    <h1 class="message">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.message {
  font-size: 20px;
  line-height: 40px;
  height: 40px;
}
</style>
