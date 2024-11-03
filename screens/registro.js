import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Login from "./loginscreen";
import Product from "./producto";
const RegistroScreen = () => {
  const Navigation = useNavigation();

  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/PantallaPiola.jpg')} style={styles.imageBackground} resizeMode="cover">
        <Text style={styles.title}>V I C I N O</Text>
        <TextInput style={styles.input} placeholder="Ingrese su Nombre" placeholderTextColor="#000" />
        <TextInput style={styles.input} placeholder="Ingrese su Apellido" placeholderTextColor="#000" />
        <TextInput style={styles.input} placeholder="Ingrese su Gmail" placeholderTextColor="#000" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Ingrese una Contraseña" placeholderTextColor="#000" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirme su Contraseña" placeholderTextColor="#000" secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={()=>Navigation.navigate("Login")}>
          <Text style={styles.buttonText} >login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>Navigation.navigate("product")}>
          {/* revisar navegación pantalla productos */}
          <Text style={styles.buttonText}>siguiente</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default RegistroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 25,
    backgroundColor: '#d3b19d',
    color: '#000',
  },
  button: {
    backgroundColor: '#8B5A2B', // Marrón oscuro
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
