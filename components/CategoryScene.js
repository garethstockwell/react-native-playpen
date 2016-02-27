/**
 * CategoryScene.js
 */

'use strict';

import React, {
  Component,
  View
} from 'react-native';

const style = require('../style.js')

const DiscussionList = require('./DiscussionList');

class CategoryScene extends Component {
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
      </View>
    );
  }
}

module.exports = CategoryScene;

