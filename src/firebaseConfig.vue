<template lang="html">

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
  firebase: {
    wifiInfo: wifiInfoRef,
    users: userRef
  }
}
</script>

<style lang="css">
</style>
