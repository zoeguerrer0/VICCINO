import React, { useContext, useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, FlatList } from 'react-native';
import DataContext from './DataContext';

const ModalComponent = () => {
  const { cart, setCart0, buyProducts } = useContext(DataContext);
  const [modalVisible, setModalVisible] = useState(false);

  // total de la compra
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Incremento en los productos
  const handleBuyPress = (product) => {
    buyProducts(product);
  };

  // Disminución de la cantidad de un producto
  const handleDreasePress = (product) => {
    const productRepeat = cart.find((item) => item.id === product.id);

    if (productRepeat.quantity !== 1) {
      setCart0(
        cart.map((item) =>
          item.id === product.id ? { ...product, quantity: productRepeat.quantity - 1 } : item
        )
      );
    }
  };

  // Eliminación de un producto del carrito
  const handleDeletePress = (product) => {
    setCart0(cart.filter((item) => item.id !== product.id));
  };

  return (
    <View>
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.carritoIcon}>🛒</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.closeIcon}>❌</Text>
            </Pressable>
            <Text style={styles.modalText}>Productos:</Text>
            <FlatList
              data={cart}
              renderItem={({ item }) => (
                <View style={styles.cartItem}>
                  <Text style={styles.modalTextProduct}>{item.productName}</Text>
                  <View style={styles.quantityContainer}>
                    <Pressable onPress={() => handleDreasePress(item)}>
                      <Text>➖</Text>
                    </Pressable>
                    <Text style={styles.modalTextProduct}>{item.quantity}</Text>
                    <Pressable onPress={() => handleBuyPress(item)}>
                      <Text>➕</Text>
                    </Pressable>
                  </View>
                  <Text style={styles.modalTextProduct}>
                    Total: ${item.quantity * item.price}
                    <Pressable onPress={() => handleDeletePress(item)}>
                      <Text>❌</Text>
                    </Pressable>
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
            <Text style={styles.totalText}>Total de la compra: ${total}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 40,
    marginBottom: 100,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  buttonClose: {
    backgroundColor: "#0011",
  },
  closeIcon: {
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 22,
    fontWeight: "bold",
  },
  modalButton: {
    position: "absolute",
    bottom: 30,
    left: 150,
    backgroundColor: "#111111",
    padding: 20,
    borderRadius: 30,
  },
  carritoIcon: {
    fontSize: 30,
  },
  cartItem: {
    marginBottom: 10,
  },
  modalTextProduct: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  totalText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ModalComponent;
