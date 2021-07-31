import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CheckLoad from '../screens/CheckLoad';
import Description from '../screens/Description';
import Home from '../screens/Home';
import Landing from '../screens/Landing';

class Stack extends Component {
  render() {
    return <AppContainer />;
  }
}

export default Stack;

const AppStackNavigator = createStackNavigator(
  {
    CheckLoad: {
      screen: CheckLoad,
      navigationOptions: {
        headerShown: false,
      },
    },
    Landing: {
      screen: Landing,
      navigationOptions: {
        headerShown: false,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Search Anime Movies or Series',
        headerLeft: () => {
          return null;
        },
        headerStyle: {
          backgroundColor: '#800000',
        },
        headerTintColor: '#fff',
      },
    },
    Description: {
      screen: Description,
      navigationOptions: {
        headerTitle: 'Search Result',
        headerStyle: {
          backgroundColor: '#800000',
        },
        headerTintColor: '#fff',
      },
    },
  },
  {
    initialRouteName: 'CheckLoad',
  },
);

const AppContainer = createAppContainer(AppStackNavigator);
