<template lang="html">
  <form v-on:submit.prevent="register">
    <h2>Register</h2>
    <div class="form-group">
      <input type="text" id="firstname" name="regfirstname" class="form-control" placeholder="First Name" v-model="newRegister.fname">
      <input type="text" id="lastname" name="reglastname" class="form-control" placeholder="Last Name" v-model="newRegister.lname">
    </div>
    <div class="form-group">
      <input type="text" id="regusername" name="regusername" class="form-control" placeholder="Username" v-model="newRegister.uname">
    </div>
    <div class="form-group">
      <input type="password" id="regpassword" name="reglastname" class="form-control" placeholder="Password" v-model="newRegister.pass">
    </div>
    <div class="form-group">
      <input type="password" id="regpassword" name="conreglastname" class="form-control" placeholder="Confirm Password" v-model="newRegister.conpass">
    </div>
    <div class="form-group">
      <input type="text" id="reg-email" name="reg-email" class="form-control" placeholder="Email" v-model="newRegister.email">@hellopine.com

    </div>
    <input id="submit-login" type="submit" name="submit-login" value="Register">
  </form>
</template>

<script>
export default {
  props: ['newRegister', 'register']
}
</script>

<style lang="css">
</style>
