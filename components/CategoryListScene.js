/**
 * CategoryListScene.js
 */

'use strict';

import React, {
  Component,
  Navigator,
  Text,
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
        navigator={this.props.navigator}
        navigationBar={
         <Navigator.NavigationBar
           style={style.navbar}
           routeMapper={NavigationBarRouteMapper} />
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
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <Text>Foo</Text>
    );
  },

  RightButton(route, navigator, index, navState) {
    return null;
  },

  Title(route, navigator, index, navState) {
    var title = navState.routeStack[index];
    console.log('CLS title ' + title)
    console.log('CLS route ' + route)
    console.log('CLS navState ' + navState)
    console.log('CLS navState.routeStack ' + navState.routeStack)
    return (
      <Text>{title}</Text>
    );
  }
};

module.exports = CategoryListScene;

