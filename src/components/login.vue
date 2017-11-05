<template lang="html">
  <form v-on:submit.prevent="signin">
    <h2>Login</h2>
    <div class="form-group">
      <input type="text" id="email" name="email" class="form-control" placeholder="Email" v-model="dataLogin.email">
    </div>
    <div class="form-group">
      <input type="password" id="password" name="password" class="form-control" placeholder="Password" v-model="dataLogin.pass">
    </div>
    <input id="submit-login" type="submit" name="submit-login" value="login">
  </form>
</template>

<script>
export default {
  props: ['dataLogin', 'signin']
}
</script>

<style lang="css">
</style>
