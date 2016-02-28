/**
 * SceneSplash.js
 */

'use strict';

import React, {
  Component,
  Navigator,
  Text,
  View,
} from 'react-native';

const style = require('../style.js')

const Scene = require('./Scene');

class SceneSplash extends Scene {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hello',
    }
  }

  componentWillMount() {
    setTimeout(() => { this.hideNavBar(); }, 1000);
  }

  hideNavBar() {
    this.setState({ text: 'foo' });

    this.setState({ hideNavBar: true });

    setTimeout(() => { this.close(); }, 1000);
  }

  close() {
    var navigator = this.props.navigator;
    navigator.replace({
      id: 'SceneCategoryList',
      title: 'Home',
    });
  }

  renderBody() {
    return (
      <Text>ReactNativePlaypen ({this.state.text})</Text>
    );
  }
}

module.exports = SceneSplash;

