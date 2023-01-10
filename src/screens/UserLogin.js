import {StyleSheet, View, TextInput, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ERROR_COLOR, PRIMARY_COLOR, WHITE_COLOR} from '../colors';
import {SecondaryButton} from '../components/Button/SecondaryButton';
import Avatar from '../../assets/avatar2.png';
import {errorToast, hideMessage} from '../hooks/RNFunctions';
import {Layout} from '../components/Layout/Layout';

const UserLogin = ({navigation}) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const validateName = () => {
    const trimName = name.trim();
    if (/[a-zA-Z]{3,}/.test(trimName)) {
      navigation.navigate('Home', {type: 'User', userName: name});
    } else {
      errorToast('NAME ERROR', 'Please provide valid name');
      setError(true);
    }
  };
  return (
    <Layout>
      <View
        style={{
          flex: 3,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: PRIMARY_COLOR,
        }}>
        <View
          style={{
            flex: 1,
            width: '50%',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="cover"
            style={{flex: 1, width: '100%', height: '100%'}}
            source={Avatar}></Image>
        </View>
      </View>
      <View style={{flex: 7, justifyContent: 'center'}}>
        <View
          style={{
            backgroundColor: error ? ERROR_COLOR : WHITE_COLOR,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: '5%',
            borderRadius: 50,
            marginHorizontal: '10%',
            borderColor: PRIMARY_COLOR,
            borderWidth: 2,
          }}>
          <TextInput
            style={{
              fontSize: 24,
              color: PRIMARY_COLOR,
            }}
            onChangeText={text => {
              hideMessage();
              setError(false);
              setName(text);
            }}
            placeholder="Enter Name"
            placeholderTextColor={PRIMARY_COLOR}
          />
        </View>
        <SecondaryButton label="Start" onPressHandler={validateName} />
      </View>
    </Layout>
  );
};

export default UserLogin;

const styles = StyleSheet.create({});
