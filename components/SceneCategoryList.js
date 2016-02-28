/**
 * SceneCategoryList.js
 */

'use strict';

import React, {
  View,
} from 'react-native';

const style = require('../style.js')

const CategoryList = require('./CategoryList');
const Scene = require('./Scene');

class SceneCategoryList extends Scene {
  _onPressCategory(categoryTitle) {
    this.props.navigator.push({
      id: 'SceneCategory',
      title: categoryTitle,
    })
  }

  renderScene(route, navigator) {
    return (
      <View style={style.container}>
        <CategoryList
          onPress={(title) => this._onPressCategory(title)}
        />
      </View>
    );
  }
}

module.exports = SceneCategoryList;

