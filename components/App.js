/**
 * App.js
 */

'use strict';

import React, {
  Component,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const style = require('../style.js')

const CategoryList = require('./CategoryList');

class App extends Component {
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
        { title: 'Thing1', count: 123 },
        { title: 'Thing2', count: 0 },
        { title: 'Thing3', count: 99 },
      ])
    })
  }

  render() {
    return (
      <View style={style.container}>
        <CategoryList
          dataSource={this.state.dataSource}
        />
      </View>
    );
  }
}

module.exports = App;

