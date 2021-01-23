<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'

export default {

  beforeMount() {
    this.$store.dispatch('tasks/getAllTasks')
  },
  components: {TheNavbar}
}
</script>
