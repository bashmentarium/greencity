import * as React from 'react'
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import i18n from 'i18n-js'
import {Provider} from 'react-redux'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import store from './store'

import getLocaleMessages from './localization/getLocaleMessages'

const map = require(`./assets/images/icons/map.png`)
const map_focused = require(`./assets/images/icons/map_focused.png`)
const projects = require(`./assets/images/icons/projects.png`)
const projects_focused = require(`./assets/images/icons/projects_focused.png`)
const calendar = require(`./assets/images/icons/calendar.png`)
const calendar_focused = require(`./assets/images/icons/calendar_focused.png`)

import NavigationService from './utils/navigationService.js'
import TabBarIcon from './components/TabBarIcon'
import Login from './screens/Login'
import Projects from './screens/Projects'
import MapScreen from './screens/Map'
import Calendar from './screens/Calendar'
import Profile from './screens/Profile'

import colors from './constants/colors'

i18n.translations = {
  en: getLocaleMessages('en'),
}
i18n.locale = 'en'

export const switchNavigator = createSwitchNavigator({
  login: createStackNavigator(
    {
      Login: Login,
    },
    {
      defaultNavigationOptions: {
        headerShown: false,
      },
    }
  ),
  main: createBottomTabNavigator(
    {
      Map: createStackNavigator(
        {
          Map: {
            screen: MapScreen,
            defaultNavigationOptions: {
              headerTitle: 'Map',
            },
          },
          Profile: {
            screen: Profile,
            defaultNavigationOptions: {
              headerTitle: 'Profile',
            },
          },
        },
        {
          initialRouteName: 'Map',
          defaultNavigationOptions: {
            headerBackTitle: () => null,
            headerTitleStyle: {
              flex: 1,
              textAlign: 'center',
            },
            headerStyle: {
              backgroundColor: colors.white,
              borderBottomColor: colors.background,
            },
          },
          navigationOptions: {
            tabBarIcon: ({focused}) => (
              <TabBarIcon name='map' image={focused ? map_focused : map} />
            ),
          },
        }
      ),
      Projects: createStackNavigator(
        {
          Projects: {
            screen: Projects,
            defaultNavigationOptions: {
              headerTitle: 'Projects',
            },
          },
          Profile: {
            screen: Profile,
            defaultNavigationOptions: {
              headerTitle: 'Profile',
            },
          },
        },
        {
          initialRouteName: 'Projects',
          defaultNavigationOptions: {
            headerTitleStyle: {
              flex: 1,
              textAlign: 'center',
            },
            headerStyle: {
              backgroundColor: colors.white,
              borderBottomColor: 'transparent',
            },
          },
          navigationOptions: {
            tabBarIcon: ({focused}) => (
              <TabBarIcon
                name='projects'
                image={focused ? projects_focused : projects}
              />
            ),
          },
        }
      ),
      Calendar: createStackNavigator(
        {
          Calendar: {
            screen: Calendar,
            defaultNavigationOptions: {
              headerTitle: 'Calendar',
            },
          },
          Profile: {
            screen: Profile,
            defaultNavigationOptions: {
              headerTitle: 'Profile',
            },
          },
        },
        {
          initialRouteName: 'Calendar',
          defaultNavigationOptions: {
            headerTitleStyle: {
              flex: 1,
              textAlign: 'center',
            },
            headerStyle: {
              backgroundColor: colors.white,
              borderBottomColor: 'transparent',
            },
          },
          navigationOptions: {
            tabBarIcon: ({focused}) => (
              <TabBarIcon
                name='calendar'
                image={focused ? calendar_focused : calendar}
              />
            ),
          },
        }
      ),
    },
    {
      initialRouteName: 'Map',
      tabBarOptions: {
        style: {
          backgroundColor: colors.background,
          height: 70,
          borderTopColor: 'transparent',
        },
        labelStyle: {
          fontFamily: 'light',
          fontSize: 13,
        },
        activeTintColor: colors.black,
        inactiveTintColor: colors.borderColor,
        keyboardHidesTabBar: true,
      },
    }
  ),
})

const App = createAppContainer(switchNavigator)

const fetchFonts = () => {
  return Font.loadAsync({
    light: require('./assets/fonts/Assistant-Light.ttf'),
    regular: require('./assets/fonts/Assistant-Regular.ttf'),
    medium: require('./assets/fonts/Assistant-SemiBold.ttf'),
    bold: require('./assets/fonts/Assistant-Bold.ttf'),
  })
}

export default () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoadingComplete(true)}
      />
    )
  }
  return (
    <Provider store={store}>
      <App
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    </Provider>
  )
}
