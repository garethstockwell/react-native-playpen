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
    _onPressCategory(categoryID, categoryName) {
        this.props.navigator.push({
            id: 'SceneCategory',
            categoryID: categoryID,
            categoryName: categoryName,
            title: categoryName,
        })
    }

    renderBody() {
        return (
            <CategoryList
                onPress={(categoryID, categoryName) =>
                            this._onPressCategory(categoryID, categoryName)}
                onScroll={() => this._onScroll()}
                onLoadingChanged={(value) => this._onLoadingChanged(value)}
            />
        );
    }
}

module.exports = SceneCategoryList;

