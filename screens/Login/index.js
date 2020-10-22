import React, {useState, useEffect} from 'react'
import {View, Text, KeyboardAvoidingView, Platform} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {Formik} from 'formik'
import {loginStart, loginSelector} from '../../ducks/login'

import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'
import styles from '../../constants/styles'

const Login = ({navigation}) => {
  const [authError, setAuthError] = useState('')
  const {loading, success, error} = useSelector(loginSelector)

  const dispatch = useDispatch()

  const loginHandler = (values) => {
    dispatch(loginStart(values))
  }

  return (
    <View style={styles.screenContainer}>
      <KeyboardAvoidingView
        style={{
          width: '100%',
          alignItems: 'center',
        }}
        behavior='padding'
      >
        <>
          <Text
            style={{
              ...styles.buttonTitle,
              marginBottom: 20,
              fontFamily: 'regular',
            }}
          >
            Login
          </Text>
          <Formik
            initialValues={{
              email: 'author@gmail.com',
              password: '126357849',
            }}
            onSubmit={loginHandler}
          >
            {({values, handleChange, errors, setFieldTouched, isValid}) => (
              <View style={styles.form}>
                <Label title='Email address' />
                <Input
                  value={values.email}
                  onChangeText={handleChange('email')}
                  error={errors.email}
                  clearTextOnFocus={false}
                  secureTextEntry={false}
                  maxLength={30}
                  onBlur={() => setFieldTouched('email')}
                  returnKeyType='done'
                  blurOnSubmit
                />
                <Label title='Password' />
                <Input
                  value={values.password}
                  onChangeText={handleChange('password')}
                  error={errors.password}
                  clearTextOnFocus={false}
                  secureTextEntry={false}
                  maxLength={30}
                  onBlur={() => setFieldTouched('password')}
                  returnKeyType='done'
                  blurOnSubmit
                />
                <Button
                  title='continue'
                  handlePress={isValid ? () => loginHandler(values) : null}
                  buttonStyle={
                    Platform.OS === 'ios' ? styles.buttonIos : styles.button
                  }
                  indicator={loading ? true : false}
                />
              </View>
            )}
          </Formik>
        </>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Login
