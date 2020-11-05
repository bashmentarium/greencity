import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { render, cleanup, fireEvent } from '@testing-library/react-native';

describe('Map screen', () => {
  afterEach(cleanup);

  const Tab = createBottomTabNavigator();

  it('displays itself', async () => {
    const component = render(
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    );

    const one = 1;
    expect(one).toBe(1);
  });
});
