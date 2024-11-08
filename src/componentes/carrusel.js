import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const data = [
  { title: 'Pantalla 1', content: 'Contenido de la pantalla 1' },
  { title: 'Pantalla 2', content: 'Contenido de la pantalla 2' },
  { title: 'Pantalla 3', content: 'Contenido de la pantalla 3' },
];

const renderItem = ({ item }) => (
  <View style={styles.slide}>
    <Text style={styles.title}>{item.title}</Text>
    <Text>{item.content}</Text>
  </View>
);

const Carrusel = () => {
  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Carrusel;
