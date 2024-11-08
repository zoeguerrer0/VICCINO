import React from "react";
import 'react-native-gesture-handler';
import MyStack from "./navegacion";
import PruebaProd from "./src/componentes/avanceCarrito";
import ModalComponent from "./src/componentes/ComponenteModal";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native-web";
export default function App() {
  return (
    <View>
      <NavigationContainer>
      <MyStack />
    </NavigationContainer>   
    <ModalComponent/>
    </View>
    
  );
}
