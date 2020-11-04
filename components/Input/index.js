import React from 'react'
import {TextInput} from 'react-native'

import style from './style'

const Input = ({
  error,
  clearTextOnFocus,
  secureTextEntry,
  keyboardType,
  maxLength,
  placeholder,
  value,
  onChangeText,
  onBlur,
  returnKeyType,
}) => {
  return (
    <TextInput
      style={error ? style.error : style.input}
      autoCapitalize='none'
      clearTextOnFocus={clearTextOnFocus}
      autoCorrect={false}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      maxLength={maxLength}
      underlineColorAndroid='transparent'
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      returnKeyType={returnKeyType}
      placeholder={placeholder}
    />
  )
}

export default Input
