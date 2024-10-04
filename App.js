import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Navegacion from './navegacion.js';
import Usuario from './screens/usuario.js';
import producto from "./componentes.js/producto.js";
import ModalComponent from './componentes.js/ComponenteModal.js';
export default function App () {  

    return(
       <View>
            <producto/>
            <ModalComponent/>
       </View>
    
    );
};



