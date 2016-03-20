/**
 * DiscussionList
 */

'use strict';

import React from 'react-native';
import Client from '../Client/Client';
const DiscussionListItem = require('./DiscussionListItem');
const ListViewPaged = require('./ListViewPaged');

class DiscussionList extends ListViewPaged {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var currentPage = this.props.currentPage || 1;
        console.log('DiscussionList.componentDidMount currentPage '
            + currentPage);
        this.setLoading(true);
        this.setState({
            categoryData: this.props.categoryData,
            totalNumItems: this.props.categoryData['CountAllDiscussions'],
        });
        this.loadDiscussionList(currentPage);
    }

    goToPage(pageIndex) {
        console.log('DiscussionList.goToPage ' + pageIndex);
        this.loadDiscussionList(pageIndex);
    }

    loadDiscussionList(pageIndex) {
        console.log('DiscussionList.loadDiscussionList ' + pageIndex);

        var itemIndex = ((pageIndex - 1) * this.state.itemsPerPage) + 1;

        Client.getCategoryDiscussionList(
            this.props.categoryData['CategoryID'],
            pageIndex,
            itemIndex,
            this.onDiscussionListLoaded.bind(this)
        );
    }

    onDiscussionListLoaded(data) {
        console.log('DiscussionList.onDiscussionListLoaded');

        if (data.pageIndex == 1) {
            var itemsPerPage = data.discussions.length;
            console.log('DiscussionList.onDiscussionListLoaded'
                + ' itemsPerPage ' + itemsPerPage);
            this.setState({itemsPerPage: itemsPerPage});
        }

        this.onDataChanged(data.pageIndex, data.discussions);
        this.setLoading(false);
    }

    renderItemRow(item) {
        return (
            <DiscussionListItem
                item={item}
                onPress={(discussionID, discussionName) =>
                    this.props.onPress(discussionID, discussionName)}
            />
        );
    }
}

module.exports = DiscussionList;

