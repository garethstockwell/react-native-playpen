/**
 * SceneCategory.js
 */

'use strict';

import React, {
  View,
} from 'react-native';

const style = require('../style.js')

const DiscussionList = require('./DiscussionList');
const Scene = require('./Scene');

class SceneCategory extends Scene {
  _onPressDiscussion(discussionTitle) {
    this.props.navigator.push({
      id: 'SceneDiscussion',
      title: 'Discussion',
    })
  }

  renderScene(route, navigator) {
    return (
      <View style={style.container}>
        <DiscussionList
          onPress={(title) => this._onPressDiscussion(title)}
        />
      </View>
    );
  }
}

module.exports = SceneCategory;

