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

class ListViewPaged extends ListViewSimple {
    constructor(props) {
        super(props);
        this.state.itemsPerPage = 0;
    }

    _pageBarItem() {
        var totalNumItems = this.state.totalNumItems || 0;
        var itemsPerPage = this.state.itemsPerPage;
        var data = {
            numPages: Math.floor(
                (totalNumItems + itemsPerPage - 1) / itemsPerPage),
        };
        console.log(this.constructor.name + '._pageBarItem'
            + ' totalNumItems ' + totalNumItems
            + ' itemsPerPage ' + itemsPerPage
            + ' numPages ' + data.numPages);
        return data;
    }

    onDataChanged(pageIndex, data) {
        console.log(this.constructor.name + '.onDataChanged'
            + ' pageIndex ' + pageIndex
            + ' numItems ' + data.length);

        var pageBarItem = this._pageBarItem();

        if (pageBarItem.numPages > 1) {
            data.splice(0, 0, pageBarItem);
            data.push(pageBarItem);
        }

        this.setState({currentPage: pageIndex});
        super.onDataChanged(data);
    }

    goToPage(page) {
        console.error('Abstract function called on ' + (this.constructor.name));
        abstractFunctionNotImplemented();
    }

    renderRow(item) {
        if (item.numPages) {
            return (
                <PageBar
                    currentPage={this.state.currentPage}
                    numPages={item.numPages}
                    goToPage={this.goToPage.bind(this)}
                />
            );
        } else {
            return this.renderItemRow(item);
        }
    }
}

module.exports = ListViewPaged;
