import React from "react";
import { View,Text,StyleSheet,TouchableOpacity, } from "react-native-web";
import {createBottomTabNavigatior} from "@react-navigation/bottom-tabs";
import { Navigation } from "react-native-screens";

//importando-pantallas
import vicino from "./screens/vicino"; 
import usuario from "./screens/usuario";
import  carrito from "./screens/carrito.js";
 const Tab = createBottomTabNavigatior();
 function botonesTab(){ //en esta funcion le asignamos la ruta a cada botón.
    return(
        <Tab.navigator>
            <Tab.screen name="carrito" componente={carrito}/>
            <Tab.screen name="usuario" componente={usuario}/>
            <Tab.screen name="vicino" componente={vicino}/>
        </Tab.navigator>
    )
 }
 export default function Navigation(){//consultar pq no anda
    return(
        <NavigationContainer> 
         <botonesTab/>
        <NavigationContainer/> 
    )
 }