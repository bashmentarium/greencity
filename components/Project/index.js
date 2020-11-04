import React from 'react';
import { View, Text } from 'react-native';
import Button from '../Button';
import styles from '../../constants/styles';

const Project = ({ navigation, project, index, length }) => {
  const { name, startDate, description, status, address } = project;

  const handlePress = (item) => {
    navigation.navigate('Project', {
      project: item,
    });
  };

  return (
    <View
      style={
        index !== length
          ? styles.projectSingleWrapper
          : styles.projectSingleWrapperLast
      }
    >
      <View style={status ? styles.modalHeaderGreen : styles.modalHeaderRed}>
        <View style={styles.modalNameWrapper}>
          <Text style={styles.modalNameTextLight}>Project name</Text>
          <Text style={styles.modalNameText}>{name}</Text>
        </View>
        <View style={styles.modalStatusWrapper}>
          <Text style={styles.modalNameText}>{status ? 'Open' : 'Closed'}</Text>
        </View>
      </View>
      <View style={styles.modalDate}>
        <Text style={styles.modalNameTextLight}>Start date:</Text>
        <Text style={styles.modalNameText}>{startDate}</Text>
      </View>
      <View style={styles.modalDescription}>
        <Text style={styles.modalNameTextLight}>Description:</Text>
        <Text style={styles.modalNameText}>{description}</Text>
      </View>
      <View style={styles.modalAddress}>
        <Text style={styles.modalNameTextLight}>Address:</Text>
        <Text style={styles.modalNameText}>{address}</Text>
      </View>
      <Button
        title="Show more"
        buttonStyle={styles.showMore}
        handlePress={() => handlePress(project)}
      />
    </View>
  );
};

export default Project;
