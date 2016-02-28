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

const SceneCategoryList = require('./SceneCategoryList');
const SceneCategory = require('./SceneCategory');
const SceneDiscussion = require('./SceneDiscussion');
const NavigationBar = require('./NavigationBar');
const SceneSplash = require('./SceneSplash');

// Based on
// http://blog.paracode.com/2016/01/05/routing-and-navigation-in-react-native/
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
        initialRoute={{id: 'SceneSplash'}}
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

    if (route.id === 'SceneSplash') {
      return (
        <SceneSplash
          navigator={navigator} />
      );
    }

    if (route.id === 'SceneCategoryList') {
      return (
        <SceneCategoryList
          navigator={navigator} 
          route={route} />
      );
    }

    if (route.id === 'SceneCategory') {
      return (
        <SceneCategory
          navigator={navigator}
          title={route.title}
        />
      );
    }

    if (route.id === 'SceneDiscussion') {
      return (
        <SceneDiscussion
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

