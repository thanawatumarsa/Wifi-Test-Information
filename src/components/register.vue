<template lang="html">
  <div class="regPosition">
    <div class="col-md-4 col-md-offset-4 ">
      <div class="cardReg">
        <div class="cardContainer">
          <form>
            <div class="page-header">
              <h1>Register</h1>
            </div>
            <div class="form-group">
              <input type="text" id="firstname" name="regfirstname" class="form-control" placeholder="First Name" v-model="newRegister.fname">
            </div>
            <div class="form-group">
              <input type="text" id="lastname" name="reglastname" class="form-control" placeholder="Last Name" v-model="newRegister.lname">
            </div>
            <div class="form-group">
              <input type="password" id="regpassword" name="reglastname" class="form-control" placeholder="Password" v-model="newRegister.pass">
            </div>
            <div class="form-group">
              <input type="password" id="regpassword" name="conreglastname" class="form-control" placeholder="Confirm Password" v-model="newRegister.conpass">
            </div>
            <div class="form-group">
              <div class="input-group">
                <input type="text" id="reg-email" name="reg-email" class="form-control" placeholder="Email" v-model="newRegister.email">
                <span class="input-group-addon" id="basic-addon2">@hellopine.com</span>
              </div>
            </div>
            <input @click="checkPass(newRegister.pass, newRegister.conpass)" class="btn btn-primary btn-default btn-block" id="submit-reg" type="button" name="submit-reg" value="Register">
            <div class="left">
              <a @click="changePage('/login')">Or you have an account.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['newRegister', 'register', 'changePage'],
  data () {
    return {
    }
  },
  methods: {
    checkPass: function () {
      console.log(this.newRegister.pass)
      if (this.newRegister.pass !== this.newRegister.conpass) {
        return alert('Your password is don\'t match, Please try again.')
      } else {
        this.register()
      }
    }
  }
}
</script>

<style lang="css">
.regPosition {
  margin-top: 10%
}
</style>
