import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Layout} from '../components/Layout/Layout';
import {AppHeader} from '../components/Header/Header';
import {ERROR_COLOR, PRIMARY_COLOR, WHITE_COLOR} from '../colors';
import {ActivityIndicator, Card, Divider} from 'react-native-paper';
import {SecondaryButton} from '../components/Button/SecondaryButton';
import {addnewQuestion} from '../services/qestionsAPI';
import {
  errorToast,
  hideMessage,
  infoToast,
  successToast,
} from '../hooks/RNFunctions';
import {QuestionForm} from '../components/QuestionForm/QuestionForm';

export const AddQuestion = ({navigation, route}) => {
  const {item} = route?.params;

  const [newQuestion, setNewQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    moreOptions: '',
    correctAnswer: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = () => {
    let moreOptsList = [];

    const moreOpts = newQuestion?.moreOptions?.split('|');
    if (!!moreOpts) {
      moreOptsList = moreOpts;
    }

    setNewQuestion({
      ...newQuestion,
      options: [...newQuestion?.options, ...moreOptsList],
    });
    setIsSubmit(true);
  };

  useEffect(() => {
    if (
      newQuestion?.correctAnswer &&
      newQuestion?.question &&
      newQuestion?.options?.length !== 0 &&
      isSubmit
    ) {
      const opList = newQuestion?.options.map(op => op?.trim());
      setLoading(true);
      const questionObj = {
        category: item,
        question: newQuestion?.question?.trim(),
        options: opList,
        correctAnswer: newQuestion?.correctAnswer?.trim(),
      };
      addnewQuestion(questionObj, item).then(res => {
        setLoading(false);
        if (!res?.err) {
          successToast('SUCCESS', 'Question Added Sucessfully');
          navigation.navigate('Category', {
            item: item,
          });
        } else {
          errorToast('ERROR', 'Question is not added');
        }
      });
    } else {
      if (isSubmit) infoToast('WARNING', 'Please Fill All the Details');
    }
  }, [newQuestion]);

  return (
    <Layout>
      <AppHeader title="Add Question" />
      <ScrollView style={{flex: 7}}>
        <QuestionForm
          newQuestion={{...newQuestion}}
          item={item}
          setNewQuestion={setNewQuestion}
        />
        <View style={{height: 320, flex: 1}}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <SecondaryButton
              label={'ADD'}
              onPressHandler={() => handleSubmit()}
            />
          )}
        </View>
      </ScrollView>
    </Layout>
  );
};
