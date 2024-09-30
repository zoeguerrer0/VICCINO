import React from "react";
import { View,Text,StyleSheet,TouchableOpacity, } from "react-native-web";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Navigation } from "react-native-screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


//importando-pantallas
import vicino from "./screens/vicino.js/index.js"; //sería el home de la app
import usuario from "./screens/usuario.js";
import  carrito from "./screens/carrito.js";

const stackNavigatior =createNativeStackNavigator (); 

export default function stack(){
    return (
              <NavigationContainer>
                    <Stack.Navigator initialRouteName ="vicino"/>

                    <Stack.Screen name="home" component={vicino} />


                    <stackNavigatior.Screen
                        name="usuario"
                        component={usuario}        
                    />
                    <stackNavigatior.screen name="carrito" component={carrito} />
              </NavigationContainer>
    )
}

const Tab = createBottomTabNavigator();
 function botonesTab(){ //en esta funcion le asignamos la ruta a cada botón.
    return(
        <Tab.Navigator>
            <Tab.Screen name="carrito" componente={carrito}/>
            <Tab.Screen name="usuario" componente={usuario}/>
            <Tab.Screen name="vicino" componente={vicino}/>
        </Tab.Navigator>
    )
 }
 export default function Navigation(){//consultar pq no anda
    return(
        <NavigationContainer> 
         <botonesTab/>
        </NavigationContainer>
    )
 }
