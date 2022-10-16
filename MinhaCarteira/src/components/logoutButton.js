import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';


export default function Logout(){

    return (
        <Pressable onPress={() => {}}>
            <Icon 
            name='logout'
            color='#401801'
            size={40}
            />
        </Pressable>
    )
}

