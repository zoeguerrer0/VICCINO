import React from 'react';
import { StyleSheet, ImageBackground, Text, View, TouchableOpacity } from 'react-native';

export default function Inicio() {
  return (
    <ImageBackground
      source={require('../assets/fondo-inicio.png')}
      style={styles.background}
      >
        <View style={styles.container} >
          <Text style={styles.Text}>
            VICINO
          </Text>
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
  background:{
    flex:1,
    reziceMode:'cover',
    marginLeftft:'40%',
    marginRight:'30%',
    marginTop:'20px',
    padding:'280px',


  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:'auto',
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
  Text:{
    color: '#000000', // Texto principal negro
    fontSize: 30,
    letterSpacing: 4,
  }

});
