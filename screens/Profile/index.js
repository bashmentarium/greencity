import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../../constants/styles';

const Profile = ({ navigation }) => {
  const { username, email, phone, rating, preferred, company } = useSelector(
    (state) => state.login.success.user
  );

  return (
    <View style={styles.screenContainer}>
      <Text>Username: {username}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone: {phone}</Text>
      {rating && <Text>Rating: {rating}</Text>}
      <Text>
        Preferred: {preferred ? <Text>true</Text> : <Text>false</Text>}
      </Text>
      <Text>Company: {company.name}</Text>
    </View>
  );
};

export const profileScreenOptions = ({ navigation }) => ({
  headerTitleStyle: {
    fontFamily: 'light',
    fontSize: 19,
  },
});

export default Profile;
