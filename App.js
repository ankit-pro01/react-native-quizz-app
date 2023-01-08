import {View, Text} from 'react-native';
import Toast from 'react-native-toast-message';
import React from 'react';
import Auth from './src/auth/Auth';

const App = () => {
  return (
    <>
      <Auth />
      <Toast />
    </>
  );
};

export default App;
