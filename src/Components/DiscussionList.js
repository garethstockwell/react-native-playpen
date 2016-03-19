/**
 * DiscussionList
 */

'use strict';

import React from 'react-native';
import Client from '../Client/Client';
const DiscussionListItem = require('./DiscussionListItem');
const ListViewSimple = require('./ListViewSimple');

class DiscussionList extends ListViewSimple {
    componentDidMount() {
        console.log('DiscussionList.componentDidMount');
        this.setLoading(true);
        this.load();
    }

    load() {
        console.log('DiscussionList.load');
        Client.categoryDiscussionList(
            this.props.categoryID,
            this.onLoaded.bind(this)
        );
    }

    onLoaded(categoryListData) {
        console.log('DiscussionList.onLoaded');
        this.handleData(categoryListData);
        this.setLoading(false);
    }

    renderRow(item) {
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

