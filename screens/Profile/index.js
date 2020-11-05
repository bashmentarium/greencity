import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import Back from '../../components/Back';
import styles from '../../constants/styles';
import colors from '../../constants/colors';

const Profile = ({ route, navigation }) => {
  const { username, email, phone, rating, preferred, company } = useSelector(
    (state) => state.login.success.user
  );

  navigation.setOptions({
    headerTitle: 'Profile',
    headerTitleStyle: {
      fontFamily: 'light',
      fontSize: 19,
      color: colors.black,
    },
    headerRight: () => null,
    headerLeft: () => <Back navigation={navigation} />,
  });

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

export default Profile;
