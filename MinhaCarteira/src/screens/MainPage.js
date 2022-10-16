import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MenuButton from '../components/menuButton.js';
import Wallet from '../images/Wallet.png';


export default function MainPage(){
    return(
        <View style={styles.container}>
            <Image source={Wallet} style={styles.wallet}/>
            <Text style={styles.header} >Visão Geral</Text>
            <View style={styles.icon}>
                <MenuButton />
            </View>
        </View>
    )

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
    header:{
        fontSize: 30,
        color: 'white',
        top: '-42%',
    },
    icon: {
        top: '-47%',
        right: '-38%'
    }
  });
  