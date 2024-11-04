import React from "react";
import 'react-native-gesture-handler';
import MyStack from "./navegacion";
import Product from "./screens/avanceCarrito";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native-web";
export default function App() {
  return (
    <View>
      <Product/>
      <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </View>
    
  );
}
