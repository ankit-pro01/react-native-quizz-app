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
  apiKey: 'AIzaSyADEd_kH5TPtKqFaMFQdBvY0WgYdubLUkg',
  authDomain: 'quick-quiz-5d9b8.firebaseapp.com',
  projectId: 'quick-quiz-5d9b8',
  storageBucket: 'quick-quiz-5d9b8.appspot.com',
  messagingSenderId: '1039332962454',
  appId: '1:1039332962454:web:7b310d1eb4d23cf1ef12b7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

const questionslist = [
  EconomicsData?.questions,
  HistoryData?.questions,
  ScienceData?.questions,
  gkData?.questions,
];

const uploadQuestions = questionslist => {
  questionslist.forEach(async function (obj) {
    try {
      const docRef = await addDoc(
        collection(db, `${obj?.category}-questions`),
        {
          category: obj?.category,
          options: obj?.options,
          question: obj?.question,
          correctAnswer: obj?.correctAnswer,
        },
      );
      console.log('Success');
    } catch (e) {
      console.log('error: ', e);
    }
  });
};

//uplaod Categories
export const uploadCategories = () => {
  const categoryList = [
    'Science',
    'General Knowledge',
    'Economics',
    'History',
    'Tech',
  ];
  categoryList.forEach(async function (categoryName) {
    try {
      const docRef = await addDoc(collection(db, `categories`), {
        name: categoryName,
      });
      console.log('Success');
    } catch (e) {
      console.log('error: ', e);
    }
  });
};

export const createAdminUser = () => {
  try {
    const email = 'jaiganesh2528@gmail.com';
    const password = '1234567890';
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('Success');
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

//for creating admin user
// createAdminUser();

//for uploading categories
// uploadCategories();

//uploadQuestions
for (let i = 0; i < questionslist.length; i++) {
  uploadQuestions(questionslist[i]);
}
