import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, isReadyRef } from '../utils/navigationService';
import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';
// import StartupScreen from '../screens/StartupScreen';

const AppNavigator = () => {
  const isAuth = useSelector((state) => !!state.login.success);

  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      {isAuth ? <AppStack /> : <AuthStack />}
      {/* {!isAuth && !didTryAutoLogin && <StartupScreen />} */}
    </NavigationContainer>
  );
};

export default AppNavigator;
