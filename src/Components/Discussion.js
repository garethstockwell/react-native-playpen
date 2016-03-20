/**
 * Discussion
 *
 * Renders a ListView without sections.
 */

'use strict';

import React, {
    View,
    Text,
} from 'react-native';

const CommentList = require('./CommentList');
const Styles = require('../Styles');

class Discussion extends React.Component {
    constructor(props) {
        super(props);
        console.log('XXX');
        this.state = {
            discussionData: this.props.discussionData,
        };
    }

    render() {
        console.log('Discussion.render');

        return (
            <View style={Styles.container}>
                <View style={Styles.titleView}>
                    <Text style={Styles.titleText}>
                        {this.state.discussionData['Name']}
                    </Text>
                    <Text style={Styles.todoText}>
                        TODO: comment loading
                    </Text>
                </View>

                <CommentList />
            </View>
        );
    }
}

module.exports = Discussion;
