/**
 * Spinner.Android
 */

'use strict';

import React, {
    Component,
    ProgressBarAndroid,
} from 'react-native';

const Styles = require('../Styles');

class Spinner extends Component {
    render() {
        return (
            <ProgressBarAndroid
                indeterminate={true}
                styleAttr={'Large'}
                color={'white'}
                style={Styles.spinner} />
        );
    }
};

module.exports = Spinner;

