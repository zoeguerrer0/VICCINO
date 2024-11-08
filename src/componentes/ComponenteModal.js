import React, {useContext, useState} from 'react';
import { Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import DataContext from './DataContext';

const ModalComponent = () => {
  const {cart,setCart0,buyProducts} =useContext (DataContext);
  const [modalVisible, setModalVisible] = useState(false);

//funcion que calcula el total de la compra
const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//incremento de la compra
const handleBuyPress= (product)=>{
  buyProducts(product);
};

//baja de un producto 
const handleDreasePress=(product)=>{
  const productRepeat=cart.find((item) => item.id === product.id);


  productRepeat.quantity !==1 &&
    setCart0(cart.map((item)=>(item.id === product.id ? {...product,quantity:productRepeat.quantity-1}:item)));

  };
  //delete
  const handleDeletePress=(product)=>{
    setCart0(cart.filter((item) => item.id !== product.id));

  };
buyProducts

  return (
    <View>
      <Pressable
        style={[styles.button, styles.buttonOpen]}  onPress={() => setModalVisible(true)}>
        <Text style={styles.carritoIcon}>🛒</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
             <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.closeIcon}>❌</Text>
            </Pressable>
            <Text style={styles.modalText}>productos:</Text>
            <FlatList 
              data={cart}
              renderItem={({ item }) => (
                <View style={styles.cartItem}>
                  <Text style={styles.modalTextProduct}>{item.productName}</Text>

                  <Text style={styles.modalTextProduct}>
                    <Pressable onPress={() => handleDreasePress(item)}>
                      <Text>➖</Text>
                    </Pressable>

                    <Text style={styles.modalTextProduct}>{item.quanty}</Text>

                    <Pressable onPress={() => handleBuyPress(item)}>
                      <Text>➕</Text>
                    </Pressable>
                  </Text>

                  <Text style={styles.modalTextProduct}>
                    Total: ${item.quanty * item.price}
                    <Pressable onPress={() => handleDeletePress(item)}>
                      <Text>❌</Text>
                    </Pressable>
                  </Text>
                </View>
              )}
                keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </Modal>
      
    </View>
  );
};

const styles= StyleSheet.create({
  centeredView:{
    flex: 1,
    justifyContent:"flex-end",
    alignItems:"center",
    marginTop:22,
  },
  modalView: {
    backgroundColor:"white",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding:40,
    marginBottom:100,
    alignItems:"center",
    shadowColor:"#000",
    ShadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5,
    width:"100",
  },
  buttonClose:{
    backgroundColor:"#0011",
  }, 
  closeIcon:{
    fontSize:20,
  },
  modalText:{
    marginBottom:15,
    fontSize:22,
    fontWeight:"bold",
  },
  modalButton:{
    position:"fixed",
    bottom:30,
    left:150,
    backgroundColor:"#111111",
    padding:20,
    borderRadius:30,
  },
  carritoIcon:{
    fontSize:30,
  },
})

export default ModalComponent;