import React from 'react';
import { Text, View, Flatlist, Image, StyleSheet } from "react-native";

const Products = () => {
    const productos = [
        {
            id: 1,
            productName: "Conjunto aros + alianzas Candy",
            price: 12.600,
            img: '../../assets/candyconjunto.jpg'

        },
        {
            id: 3,
            productName: "Reloj Sideris",
            price: 23.000,
            img:"../../assets/Relojsideris.jpg"

        },
        {
            id: 4,
            productName: "Vestido Eternal Shine",
            price: 500.000,
            img: "../../assets/VestidoBright.jpg"

        },
        {
            id: 5,
            productName: "Conjunto Eco Andino",
            price: 14.300,
            img:"../../assets/Conjuntoeco.jpg"

        },
        {
            id: 6,
            productName: "Zapatos Evil",
            price: 5.600,
            img: "../../assets/Tacones.jpg"

        },




    ];
    return(
        <View style={styles.container}>
            <Text style={styles.hedader}>VICINO</Text>
            <FlatList
            data={productos}
            renderItem={({ item }) => (
                <View style={styles.productItem}>
                    <Image source = {{uri: item.img}} style={styles.productImage}/>
                    <Text style={styles.productName}>{item.productName}
                    </Text>
                    <Text style={styles.productPrice}> $ {item.price} 
                    </Text>
                </View>
    )}
            keyExtractor={(item) => item.id}
            />
        </View>

    )
    
    ;
};

export default Products;