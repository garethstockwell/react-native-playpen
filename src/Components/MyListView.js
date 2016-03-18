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

const PageBar = require('./PageBar');
const Styles = require('../Styles');

class MyListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
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

    renderSectionHeader() {
        return (
            <PageBar />
        );
    }

    render() {
        return (
            <View style={Styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem.bind(this)}
                    renderSectionHeader={this.renderSectionHeader.bind(this)}
                    style={Styles.listview}
                    onScroll={this.props.onScroll}
                />
            </View>
        );
    }
}

module.exports = MyListView;
