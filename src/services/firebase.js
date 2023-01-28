import * as firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializateApp({
    apiKey: "AIzaSyDacPSCTT8P9-7uv7-7WSdO9zfH91DZaCM",
  authDomain: "react34880.firebaseapp.com",
  projectId: "react34880",
  storageBucket: "react34880.appspot.com",
  messagingSenderId: "988888303706",
  appId: "1:988888303706:web:f03b0cf470e8ab7080f063"
})

export function getFirebase()