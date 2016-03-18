/**
 * Styles.js
 */

'use strict';

import React, {
  StyleSheet,
} from 'react-native';

var COLOR = {
    BLACK:      '#000000',
    GRAY_01:    '#373B3F',
    GRAY_02:    '#999DA2',
    WHITE:      '#FFFFFF',

    BLUE_DARK:  '#2C3E50',
    BLUE_MID:   '#2980B9',
    BLUE_LIGHT: '#3498DB',

    GOLD:       '#F1C40F',

    PURPLE:     '#9B59B6',
};

var DIM = {
    HEIGHT_NAVBAR:        50,

    HEIGHT_LIST_SEP:       1,
    WIDTH_LIST_MARGIN:     0,
    PADDING_LIST:          5,
};

var FONT_FAMILY = 'Lato';

var FONT_SIZE = {
    SPLASH:               32,
    NAVBAR:               16,

    LIST_TITLE:           16,
};

const styles = StyleSheet.create({
  splash: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLOR.BLUE_MID,
    justifyContent: 'center',
  },

  splashText: {
    color: COLOR.WHITE,
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE.SPLASH,
  },

  navbar: {
    backgroundColor: COLOR.BLUE_DARK,
    position: 'absolute',
    top: 0,
  },

  body: {
    flex: 1,
    marginTop: DIM.HEIGHT_NAVBAR,
  },

  container: {
    alignItems: 'center',
    backgroundColor: COLOR.GRAY_02,
    flex: 1,
    justifyContent: 'center',
  },

  listview: {
    flex: 1,
    alignSelf: 'stretch',
  },

  li: {
    backgroundColor: COLOR.WHITE,
    borderWidth: 0,
    marginLeft: DIM.WIDTH_LIST_MARGIN,
    marginRight: DIM.WIDTH_LIST_MARGIN,
    marginTop: 0,
    marginBottom: DIM.HEIGHT_LIST_SEP,
    padding: DIM.PADDING_LIST,
  },

  liText: {
    color: COLOR.BLUE_DARK,
    fontSize: FONT_SIZE.LIST_TITLE,
  },

  spinnerView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    backgroundColor: COLOR.BLUE_DARK,
    justifyContent: 'center',
  },

  spinner: {
    flex: 1,
  },
});

module.exports = styles;

