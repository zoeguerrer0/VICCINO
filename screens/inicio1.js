import React from 'react';
import { StyleSheet, ImageBackground, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default function Inicio() {
  return (
    <ImageBackground
      source={require('../assets/fondo-inicio.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.Text}>VICINO</Text>
        <TouchableOpacity style={styles.button} onPress={() => alert('Ingresando...')} >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Ingresando...')}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    width: '100%',
  
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6F4E37',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  Text: {
    color: '#FFFF',
    fontSize: 30,
    marginBottom: 650, // Ajusta este valor para controlar el espacio entre el texto y los botones
    letterSpacing: 4,
    marginTop:30,
  },
});