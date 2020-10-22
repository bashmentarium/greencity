import React from 'react'
import {View, Text} from 'react-native'

import styles from '../../constants/styles'

const Label = ({title}) => {
  return (
    <View style={styles.labelWrapper}>
      <Text style={styles.labelText}>{title}</Text>
    </View>
  )
}

export default Label
