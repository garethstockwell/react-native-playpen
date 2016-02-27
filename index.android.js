/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

import React, {
  AppRegistry,
  Component,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const CategoryListItem = require('./components/CategoryListItem');

class ReactNativePlaypen extends Component {
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

  _renderItem(item) {
    return (
      <CategoryListItem item={item} onpress={() => {}} />
    );
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={style.instructions}>
          To get xxstarted, edit index.android.js
        </Text>
        <Text style={style.instructions}>
          Shake or press menu button for dev menu
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

const style = require('./style.js')

AppRegistry.registerComponent('ReactNativePlaypen', () => ReactNativePlaypen);
