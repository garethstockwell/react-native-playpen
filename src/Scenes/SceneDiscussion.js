/**
 * SceneDiscussion
 *
 * Scene for display of a discussion.  A discussion consists of an original
 * posting, plus zero or more comments.
 */

'use strict';

import React, {
    Text,
    View,
} from 'react-native';

const Scene = require('./Scene');
const Styles = require('../Styles');

class SceneDiscussion extends Scene {
    renderBody() {
        return (
            <Text>TODO</Text>
        );
    }
}

module.exports = SceneDiscussion;

