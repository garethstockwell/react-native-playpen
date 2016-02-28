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
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
      />
    );
  }

  renderScene(route, navigator) {
    let navBar = navigator.navigationBar;
    if (navBar) {
        navBar.setNativeProps({ backgroundColor: '#ff0000' });
    }

    var body = this.renderBody()
    return (
      <View style={style.body}>
        {body}
      </View>
    )
  }
}

module.exports = Scene;

