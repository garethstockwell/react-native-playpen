/**
 * CategoryListItem.js
 */

'use strict';

import React, {
  Component,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const style = require('../style.js')

class CategoryListItem extends React.Component {
  render() {
    var count = '';
    if (this.props.item.count) {
        count = ' (' + this.props.item.count + ')';
    }

    return (
      <TouchableHighlight
        onPress={() => this.props.onPress(this.props.item.title)}
      >
        <View style={style.li}>
          <Text style={style.liText}>{this.props.item.title}{count}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = CategoryListItem;

