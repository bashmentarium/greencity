import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import ProfileButton from '../../components/ProfileButton'

import styles from '../../constants/styles'

const Calendar = ({navigation}) => {
  return (
    <View>
      <Text>Calendar</Text>
    </View>
  )
}

Calendar.navigationOptions = ({navigation}) => ({
  headerTitleStyle: {
    fontFamily: 'light',
    fontSize: 19,
  },
  headerRight: () => <ProfileButton navigation={navigation} />,
  headerBackTitle: null,
})

export default Calendar