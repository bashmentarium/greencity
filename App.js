import 'react-native-gesture-handler';
import * as React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import i18n from 'i18n-js';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './navigation/AppNavigator';

import { navigationRef, isReadyRef } from './utils/navigationService';

import store from './store';
import getLocaleMessages from './localization/getLocaleMessages';

const lightFont = require('./assets/fonts/Assistant-Light.ttf');
const regularFont = require('./assets/fonts/Assistant-Regular.ttf');
const mediumFont = require('./assets/fonts/Assistant-SemiBold.ttf');
const boldFont = require('./assets/fonts/Assistant-Bold.ttf');

i18n.translations = {
  en: getLocaleMessages('en'),
};
i18n.locale = 'en';

const fetchFonts = () =>
  Font.loadAsync({
    light: lightFont,
    regular: regularFont,
    medium: mediumFont,
    bold: boldFont,
  });

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoadingComplete(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
