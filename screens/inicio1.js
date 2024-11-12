import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, ImageBackground, Text, View, TouchableOpacity } from 'react-native';

export default function Inicio() {
  const navigation = useNavigation();

  const navegarALogin = () => {
    navigation.navigate("Login");
  }

  const navegarARegistros = () => {
    navigation.navigate("Registro");
  }

  return (
    <ImageBackground
      source={('../assets/fondo-inicio.png')}
      style={styles.background}
      >
        <View style={styles.container} >
          <Text style={styles.Text}>
            VICINO
          </Text>
          <TouchableOpacity style={styles.button} onPress={navegarALogin}>
          <Text style={styles.buttonText}> login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={navegarARegistros}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background:{
  ...StyleSheet.absoluteFillObject,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
},

  //{
  //   flex:1,
  //   reziceMode:'cover',
  //   marginLeftft:'40%',
  //   marginRight:'30%',
  //   marginTop:'20px',
  //   padding:'280px',


  //},
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