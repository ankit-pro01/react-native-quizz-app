import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  TextInput,
} from 'react-native';
import {ActivityIndicator, Divider} from 'react-native-paper';
import {Card} from 'react-native-shadow-cards';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ERROR_COLOR,
  PRIMARY_COLOR,
  TERTIARY_COLOR,
  WHITE_COLOR,
} from '../colors';
import {errorToast, hideMessage} from '../hooks/RNFunctions';
import {getStoreData, setStoreData} from '../hooks/Storage';
import {useTogglePasswordVisibility} from '../hooks/useTogglePasswordVisibility';
import {validateUser} from '../services/usersAPI';

const Login = ({navigation}) => {
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const [userCredential, setUserCredential] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStoreData('admin-login').then(res => {
      if (res === 'admin') {
        navigation.navigate('Home', {type: 'Admin'});
      }
    });
  }, []);

  const validEmail = email => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const handleLogin = () => {
    setError(false);
    setLoading(true);
    if (validEmail(userCredential?.email)) {
      validateUser(userCredential?.email, userCredential?.password)
        .then(res => {
          setLoading(false);
          setStoreData('admin-login', 'admin')
            .then(res => {
              navigation.navigate('Home', {type: 'Admin'});
            })
            .catch(er => {
              navigation.navigate('Home', {type: 'Admin'});
            });
        })
        .catch(err => {
          setLoading(false);
          setError(true);
          errorToast('LOG IN ERROR', 'INVALID CREDENTIALS');
        });
    } else {
      setError(true);
      setLoading(false);
      errorToast('LOG IN ERROR', 'INVALID EMAIL');
    }
  };
  return (
    <View style={styles.main}>
      <Card style={styles.card}>
        <Text style={styles.Text_Title}>Login</Text>
        <Divider height={5} width="100%" />
        <ScrollView>
          <View style={styles.textInput_view}>
            <TextInput
              name="email"
              style={{
                ...styles.basicTextInpute,
                backgroundColor: error ? ERROR_COLOR : '#f1f3f6',
              }}
              placeholder={'Email ID'}
              autoCapitalize="none"
              placeholderTextColor={error ? WHITE_COLOR : 'gray'}
              value={userCredential?.email}
              onChangeText={value => {
                setError(false);
                setUserCredential({...userCredential, email: value});
                hideMessage();
              }}
            />
          </View>

          <View style={{flex: 1, marginVertical: '5%', flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center', width: '100%'}}>
              <View
                style={{
                  ...styles.inputView,
                  backgroundColor: error ? ERROR_COLOR : '#f1f3f6',
                }}>
                <TextInput
                  name="password"
                  style={{flex: 1, paddingHorizontal: 12}}
                  secureTextEntry={passwordVisibility}
                  placeholder={'Password'}
                  textContentType="password!"
                  placeholderTextColor={error ? WHITE_COLOR : 'gray'}
                  value={userCredential?.password}
                  onChangeText={value => {
                    setError(false);
                    setUserCredential({...userCredential, password: value});
                    hideMessage();
                  }}
                />
                <Pressable onPress={handlePasswordVisibility}>
                  <MaterialCommunityIcons
                    name={rightIcon}
                    size={25}
                    color="dodgerblue"
                  />
                </Pressable>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.button_view} onPress={handleLogin}>
            <View style={styles.button}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Text style={styles.Button_Text}>Log In</Text>
              )}
            </View>
          </TouchableOpacity>
        </ScrollView>
      </Card>
    </View>
  );
};

export default Login;

// Style Css --->
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: TERTIARY_COLOR,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  Text_Title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Montserrat-Regular',
    color: PRIMARY_COLOR,
  },
  textInput_view: {
    marginTop: '10%',
  },
  Inputtext: {
    height: 40,
    backgroundColor: 'white',
  },
  button_view: {
    flex: 1,
    marginVertical: 25,
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    backgroundColor: 'dodgerblue',
    height: 45,
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
  },
  Button_Text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  basicTextInpute: {
    width: '100%',
    height: 44,
    backgroundColor: '#f1f3f6',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  inputView: {
    width: '100%',
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
