import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';

class CameraView extends Component {
  constructor(props) {
    super(props);
    this.navigation;
    this.state = {time: new Date().toLocaleString()};
  }
  Record = async () => {
    if (this.camera) {
      const options = {maxDuration: 5};
      const data = await this.camera.recordAsync(options);
      console.log(data.uri);

      CameraRoll.saveToCameraRoll(data.uri);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.cameraView}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
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
        />
        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={styles.buttonHome}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonRecord}
            onPress={
              this.state.isRecording
                ? this.stopRecording()
                : this.Record.bind(this)
            }>
            <Text style={styles.buttonText}>Record</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CameraView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#66616f',
  },
  containerButtons: {
    flex: 0,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth: 10,
    borderStyle: 'solid',
    borderColor: 'grey',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonHome: {
    width: 100,
    borderRadius: 25,
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  buttonRecord: {
    width: 200,
    borderRadius: 25,
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  cameraView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
