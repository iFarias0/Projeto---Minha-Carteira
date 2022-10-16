import React, { useState } from 'react';
import { StyleSheet, View, Image, Pressable, Modal } from 'react-native';
import { Input, Text } from 'react-native-elements';
import LoginButton from '../components/loginButton';
import SignupButton from '../components/signupButton';
import Wallet from '../images/Wallet.png';
import { CommonActions } from '@react-navigation/native';

export default function Login({navigation}) {

  const [email,setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);

  const register = () => {
  navigation.dispatch(
    CommonActions.navigate({
      index: 1,
      name: 'Signup'
    })
  )}

  const enterie = ()=> {
  
    if (email == 'admin' & password =='admin'){
      navigation.reset({
          index: 0,
          routes: [{name:"MainPage"}],
      })
    } else{
      setModalVisible(true)
    }
  };

  return (
      <View style={styles.container}>
        <Image source={Wallet} style={styles.wallet}/>
      <Input 
        placeholder="E-mail"
        leftIcon={{ type: 'font-awsome', name: 'email'}}
        onChangeText={value => setEmail(value.toLowerCase())}
        keyboardType="email-address"
      />
      <Input
        placeholder="Sua senha"
        leftIcon={{ type: 'font-awsome', name: 'lock'}}
        onChangeText={value => setPassword(value.toLowerCase())}
        secureTextEntry={true}
        />
      <LoginButton texto={'Entrar'} onPress={enterie} />
      <Text style={styles.texto}>Não possui conta?</Text>
      <SignupButton texto={'Cadastre-se'} onPress={register} />

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
            <Text style={styles.modalText}>Usuário ou Senha inválido!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     
    </View>
    
        
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#01402E',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto:{
        fontSize:16,
        color: '#ffffff',
        marginTop:50,
        bottom: '-5%',
        position: 'relative',
    },
    wallet:{
        width:'100%',
        height:'60%',
        position:'absolute',
        top: '5%',
    },
    inputStyle:{
        backgroundColor: '#ffffff',
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: "#401801",
      paddingHorizontal:50
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      fontWeight: 'bold',
      textAlign: "center",
    }
  });
  