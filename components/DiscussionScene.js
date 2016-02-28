/**
 * DiscussionScene.js
 */

'use strict';

import React, {
  Text,
  View,
} from 'react-native';

const style = require('../style.js')

const Scene = require('./Scene');

class DiscussionScene extends Scene {
  renderScene(route, navigator) {
    return (
      <View style={style.container}>
        <Text>TODO</Text>
      </View>
    );
  }
}

module.exports = DiscussionScene;

