import React from 'react';
import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import ProfileButton from '../../components/ProfileButton';

import styles from '../../constants/styles';
import colors from '../../constants/colors';

const Calendar = ({ navigation }) => {
  navigation.setOptions({
    headerTitle: 'Calendar',
    headerTitleStyle: {
      fontFamily: 'light',
      fontSize: 19,
      color: colors.black,
    },
    headerRight: () => <ProfileButton navigation={navigation} />,
  });

  return (
    <View style={styles.screenContainer}>
      <Text>Calendar</Text>
      {/* <Agenda style={{width: '100%'}} /> */}
    </View>
  );
};

export default Calendar;
