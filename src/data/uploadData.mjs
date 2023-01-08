import EconomicsData from './economics.json' assert {type: 'json'};
import HistoryData from './history.json' assert {type: 'json'};
import ScienceData from './science.json' assert {type: 'json'};
import gkData from './gk.json' assert {type: 'json'};
import {initializeApp} from 'firebase/app';
import {getFirestore, initializeFirestore} from 'firebase/firestore';
import {collection, getDocs, addDoc} from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

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

// const arrlist = [
//   EconomicsData?.questions,
//   HistoryData?.questions,
//   ScienceData?.questions,
// ];

// const uploadToFireStore = menu => {
//   menu.forEach(async function (obj) {
//     try {
//       const docRef = await addDoc(
//         collection(db, `${obj?.category}-questions`),
//         {
//           category: obj?.category,
//           options: obj?.options,
//           question: obj?.question,
//           correctAnswer: obj?.correctAnswer,
//         },
//       );
//       console.log('Document written with ID: ', docRef.id);
//     } catch (e) {
//       console.log('error: ', e);
//     }
//   });
// };

// for (let i = 0; i < arrlist.length; i++) {
//   uploadToFireStore(arrlist[i]);
// }

export const createAdminUser = () => {
  try {
    const email = 'jaiganesh2528@gmail.com';
    const password = '1234567890';
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('user', user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error', errorMessage);
      });
  } catch (err) {
    console.log('something went wrong');
  }
};

createAdminUser();
