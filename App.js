import React from "react";
import { View, StyleSheet,ScrollView, Text } from "react-native";
import Usuarios from "./screens/usuario";
import Navigation from "./navegacion";
import  { DataProvider } from "./src/componentes/DataContext";
import { View, StyleSheet,ScrollView, Dimensions } from "react-native";
import Nab from "./navigation/navegacion";
//terminar de configurar la dimension de las pantallas
//const {width, height}= Dimensions.get('window');

export default function App() {
  return (  
    <DataProvider>
      {/* bmnvm */}
        <ScrollView>
          <View style={styles.container}>
          
            <Usuarios/>
              </View>
        </ScrollView>
    </DataProvider>
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
