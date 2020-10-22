import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import styles from '../../constants/styles'

const Login = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Map')
  }
  return (
    <View style={styles.screenContainer}>
      <Text>Login</Text>
      <TouchableOpacity style={styles.navButton} onPress={handlePress}>
        <Text>Go to dashboard</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
