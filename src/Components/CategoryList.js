/**
 * CategoryList
 */

'use strict';

import React, {
    Component,
    ListView,
    Text,
    View,
} from 'react-native';

import Client from '../Client/Client';

const Styles = require('../Styles')

const CategoryListItem = require('./CategoryListItem');

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        };
    }

    componentDidMount() {
        this._load();
    }

    _load() {
            this.props.onLoadingChanged(true);
            Client.categoryList(this._onResponse.bind(this));
    }

    _onResponse(data) {
        this.props.onLoadingChanged(false);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
            loading: false
        });
    }

    _renderItem(item) {
        return (
            <CategoryListItem
                item={item}
                onPress={(Name) => this.props.onPress(Name)}
            />
        );
    }

    render() {
        return (
            <View style={Styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderItem.bind(this)}
                    style={Styles.listview}
                    onScroll={this.props.onScroll}
                />
            </View>
        );
    }
}

module.exports = CategoryList;

