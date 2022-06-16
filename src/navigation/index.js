import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/homeScreen';
import {constants} from '../utils/constants';
import {ScanQRScreen} from '../screens/scanQRScreen';
import {GenerateQAScreen} from '../screens/generateQRScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={constants.HOME}
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name={constants.QRSCAN}
        component={ScanQRScreen}
        options={{title: 'Scan QR'}}
      />
      <Stack.Screen
        name={constants.GENERATEQR}
        component={GenerateQAScreen}
        options={{title: 'Generate QR'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
