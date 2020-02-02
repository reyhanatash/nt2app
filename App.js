import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/helper';

import AppNavigator from './src/routers/AppNavigator';
import NavigationService from './src/routers/NavigationService';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    // global.url = 'http://192.168.1.46:3100/';
    global.url = 'http://192.168.1.33:3100/';
    // global.url = 'http://94.101.128.11:3100/';
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
