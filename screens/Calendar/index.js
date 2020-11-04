import React from 'react';
import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import ProfileButton from '../../components/ProfileButton';

import styles from '../../constants/styles';
import colors from '../../constants/colors';

const Calendar = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <Text>Calendar</Text>
      {/* <Agenda style={{width: '100%'}} /> */}
    </View>
  );
};

export const calendarScreenOptions = ({ navigation }) => ({
  headerTitleStyle: {
    fontFamily: 'light',
    fontSize: 19,
  },
  headerRight: () => <ProfileButton navigation={navigation} />,
  headerBackTitle: null,
});

export default Calendar;
