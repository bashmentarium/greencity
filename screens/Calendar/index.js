import React from 'react';
import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import ProfileButton from '../../components/ProfileButton';

import styles from '../../constants/styles';
import colors from '../../constants/colors';

const getMonthData = () => {
  let dataToReturn = {
    '2020-11-01': [
      {
        name: 'Whats up Food Stuff',
        start: '2020-06-09T13:45:00',
        end: '2020-06-09T19:45',
      },
      {
        name: 'Whats up second Stuff',
        start: '2020-06-09T18:45:00',
        end: '2020-06-09T21:45',
      },
    ],
    '2020-11-02': [
      {
        name: 'Whats up Food Stuff',
        start: '2020-06-09T13:45:00',
        end: '2020-06-09T19:45',
      },
      {
        name: 'ASDASD',
        start: '2020-06-09T18:45:00',
        end: '2020-06-09T21:45',
      },
    ],
  };
  return [dataToReturn, false];
};

const Calendar = ({ navigation }) => {
  const [monthData, loadingData] = getMonthData();

  navigation.setOptions({
    headerTitle: 'Calendar',
    headerTitleStyle: {
      fontFamily: 'light',
      fontSize: 19,
      color: colors.black,
    },
    headerRight: () => <ProfileButton navigation={navigation} />,
  });

  const renderItem = (item, firstItemInDay) => {
    return (
      <View
        style={{
          margin: 5,
          paddingBottom: 15,
          paddingTop: 15,
          paddingHorizontal: 10,
          backgroundColor: colors.white,
          width: '90%',
          borderRadius: 5,
        }}
      >
        <View style={{ fontFamily: 'bold' }}>
          <Text style={{ color: colors.black, fontFamily: 'light' }}>
            START
          </Text>
          <Text style={{ color: colors.black, fontFamily: 'regular' }}>
            {new Date(item.start).toLocaleString()}
          </Text>
          <Text style={{ color: colors.black, fontFamily: 'light' }}>END</Text>
          <Text style={{ color: colors.black, fontFamily: 'regular' }}>
            {new Date(item.end).toLocaleString()}
          </Text>
          <Text style={{ color: '#555', marginTop: 10 }}>{item.name}</Text>
        </View>
      </View>
    );
  };

  if (loadingData || !monthData) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <Agenda
        style={{ width: '100%' }}
        items={monthData}
        renderItem={(item, firstItemInDay) => {
          return renderItem(item, firstItemInDay);
        }}
      />
    </View>
  );
};

export default Calendar;
