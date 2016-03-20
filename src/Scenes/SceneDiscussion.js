/**
 * SceneDiscussion
 *
 * Scene for display of a discussion.  A discussion consists of an original
 * posting, plus zero or more comments.
 */

'use strict';

import React, {
    View,
} from 'react-native';

const Discussion = require('../Components/Discussion');
const Scene = require('./Scene');
const Styles = require('../Styles');

class SceneDiscussion extends Scene {
    renderBody() {
        console.log('SceneDiscussion.renderBody ' + this.props.discussionData);
        return (
            <Discussion
                discussionData={this.props.discussionData}
            />
        );
    }
}

module.exports = SceneDiscussion;

