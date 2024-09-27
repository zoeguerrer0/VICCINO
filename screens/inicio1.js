import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

const inicio =()=>{
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
}