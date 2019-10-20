import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper'

import CameraView from './cameraview';
import Profile from './profile';


const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
  },
  slide: {
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
 
export default function Slider() {
  const [selected, setSelected] = useState(1)

  return(
    <Swiper paginationStyle={{bottom: undefined, left: 0, top: 0, right: 0, padding: 45}} 
    loop={false}
    index={1}
    dot={<View style={{backgroundColor:'#a0b5e7', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}   
    activeDot={<View style={{backgroundColor: 'white', width: 10, height: 10, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
    style={styles.slideContainer}>
        <View style={styles.slide}>
          <Text>a</Text>
        </View>
        <View style={styles.slide}>
          <CameraView/>
        </View>
        <View style={styles.slide}>
          <Profile/>
        </View>
      </Swiper>
  )
}
 