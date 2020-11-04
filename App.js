import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import i18n from 'i18n-js';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from './components/TabBarIcon';
import Login from './screens/Login';
import Projects, { projectsScreenOptions } from './screens/Projects';
import MapScreen, { mapScreenOptions } from './screens/Map';
import Calendar, { calendarScreenOptions } from './screens/Calendar';
import Profile, { profileScreenOptions } from './screens/Profile';
import SingleProject, {
  singleProjectScreenOptions,
} from './screens/SingleProject';

import { navigationRef, isReadyRef } from './utils/navigationService';
import colors from './constants/colors';
import store from './store';
import getLocaleMessages from './localization/getLocaleMessages';

const map = require('./assets/images/icons/map.png');
const mapFocused = require('./assets/images/icons/map_focused.png');
const projects = require('./assets/images/icons/projects.png');
const projectsFocused = require('./assets/images/icons/projects_focused.png');
const calendar = require('./assets/images/icons/calendar.png');
const calendarFocused = require('./assets/images/icons/calendar_focused.png');

const lightFont = require('./assets/fonts/Assistant-Light.ttf');
const regularFont = require('./assets/fonts/Assistant-Regular.ttf');
const mediumFont = require('./assets/fonts/Assistant-SemiBold.ttf');
const boldFont = require('./assets/fonts/Assistant-Bold.ttf');

i18n.translations = {
  en: getLocaleMessages('en'),
};
i18n.locale = 'en';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MapStack() {
  return (
    <Stack.Navigator
      options={{
        tabBarIcon: ({ focused }) => options('Map', 'map', focused),
      }}
    >
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={mapScreenOptions}
      />
      <Stack.Screen
        name="Project"
        component={SingleProject}
        options={singleProjectScreenOptions}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={profileScreenOptions}
      />
    </Stack.Navigator>
  );
}
function ProjectsStack() {
  return (
    <Stack.Navigator
      options={{
        tabBarIcon: ({ focused }) => options('Projects', 'projects', focused),
      }}
    >
      <Stack.Screen
        name="Projects"
        component={Projects}
        options={Projects.navigationOptions}
      />
      <Stack.Screen
        name="Project"
        component={SingleProject}
        options={SingleProject.navigationOptions}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
function CalendarStack() {
  return (
    <Stack.Navigator
      options={{
        tabBarIcon: ({ focused }) => options('Calendar', 'calendar', focused),
      }}
    >
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="Project" component={SingleProject} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

function RootStack() {
  const getTabs = () => (
    <Tab.Navigator
      initialRouteName="Map"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === 'Map') {
            icon = focused ? mapFocused : map;
          } else if (route.name === 'Projects') {
            icon = focused ? projectsFocused : projects;
          } else if (route.name === 'Calendar') {
            icon = focused ? calendarFocused : calendar;
          }
          return <TabBarIcon image={icon} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: colors.background,
          height: 100,
          paddingTop: 10,
          borderTopColor: colors.lightgray,
        },
        labelStyle: {
          fontFamily: 'regular',
          fontSize: 15,
          marginBottom: Platform === 'ios' ? 0 : 10,
        },
        activeTintColor: colors.black,
        inactiveTintColor: colors.borderColor,
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen name="Map" component={MapStack} />
      <Tab.Screen name="Projects" component={ProjectsStack} />
      <Tab.Screen name="Calendar" component={CalendarStack} />
    </Tab.Navigator>
  );

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Map" component={getTabs} />
      </Stack.Navigator>
    </>
  );
}

const fetchFonts = () =>
  Font.loadAsync({
    light: lightFont,
    regular: regularFont,
    medium: mediumFont,
    bold: boldFont,
  });

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

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
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}
      >
        {RootStack()}
      </NavigationContainer>
    </Provider>
  );
}
