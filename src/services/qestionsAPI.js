import {collection, getDocs, addDoc, setDoc, doc} from 'firebase/firestore';
import {db} from '../firestore/config';

const mappedCat = categoryName => {
  let collectionName = `${categoryName}-questions`;
  if (categoryName === 'General Knowledge') {
    collectionName = `GK-questions`;
  }
  return collectionName;
};

//GET All Questions
const getQuestions = async categoryName => {
  const collectionName = mappedCat(categoryName);
  const questionsList = [];
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach(doc => {
      const questionObj = doc.data();
      questionsList.push({...questionObj, _id: doc.id});
    });
    return {data: questionsList, err: null};
  } catch (err) {
    return {data: null, err: 'SOMETHING WENT WRONG'};
  }
};

//ADD new question
const addnewQuestion = async (questionObj, categoryName) => {
  const collectionName = mappedCat(categoryName);
  try {
    const docRef = await addDoc(collection(db, collectionName), questionObj);
    return {data: true, err: null};
  } catch (e) {
    return {data: null, err: 'SOMETHING WENT WRONG'};
  }
};

//EDIT question
const editQuestion = async (updatedQuestionObj, categoryName) => {
  const {_id} = updatedQuestionObj;
  const collectionName = mappedCat(categoryName);
  try {
    await setDoc(doc(db, collectionName, _id), {...updatedQuestionObj});
    console.log('success');
    return {data: true, err: null};
  } catch (e) {
    console.log('error', e);
    return {data: null, err: `SOMETHING WENT WRONG`};
  }
};

//DELETE question
const deleteQuestion = async (questionObj, categoryName) => {
  const collectionName = mappedCat(categoryName);
  const {_id} = questionObj;
  if (_id) {
    try {
      const docRef = await collection(db, collectionName).doc(_id).delete();
      return {data: true, err: null};
    } catch (e) {
      return {data: null, err: 'SOMETHING WENT WRONG'};
    }
  }
};

export {getQuestions, addnewQuestion, editQuestion, deleteQuestion};
