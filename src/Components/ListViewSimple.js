/**
 * ListViewSimple
 *
 * Renders a ListView without sections.
 */

'use strict';

import React, {
    ListView,
    View,
} from 'react-native';

const ListViewBase = require('./ListViewBase');
const Styles = require('../Styles');

class ListViewSimple extends ListViewBase {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        };
    }

    handleData(data) {
        console.log(this.constructor.name + '.handleData');

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data)
        });
    }

    render() {
        console.log(this.constructor.name + '.render');

        return (
            <View style={Styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    style={Styles.listview}
                    onScroll={this.props.onScroll}
                />
            </View>
        );
    }
}

module.exports = ListViewSimple;
