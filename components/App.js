/**
 * App.js
 */

'use strict';

import React, {
  BackAndroid,
  Component,
  Navigator,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const style = require('../style.js')

const CategoryListScene = require('./CategoryListScene');
const DiscussionListScene = require('./DiscussionListScene');
const DiscussionScene = require('./DiscussionScene');
const NavigationBar = require('./NavigationBar');
const SplashScene = require('./SplashScene');

// Based on https://leanpub.com/programming-react-native
var _navigator;
function androidAddBackButtonListener(navigator) {
  if (!_navigator) {
    _navigator = navigator;

    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (_navigator.getCurrentRoutes().length === 1) {
        return false;
      }
      _navigator.pop();
      return true;
    });
  }
}

class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'SplashScene'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        navigationBar={NavigationBar}
      />
    );
  }

  renderScene(route, navigator) {
    androidAddBackButtonListener(navigator);

    if (route.id === 'SplashScene') {
      return (
        <SplashScene
          navigator={navigator} />
      );
    }

    if (route.id === 'CategoryListScene') {
      return (
        <CategoryListScene
          navigator={navigator} 
          route={route} />
      );
    }

    if (route.id === 'DiscussionListScene') {
      return (
        <DiscussionListScene
          navigator={navigator}
          title={route.title}
        />
      );
    }

    if (route.id === 'DiscussionScene') {
      return (
        <DiscussionScene
          navigator={navigator}
          title={route.title}
        />
      );
    }

    return this.noRoute(navigator);
  }

  noRoute(navigator) {
    return (
      <View style={style.container}>
        <TouchableOpacity
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>renderScene</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

module.exports = App;

