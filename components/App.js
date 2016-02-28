/**
 * App.js
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

const CategoryListScene = require('./CategoryListScene');
const DiscussionListScene = require('./DiscussionListScene');
const NavigationBar = require('./NavigationBar');
const SplashScene = require('./SplashScene');

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
    console.log('APP renderScene ' + route)
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
          name={route.name}
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

