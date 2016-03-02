/**
 * CategoryList
 */

'use strict';

import React, {
  Component,
  ListView,
  Text,
  View,
} from 'react-native';

import Client from '../Client/Client';

const Styles = require('../Styles')

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
    console.log('LOADING');
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([
        { Name: 'Category1', CountDiscussions: 123 },
        { Name: 'Category2', CountDiscussions: 0 },
        { Name: 'Category3', CountDiscussions: 99 },
        { Name: 'Category4', CountDiscussions: 99 },
        { Name: 'Category5', CountDiscussions: 99 },
        { Name: 'Category6', CountDiscussions: 99 },
        { Name: 'Category7', CountDiscussions: 99 },
        { Name: 'Category8', CountDiscussions: 99 },
        { Name: 'Category9', CountDiscussions: 99 },
        { Name: 'Category10', CountDiscussions: 99 },
        { Name: 'Category11', CountDiscussions: 99 },
        { Name: 'Category12', CountDiscussions: 99 },
        { Name: 'Category13', CountDiscussions: 99 },
        { Name: 'Category14', CountDiscussions: 99 },
        { Name: 'Category15', CountDiscussions: 99 },
      ]),
      loading: true, // TODO: propagate to parent scene
    })
    Client.categoryList(this._onResponse);
  }

  _onResponse(data) {
    console.log('LOADED');
    // TODO: data view is not updating
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data),
      loading: false
    });
  }

  _renderItem(item) {
    return (
      <CategoryListItem
        item={item}
        onPress={(Name) => this.props.onPress(Name)}
      />
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={Styles.listview}
          onScroll={this.props.onScroll}
        />
      </View>
    );
  }
}

module.exports = CategoryList;

