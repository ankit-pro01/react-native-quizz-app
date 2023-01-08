import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppHeader} from '../components/Header/Header';
import {PrimaryButton} from '../components/Button/PrimaryButton';
import {FallBackComponent} from '../components/FallbackComponent/FallBack';
import {ActivityIndicator, Card, Dialog, Divider} from 'react-native-paper';
import {Layout} from '../components/Layout/Layout';
import {ERROR_COLOR, PRIMARY_COLOR, WHITE_COLOR} from '../colors';
import {
  deleteQuestion,
  editQuestion,
  getQuestions,
} from '../services/qestionsAPI';
import {errorToast, infoToast, successToast} from '../hooks/RNFunctions';
import {QuestionForm} from '../components/QuestionForm/QuestionForm';
import {SecondaryButton} from '../components/Button/SecondaryButton';
import {DialogBox} from '../components/Dialog/Dialog';
import {SuccessToast} from 'react-native-toast-message';

const EditQuestion = ({navigation, route}) => {
  const {item} = route?.params;
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selctQue, setSelctQue] = useState({
    question: '',
    options: ['', '', '', ''],
    moreOptions: '',
    correctAnswer: '',
  });
  const [showEditor, setShowEditor] = useState(false);

  const handlePress = que => {
    setSelctQue({...que});
  };

  useEffect(() => {
    setLoading(true);
    getQuestions(item)
      .then(res => {
        setLoading(false);
        if (!res?.err) {
          setQuestions(res?.data);
        } else {
          errorToast('ERROR', 'Unable to load results');
        }
      })
      .catch(err => {
        setLoading(false);
        errorToast('ERROR', 'Unable to load results');
      });
  }, []);

  useEffect(() => {
    if (selctQue?.correctAnswer) setShowEditor(true);
  }, [selctQue]);

  if (showEditor)
    return (
      <EditQuestionExtend
        navigation={navigation}
        question={selctQue}
        item={item}
      />
    );

  return (
    <Layout>
      <AppHeader navigation={navigation} title={'EDIT QUESTION'} />
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      ) : questions?.length === 0 ? (
        <FallBackComponent message={'Unable to load questions'} />
      ) : (
        <ScrollView>
          {questions.map(question => {
            return (
              <Card
                key={question._id}
                style={{
                  marginHorizontal: 10,
                  backgroundColor: WHITE_COLOR,
                  marginVertical: 5,
                  padding: 10,
                }}>
                <TouchableOpacity
                  style={{width: '100%'}}
                  onPress={() => handlePress(question)}>
                  <Text
                    style={{
                      color: PRIMARY_COLOR,
                      fontWeight: 'bold',
                      FontSize: 12,
                    }}>
                    {`Q: ${question?.question}`}
                  </Text>
                  <Text
                    style={{
                      color: PRIMARY_COLOR,
                      fontWeight: 'bold',
                      FontSize: 12,
                    }}>
                    {`options: ${question?.options?.join(' | ')}`}
                  </Text>
                </TouchableOpacity>
              </Card>
            );
          })}
        </ScrollView>
      )}
    </Layout>
  );
};

const EditQuestionExtend = ({navigation, question, item}) => {
  let moreOptions = question?.options
    ?.slice(4, question?.options?.length)
    ?.join(' | ');

  const [newQuestion, setNewQuestion] = useState({...question, moreOptions});

  useEffect(() => {
    let moreOptions = question?.options
      ?.slice(4, question?.options?.length)
      ?.join(' | ');
    setNewQuestion({...question, moreOptions});
  }, [question]);

  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDialog = () => {
    setLoading(true);
    setShowDialog(false);
    deleteQuestion(question, item)
      .then(res => {
        setLoading(false);
        if (!res?.err) {
          SuccessToast('SUCCESS', 'DELETED THE QUESTION');
          navigation.navigate('Home', {
            item: item,
          });
        } else {
          errorToast('ERROR', 'UNABLE TO DELETE THE QUESTION');
        }
      })
      .catch(er => {
        setLoading(false);
        console.log('err ->', er);
        errorToast('ERROR', 'UNABLE TO DELETE THE QUESTION');
      });
  };

  const handleUpdateHandler = () => {
    editQuestion(newQuestion, item)
      .then(res => {
        setLoading(false);
        if (!res?.err) {
          successToast('SUCCESS', 'UPDATED THE QUESTION');
          navigation?.navigate('Home', {
            item: item,
          });
        } else {
          errorToast('ERROR', 'UNABLE TO UPDATE THE QUESTION');
        }
      })
      .catch(er => {
        setLoading(false);
        console.log('err', er);
        errorToast('ERROR', 'UNABLE TO UPDATE THE QUESTION');
      });
  };

  return (
    <ScrollView style={{flex: 8}}>
      <QuestionForm
        newQuestion={{...newQuestion, moreOptions: moreOptions}}
        item={item}
        setNewQuestion={setNewQuestion}
      />
      <DialogBox
        title={'CONFIRMATION !!!'}
        show={showDialog}
        handleDialog={handleDialog}
        body={`Are you sure you want to delete this question?`}
      />
      <View style={{height: 320, flex: 1}}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          !showDialog && (
            <>
              <SecondaryButton
                bgColor={ERROR_COLOR}
                label={'DELETE'}
                onPressHandler={() => {
                  setShowDialog(true);
                }}
              />
              <SecondaryButton
                label={'UPDATE'}
                onPressHandler={() => {
                  handleUpdateHandler();
                }}
              />
            </>
          )
        )}
      </View>
    </ScrollView>
  );
};

export default EditQuestion;
