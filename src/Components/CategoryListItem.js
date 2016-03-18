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
        var CountAllDiscussions = '';
        if (this.props.item.CountAllDiscussions) {
            CountAllDiscussions = ' (' + this.props.item.CountAllDiscussions + ')';
        }

        return (
            <TouchableHighlight
                onPress={() => this.props.onPress(
                    this.props.item.CategoryID,
                    this.props.item.Name
                )}
            >
                <View style={Styles.li}>
                    <Text style={Styles.liText}>{this.props.item.Name}{CountAllDiscussions}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

module.exports = CategoryListItem;

