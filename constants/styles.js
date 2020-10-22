import {StyleSheet} from 'react-native'

import colors from './colors'

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
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
  labelWrapper: {
    marginTop: 10,
    width: '60%',
  },
  labelText: {
    fontFamily: 'regular',
    fontSize: 11,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
    color: colors.contrast,
    width: '60%',
    fontSize: 16,
    height: 30,
    paddingTop: 4,
    backgroundColor: colors.background,
  },
  error: {},
  form: {
    width: '100%',
    alignItems: 'center',
  },
  buttonTitle: {
    fontFamily: 'light',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  button: {},
  buttonIos: {
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
  projectOverlay: {
    width: '80%',
    borderRadius: 4,
    padding: 10,
  },
  modalHeaderGreen: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.green,
  },
  modalHeaderRed: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.red,
  },
  modalNameWrapper: {
    justifyContent: 'center',
    paddingLeft: 5,
  },
  modalNameTextLight: {
    fontFamily: 'light',
    fontSize: 13,
  },
  modalStatusWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalNameText: {
    fontSize: 14,
    fontFamily: 'regular',
  },
  modalDate: {
    marginTop: 10,
  },
  modalDescription: {
    marginTop: 10,
  },
  modalAddress: {
    marginTop: 10,
  },
  showMore: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 100,
    height: 35,
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
  singleProjectWrapper: {
    paddingHorizontal: 10,
  },
  generalInfo: {
    fontSize: 22,
    fontFamily: 'regular',
    marginTop: 20,
    marginBottom: 15,
  },
  projectNameWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  projectNameLabel: {
    fontSize: 15,
    fontFamily: 'regular',
    color: colors.borderColor,
  },
  projectNameLabelGreen: {
    fontSize: 15,
    fontFamily: 'regular',
    color: colors.green,
  },
  projectNameLabelRed: {
    fontSize: 15,
    fontFamily: 'regular',
    color: colors.red,
  },
  projectName: {
    fontSize: 17,
    fontFamily: 'regular',
    color: colors.black,
  },
  detailWrapper: {
    marginTop: 20,
  },
})
