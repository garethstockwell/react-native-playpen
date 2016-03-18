/**
 * DiscussionListItem
 */

'use strict';

import React, {
    Component,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

const Styles = require('../Styles')

class DiscussionListItem extends React.Component {
    render() {
        return (
            <TouchableHighlight
                onPress={() => this.props.onPress(this.props.item.title)}
            >
                <View style={Styles.li}>
                    <Text style={Styles.liText}>{this.props.item.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

module.exports = DiscussionListItem;

