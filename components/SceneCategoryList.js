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

  _onScroll() {
    this.setState({ hideNavBar: true });
  }

  renderBody() {
    return (
      <CategoryList
        onPress={(title) => this._onPressCategory(title)}
        onScroll={() => this._onScroll()}
      />
    );
  }
}

module.exports = SceneCategoryList;

