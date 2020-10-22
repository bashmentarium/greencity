import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import styles from '../../constants/styles'

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

Profile.navigationOptions = ({navigation}) => ({
  headerTitleStyle: {
    fontFamily: 'light',
    fontSize: 19,
  },
  headerBackTitle: null,
})

export default Profile
