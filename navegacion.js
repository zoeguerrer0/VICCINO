import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import envío from './screens/envío'
import inicio  from './screens/inicio1';

const Stack = createNativeStackNavigator();

const Nab = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicio1">
        <Stack.Screen name="inicio" component={inicio} options={{ title: 'inicio' }} />
        <Stack.Screen name="envío" component={envío} options={{ title: 'Envío' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nab;
