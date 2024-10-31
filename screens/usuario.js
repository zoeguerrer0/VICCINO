import React from 'react';
import { View, Text, TouchableOpacity, ScrollView,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // O cualquier otra biblioteca de iconos

function Usuario () {
            return (
                <View>
                    <Text
                    style={{
                        fontSize:30,
                        textAlign: "center",
                        marginTop:"20%"
                    }}>
                       
                    </Text>
                </View>
            );
        };

 export default Usuario;       
const Usuarios = () => {
  return (
    <ScrollView >
      <View style={styles.container} >
        <Text style={styles.Text_mayusculas}> VICINO</Text>

        <Text style={styles.Text_normal}>Alejandra Maldonado</Text>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
          <Text style={{ flex: 1 }}>Nivel: 3</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>

        {/* Resto de las opciones con la misma estructura */}

        <TouchableOpacity>
        <Text style={{ marginLeft: 10 }}>compras</Text>
             <Ionicons name="chevron-forward" size={24} color="gray" />
  
        </TouchableOpacity>
        <TouchableOpacity style={styles.desplegables}>
          <View >
            <Ionicons name="globe" size={24} color="gray" />
            <Text style={{ marginLeft: 10 }}>Español (Latinoamérica)</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>

        {/* Opción con ícono de carrito y usuario */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
          <TouchableOpacity>
            <Ionicons name="cart" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="person" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    backgroundColor: '#D2B48C',
    marginBottom:400,//con 400 hace un poquito de scroll para abajo, permite explayarse
  },
  Text_mayusculas:{
    marginTop:200,
    fontSize: 24, 
    fontWeight: 'bold' 
  },
Text_normal:{
  fontSize:18,
   fontWeight:'bold', 
},
desplegables:{
  flexDirection: 'row',
   alignItems: 'center', 
   padding: 15, 
},
  
});



// export default Usuarios;