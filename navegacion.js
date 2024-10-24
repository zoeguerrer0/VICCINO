import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import envío from './screens/envío'
import inicio  from './screens/inicio1';
import Usuarios from './screens/usuario';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function Tabs(){
  return (
    <Tab.Navigator
      initialRouteName='inicio'
      screenOptions={{
        tabBarActiveTintColor:'purple'      }}
     >
    
    <Tab.Screen name="usuarios" component={Usuarios} options={{tabBarLabel:'usuario', tabBarIcon:({ color , size})=>{
      color={color}
    }
  
  }} />
      <Tab.Screen name="envío" component={envío}/>
    </Tab.Navigator>
  )
}
export default function Navigation(){
  return(
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}
/*
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
*/
StyleSheet.create({
  container:{
    marginTop:100,
  },
})
