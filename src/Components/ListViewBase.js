/**
 * ListViewBase
 */

'use strict';

import React, {
    Component,
} from 'react-native';

class ListViewBase extends React.Component {
    componentDidMount() {
        this.load();
    }

    load() {
        this.props.onLoadingChanged(true);
        this.doLoad();
    }

    onLoaded(data) {
        this.handleData(data);
        this.props.onLoadingChanged(false);
    }
}

module.exports = ListViewBase;
