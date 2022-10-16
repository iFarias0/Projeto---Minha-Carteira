import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


export default function logupButton({ texto, onPress }){
    return <TouchableOpacity onPress={onPress}>
        <Text style={styles.textoLogupButton}>{ texto }</Text>

    </TouchableOpacity>
};

const styles=StyleSheet.create({
    textoLogupButton:{
        textAlign: "center",
        color: "#A67A53",
        fontSize: 22,
        lineHeight: 26,
        fontWeight: "bold",
        marginTop:5,
        bottom:'-120%',
    },
});