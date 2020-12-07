<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <van-button type="primary" @click="showToast">主要按钮</van-button>
    <HelloWorld msg="Welcome to Vue" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    showToast() {
      this.$toast('提示文案')
    }
  }
}
</script>
