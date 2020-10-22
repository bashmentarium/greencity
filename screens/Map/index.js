import React, {useState, useEffect, useCallback} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import ProfileButton from '../../components/ProfileButton'

const pin = require('../../assets/images/icons/pin.png')
import color from '../../utils/rgb'
import styles from '../../constants/styles'

const initialLocation = {
  lat: 37.78,
  lng: -122.43,
}

const MapScreen = ({navigation}) => {
  const [projects, setProjects] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState(initialLocation)

  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  useEffect(() => {}, [])

  const selectLocationHandler = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    })
  }

  const markerCoordinates = {
    latitude: selectedLocation.lat,
    longitude: selectedLocation.lng,
  }

  return (
    <MapView region={mapRegion} style={styles.mapScreen}>
      <Marker
        coordinate={{latitude: 37.78, longitude: -122.43}}
        pinColor={color()}
        onClick={() => handleClick()}
      />
      <Marker
        coordinate={{latitude: 37.77, longitude: -122.4}}
        pinColor={color()}
        onClick={() => handleClick()}
      />
      <Marker
        coordinate={{latitude: 37.79, longitude: -122.4}}
        pinColor={color()}
        onClick={() => handleClick()}
      />
    </MapView>
  )
}

MapScreen.navigationOptions = ({navigation}) => ({
  headerTitleStyle: {
    fontFamily: 'light',
    fontSize: 19,
  },
  headerRight: () => <ProfileButton navigation={navigation} />,
})

export default MapScreen
