/**
 * CategoryList
 */

'use strict';

import React from 'react-native';
import Client from '../Client/Client';
const CategoryListItem = require('./CategoryListItem');
const ListViewNormal = require('./ListViewNormal');
const ListViewSectioned = require('./ListViewSectioned');

class CategoryList extends ListViewNormal {
    doLoad() {
        Client.categoryListNormal(this.onLoaded.bind(this));
    }

    renderRow(item) {
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

