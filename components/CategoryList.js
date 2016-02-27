/**
 * CategoryList.js
 */

'use strict';

import React, {
  Component,
  ListView,
  Text,
  View,
} from 'react-native';

const style = require('../style.js')

const CategoryListItem = require('./CategoryListItem');

class CategoryList extends React.Component {
  _renderItem(item) {
    return (
      <CategoryListItem item={item} onpress={() => {}} />
    );
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.welcome}>
          Categories
        </Text>
        <ListView
          dataSource={this.props.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={style.listview}
        />
      </View>
    );
  }
}

module.exports = CategoryList;

