/**
 * DiscussionListScene.js
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

const DiscussionList = require('./DiscussionList');

class DiscussionListScene extends Component {
  _onPressDiscussion(name) {
    console.log('Press ' + name)
    this.props.navigator.push({id: 'DiscussionScene', name: name})
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
        navigationBar={
         <Navigator.BreadcrumbNavigationBar
           style={style.navbar}
           routeMapper={BreadcrumbRouteMapper} />
        }
      />
    );
  }

  renderScene(route, navigator) {
    return (
      <View style={style.container}>
        <DiscussionList
          onPress={(name) => this._onPressDiscussion(name)}
        />
      </View>
    );
  }
}

var BreadcrumbRouteMapper = {
  rightContentForRoute(route, navigator) {
    console.log('ROUTE ' + route);
    return null;
  },

  titleContentForRoute(route, navigator) {
    return (
      <Text>Foo</Text>
    );
  },

  iconForRoute(route, navigator) {
    return null;
  },

  separatorForRoute(route, navigator) {
    return (
      <Text>*</Text>
    );
  }
};

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.parentNavigator.pop()}
      >
        <Text>
          Back
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton(route, navigator, index, navState) {
    return null;
  },

  Title(route, navigator, index, navState) {
    var title = navState.routeStack[index];
    console.log('DLS title ' + title)
    console.log('DLS navState.routeStack ' + navState.routeStack)
    console.log('DLS routes ' + navigator.getCurrentRoutes())
    return (
      <Text>{title}</Text>
    );
  }
};

module.exports = DiscussionListScene;

