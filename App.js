import React from "react";
import { View, StyleSheet,ScrollView, Dimensions } from "react-native";
import Nab from "./navigation/navegacion";
//terminar de configurar la dimension de las pantallas
//const {width, height}= Dimensions.get('window');

export default function App() {
  return (
    <Nab/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
