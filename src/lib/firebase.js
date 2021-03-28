import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import * as API from '../constants/api';

const config = {
  apiKey: API.API_KEY,
  authDomain: `${API.PROJECT_ID}.firebaseapp.com`,
  projectId: API.PROJECT_ID,
  storageBucket: `${API.PROJECT_ID}.appspot.com`,
  messagingSenderId: API.APP_ID,
  appId: API.MEASUREMENT_ID
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
