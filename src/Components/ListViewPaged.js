/**
 * ListViewPaged
 *
 * Renders a ListView whose contents are paginated.
 */

'use strict';

import React, {
    ListView,
    View,
} from 'react-native';

const ListViewSimple = require('./ListViewSimple');
const PageBar = require('./PageBar');
const Styles = require('../Styles');

// TODO: need an API to query this
const ITEMS_PER_PAGE = 20;

class ListViewPaged extends ListViewSimple {
    _pageBarItem() {
        var itemCount = this.state.itemCount;
        var data = {
            numPages: Math.floor(
                (itemCount + ITEMS_PER_PAGE - 1) / ITEMS_PER_PAGE),
        };
        console.log(this.constructor.name + '._pageBarItem'
            + ' itemCount ' + itemCount
            + ' itemsPerPage ' + ITEMS_PER_PAGE
            + ' numPages ' + data.numPages);
        return data;
    }

    onDataChanged(data) {
        var pageBarItem = this._pageBarItem();

        if (pageBarItem.numPages > 1) {
            data.splice(0, 0, pageBarItem);
            data.push(pageBarItem);
        }

        super.onDataChanged(data);
    }

    renderRow(item) {
        if (item.numPages) {
            return (
                <PageBar
                    currentPage={this.state.currentPage}
                    numPages={item.numPages}
                />
            );
        } else {
            return this.renderItemRow(item);
        }
    }
}

module.exports = ListViewPaged;
