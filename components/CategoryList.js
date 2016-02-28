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
        { title: 'Category1', count: 123 },
        { title: 'Category2', count: 0 },
        { title: 'Category3', count: 99 },
        { title: 'Category4', count: 99 },
        { title: 'Category5', count: 99 },
        { title: 'Category6', count: 99 },
        { title: 'Category7', count: 99 },
        { title: 'Category8', count: 99 },
        { title: 'Category9', count: 99 },
        { title: 'Category10', count: 99 },
        { title: 'Category11', count: 99 },
        { title: 'Category12', count: 99 },
        { title: 'Category13', count: 99 },
        { title: 'Category14', count: 99 },
        { title: 'Category15', count: 99 },
      ])
    })
  }

  _renderItem(item) {
    return (
      <CategoryListItem
        item={item}
        onPress={(title) => this.props.onPress(title)}
      />
    );
  }

  render() {
    return (
      <View style={style.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={style.listview}
          onScroll={this.props.onScroll}
        />
      </View>
    );
  }
}

module.exports = CategoryList;

