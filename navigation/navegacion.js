import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import envío from '../screens/envío'
import inicio  from '../screens/inicio1';
import RegistroScreen from '../screens/registro';
import LoginScreen from '../screens/loginscreen';

const Stack = createNativeStackNavigator();

const Nab = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicio1">
        <Stack.Screen name="inicio1" component={inicio} options={{ headerShown: false }} />
        <Stack.Screen name="envío" component={envío} options={{ headerShown: false }} />
        <Stack.Screen name="Registro" component={RegistroScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        
      </Stack.Navigator> 

    </NavigationContainer>
  );
};

export default Nab;
