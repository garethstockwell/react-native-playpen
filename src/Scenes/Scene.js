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
      loading: true,
      hideNavBar: false,
    }
  }

  componentWillMount() {
    // TODO: hook this up to completion of the network fetch
    setTimeout(() => { this.setState({ loading: false}); }, 1000);
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

    var body = null;

    if (this.state.loading) {
      return (
        <View style={Styles.spinnerView}>
          <Spinner />
        </View>
      );
    }

    body = this.renderBody()
    return (
      <View style={Styles.body}>
        {body}
      </View>
    );
  }
}

module.exports = Scene;

