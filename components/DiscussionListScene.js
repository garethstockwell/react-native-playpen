/**
 * DiscussionListScene.js
 */

'use strict';

import React, {
  Component,
  View
} from 'react-native';

const style = require('../style.js')

const DiscussionList = require('./DiscussionList');

class DiscussionListScene extends Component {
  render() {
    return (
      <View style={style.container}>
        <DiscussionList
          name={this.props.name}
        />
      </View>
    );
  }
}

module.exports = DiscussionListScene;

