import { createApp } from 'vue'
import router from './routers'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsjKO7qmUdhqNRbiHkECu1HsYvbTgDRAc",
  authDomain: "profesy-buv.firebaseapp.com",
  projectId: "profesy-buv",
  storageBucket: "profesy-buv.appspot.com",
  messagingSenderId: "206690266898",
  appId: "1:206690266898:web:fbab80c263bd1825360dcb",
  measurementId: "G-5FZ44C07Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app')
