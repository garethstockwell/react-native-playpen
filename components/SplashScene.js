/**
 * SplashScene.js
 */

'use strict';

import React, {
  Text,
  View,
} from 'react-native';

const style = require('../style.js')

const Scene = require('./Scene');

class SplashScene extends Scene {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'CategoryListScene',
        title: 'Home',
      });
    }, 1000);
  }

  renderScene(route, navigator) {
    return (
      <View style={style.container}>
        <Text>ReactNativePlaypen (splash screen)</Text>
      </View>
    );
  }
}

module.exports = SplashScene;

