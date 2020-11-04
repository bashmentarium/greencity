jest.mock('react-native-maps', () => {
  const { Component } = require('react');
  const { View } = require('react-native');

  class MockMapView extends Component {
    render() {
      return <View>{this.props.children}</View>;
    }
  }

  class MockMarker extends Component {
    render() {
      return <View>{this.props.children}</View>;
    }
  }

  const mockMapTypes = {
    STANDARD: 0,
    SATELLITE: 1,
    HYBRID: 2,
    TERRAIN: 3,
    NONE: 4,
    MUTEDSTANDARD: 5,
  };

  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
    MAP_TYPES: mockMapTypes,
    PROVIDER_DEFAULT: 'default',
    PROVIDER_GOOGLE: 'google',
  };
});

export const preset = 'react-native';
export const setupFiles = [
  './node_modules/react-native-gesture-handler/jestSetup.js',
];
export const transformIgnorePatterns = [
  'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
];
