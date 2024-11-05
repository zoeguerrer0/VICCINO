import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
 
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
const productoss=()=>{

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];
/*return (
  <View>
    <Text>Productos</Text>
    <FlatList
    data={
    DATA
    } 
    />
  </View>
)*/
}

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const pruebaProd = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
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


export default pruebaProd;