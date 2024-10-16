<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: './assets/fondo-inicio1'}} style={styles.backgroundImage}>
        <Text style={styles.title}>VICINO</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </ImageBackground>
      <ImageBackground source={{uri: './assets/fondo-inicio1'}} style={styles.backgroundImage}>
        <Text style={styles.title}>VICINO</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </ImageBackground>
    <View/>
=======
import React from "react";
import { View, StyleSheet } from "react-native";
import Inicio from './screens/inicio1';
import Envio from './screens/envío'
export default function App() {
  return (
    <View style={styles.container}>
      <Inicio />
      <Envio/>
>>>>>>> ee2d36e727030093a623dc194026977ebf5b129d
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
