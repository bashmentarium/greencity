import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import ProfileButton from '../../components/ProfileButton';
import Back from '../../components/Back';

import styles from '../../constants/styles';
import colors from '../../constants/colors';

const map_preview = require('../../assets/images/map_preview.png');

const SingleProject = ({ route, navigation }) => {
  const { project } = route.params;
  const { name, status, address, start_date, description } = project;

  navigation.setOptions({
    headerTitle: name,
    headerTitleStyle: {
      fontFamily: 'light',
      fontSize: 19,
      color: colors.black,
    },
    headerBackTitleStyle: {
      fontSize: 15,
      color: colors.black,
      fontFamily: 'regular',
    },
    headerLeft: () => <Back navigation={navigation} />,
    headerRight: () => <ProfileButton navigation={navigation} />,
  });

  return (
    <ScrollView style={styles.singleProjectWrapper}>
      <Image source={map_preview} />
      <Text style={styles.generalInfo}>General info</Text>
      <View style={styles.projectNameWrapper}>
        <View>
          <Text style={styles.projectNameLabel}>Project name:</Text>
          <Text style={styles.projectName}>{name}</Text>
        </View>
        <View>
          <Text style={styles.projectNameLabel}>Status:</Text>
          <Text
            style={
              status ? styles.projectNameLabelGreen : styles.projectNameLabelRed
            }
          >
            {status ? 'Open' : 'Closed'}
          </Text>
        </View>
      </View>
      <View style={styles.detailWrapper}>
        <Text style={styles.projectNameLabel}>Address:</Text>
        <Text>{address}</Text>
      </View>
      <View style={styles.detailWrapper}>
        <Text style={styles.projectNameLabel}>Start date:</Text>
        <Text>{start_date}</Text>
      </View>
      <View style={styles.detailWrapper}>
        <Text style={styles.projectNameLabel}>Description:</Text>
        <Text>{description}</Text>
      </View>
    </ScrollView>
  );
};

export const singleProjectScreenOptions = ({ navigation }) => ({
  headerTitle: 'Project details',
  headerTitleStyle: {
    fontFamily: 'light',
    fontSize: 19,
  },
  headerRight: () => <ProfileButton navigation={navigation} />,
});

export default SingleProject;
