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
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([
        { name: 'Category1', count: 123 },
        { name: 'Category2', count: 0 },
        { name: 'Category3', count: 99 },
      ])
    })
  }

  _renderItem(item) {
    return (
      <CategoryListItem
        item={item}
        onPress={(name) => this.props.onPress(name)}
      />
    );
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.welcome}>
          Categories
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={style.listview}
        />
      </View>
    );
  }
}

module.exports = CategoryList;

