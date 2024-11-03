import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
//import {Picker} from '@react-native-picker/picker';
import { CurrentRenderContext } from '@react-navigation/native';
export default function Product() { 
  //cambié el nombre de la función: App=> Product

  const [selectedSize, setSelectedSize] = React.useState("S");

  return (
    <View style={styles.container}>
      <Image 
        source={{uri: '../assets/candyconjunto.jpg'}} 
        style={styles.productImage} 
      />
      <Text style={styles.seasonText}>Nueva temporada</Text>
      <Text style={styles.brandText}>Esteban Pizzino</Text>
      <Text style={styles.productTitle}>Conjunto aros + alianzas Candy</Text>
      <Text style={styles.priceText}>$12,600 (iva incluido)</Text>
      <Picker
        selectedValue={selectedSize}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedSize(itemValue)}>
        <Picker.Item label="S" value="S" />
        <Picker.Item label="M" value="M" />
        <Picker.Item label="L" value="L" />
      </Picker>
      <Button
        title="Agregar al carrito"
        onPress={() => alert('Producto agregado al carrito')}
      />
      <Text style={styles.deliveryText}>Entrega estimada: el día que llegue el camión</Text>
      <View style={styles.iconContainer}>
        <Text>🛒</Text>
        <Text>Vicino</Text>
        <Text>👤</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    padding: 20,
    backgroundColor: '#e2caad',
  },
  productImage: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
  },
  seasonText: {
    marginTop: 10,
    fontSize: 16,
    color: '#888',
  },
  brandText: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  productTitle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceText: {
    marginTop: 5,
    fontSize: 18,
    color: '#333',
  },
  picker: {
    borderRadius: 10,
    height: 50,
    width: 150,
    marginTop: 15,
  },
  deliveryText: {
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  }
});