import React from 'react';
import {View, ActivityIndicator, Dimensions, Text} from 'react-native';

export default function Loading(){
    return (
        <View style={{
            width: Dimensions.get('screen').width, 
            height: Dimensions.get('screen').height,
            position: 'absolute',
            backgroundColor: "rgba(115,132,143,0.2)",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <Text style={{color: 'white', fontSize: 18}}>Enviando imagem, aguarde...</Text>
            <ActivityIndicator color="white" size={60}/>
        </View>
    )
}