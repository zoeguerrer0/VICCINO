// BotonesTab base para poner en las pantallas
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer }from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importa las pantallas
import vicino from "./screens/vicino";
import usuario from "./screens/usuario";
import carrito from "./screens/carrito";

// Crea el stack Navigator

const Stack = createNativeStackNavigator();


function Stack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="vicino"
        >
            <HomeStackNavigator.Screen
                name="vicino"
                component={vicino}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={usuario}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}   


const Tab = createBottomTabNavigator();

function Tabs() {
  return (
      <Tab.Navigator
        initialRouteName="vicino"
        screenOptions= {{
            tabBarActiveTintColor: 'purple',
        }}
      >
        <Tab.Screen 
            name="Home" 
            component={Stack} 
            options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={30} />
                ),
                tabBarBadge: 10,
                headerShown: false,
            }}
        />
        <Tab.Screen 
            name="Settings" 
            component={usuario}
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="brightness-5" color={color} size={30} />
                ),
            }}
        />
         <Tab.Screen 
            name="Settings" 
            component={carrito}
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="brightness-5" color={color} size={30} />
                ),
            }}
        />
    </Tab.Navigator>
    );
}


export default function Navigation() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}