/**
 * DiscussionList
 */

'use strict';

import React from 'react-native';
import Client from '../Client/Client';
const MyListView = require('./MyListView');
const DiscussionListItem = require('./DiscussionListItem');

class DiscussionList extends MyListView {
    load() {
        Client.discussionList(this.onResponse.bind(this));
    }

    renderItem(item) {
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

