import React, {useEffect} from 'react'
import {TouchableOpacity, Text, View, ActivityIndicator} from 'react-native'

import styles from '../../constants/styles'

const Button = ({title, handlePress, buttonStyle, indicator}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={buttonStyle}>
      {indicator ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.buttonTitle}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

export default Button
