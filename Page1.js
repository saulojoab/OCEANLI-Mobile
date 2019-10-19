'use strict';
import React, { PureComponent } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class ExampleApp extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
            <RNCamera
            ref={ref => {
                this.camera = ref;
            }}
            style={styles.preview}
            flashMode={RNCamera.Constants.FlashMode.off}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
                console.log(barcodes);
            }}
            />
        <View style={{width: Dimensions.get('screen').width, height: Dimensions.get('screen').height ,backgroundColor: 'rgba(0,0,0,0.1)',position: 'absolute',top: 0, right: 0, left: 0, bottom: 0}}></View>
        <View style={{ flex: 0, bottom: 0, left: 0, right:0, position: 'absolute', flexDirection: 'row', justifyContent: 'center' }}>
          <View style={styles.outerBt}>
              <View style={styles.space}>
                <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                    <View style={styles.space_1}>
                    </View>
                 </TouchableOpacity>
              </View>
          </View>
        </View>
      </View>
    );
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  outerBt: {
    backgroundColor: 'white',
    borderRadius: 100,
    height: 70,
    width: 70,
    marginBottom: 10
  },
  space: {
    left: 7.5,
    marginTop: 7.5,
    borderRadius: 100,
    height: 55,
    width: 55,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  space_1: {
    borderBottomEndRadius: 85,
    height:8,
    width:8

  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: Dimensions.get('screen').width, 
    height: Dimensions.get('screen').height 
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 20,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    bottom: 0
  },
});
