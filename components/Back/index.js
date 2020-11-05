import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from '../../constants/styles';
const image = require('../../assets/images/icons/back.png');

const Back = ({ navigation }) => {
  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.backButton}>
      <Image source={image} />
    </TouchableOpacity>
  );
};

export default Back;
