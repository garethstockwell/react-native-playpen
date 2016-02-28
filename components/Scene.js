/**
 * Scene.js
 */

'use strict';

import React, {
  Component,
  Navigator,
  Text,
  View
} from 'react-native';

const style = require('../style.js')

const NavigationBar = require('./NavigationBar');

class Scene extends Component {
  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
      />
    );
  }
}

module.exports = Scene;

