<template lang="html">
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img alt="" src="../assets/hellopine logo.png" width="30%">
        </a>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li><a @click="test" href="#">Test</a></li>
        <li><a @click="signout" href="#">Sign out</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['test', 'signout']
}
</script>

<style lang="css">
</style>
