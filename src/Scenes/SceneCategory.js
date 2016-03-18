/**
 * SceneCategory
 */

'use strict';

import React, {
    View,
} from 'react-native';

const Styles = require('../Styles')

const DiscussionList = require('../Components/DiscussionList');
const Scene = require('./Scene');

class SceneCategory extends Scene {
    _onPressDiscussion(discussionID, discussionName) {
        this.props.navigator.push({
            id: 'SceneDiscussion',
            discussionID: discussionID,
            discussionName: discussionName,
            title: discussionName,
        })
    }

    renderBody() {
        return (
            <DiscussionList
                onPress={(discussionID, discussionName) =>
                        this._onPressDiscussion(discussionID, discussionName)}
                onScroll={() => this._onScroll()}
                onLoadingChanged={(value) => this._onLoadingChanged(value)}
            />
        );
    }
}

module.exports = SceneCategory;

