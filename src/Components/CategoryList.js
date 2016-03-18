/**
 * CategoryList
 */

'use strict';

import React from 'react-native';
import Client from '../Client/Client';
const MyListView = require('./MyListView');
const CategoryListItem = require('./CategoryListItem');

class CategoryList extends MyListView {
    load() {
        Client.categoryList(this.onResponse.bind(this));
    }

    renderItem(item) {
        return (
            <CategoryListItem
                item={item}
                onPress={(categoryID, categoryName) =>
                    this.props.onPress(categoryID, categoryName)}
            />
        );
    }
}

module.exports = CategoryList;

