// BotonesTab base para poner en las pantallas
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// Importa las pantallas
import vicino from "./screens/vicino";
import usuario from "./screens/usuario";
import carrito from "./screens/carrito";

// Crea el Tab Navigator
const Tab = createBottomTabNavigator();
export default function BotonesTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="vicino" component={vicino} />
                <Tab.Screen name="usuario" component={usuario} />
                <Tab.Screen name="carrito" component={carrito} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
 