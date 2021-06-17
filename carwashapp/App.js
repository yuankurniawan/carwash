import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import HomeScreen from './screens/HomeScreen';
import Profile from './screens/ProfileScreen';
import ChatScreen from './screens/ChatScreen';
import OrderFinish from './screens/OrderFinish';
import SplashScreen from './screens/SplashScreen';
import OnBoarding1 from './screens/OnBoarding1';
import OnBoarding2 from './screens/OnBoarding2';
import OnBoarding3 from './screens/OnBoarding3';

import LoginScreen from './screens/LoginScreen';
import RegisScreen from './screens/RegisScreen';
import OtpScreen from './screens/OtpScreen';
import DataDiri from './screens/DataDiri';
import DoneRegisScreen from './screens/DoneRegisScreen';

import WasherArrive from './screens/WasherArrive';
import WasherOnGoing from './screens/WasherOnGoing';
import WasherSearch from './screens/WasherSearch';

import OrderDetail from './screens/OrderDetail';


const Stack = createStackNavigator();

export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? 
        
        <>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Profile" options={{
          headerShown: true,
        }} >
          { props => <Profile {...props} user={user}/> }
        </Stack.Screen>
        <Stack.Screen name="OrderDetail" component={OrderDetail} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="OrderFinish" component={OrderFinish} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="WasherOnGoing" component={WasherOnGoing} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="WasherSearch" component={WasherSearch} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="WasherArrive" component={WasherArrive} options={{
          headerShown: false,
        }} />
        </> : 
        <>
        <Stack.Screen name="Splash" component={SplashScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Boarding1" component={OnBoarding1} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Boarding2" component={OnBoarding2} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Boarding3" component={OnBoarding3} options={{
          headerShown: false
        }} />

        <Stack.Screen name="Login" component={LoginScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Regis" component={RegisScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Otp" component={OtpScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="DataDiri" component={DataDiri} options={{
          headerShown: false
        }} />
        <Stack.Screen name="DoneRegis" component={DoneRegisScreen} options={{
          headerShown: false
        }} />
        </>
        
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
};