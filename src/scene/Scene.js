/**
 * Scene
 */

'use strict';

import React, {
  Component,
  Navigator,
  View,
} from 'react-native';

const style = require('../Style')

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideNavBar: false,
    }
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
      />
    );
  }

  renderScene(route, navigator) {
    let navBar = this.props.navigationBar;
    if (navBar) {
      // TODO: hide navigation bar when scroll view is pulled down
    }

    var body = this.renderBody()
    return (
      <View style={style.body}>
        {body}
      </View>
    );
  }
}

module.exports = Scene;

