<template>
  <div id="app">
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
    <router-view :newRegister = "newRegister" :register = "register" :dataLogin="dataLogin" :signin="signin"></router-view>
  </div>
</template>

<script>
import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyCq9XSREG-KQz4IZgmmbcSpRYgz4HK-KpQ',
  authDomain: 'wifi-storage.firebaseapp.com',
  databaseURL: 'https://wifi-storage.firebaseio.com',
  storageBucket: 'wifi-storage.appspot.com',
  messagingSenderId: '1062691344683'
}
let app = Firebase.initializeApp(config)
let db = app.database()
let wifiInfoRef = db.ref('wifiInfo')
let userRef = db.ref('users')

export default {
  name: 'app',
  firebase: {
    wifiInfo: wifiInfoRef,
    users: userRef
  },
  data () {
    return {
      newRegister: {
        fname: '',
        lname: '',
        uname: '',
        pass: '',
        conpass: '',
        email: ''
      },
      dataLogin: {
        email: '',
        pass: ''
      }
    }
  },
  methods: {
    register: function () {
      userRef.push(this.newRegister)
      this.authFirebase(this.newRegister.email, this.newRegister.pass)
      this.newRegister.fname = ''
      this.newRegister.lname = ''
      this.newRegister.uname = ''
      this.newRegister.pass = ''
      this.newRegister.conpass = ''
      this.newRegister.email = ''
    },
    authFirebase: function (email, pass) {
      Firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
        var errorCode = error.code
        var errorMessage = error.message
        if (errorCode === 'auth/weak-password') {
          alert('the password is too weak')
        } else {
          alert(errorMessage)
        }
        console.log(error)
      }).then(function (sendEmailVerify) {
        if (sendEmailVerify === false) {
          return false
        } else {
          Firebase.auth().currentUser.sendEmailVerification()
          alert('Email Verification Sent! Please check yor email address.')
          alert('Register Success!')
          console.log(Firebase.auth().currentUser)
          // window.location = './components/login.vue'
          return true
        }
      })
    },
    signin: function () {
      Firebase.auth().signInWithEmailAndPassword(this.dataLogin.email, this.dataLogin.pass).catch(function (error) {
        var errorCode = error.code
        var errorMessage = error.message
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong Password')
        } else {
          alert(errorMessage)
        }
        console.log(error)
      }).then(function (checkVerify) {
        Firebase.auth().onAuthStateChanged(firebaseUser => {
          if (firebaseUser.emailVerified) {
            console.log('email is verify')
          } else {
            console.log('Email is not verified')
            alert('Please verify your email address then login again')
          }
        })
      })
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
