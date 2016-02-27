/**
 * DiscussionList.js
 */

'use strict';

import React, {
  Component,
  ListView,
  Text,
  View,
} from 'react-native';

const style = require('../style.js')

const DiscussionListItem = require('./DiscussionListItem');

class DiscussionList extends React.Component {
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
        { title: 'Discussion1' },
        { title: 'Discussion2' },
        { title: 'Discussion3' },
      ])
    })
  }

  _renderItem(item) {
    return (
      <DiscussionListItem item={item} onpress={() => {}} />
    );
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.welcome}>
          Discussions ({this.props.name})
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

module.exports = DiscussionList;

