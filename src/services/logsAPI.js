import {addDoc, collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../firestore/config';

export const sortData = (list, asc = true) => {
  let sortedList = [...list]?.sort((a, b) =>
    a.timeStamp.localeCompare(b.timeStamp),
  );
  if (asc) {
    return sortedList;
  } else {
    return sortedList?.reverse();
  }
};
export const getLogs = async categoryName => {
  const logsList = [];
  try {
    const logsRef = collection(db, 'app-logs');
    const logQuery = query(logsRef, where('category', '==', categoryName));

    const querySnapshot = await getDocs(logQuery);
    querySnapshot.forEach(doc => {
      const logObj = doc.data();
      logsList.push({...logObj, _id: doc.id});
    });
    const newLogList = sortData(logsList, false);
    return {data: newLogList, err: null};
  } catch (err) {
    console.log('error -> ', err);
    return {data: null, err: 'SOMETHING WENT WRONG'};
  }
};

export const addNewLog = async (userName, categoryName, userScore) => {
  try {
    let time = new Date().toLocaleString();
    await addDoc(collection(db, 'app-logs'), {
      timeStamp: time,
      user: userName,
      category: categoryName,
      score: userScore,
    });
    return {data: true, err: null};
  } catch (er) {
    return {data: null, err: 'SOMETHING WENT WRONG'};
  }
};
