import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Ranking extends Component {
  render() {
    return (
      <View style={styles.cont}>
        <Image source={require('./img/rank.png')} style={styles.image}></Image>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: '#436cce'
  },
  image: {
    flex: 1,
    width: null,
    height: null,
     
    resizeMode: 'contain'
}
});