import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/Login';
import Home from './src/Home';
import cameraView from './src/CameraView';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CameraView"
            component={cameraView}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
