import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { UselessTextInput } from './ScreenInput';
import { App } from './position';
import { App1 } from './Flatlist';
const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={UselessTextInput} />
      <Stack.Screen name="Remenber" component={App1} />
      <Stack.Screen name="Profile" component={App} />
    </Stack.Navigator>
  );
}

export const  AppContainer = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}