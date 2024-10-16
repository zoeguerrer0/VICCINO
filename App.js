import React from "react";
import { View, StyleSheet } from "react-native";
import Inicio from './screens/inicio1';
import Envio from './screens/envío'
export default function App() {
  return (
    <View style={styles.container}>
      <Inicio />
      <Envio/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
