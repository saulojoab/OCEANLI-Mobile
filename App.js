import Page1 from './Page1';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
 
import SwipeableViews from 'react-swipeable-views-native';

 
const styles = StyleSheet.create({
  slideContainer: {
    flex: 1
  },
  slide: {
    flex: 1
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
 
const MyComponent = () => (
  <SwipeableViews style={styles.slideContainer}>
    <View style={[styles.slide]}>
      <Page1>
      </Page1>
    </View>
    <View style={[styles.slide, styles.slide2]}>
      <Text style={styles.text}>
        slide n°2
      </Text>
    </View>
    <View style={[styles.slide, styles.slide3]}>
      <Text style={styles.text}>
        slide n°3
      </Text>
    </View>
  </SwipeableViews>
);
 
export default MyComponent;