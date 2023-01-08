import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERTIARY_COLOR,
  WHITE_COLOR,
} from '../colors';
import {Layout} from '../components/Layout/Layout';
import {PrimaryButton} from '../components/Button/PrimaryButton';
import QuizImg from '../../assets/quiz.png';

const LandingScreen = ({navigation}) => {
  return (
    <Layout>
      <View
        style={{
          flex: 5,
          alignItems: 'center',
          backgroundColor: PRIMARY_COLOR,
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
        }}>
        <Text
          style={{
            fontSize: 50,
            textAlign: 'center',
            padding: '5%',
            fontWeight: '800',
            color: WHITE_COLOR,
          }}>
          QUIZZ APP
        </Text>
        <View
          style={{
            width: 50,
            height: 60,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              aspectRatio: 1,
              width: '100%',
              height: '100%',
            }}
            source={QuizImg}
            alt={'quiz-img'}></Image>
        </View>
      </View>

      <View style={{flex: 5, justifyContent: 'center'}}>
        <PrimaryButton
          label={'Admin'}
          onPressHandler={() => navigation.navigate('Login', {type: 'Admin'})}
        />
        <PrimaryButton
          label={'Guest'}
          onPressHandler={() => navigation.navigate('UserLogin')}
        />
      </View>
    </Layout>
  );
};

export default LandingScreen;
