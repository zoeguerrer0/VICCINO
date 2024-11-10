import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const Productos = [
    {
        id: 1,
        productName: "Conjundo Candy",
        price: 1000,
        img: require("../../../assets/candyconjunto.jpg") // Ruta correcta para imágenes locales
    },
    {
        id: 2,
        productName: "Conjunto Eco Andino",
        price: 1500,
        img: require("../../../assets/Conjuntoeco.jpg") // Ruta correcta para imágenes locales
    },
    {
        id: 3,
        productName: "Tacones Devil",
        price: 2000,
        img: require("../../../assets/Tacones.jpg") // Ruta correcta para imágenes locales
    },
    {
        id: 4,
        productName: "Vestido Bright",
        price: 2500,
        img: require("../../../assets/VestidoBright.jpg") // Ruta correcta para imágenes locales
    },
    {
        id: 5,
        productName: "Reloj Sideris",
        price: 20500,
        img: require("../../../assets/Relojsideris.jpg") 
        
    },
    {
        id: 6,
        productName: "Alianzas Glass",
        price: 20500,
        img: require("../../../assets/alianzasGlass.png") 
        
    },
    {
        id: 7,
        productName: "Anillo Penny",
        price: 20500,
        img: require("../../../assets/anilloPenny.png") 
        
    },
    {
        id: 8,
        productName: "Aros Tiana",
        price: 20500,
        img: require("../../../assets/arosTiana.png") 
        
    }
    
    // Agrega más productos según sea necesario
];

const Products = () => {
    return (
    <View style={styles.container}> 
            <FlatList
                data={Productos}
                renderItem={({ item }) => (
                    <View style={styles.productItem}>
                        <Image source={item.img} style={styles.productImage} />
                        <Text style={styles.productName}>{item.productName}</Text>
                        <Text style={styles.productPrice}>$ {item.price}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} // Cambia este número para ajustar el número de columnas
                columnWrapperStyle={styles.row} // Estilo para las filas
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9c2a7', 
    },

    productItem: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 80,
        paddingTop: 2,
        alignItems: 'center',
        elevation: 3, // Sombra en Android
        shadowColor: '#000', // Sombra en iOS
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    productImage: {
        width: '90%',
        height: 120,
        resizeMode: 'contain',
    },
    productName: {
        marginTop: 10,
        fontWeight: 'bold',
    },
    productPrice: {
        color: 'green',
    },
    row: {
        justifyContent: 'space-between',
    },
});

export default Products;