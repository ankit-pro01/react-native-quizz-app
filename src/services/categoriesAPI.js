import {collection, getDocs, addDoc, setDoc, doc} from 'firebase/firestore';
import uuid from 'react-native-uuid';
import {db} from '../firestore/config';

const getAllCategories = async () => {
  let categoryList = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'categories'));
    querySnapshot.forEach(doc => {
      const categoryObj = doc.data();
      categoryList.push({...categoryObj, _id: doc.id});
    });
    return {data: categoryList, err: null};
  } catch (err) {
    return {data: null, err: 'SOMETHING WENT WRONG'};
  }
};

const addNewCategory = async categoryName => {
  try {
    getAllCategories().then(async res => {
      const dataRef = res?.data?.filter(
        cat => cat?.name?.tolowerCase() === categoryName?.toLowerCase(),
      );
      if (dataRef?.length) {
        return {data: null, err: 'Category Allready Exists'};
      } else {
        const docRef = await addDoc(collection(db, 'categories'), {
          id: uuid.v4(),
          name: categoryName,
        });
        return {data: true, err: null};
      }
    });
  } catch (e) {
    return {data: null, err: 'SOMETHING WENT WRONG'};
  }
};

const upDateCategory = async (docID, updatedName, prevName) => {
  try {
    await setDoc(doc(db, 'categories', docID), {name: updatedName});

    return {data: true, err: null};
  } catch (e) {
    console.error('Error adding document: ', e);
    return {data: null, err: 'SOMETHING WENT WRONG'};
  }
};

export {addNewCategory, getAllCategories, upDateCategory};
