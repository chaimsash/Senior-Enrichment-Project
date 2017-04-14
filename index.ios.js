/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import { Nav } from './app/navigation'
import store from './app/store';


class firstApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('firstApp', () => firstApp);
