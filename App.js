
import React from "react";
import { View, StyleSheet,ScrollView } from "react-native";
import Inicio from './screens/inicio1';
import Envio from './screens/envío';
import ModalComponent from "./src/componentes/ComponenteModal";
export default function App() {
  return (  
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.item}>
          <Inicio /> 
        </View>
        <View style={styles.item}>
          <Envio/>
        </View>
        <View style={styles.item}>
          <ModalComponent/>
       </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    

  }
});
