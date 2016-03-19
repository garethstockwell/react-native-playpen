/**
 * SceneCategory
 *
 * Scene for display of list of discussions within a category.
 */

'use strict';

import React, {
    View,
} from 'react-native';

const DiscussionList = require('../Components/DiscussionList');
const Scene = require('./Scene');
const Styles = require('../Styles')

class SceneCategory extends Scene {
    _onPressDiscussion(discussionID, discussionName) {
        this.props.navigator.push({
            id: 'SceneDiscussion',
            title: discussionName,
            passProps: {
                discussionID: discussionID,
            },
        })
    }

    renderBody() {
        return (
            <DiscussionList
                categoryData={this.props.categoryData}
                onPress={(discussionID, discussionName) =>
                        this._onPressDiscussion(discussionID, discussionName)}
                onScroll={() => this._onScroll()}
                onLoadingChanged={(value) => this._onLoadingChanged(value)}
            />
        );
    }
}

module.exports = SceneCategory;

