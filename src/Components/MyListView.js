/**
 * MyListView
 */

'use strict';

import React, {
    Component,
    ListView,
    Text,
    View,
} from 'react-native';

const Styles = require('../Styles')

class MyListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        };
    }

    componentDidMount() {
        this.props.onLoadingChanged(true);
        this.load();
    }

    onResponse(data) {
        this.props.onLoadingChanged(false);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
            loading: false
        });
    }

    render() {
        return (
            <View style={Styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem.bind(this)}
                    style={Styles.listview}
                    onScroll={this.props.onScroll}
                />
            </View>
        );
    }
}

module.exports = MyListView;
