import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../Interfaces/PropsType';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SplashScreen from '../screens/SplashScreen';

export default function MainNavigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SPLASH" component={SplashScreen} />
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PROFILE" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
