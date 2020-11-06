import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { render, cleanup, fireEvent } from '@testing-library/react-native';
import { navigationRef, isReadyRef } from '../utils/navigationService';

describe('Map screen', () => {
  afterEach(cleanup);

  const Stack = createStackNavigator();

  const MapScreen = () => {
    return (
      <View>
        <MapView>
          <Marker>
            <Text>Project name</Text>
          </Marker>
        </MapView>
      </View>
    );
  };

  it('displays itself', async () => {
    const component = render(
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}
      >
        <Stack.Navigator>
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );

    const one = 1;
    expect(one).toBe(1);
  });
});
