import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import OrderFinish from './screens/OrderFinish';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="OrderFinish" component={OrderFinish} options={{
            headerShown: false,
          }}/>
      <Stack.Screen name="Chat" component={ChatScreen} options={{
            headerShown: false,
          }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{
            headerShown: false,
          }}/>
        
      </Stack.Navigator>
    </NavigationContainer> 
  );
};