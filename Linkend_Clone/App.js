import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import AppHome from './Screen/AppHome';
import Network from './Screen/Network';
import Post from './Screen/Post';
import Notification from './Screen/Notification';
import Jobs from './Screen/Jobs';
import SingUp from './Screen/SingUp';
import Login from './Screen/Login';
import TabNavigetor from './Screen/TabNavigetor';


const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
       <Stack.Navigator>
      <Stack.Screen name="SingUp" component={SingUp}  options={{
                headerShown: false}}/>
          <Stack.Screen name="Login" component={Login}  options={{
                headerShown: false}}/>       
                   <Stack.Screen name="TabNavigetor" component={TabNavigetor}  options={{
                headerShown: false}}/>   
       </Stack.Navigator>

        
      </NavigationContainer>
    );
  }
}

export default App;
