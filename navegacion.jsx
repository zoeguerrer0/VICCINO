import React from "react";
import { View,Text,StyleSheet,TouchableOpacity, } from "react-native-web";
import {createBottomTabNavigatior} from "@react-navigation/bottom-tabs";
import { Navigation } from "react-native-screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


//importando-pantallas
import vicino from "./screens/vicino.js/index.js"; //sería el home de la app
import usuario, { Usuario } from "./screens/usuario.js";
import  carrito from "./screens/carrito.js";
 const stackNavigatior =createNativeStackNavigator (); 
function stack(){
    return (   //stackNaigatior.Navigator es para que su posicion prdeterminada sea el home
        <stackNavigatior>
            <stackNavigatior.navigator>
                initialRouterName ="vicino"  
            </stackNavigatior.navigator>
            <stackNavigatior.screen
                name="home"
                componente={vicino}        
            />
             <stackNavigatior.screen
                name="usuario"
                componente={usuario}        
            />
             <stackNavigatior.screen
                name="carrito"
                componente={carrito}        
            />
            
        </stackNavigatior>
    )
}

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
        </NavigationContainer>
    )
 }
 export default function stack (){
    return(

    );
 }