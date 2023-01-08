import {initializeApp} from 'firebase/app';
import {getFirestore, initializeFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCB5hRZwu2H9GJsTp8eM1SdSY_ijfbnlsQ',
  authDomain: 'client-quiz-app.firebaseapp.com',
  projectId: 'client-quiz-app',
  storageBucket: 'client-quiz-app.appspot.com',
  messagingSenderId: '463611396992',
  appId: '1:463611396992:web:f8aea87a985cd50405b765',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
