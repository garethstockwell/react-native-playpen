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
    _onPressDiscussion(discussionTitle) {
        this.props.navigator.push({
            id: 'SceneDiscussion',
            title: 'Discussion',
        })
    }

    renderBody() {
        return (
            <DiscussionList
                onPress={(title) => this._onPressDiscussion(title)}
            />
        );
    }
}

module.exports = SceneCategory;

