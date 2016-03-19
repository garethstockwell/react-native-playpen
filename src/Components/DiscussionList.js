/**
 * DiscussionList
 */

'use strict';

import React from 'react-native';
import Client from '../Client/Client';
const DiscussionListItem = require('./DiscussionListItem');
const ListViewPaged = require('./ListViewPaged');

class DiscussionList extends ListViewPaged {
    componentDidMount() {
        var currentPage = this.props.currentPage || 1;
        console.log('DiscussionList.componentDidMount currentPage '
            + currentPage);
        this.setLoading(true);
        this.setState({
            currentPage: currentPage,
            categoryData: this.props.categoryData,
            itemCount: this.props.categoryData['CountAllDiscussions'],
        });
        this.loadDiscussionList();
    }

    loadDiscussionList() {
        console.log('DiscussionList.loadDiscussionList');
        Client.categoryDiscussionList(
            this.props.categoryData['CategoryID'],
            this.onDiscussionListLoaded.bind(this)
        );
    }

    onDiscussionListLoaded(discussionListData) {
        console.log('DiscussionList.onDiscussionListLoaded');
        this.onDataChanged(discussionListData);
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

