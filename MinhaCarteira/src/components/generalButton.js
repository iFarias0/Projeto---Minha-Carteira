import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


export default function GeneralButton({ texto, onPress }){
    return <TouchableOpacity style={styles.generalButton} onPress={onPress}>
        <Text style={styles.textoGeneralButton}>{ texto }</Text>

    </TouchableOpacity>
};

const styles=StyleSheet.create({
    generalButton:{
        backgroundColor: "#401801",
        width:  '70%',
        paddingVertical: 10,
        borderRadius: 10,
        bottom:'-5%',
        position: 'relative',
    },
    textoGeneralButton:{
        textAlign: "center",
        color: "#ffffff",
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "bold",
    },
});