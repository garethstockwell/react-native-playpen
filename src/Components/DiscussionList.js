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
            categoryData: this.props.categoryData,
            itemCount: this.props.categoryData['CountAllDiscussions'],
        });
        this.loadDiscussionList(currentPage);
    }

    /*
    goToPage(page) {
        console.log('DiscussionList.goToPage ' + page);
        this.loadDiscussionList(page);
    }
    */

    loadDiscussionList(page) {
        console.log('DiscussionList.loadDiscussionList ' + page);
        Client.getCategoryDiscussionList(
            this.props.categoryData['CategoryID'],
            page,
            this.onDiscussionListLoaded.bind(this)
        );
    }

    onDiscussionListLoaded(data) {
        console.log('DiscussionList.onDiscussionListLoaded page ' + data.page);
        this.setState({currentPage: data.page});
        this.onDataChanged(data.discussions);
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

