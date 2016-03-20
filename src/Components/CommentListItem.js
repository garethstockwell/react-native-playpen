/**
 * CommentListItem
 */

'use strict';

import React, {
    Component,
    Text,
    View,
} from 'react-native';

const Styles = require('../Styles');

class CommentListItem extends React.Component {
    render() {
        return (
            <View style={Styles.li}>
                <Text style={Styles.liText}>
                    TODO
                </Text>
            </View>
        );
    }
}

module.exports = CommentListItem;

