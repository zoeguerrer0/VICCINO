
import React from "react";
import { View, StyleSheet,ScrollView, Text } from "react-native";
import Usuarios from "./screens/usuario";
import Navigation from "./navegacion";

export default function App() {
  return (  
    <ScrollView>
      <View style={styles.container}>
      
        <Usuarios/>
        
             </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D2B48C',

  }
});
