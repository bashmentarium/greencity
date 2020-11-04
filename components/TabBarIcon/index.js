import React from 'react';
import { View, Image } from 'react-native';

// import styles from '../../constants/styles';

export default function TabBarIcon({ image }) {
  return (
    <View>
      <Image source={image} />
    </View>
  );
}
