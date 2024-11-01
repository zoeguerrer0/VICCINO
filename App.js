import React from "react";
import { View, StyleSheet,ScrollView, } from "react-native";
import Usuarios from "./screens/usuario";

export default function App() {
  return (  
  
        <ScrollView>
          <View style={styles.container}>
            
           <Usuarios/>
          
          </View>
        </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
