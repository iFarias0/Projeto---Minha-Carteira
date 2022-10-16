import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


export default function IncomesButton({ texto, onPress }){
    return <TouchableOpacity style={styles.incomesButton} onPress={onPress}>
        <Text style={styles.textoIncomesButton}>{ texto }</Text>

    </TouchableOpacity>
};

const styles=StyleSheet.create({
    incomesButton:{
        backgroundColor: "#401801",
        width:  '70%',
        paddingVertical: 10,
        borderRadius: 10,
        bottom:'-5%',
        position: 'relative',
    },
    textoIncomesButton:{
        textAlign: "center",
        color: "#ffffff",
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "bold",
    },
});