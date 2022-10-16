import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


export default function loginButton({ texto, onPress }){
    return <TouchableOpacity style={styles.loginButton} onPress={onPress}>
        <Text style={styles.textoLoginButton}>{ texto }</Text>

    </TouchableOpacity>
};

const styles=StyleSheet.create({
    loginButton:{
        backgroundColor: "#401801",
        width:  '70%',
        paddingVertical: 10,
        borderRadius: 10,
        bottom:'-5%',
        position: 'relative',
    },
    textoLoginButton:{
        textAlign: "center",
        color: "#ffffff",
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "bold",
    },
});