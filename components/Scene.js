/**
 * Scene.js
 */

'use strict';

import React, {
  Component,
  Navigator,
  View,
} from 'react-native';

const style = require('../style.js')

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideNavBar: false,
    }
  }

  render() {
    var navBar = this.props.navigationBar;
    console.log(navBar);

    var body = this.renderBody()
    return (
      <View style={style.body}>
        {body}
      </View>
    );
  }
}

module.exports = Scene;

