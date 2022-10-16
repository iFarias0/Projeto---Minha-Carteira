import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Input, Text } from 'react-native-elements';
import userService from '../../services/userService';
import LoginButton from '../components/loginButton';
import Wallet from '../images/Wallet.png';

export default function Signup({navigation}) {

  const [email,setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPass,setConfirm] = useState(null)
  const [nickname, setNickname] = useState(null)
  const [errorEmail,setErrorEmail] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)
  const [errorConfirmPass,setErrorConfirm] = useState(null)

  const check = () => {
    let error = false
    setErrorEmail(null)
    setErrorPassword(null)
    setErrorConfirm(null)

    const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if (!re.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente.")
      error = true
    }
    if (password == null || password == ''){
      setErrorPassword("Preencha sua senha corretamente.")
      error = true
    }
    if (confirmPass == null || confirmPass == ''){
      setErrorConfirm("Confirme sua senha corretamente.")
      error = true
    }
    return !error
  }

  const registerEnd = ()=> {
    if (check()){
      navigation.reset({
          index: 0,
          routes: [{name:"Login"}],
      })
      
      let data= {
        nickname: nickname,
        email: email,
        password: password,
      }

      userService.register(data)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log("Deu ruim!")
      })

    }
  };


  return (
      <View style={styles.container}>
        <Image source={Wallet} style={styles.wallet}/>
        
      <Input
        placeholder="Seu apelido"
        leftIcon={{type: 'font-awsome', name:'person'}}
        onChangeText={value => setNickname(value)}
      />
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awsome', name: 'email'}}
        onChangeText={value => {setEmail(value); setErrorEmail(null)}}
        keyboardType="email-address"
        errorMessage={errorEmail}
        />
      <Input
        placeholder="Sua senha"
        leftIcon={{ type: 'font-awsome', name: 'lock'}}
        onChangeText={value => {setPassword(value); setErrorPassword(null)}}
        secureTextEntry={true}
        errorMessage={errorPassword}
        />
      <Input
        placeholder="Cofirme sua senha"
        leftIcon={{ type: 'font-awsome', name: 'lock'}}
        onChangeText={value => {setConfirm(value); setErrorConfirm(null)}}
        secureTextEntry={true}
        errorMessage={errorConfirmPass}
      />
      <LoginButton texto={'Cadastrar'} onPress={registerEnd} />
      
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
  });
  