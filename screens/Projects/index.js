import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import ProfileButton from '../../components/ProfileButton'

import styles from '../../constants/styles'

const Projects = ({navigation}) => {
  return (
    <View>
      <Text>Projects</Text>
    </View>
  )
}

Projects.navigationOptions = ({navigation}) => ({
  headerTitleStyle: {
    fontFamily: 'light',
    fontSize: 19,
  },
  headerRight: () => <ProfileButton navigation={navigation} />,
  headerBackTitle: null,
})

export default Projects
