import CameraView from './CameraView';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

class Home extends Component {
  constructor(props) {
    super(props);
    this.navigation;

    this.state = {
      showCamera: false,
    };
  }

  showCamera = () => this.setState({showCamera: true});
  hideCamera = () => this.setState({showCamera: false});

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login Page</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('CameraView')}>
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity>
        </View>
        <ScrollView></ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#66616f',
  },
  containerButtons: {
    marginTop: 50,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderColor: 'grey',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  button: {
    width: 150,
    borderRadius: 25,
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

/*<Button
            style={styles.button}
            onPress={this.state.showCamera ? this.hideCamera : this.showCamera}
            title={
              this.state.showCamera
                ? 'Click me to hide the camera!'
                : 'Click me to show the camera!'
            }
            color="#841584"
          />

               {this.state.showCamera && <CameraView />}*/
