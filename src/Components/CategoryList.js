/**
 * CategoryList
 */

'use strict';

import React, {
    View,
    Text,
} from 'react-native';

import Client from '../Client/Client';
const CategoryListItem = require('./CategoryListItem');
const ListViewSimple = require('./ListViewSimple');
const ListViewSectioned = require('./ListViewSectioned');
const Styles = require('../Styles');

class CategoryList extends ListViewSectioned {
    doLoad() {
        Client.categoryListSectioned(
            this.onLoaded.bind(this));
    }

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={Styles.liSectionHeading}>
                <Text style={Styles.liSectionHeadingText}>{sectionData.Name}</Text>
            </View>
        );
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

