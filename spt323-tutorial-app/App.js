import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './Navigation/HomeScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});

export default class App extends React.Component {
  render()
  {
    return ( <AppNavigator/>);
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
