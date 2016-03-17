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
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([
        { Name: 'Dummy Category A', CountDiscussions: 123 },
        { Name: 'Dummy Category B', CountDiscussions: 0 },
        { Name: 'Dummy Category C', CountDiscussions: 99 },
        { Name: 'Dummy Category D', CountDiscussions: 99 },
        { Name: 'Dummy Category E', CountDiscussions: 99 },
        { Name: 'Dummy Category F', CountDiscussions: 99 },
        { Name: 'Dummy Category G', CountDiscussions: 99 },
        { Name: 'Dummy Category H', CountDiscussions: 99 },
        { Name: 'Dummy Category I', CountDiscussions: 99 },
        { Name: 'Dummy Category J', CountDiscussions: 99 },
        { Name: 'Dummy Category K', CountDiscussions: 99 },
        { Name: 'Dummy Category L', CountDiscussions: 99 },
        { Name: 'Dummy Category M', CountDiscussions: 99 },
        { Name: 'Dummy Category N', CountDiscussions: 99 },
        { Name: 'Dummy Category O', CountDiscussions: 99 },
      ]),
      loading: true, // TODO: propagate to parent scene
    });
    Client.categoryList(this._onResponse.bind(this));
  }

  _onResponse(data) {
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

