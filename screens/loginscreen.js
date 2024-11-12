import React,  { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
        import {auth} from '../firebase';
//        import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
        import { useNavigation } from '@react-navigation/native';
        export default function Login() {
          const Navigation = useNavigation();//declaramos la navegacion para poder utilizarla abajo

          const [username, setUsername] = useState('');
          const [password, setPassword] = useState('');
        
          const handleLogin = () => {
            // Aquí puedes agregar la lógica de autenticacion
            signInWithEmailAndPassword(auth, username, password);
            console.log('Usuario:', username);
            console.log('Contraseña:', password);
          };
        
          /*const handleBack = () => {
            // Aquí puedes agregar la lógica para volver a la pantalla anterior
            <TouchableOpacity style={styles.button} onPress={()=>Navigation.navigate("Inicio")}></TouchableOpacity>
            console.log('Volver');
          };*/
        
          return (
                    

            <View style={styles.container}>
              <Text style={styles.texto}>VICINO</Text>

              <Text style={styles.icon}>👤</Text>
              <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <View style={styles.buttonContainer}>
                
        <TouchableOpacity style={styles.button} onPress={()=>Navigation.navigate("Inicio")}>
          <Text style={styles.buttonText}>Atrás</Text>
        </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
              </View>
            </View>
          );
        }
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e2caad',

          },
          icon: {
            fontSize: 50,
            marginBottom: 20,
            color: '#fff',
          },
          input: {
            width: '80%',
            padding: 10,
            marginVertical: 10,
            backgroundColor: '#73482f',
            borderRadius: 100,
            
          },
          buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
            marginTop: 20,
            
          },
          button: {
            flex: 1,
            backgroundColor: '#73482f',
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 5,
            paddingRight: 5,
            marginHorizontal: 5,
          },
          buttonText: {
            color: '#fff',
            fontSize: 16,
          },          

        });