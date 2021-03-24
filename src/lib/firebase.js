import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAjO_QpX5TMBk6JppZA2vFWHZf19xl6DDg',
  authDomain: 'instagram-a08cc.firebaseapp.com',
  projectId: 'instagram-a08cc',
  storageBucket: 'instagram-a08cc.appspot.com',
  messagingSenderId: '47751896843',
  appId: '1:47751896843:web:acfed29a7a59f4c52ecc0e'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


// console.log(firebase,'firebase');
export { firebase, FieldValue };
