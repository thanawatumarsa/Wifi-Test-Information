<template lang="html">
  <div class="loginPosition">
    <div class="col-md-4 col-md-offset-4">
      <div class="cardLog">
        <div class="cardContainer">
          <form>
              <div class="page-header">
                <h1>Log In</h1>
              </div>
              <div class="form-group">
                <input type="text" id="email" name="email" class="form-control" placeholder="Email" v-model="dataLogin.email">
              </div>
              <div class="form-group">
                <input type="password" id="password" name="password" class="form-control" placeholder="Password" v-model="dataLogin.pass">
              </div>
              <input @click="signin" type="button" class="btn btn-primary btn-default btn-block" id="submit-login" name="submit-login" value="Login">
              <div class="left">
                <a @click="changePage('/register')">Don't have an account?</a>
              </div>
          </form>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataLogin', 'signin', 'changePage'],
  data () {
    return {
    }
  }
}
</script>

<style lang="css">

</style>
