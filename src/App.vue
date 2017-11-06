<template>
  <div id="app" class="">
    <Navbar :test="test" :signout="signout"></Navbar>
    <div class="container">
      <router-view :changePage="changePage" :newRegister = "newRegister" :register = "register" :dataLogin="dataLogin" :signin="signin"></router-view>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import Navbar from '@/components/navbar'

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
        pass: '',
        conpass: '',
        email: ''
      },
      dataLogin: {
        email: '',
        pass: ''
      },
      tempLog: 0
    }
  },
  components: {
    Navbar
  },
  methods: {
    register: function () {
      userRef.push(this.newRegister)
      this.authFirebase(this.newRegister.email, this.newRegister.pass)
      this.newRegister.fname = ''
      this.newRegister.lname = ''
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
          this.tempLog = 1
          console.log(Firebase.auth().currentUser)
          console.log(this.tempLog)
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
        var unsubscribe = Firebase.auth().onAuthStateChanged(firebaseUser => {
          if (firebaseUser.emailVerified) {
            console.log('email is verify')
            console.log(firebaseUser.uid)
          } else {
            console.log('Email is not verified')
            alert('Please verify your email address then login again')
          }
        })
        unsubscribe()
      })
    },
    signout: function () {
      Firebase.auth().signOut().then(function () {
        localStorage.clear()
        console.log('Signed Out')
      }, function (error) {
        console.error('Sign Out Error', error)
      })
    },
    test: function () {
      var user = Firebase.auth().currentUser
      var email, uid, emailVerified
      if (user != null) {
        email = user.email
        emailVerified = user.emailVerified
        uid = user.uid
      }
      console.log(email)
      console.log(emailVerified)
      console.log(uid)
    },
    changePage: function (page) {
      var vm = this
      vm.$router.push(page)
    }
  },
  mounted () {
    var vm = this
    vm.$router.push('/login')
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
#loginCard {
  width: 40px;
  background-color: red;
}
.loginPosition {
  margin-top: 10%
}
.left {
  margin-top: 3%;
  float: left;
  font-size: 80%;
}
.cardLog {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}
.cardLog:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.cardReg {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding-bottom: 4%;
}
.cardReg:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.cardContainer {
    padding: 2px 16px;
    padding-bottom: 5%;
}
</style>
