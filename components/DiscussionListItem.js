/**
 * DiscussionListItem.js
 */

'use strict';

import React, {
  Component,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const style = require('../style.js')

class DiscussionListItem extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={style.li}>
          <Text style={style.liText}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = DiscussionListItem;

