import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../journey/authentication/Login';
import SignUp from '../journey/authentication/Signup';

import {AuthenticationStackList} from './type';

const Stack = createStackNavigator<AuthenticationStackList>();

export default function AuthenticationStack(): React.ReactElement {
  return (
    <Stack.Navigator screenOptions={() => ({})} initialRouteName={'Signup'}>
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
