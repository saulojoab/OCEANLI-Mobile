import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View, Text} from 'react-native';
import { useState } from 'react';

export default function Dots(props){
    return(
        <View style={{display: 'flex', flexDirection: 'row', right: 0, left: 0}}>
            <Text style={{color: props.selected === 0 ? 'white' : '#a1b6e7', margin: 5}}>
                <FontAwesome5 solid name="circle"/>
            </Text>         
            <Text style={{color: props.selected === 1 ? 'white' : '#a1b6e7', margin: 5}}>
                <FontAwesome5 solid name="circle"/>
            </Text>  
            <Text style={{color: props.selected === 2 ? 'white' : '#a1b6e7', margin: 5}}>
                <FontAwesome5 solid name="circle"/>
            </Text>
        </View>
    )
}