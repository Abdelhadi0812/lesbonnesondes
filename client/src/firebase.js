// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'les-bonnes-ondes.firebaseapp.com',
  projectId: 'les-bonnes-ondes',
  storageBucket: 'les-bonnes-ondes.appspot.com',
  messagingSenderId: '627686882795',
  appId: '1:627686882795:web:62fdf4a72a8088136eadae',
  measurementId: 'G-V2R1Y97XLN',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
