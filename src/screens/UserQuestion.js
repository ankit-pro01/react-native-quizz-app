import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {QuestionCard} from '../components/questionCard.js/questionCard';
import {getQuestions} from '../services/qestionsAPI';
import {DialogBox} from '../components/Dialog/Dialog';
import {FallBackComponent} from '../components/FallbackComponent/FallBack';
import {AppHeader} from '../components/Header/Header';
import {Layout} from '../components/Layout/Layout';
import {PRIMARY_COLOR, SUCCESS_COLOR, WHITE_COLOR} from '../colors';

const TOTAL_QUESTIONS = 6;

const UserQuestion = ({navigation, route}) => {
  const {item, userName} = route?.params;
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const [userScore, setUserScore] = useState(0);

  const handleSubmit = () => {
    setIsSubmit(true);
    setShowDialog(true);
  };

  const handleCancel = () => {
    navigation.navigate('Home', {type: 'User', userName: userName});
  };

  const handleDialog = () => {
    setShowDialog(false);
  };

  const getTitle = () => {
    let message = 'GOOD';
    if (userScore === TOTAL_QUESTIONS) {
      message = 'CONGRATULATIONS!!';
    } else if (userScore >= TOTAL_QUESTIONS / 2) {
      message = 'GOOD!!';
    } else if (userScore < TOTAL_QUESTIONS / 2) {
      message = 'NEED IMPROVEMENT!!';
    }
    return message;
  };

  useEffect(() => {
    getQuestions(item)
      .then(res => {
        setLoading(false);
        if (!res?.err) {
          setQuestions(res?.data);
        } else {
          setError(true);
        }
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      });
  }, [item]);

  return (
    <Layout>
      <AppHeader title={item} />
      {loading && (
        <View
          style={{
            flex: 1,
            paddingTop: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator />
        </View>
      )}
      {error && <FallBackComponent message={'Something went wrong'} />}

      {!loading && !error && (
        <>
          <ScrollView>
            {questions?.length !== 0 ? (
              <>
                <View style={{flex: 8}}>
                  {questions?.map((questionObj, index) => {
                    return (
                      <QuestionCard
                        key={questionObj?.question}
                        question={questionObj?.question}
                        correctAnswer={questionObj?.correctAnswer}
                        options={questionObj.options}
                        idx={index}
                        isSubmit={isSubmit}
                        setUserScore={setUserScore}
                      />
                    );
                  })}
                </View>
              </>
            ) : (
              <FallBackComponent
                message={'No Available Questions for this Category'}
              />
            )}
          </ScrollView>
          <DialogBox
            title={getTitle()}
            show={showDialog}
            handleDialog={handleDialog}
            body={`Hi ${userName}. Your SCORE: ${userScore}`}
          />

          {questions?.length !== 0 && (
            <View
              style={{
                backgroundColor: PRIMARY_COLOR,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 8,
              }}>
              <View>
                <Text
                  style={{
                    color: WHITE_COLOR,
                    marginHorizontal: '8%',
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  {isSubmit
                    ? `Your Score: ${userScore} / 20`
                    : 'No of Questions: 20'}
                </Text>
              </View>
              <View>
                {isSubmit ? (
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: SUCCESS_COLOR,
                      backgroundColor: WHITE_COLOR,
                      borderRadius: 50,
                      padding: 4,
                    }}
                    onPress={handleCancel}>
                    <Text style={styles.submitText}>GO BACK</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: SUCCESS_COLOR,
                      backgroundColor: WHITE_COLOR,
                      borderRadius: 50,
                      padding: 4,
                    }}
                    onPress={handleSubmit}>
                    <Text style={styles.submitText}>SUBMIT</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
        </>
      )}
    </Layout>
  );
};

export default UserQuestion;

const styles = StyleSheet.create({
  submitText: {
    fontSize: 15,
    padding: 10,
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
  },
  options: {
    borderRadius: 15,
    margin: '2%',
  },
});
