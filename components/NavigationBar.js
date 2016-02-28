/**
 * NavigationBar.js
 */

'use strict';

import React, {
  Navigator,
  Text,
  TouchableOpacity,
} from 'react-native';

const style = require('../style.js')

var BreadcrumbRouteMapper = {
  rightContentForRoute(route, navigator) {
    return null;
  },

  titleContentForRoute(route, navigator) {
    return (
      <Text>{route.title}</Text>
    );
  },

  iconForRoute(route, navigator) {
    return null;
  },

  separatorForRoute(route, navigator) {
    return (
      <TouchableOpacity
        onPress={navigator.pop}
        style={style.crumbSeparatorPlaceholder}
      >
        <Text>&gt;</Text>
      </TouchableOpacity>
    );
  }
};

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.parentNavigator.pop()}
      >
        <Text>
          Back
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton(route, navigator, index, navState) {
    return null;
  },

  Title(route, navigator, index, navState) {
    console.log('ROUTE ' + route)
    console.log('INDEX ' + index)
    return null;
  }
};

module.exports = (
  <Navigator.BreadcrumbNavigationBar
    style={style.navbar}
    routeMapper={BreadcrumbRouteMapper} />
);

