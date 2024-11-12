import React from "react";
import 'react-native-gesture-handler';
import { Nab} from './navigation/navegacion'; // Asegúrate de que esta importación sea correcta
import { NavigationContainer } from "@react-navigation/native";

export function App() {
  return (
    <NavigationContainer>
      <Nab />
    </NavigationContainer>
  );
}