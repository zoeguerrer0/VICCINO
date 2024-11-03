import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import envío from "./screens/envío";
import Inicio from "./screens/inicio1";
import RegistroScreen from "./screens/registro";
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
        name="envío"
        component={envío}
        options={{ title: "Envío" }}
      />
    </Stack.Navigator>
  );
}
