/**
 * PageBar
 *
 * Used to navigate between pages of a list.
 */

'use strict';

import React, {
    Component,
    Text,
    View,
} from 'react-native';

const Styles = require('../Styles');

class PageBar extends React.Component {
    render() {
        return (
            <View style={Styles.liPageBar}>
                <Text style={Styles.liPageBarText}>PAGE BAR</Text>
            </View>
        );
    }
};

module.exports = PageBar;
