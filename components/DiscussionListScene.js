/**
 * DiscussionListScene.js
 */

'use strict';

import React, {
  View
} from 'react-native';

const style = require('../style.js')

const DiscussionList = require('./DiscussionList');
const Scene = require('./Scene');

class DiscussionListScene extends Scene {
  _onPressDiscussion(discussionTitle) {
    this.props.navigator.push({
      id: 'DiscussionScene',
      title: discussionTitle,
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

module.exports = DiscussionListScene;

