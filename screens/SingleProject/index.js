import React from 'react'
import {View, Text, Image} from 'react-native'
import ProfileButton from '../../components/ProfileButton'

import styles from '../../constants/styles'

const map_preview = require('../../assets/images/map_preview.png')

const SingleProject = ({navigation}) => {
  const project = navigation.getParam('project')
  const {name, status, address, start_date, description} = project

  return (
    <View style={styles.singleProjectWrapper}>
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
    </View>
  )
}

SingleProject.navigationOptions = ({navigation}) => ({
  headerTitle: 'Project details',
  headerTitleStyle: {
    fontFamily: 'light',
    fontSize: 19,
  },
  headerRight: () => <ProfileButton navigation={navigation} />,
})

export default SingleProject
