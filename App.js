import React from "react";
import 'react-native-gesture-handler';
import MyStack from "./navegacion";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
