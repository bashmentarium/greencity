import React, {useState, useEffect, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {View, StyleSheet} from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import ProfileButton from '../../components/ProfileButton'
import Modal from '../../components/Modal'
import {fetchProjectsStart, projectsSelector} from '../../ducks/projects'
import color from '../../utils/rgb'
import styles from '../../constants/styles'

const initialLocation = {
  lat: 37.78,
  lng: -122.43,
}

const MapScreen = ({navigation}) => {
  const [project, setProject] = useState({})
  const [showModal, setShowModal] = useState(false)
  const {loading, success, error} = useSelector(projectsSelector)
  const token = useSelector((state) => state.login.success.token)
  const [selectedLocation, setSelectedLocation] = useState(initialLocation)
  const dispatch = useDispatch()

  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  useEffect(() => {
    dispatch(fetchProjectsStart(token))
  }, [])

  useEffect(() => {}, [showModal])

  const handleClick = (project) => {
    setProject(project)
    setShowModal(true)
  }

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView region={mapRegion} style={StyleSheet.absoluteFillObject}>
        {success &&
          success.map((element, index, array) => {
            const {id, name, latitude, longitude} = element
            const pinColor = color()
            return (
              <View key={id}>
                <Marker
                  title={name}
                  coordinate={{latitude: latitude, longitude: longitude}}
                  pinColor={pinColor}
                  onPress={() => handleClick(element)}
                />
              </View>
            )
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
