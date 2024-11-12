import React, { useContext } from 'react';
import { StyleSheet, View, Text, StatusBar, Pressable, FlatList } from 'react-native';
import {DataContext} from './DataContext';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Product = () => {
  const { buyProducts } = useContext(DataContext);
  const productos = [
    {
      id: '1',
      productName: 'First Item',
      price: '30',
    },
    {
      id: '2',
      productName: 'algo',
      price: '30',
    },
    {
      id: '3',
      productName: "Bananita",
      price: '30',
    },
  ];

  const handleBuyPress = (product) => {
    buyProducts(product); // cuando se presiona este botón se ejecuta buyProduct
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Vicino</Text>
        <FlatList
          data={productos}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Text style={styles.productName}>{item.productName}</Text>
              <Text style={styles.productPrice}> Precio: {item.price} $</Text>
              <Pressable style={styles.buyButton} onPress={() => handleBuyPress(item)}>
                <Text style={styles.buyButtonText}>comprar</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
  productItem: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#333',
  },
  buyButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Product;
