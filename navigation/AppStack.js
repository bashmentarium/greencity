import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Projects from '../screens/Projects';
import MapScreen from '../screens/Map';
import Calendar from '../screens/Calendar';
import Profile from '../screens/Profile';
import SingleProject from '../screens/SingleProject';
import TabBarIcon from '../components/TabBarIcon';

import colors from '../constants/colors';

const map = require('../assets/images/icons/map.png');
const mapFocused = require('../assets/images/icons/map_focused.png');
const projects = require('../assets/images/icons/projects.png');
const projectsFocused = require('../assets/images/icons/projects_focused.png');
const calendar = require('../assets/images/icons/calendar.png');
const calendarFocused = require('../assets/images/icons/calendar_focused.png');

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function AppStack() {
  function MapStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="Project" component={SingleProject} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  }
  function ProjectsStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="Project" component={SingleProject} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  }
  function CalendarStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Project" component={SingleProject} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  }

  return (
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
          height: Platform === 'ios' ? 100 : 75,
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
}
