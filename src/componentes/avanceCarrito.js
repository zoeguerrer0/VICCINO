import React, { useContext } from 'react';
import { StyleSheet, View, Text, StatusBar,Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DataContext from './DataContext';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
const Product=()=>{
  const {buyProducts} = useContext(DataContext);
  const productos = [
    {
      id: '1',
      productName: 'First Item',
      price: '30',
    },
    {
     id:2,
     productname:'algo',
     price:'30'
    },
    {
      id: 3,
      productName: "Bananita",
      price: 30,
    },
  ];

  
  const handleBuyPress=(Product)=>{
    buyProducts(Product);//cuando se presiona este boton se ejecuta buyProduct
  }


  return(
    <View style={styles.container}>
        <Text style={styles.header}>Ecommerce App</Text>
        <FlatList
            data={productos}
             renderItem={({ item }) => (
        <View style={styles.productItem}>
          <Image source={{ uri: item.img }} style={styles.productImage} />
          <Text style={styles.productName}>{item.productName}</Text>
          <Text style={styles.productPrice}> Precio: {item.price} $</Text>
          <Pressable style={styles.buyButton} onPress={() => handleBuyPress(item)}> 
            <Text style={styles.buyButtonText}>comprar</Text>
          </Pressable>
         </View>
            )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const PruebaProd = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Product}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

});


export default PruebaProd;