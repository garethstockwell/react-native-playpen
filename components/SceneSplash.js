/**
 * SceneSplash.js
 */

'use strict';

import React, {
  Component,
  Navigator,
  Text,
  View,
} from 'react-native';

const style = require('../style.js')

class SceneSplash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'loading'
    };
  }

  render() {
    return (
      <View style={style.splash}>
        <Text style={style.splashText}>
          ReactNativePlaypen ({this.state.text})
        </Text>
      </View>
    );
  }
}

module.exports = SceneSplash;

