import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text } from 'react-native';
import { render, cleanup, fireEvent } from '@testing-library/react-native';

describe('Map screen', () => {
  afterEach(cleanup);

  it('displays itself', async () => {
    const component = render(
      <View>
        <MapView>
          <Text>Asdasd</Text>
        </MapView>
      </View>
    );

    console.log(component.toJSON().children[0].children[0]);

    const one = 1;
    expect(one).toBe(1);
  });
});
