
import React from "react";
import { View, StyleSheet,ScrollView, Dimensions } from "react-native";
import Inicio from './screens/inicio1';
import Envio from './screens/envío';
import ModalComponent from "./src/componentes/ComponenteModal";
const {width, height}= Dimensions.get('window');//terminar de configurar la dimension de las pantallas
export default function App() {
  return (  
    <ScrollView>
      <View style={styles.container} >
        <Inicio />
        <Envio/>
        <ModalComponent/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
