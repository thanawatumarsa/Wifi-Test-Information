<template lang="html">
  <div class="">
    <div v-for="(wifi, index) in wifiInfo" class="col-xs-6 col-md-3">
      <a href="#" class="thumbnail">
        {{wifi.projectname}}
      </a>
    </div>
  </div>

</template>

<script>
export default {
  props: ['wifiInfo']
}
</script>

<style lang="css">
</style>
