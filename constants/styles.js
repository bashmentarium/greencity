import {StyleSheet} from 'react-native'

import colors from './colors'

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButton: {
    width: '50%',
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  mapScreen: {
    flex: 1,
  },
  headerProfileButton: {
    width: 45,
    height: 45,
    justifyContent: 'center',
  },
  headerProfileImage: {
    width: 35,
    height: 35,
  },
})
