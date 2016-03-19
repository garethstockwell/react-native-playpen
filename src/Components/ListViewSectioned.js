/**
 * ListViewSectioned
 */

'use strict';

import React, {
    ListView,
    View,
} from 'react-native';

const ListViewBase = require('./ListViewBase');
const Styles = require('../Styles');

class ListViewSectioned extends ListViewBase {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            })
        };
    }

    handleData(data) {
        var blob = data[0];
        var sectionIDs = data[1];
        var rowIDs = data[2];

        console.log("sectionIDs " + sectionIDs);
        console.log("rowIDs " + rowIDs);

        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(
                data, sectionIDs, rowIDs),
            loading: false
        });
    }

    getSectionData(dataBlob, sectionID) {
        return dataBlob[sectionID];
    }

    getRowData(dataBlob, sectionID, rowID) {
        return dataBlob[sectionID + ':' + rowID];
    }

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={Styles.li}>
                <Text style={Styles.liText}>***{sectionData['Name']}</Text>
            </View>
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

module.exports = ListViewSectioned;
