import {StyleSheet} from 'react-native';
import { COLORS } from '../constants/theme';

export const globalStyles = StyleSheet.create({
   
  flexOne: {
    flex: 1,
  },
  //Page Styles
  safeArea: {
    flex: 1,
    // backgroundColor: COLORS.WHITE,
  },
  pageBg: {
    flex: 1,
    //  backgroundColor: COLORS.APP_THEME,
  },
  //Button Styles
  primaryBtn: {
    width: '100%',
    height: 60,
    backgroundColor: '#53A5EC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#53a5ec',
    shadowOpacity: 1.0,
    elevation: 10,
  },
  primaryBtnDisable: {
    width: '100%',
    height: 60,
    backgroundColor: '#53A5EC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#53a5ec',
    shadowOpacity: 1.0,
    elevation: 10,
    opacity: 0.5,
  },
  primaryBtnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#ffffff',
  },
  //Input & Error Styles
  inputItem: {
    position: 'relative',
  },
  errorFromLeft: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#E53838',
    padding: 5,
  },
  errorInCenter: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#E53838',
    textAlign: 'center',
    padding: 5,
  },
  requiredAsterisk: {
    color: '#E53838',
  },
  //Flexbox Styles
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowAlignTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rowItemCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  columnItemCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //Width Styles
  widthLeftRight: {
    width: '45%',
  },
  // Bottomsheet Styles
  bsContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingVertical: 20,
    marginTop: 20,
  },
  bsHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  bsCloseIcon: {
    position: 'absolute',
    top: 0,
    left: 20,
  },
  bsHeaderText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#2F3247',
    width: '70%',
    textAlign: 'center',
  },
  bsBody: {
    padding: 20,
  },
  bsMessage: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#2F3247',
    textAlign: 'center',
    paddingVertical: 20,
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000',
    opacity: 0.4,
    zIndex: 1,
  },
  modalInCenter: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 11,
    padding: 20,
  },
  modalCloseIcon: {
    alignSelf: 'flex-start',
  },
  modalMessage: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#2F3247',
    textAlign: 'center',
    paddingVertical: 20,
  },
  modalSingleBtn: {
    width: 160,
    height: 50,
    backgroundColor: '#53A5EC',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  modalSingleBtnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
