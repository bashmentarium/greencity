import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import ProfileButton from '../../components/ProfileButton';
import Modal from '../../components/Modal';
import { fetchProjectsStart, projectsSelector } from '../../ducks/projects';
import color from '../../utils/rgb';
import styles from '../../constants/styles';
import colors from '../../constants/colors';

const initialLocation = {
  lat: 47.608013,
  lng: -122.335167,
};

const pinGreen = require('../../assets/images/icons/pinGreen.png');
const pinRed = require('../../assets/images/icons/pinRed.png');
const pinBlack = require('../../assets/images/icons/pinBlack.png');
const pinYellow = require('../../assets/images/icons/pinYellow.png');

const MapScreen = ({ navigation }) => {
  const [project, setProject] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { loading, success, error } = useSelector(projectsSelector);
  const token = useSelector((state) => state.login.success.token);
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const dispatch = useDispatch();

  navigation.setOptions({
    headerTitle: 'Map',
    headerTitleStyle: {
      fontFamily: 'light',
      fontSize: 19,
      color: colors.black,
    },
    headerRight: () => <ProfileButton navigation={navigation} />,
  });

  const mapRegion = {
    latitude: 47.608013,
    longitude: -122.335167,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() => {
    dispatch(fetchProjectsStart(token));
  }, []);

  useEffect(() => {}, [showModal]);

  const handleClick = (project) => {
    setProject(project);
    setShowModal(true);
  };

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView region={mapRegion} style={StyleSheet.absoluteFillObject}>
        {success &&
          success.map((element, index, array) => {
            const { id, name, latitude, longitude, status } = element;
            return (
              <View key={id}>
                <Marker
                  coordinate={{ latitude: latitude, longitude: longitude }}
                  onPress={() => handleClick(element)}
                >
                  <View style={styles.markerWrapper}>
                    <View style={styles.pinTitleWrapper}>
                      <Text style={styles.pinTitle}>{name}</Text>
                    </View>
                    <Image source={status ? pinGreen : pinRed} />
                  </View>
                </Marker>
              </View>
            );
          })}
      </MapView>
      <View>
        {showModal && (
          <Modal
            project={project}
            isVisible={showModal}
            setShowModal={setShowModal}
            navigation={navigation}
          />
        )}
      </View>
    </View>
  );
};

export default MapScreen;
