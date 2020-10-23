import React from 'react'
import {ScrollView, Text, TouchableOpacity} from 'react-native'
import {useSelector} from 'react-redux'
import ProfileButton from '../../components/ProfileButton'
import Project from '../../components/Project'

import styles from '../../constants/styles'

const Projects = ({navigation}) => {
  const projects = useSelector((state) => state.projects.success || [])
  return (
    <ScrollView>
      {projects.map((project, index, array) => (
        <Project
          key={project.id}
          project={project}
          navigation={navigation}
          index={index <= array.length - 1 ? index + 1 : null}
          length={array.length}
        />
      ))}
    </ScrollView>
  )
}

Projects.navigationOptions = ({navigation}) => ({
  headerTitleStyle: {
    fontFamily: 'light',
    fontSize: 19,
  },
  headerRight: () => <ProfileButton navigation={navigation} />,
  headerBackTitle: null,
})

export default Projects
