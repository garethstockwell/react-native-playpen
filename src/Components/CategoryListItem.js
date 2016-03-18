/**
 * CategoryListItem
 */

'use strict';

import React, {
    Component,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

const Styles = require('../Styles')

class CategoryListItem extends React.Component {
    render() {
        var CountDiscussions = '';
        if (this.props.item.CountDiscussions) {
                CountDiscussions = ' (' + this.props.item.CountDiscussions + ')';
        }

        return (
            <TouchableHighlight
                onPress={() => this.props.onPress(this.props.item.Name)}
            >
                <View style={Styles.li}>
                    <Text style={Styles.liText}>{this.props.item.Name}{CountDiscussions}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

module.exports = CategoryListItem;

