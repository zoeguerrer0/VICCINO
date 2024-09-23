import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: '../assets/fondo-inicio1.jpg'}} style={styles.ImageBackground}>
        <Text style={styles.title}>VICINO</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 80,
  },
  button: {
    backgroundColor: '#E8C488',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;

