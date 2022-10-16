import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import ExpensesButton from "./expensesButton";
import GeneralButton from "./generalButton";
import IncomesButton from "./incomesButton";
import Logout from "./logoutButton";

const MenuButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
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
            <View style={styles.logoutButton}>
            <Logout/>
            </View>
            <Pressable
              style={[styles.buttonClo, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
              
            </Pressable>
          </View>
          <View style={styles.pages}>
                <GeneralButton texto={"Visão Geral"}/>
                <IncomesButton texto={"Ganhos"}/>
                <ExpensesButton texto={"Despesas"}/>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Menu</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#055941",
    borderRadius: 20,
    height: '75%',
    width: '70%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    right: '-1%',
    top: '4%',
    position: "absolute",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
},
    buttonClo: {
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 4,
    elevation: 2,
    top: '3%',
    right: '5%',
    position: "absolute",
    },
  buttonOpen: {
    backgroundColor: "#401801",
  },
  buttonClose: {
    backgroundColor: "#401801",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  logoutButton:{
    position: "absolute",
    bottom: '3%',
    right: '5%',
  },
  pages:{
    width: '50%',
    position: "absolute",
    left: '35%',
    padding: '-76%',
  }

});

export default MenuButton;