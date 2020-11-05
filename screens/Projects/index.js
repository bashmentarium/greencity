import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import ProfileButton from '../../components/ProfileButton';
import Project from '../../components/Project';

import styles from '../../constants/styles';
import colors from '../../constants/colors';

const Projects = ({ navigation }) => {
  const projects = useSelector((state) => state.projects.success || []);

  navigation.setOptions({
    headerTitle: 'Projects',
    headerTitleStyle: {
      fontFamily: 'light',
      fontSize: 19,
      color: colors.black,
    },
    headerRight: () => <ProfileButton navigation={navigation} />,
  });

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
  );
};

export default Projects;
