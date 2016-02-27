/**
 * CategoryListScene.js
 */

'use strict';

import React, {
  Component,
  Navigator,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const style = require('../style.js')

const CategoryList = require('./CategoryList');

class CategoryListScene extends Component {
  _onPressCategory(name) {
    console.log('Press ' + name)
    this.props.navigator.push({id: 'DiscussionListScene', name: name})
  }

  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigationBar={
            <Navigator.NavigationBar
                routeMapper={NavigationBarRouteMapper}
            />
          }
      />
    );
  }

  renderScene(route, navigator) {
    return (
      <View style={style.container}>
        <CategoryList
          onPress={(name) => this._onPressCategory(name)}
        />
      </View>
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          FooBar
        </Text>
      </TouchableOpacity>
    );
  }
};

module.exports = CategoryListScene;

