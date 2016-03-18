/**
 * SceneCategoryList
 */

'use strict';

import React, {
  View,
} from 'react-native';

const Styles = require('../Styles')

const CategoryList = require('../Components/CategoryList');
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
        onLoadingChanged={(value) => this._onLoadingChanged(value)}
      />
    );
  }
}

module.exports = SceneCategoryList;

