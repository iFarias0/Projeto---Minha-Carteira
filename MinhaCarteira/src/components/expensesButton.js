import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


export default function ExpensesButton({ texto, onPress }){
    return <TouchableOpacity style={styles.expensesButton} onPress={onPress}>
        <Text style={styles.textoExpensesButton}>{ texto }</Text>

    </TouchableOpacity>
};

const styles=StyleSheet.create({
    expensesButton:{
        backgroundColor: "#401801",
        width:  '70%',
        paddingVertical: 10,
        borderRadius: 10,
        bottom:'-5%',
        position: 'relative',
    },
    textoExpensesButton:{
        textAlign: "center",
        color: "#ffffff",
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "bold",
    },
});