/**
 * DiscussionList
 */

'use strict';

import React from 'react-native';
import Client from '../Client/Client';
const DiscussionListItem = require('./DiscussionListItem');
const ListViewNormal = require('./ListViewNormal');

class DiscussionList extends ListViewNormal {
    doLoad() {
        Client.categoryDiscussionList(
            this.props.categoryID,
            this.onLoaded.bind(this)
        );
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

