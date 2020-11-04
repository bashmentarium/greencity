import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Overlay } from 'react-native-elements';

import styles from '../../constants/styles';
import Button from '../Button';

const Modal = ({ project, isVisible, setShowModal, navigation }) => {
  const { name, start_date, description, status, address } = project;

  useEffect(() => {}, []);

  const handlePress = (project) => {
    setShowModal(false);
    navigation.navigate('Project', {
      project: project,
    });
  };

  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={() => setShowModal(false)}
      overlayStyle={styles.projectOverlay}
    >
      <View>
        <View style={status ? styles.modalHeaderGreen : styles.modalHeaderRed}>
          <View style={styles.modalNameWrapper}>
            <Text style={styles.modalNameTextLight}>Project name</Text>
            <Text style={styles.modalNameText}>{name}</Text>
          </View>
          <View style={styles.modalStatusWrapper}>
            <Text style={styles.modalNameText}>
              {status ? 'Open' : 'Closed'}
            </Text>
          </View>
        </View>
        <View style={styles.modalDate}>
          <Text style={styles.modalNameTextLight}>Start date:</Text>
          <Text style={styles.modalNameText}>{start_date}</Text>
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
    </Overlay>
  );
};

export default Modal;
