// base de botones stack para usar en cada pantalla 
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Importa las pantallas
import vicino from "./screens/vicino";
import usuario from "./screens/usuario";
import carrito from "./screens/carrito";

// Crea el Stack Navigator
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="vicino">
                <Stack.Screen name="vicino" component={vicino} />
                <Stack.Screen name="usuario" component={usuario} />
                <Stack.Screen name="carrito" component={carrito} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
