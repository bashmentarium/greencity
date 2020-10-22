import React from 'react'
import {Image, TouchableOpacity} from 'react-native'
import styles from '../../constants/styles'
const image = require('../../assets/images/icons/profile.png')

const ProfileButton = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Profile')
  }
  return (
    <TouchableOpacity style={styles.headerProfileButton} onPress={handlePress}>
      <Image source={image} style={styles.headerProfileImage} />
    </TouchableOpacity>
  )
}

export default ProfileButton
