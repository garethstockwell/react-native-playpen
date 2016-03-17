/**
 * SceneSplash
 */

'use strict';

import React, {
  Component,
  Navigator,
  Text,
  View,
} from 'react-native';

const Styles = require('../Styles')

class SceneSplash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'loading'
    };
  }

  render() {
    return (
      <View style={Styles.splash}>
        <Text style={Styles.splashText}>
          The Fretboard ({this.state.text})
        </Text>
      </View>
    );
  }
}

module.exports = SceneSplash;

