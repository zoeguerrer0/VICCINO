import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View >
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.carritoIcon}>🛒</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
             <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <Text style={styles.modalText}>Hello World!</Text>
           
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
    padding:35,
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
    backgroundColor:"#111111",
  },
  textStyle:{
    fontWeight:"bold",
    textAlign:"center",
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
    padding:10,
    borderRadius:30,
  },
  carritoIcon:{
    fontSize:20,
  },
})

export default ModalComponent;