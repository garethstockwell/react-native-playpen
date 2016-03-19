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

        var getSectionData = function(dataBlob, sectionID) {
            //console.log('getSectionData ' + sectionId);
            return dataBlob[sectionID];
        };

        var getRowData = function(dataBlob, sectionID, rowID) {
            //console.log('getRowData ' + rowID);
            return dataBlob[rowID];
        };

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
        var dataBlob = data.dataBlob;
        var sectionIDs = data.sectionIDs;
        var rowIDs = data.rowIDs;

        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(
                dataBlob, sectionIDs, rowIDs)
        });
    }

    render() {
        return (
            <View style={Styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    renderSectionHeader={this.renderSectionHeader.bind(this)}
                    style={Styles.listview}
                    onScroll={this.props.onScroll}
                />
            </View>
        );
    }
}

module.exports = ListViewSectioned;
