/**
 * Scene
 */

'use strict';

import React, {
  Component,
  Navigator,
  View,
} from 'react-native';

const Styles = require('../Styles')

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
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

    if (this.state.loading) {
      renderLoading();
    } else {
      var body = this.renderBody()
      return (
        <View style={Styles.body}>
          {body}
        </View>
      );
    }
  }

  renderLoading() {
    // TODO: a
  }
}

module.exports = Scene;

