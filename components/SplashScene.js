/**
 * SplashScene.js
 */

'use strict';

import React, {
  Component,
  Text,
  View
} from 'react-native';

const style = require('../style.js')

class SplashScene extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'CategoryListScene',
        title: 'Home',
      });
    }, 1000);
  }

  render() {
    return (
      <View style={style.container}>
        <Text>ReactNativePlaypen (splash screen)</Text>
      </View>
    );
  }
}

module.exports = SplashScene;

