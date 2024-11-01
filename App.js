import React from "react";
import { View, StyleSheet,ScrollView, Text } from "react-native";
import Usuarios from "./screens/usuario";
import  { DataProvider } from "./src/componentes/DataContext";
import { View, StyleSheet,ScrollView, Dimensions } from "react-native";
//  terminar de configurar la dimension de las pantallas

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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
