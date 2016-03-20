/**
 * Discussion
 *
 * Renders a ListView without sections.
 */

'use strict';

import React, {
    View,
    Text,
    WebView,
} from 'react-native';

const CommentList = require('./CommentList');
const Styles = require('../Styles');

const DUMMY_HTML = `
<!DOCTYPE html>
<html>
    <body>
        <p>
            This is a WebView.
            The HTML is statically compiled into the app, but the picture is an &lt;img&gt; which is fetched from DropBox.
        </p>
        <p>
            <center>
                <img src="https://www.dropbox.com/s/5ybkozhuae8iacq/IMG_20150708_224404.jpg?raw=1" height="400">
            </center>
        </p>
    </body>
</html>
`;

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
                <WebView
                    style={{
                        backgroundColor: '#ffffff',
                        width: 350,
                        flex: 1,
                    }}
                    source={{html: DUMMY_HTML}}
                />
            </View>

        );
    }
}

module.exports = Discussion;
