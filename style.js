/**
 * style.js
 */

'use strict';

import React, {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#0000ff',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  body: {
    flex: 1,
    marginTop: 50,
  },

  listview: {
    flex: 1,
  },

  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: '#ff0000',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },

  navbar: {
    backgroundColor: '#e9eaed',
    height: 50,
  },
});

module.exports = styles;

