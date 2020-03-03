import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Login extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>RaceStart</Text>
        <TextInput
          style={styles.loginBar}
          placeholder="username"
          placeholderTextColor="grey"
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput
          style={styles.loginBar}
          placeholder="password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          ref={input => (this.password = input)}
        />
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66616f',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  loginBar: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey',
    textAlign: 'center',
  },
  buttonLogin: {
    width: 300,
    borderRadius: 25,
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
