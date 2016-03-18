/**
 * Scene
 */

'use strict';

import React, {
  Component,
  Navigator,
  View,
  ProgressBarAndroid,
} from 'react-native';

const Styles = require('../Styles')

const Spinner = require('../Components/Spinner')

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      hideNavBar: false,
    }
  }

  _onLoadingChanged(value) {
    this.setState({ loading: value });
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
      />
    );
  }

  _renderSpinner() {
    if (this.state.loading) {
      return (
        <View style={Styles.spinnerView}>
          <Spinner />
        </View>
      );
    }
  }

  renderScene(route, navigator) {
    let navBar = this.props.navigationBar;
    if (navBar) {
      // TODO: hide navigation bar when scroll view is pulled down
    }

    return (
      <View style={Styles.body}>
        {this.renderBody()}
        {this._renderSpinner()}
      </View>
    );
  }
}

module.exports = Scene;

