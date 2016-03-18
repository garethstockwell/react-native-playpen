/**
 * SceneCategoryList
 */

'use strict';

import React, {
    View,
} from 'react-native';

const CategoryList = require('../Components/CategoryList');
const Scene = require('./Scene');
const Styles = require('../Styles');

class SceneCategoryList extends Scene {
    _onPressCategory(categoryID, categoryName) {
        this.props.navigator.push({
            id: 'SceneCategory',
            title: categoryName,
            passProps: {
                categoryID: categoryID,
            },
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

