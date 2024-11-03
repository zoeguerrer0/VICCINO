//funciona, esta es la navegacion definitiva
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/loginscreen";
import Inicio from "./screens/inicio1";
import RegistroScreen from "./screens/registro";
import Product from "./screens/producto";
const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{ title: "Inicio" }}
      />
      <Stack.Screen
        name="Registro"
        component={RegistroScreen}
        options={{ title: "Registro" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "login" }}
      />
      <Stack.Screen
        name="Productos"
        component={Product}
        options={{ title: "productos" }}
      />
    </Stack.Navigator>
  );
}
