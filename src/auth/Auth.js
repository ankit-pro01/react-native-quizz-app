// In Auth.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
// import Registration from '../screens/Registration';
// import BooksDetails from '../screens/BooksDetails';
import LandingScreen from '../screens/LandingScreen';
import Category from '../screens/Category';
import UserLogin from '../screens/UserLogin';
import UserQuestion from '../screens/UserQuestion';
import {AddQuestion} from '../screens/AddQuestion';
import EditQuestion from '../screens/EditQuestion';
import EditCategory from '../screens/EditCategory';

const Stack = createNativeStackNavigator();

function Auth() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddQuestion"
          component={AddQuestion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditQuestion"
          component={EditQuestion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditCategory"
          component={EditCategory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserLogin"
          component={UserLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserQuestion"
          component={UserQuestion}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Auth;
