<template lang="html">
  <div class="">
    <router-view :addProject="addProject" :newProject="newProject"></router-view>
  </div>
</template>

<script>

export default {
  props: ['addProject', 'newProject'],
  mounted () {
    this.$router.push('/dashboard')
  }
}
</script>

<style lang="css">
</style>
