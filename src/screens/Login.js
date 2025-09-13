import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Platform,
  I18nManager,
  ImageBackground,
  
  Button,
  BackHandler,
  Animated,
  KeyboardAvoidingView,
  Modal,
  Dimensions,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {globalStyles} from '../styles/GlobalStyles';

import PhoneInput from 'react-native-phone-number-input';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, PERCENTAGE, SIZES, WEIGHT, IMAGES} from '../constants/theme';



const Login = ({navigation, props, route}) => {
  const [phone, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countryCodeIso, setCountryCodeIso] = useState('');
    const phoneInput = React.useRef(null);
  const imageClickit = require('../assets/images/aslide-one.png');
  const [loading, setLoading] = useState(false);

  const isLoginDisablePhone = phone === '';

  const slideAnim = useRef(new Animated.Value(300)).current; // Start off-screen (to the right)

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // Move to the center
      duration: 1000, // 1 second
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const loginWithPhone = () => {
    navigation.navigate('Otp');
  };

 


  

  return (
    <SafeAreaView
      style={[globalStyles.safeArea, {backgroundColor: COLORS.WHITE}]}>
      {/* {showLoding ? (
          <ClickitLottie show={showLoding} />
        ) : ( */}
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE} />
      <KeyboardAvoidingView
        style={globalStyles.flexOne}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 30 : 40}
        enabled>
        <ScrollView>
          <View style={styles.loginPage}>
            {/* <Image source={IMAGES.APP_ICON} style={styles.appIconStyle} /> */}
            <View style={{}}>
              <Animated.Image
                source={IMAGES.APP_ICON} // Replace with your image path
                style={[
                  styles.appIconStyle,
                  {
                    transform: [{translateX: slideAnim}],
                  },
                ]}
              />
              <Image
                source={IMAGES.LOGIN_CROP}
                resizeMode="contain"
                style={styles.countryLogoImg}
              />
            </View>
            {/* <View> */}
            <LinearGradient
              colors={[COLORS.GRADIENT_FIRST, COLORS.GRADIENT_SECOND]}
              style={{
                // flex: 1,
                // paddingVertical: 50,
                // paddingBottom: 100,
                borderTopLeftRadius: 45,
                borderTopRightRadius: 45,
              }}>
              <View style={{marginHorizontal: 30, paddingVertical: 30}}>
                <View style={styles.inputItem}>
                  <Text style={styles.loginText}>Login</Text>
                  <Text style={styles.enterLoginText}>
                    Enter Your Number To Login
                  </Text>
                  {/* {isOnline && ( */}
                  <>
                    <PhoneInput
                      containerStyle={styles.phoneInputContainer}
                      textContainerStyle={styles.phoneNumberInput}
                      textInputStyle={styles.phoneNumberInput}
                      codeTextStyle={[
                        styles.phoneNumberInput,
                        {
                          paddingTop: Platform.OS == 'ios' ? 23 : 0,
                        },
                      ]}
                      flagButtonStyle={styles.flagSelectBtn}
                      ref={phoneInput}
                      defaultValue={''}
                      defaultCode={'IN'}
                      layout="first"
                      onChangeText={text => {
                        let trimmedText = text.trim();
                        setPhoneNumber(trimmedText);
                      }}
                      onChangeFormattedText={text => {
                        setCountryCode(
                          '+' + phoneInput.current?.getCallingCode() || '',
                        );
                        setCountryCodeIso(
                          phoneInput.current?.getCountryCode() || '',
                        );
                       }}
                      textInputProps={{
                        placeholder: 'Enter Phone Number',
                        placeholderTextColor: '#A3A1A8',
                      }}
                      countryPickerProps={{
                        withAlphaFilter: true,
                        flatListProps: {
                          ListHeaderComponent: (
                            <View
                              style={{
                                height: 45,
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Text style={globalStyles.bsHeaderText}>
                                {' '}
                                Select country code{' '}
                              </Text>
                            </View>
                          ),
                          paddingHorizontal: 15,
                          ItemSeparatorComponent: false,
                          width: '80%',
                        },
                        closeButtonImageStyle: {
                          height: 25,
                          width: 25,
                          borderRadius: 12.5,
                          borderColor: 'rgb(28,62,93)',
                          borderWidth: 1,
                          // backgroundColor: 'rgb(28,62,93)',
                        },
                        modalProps: {
                          animationType: 'fade',
                        },
                        containerButtonStyle: {
                          borderRadius: 20,
                        },
                        // filterProps: {},
                        // closeButtonImage: {},
                        // closeButtonStyle: {backgroundColor: 'red'},
                        // withCloseButton: false,
                        // countryCodes: ['KR', 'US', 'IN'],
                      }}
                      // autoFocus
                    />
                    {/* // */}
                  </>
                </View>
 
                <TouchableOpacity
                  accessible={false}
                  style={
                    isLoginDisablePhone
                      ? [styles.loginDisableBtn]
                      : [styles.loginBtn]
                  }
                  onPress={loginWithPhone}
                  disabled={isLoginDisablePhone}>
                  {loading ? (
                    <ActivityIndicator size="large" color="#ffffff" />
                  ) : (
                    <Text style={styles.loginBtnText}>{'Login'}</Text>
                  )}
                </TouchableOpacity>
              </View>
              {/* </View> */}
            </LinearGradient>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={{backgroundColor: COLORS.GRADIENT_SECOND}}>
        <Pressable
          // onPress={() => {
          //   navigation.navigate('Faq');
          // }}
          style={[globalStyles.rowItemCenter, styles.getHelp]}>
          {/* <GetHelpIcon /> */}
          <Text style={styles.getHelpText}>{'Get Help'}</Text>
        </Pressable>
        <Text style={styles.appVersionText}>{'AppVersion 0.01'}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginPage: {
    // marginVertical: 20,
    // marginHorizontal: 30,
  },
  countryLogoImg: {
    alignSelf: 'center',
    // marginTop: 25,
    marginVertical: 20,
    // marginBottom: 55,
    width: '90%',
    height: 200,
  },
  appIconStyle: {
    marginTop: 20,
    // marginBottom: 55,
    width: 100,
    height: 100,
    // tintColor:COLORS.WHITE,
    alignSelf: 'center',
  },
  loginText: {
    color: COLORS.WHITE,
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
    // marginBottom: 10,
    alignSelf: 'flex-start',
  },
  enterLoginText: {
    color: COLORS.WHITE,
    // marginBottom: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  phoneEmailTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#EDF6FD',
    height: 40,
    borderRadius: 11,
    marginBottom: 25,
  },
  phoneEmailTab: {
    height: 40,
    borderRadius: 11,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneEmailTabActive: {
    backgroundColor: '#53A5EC',
    height: 40,
    borderRadius: 11,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#53a5ec',
    shadowOpacity: 1.0,
    elevation: 10,
  },
  phoneEmailTabActiveIos: {
    backgroundColor: '#53A5EC',
    height: 40,
    borderRadius: 11,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    // shadowOffset: {width: 10, height: 10},
    // shadowColor: '#53a5ec',
    // shadowOpacity: 1.0,
    // elevation: 10,
  },

  phoneEmailTabText: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  phoneEmailTabActiveText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  regPhoneEmail: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#A3A1A8',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  inputItem: {
    position: 'relative',
  },
  errorText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#E53838',
    position: 'relative',
    bottom: 15,
    alignSelf: 'flex-start',
  },
  input: {
    backgroundColor: '#EDF6FD',
    height: 60,
    borderRadius: 11,
    padding: 20,
    marginBottom: 20,
    color: '#0C3F60',
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
  },
  inputError: {
    borderWidth: 1,
    borderColor: '#E53838',
    backgroundColor: '#FDEAEA',
    color: '#0C3F60',
    borderRadius: 11,
    padding: 10,
    marginBottom: 20,
    height: 60,
  },
  phoneInputContainerError: {
    borderWidth: 1,
    borderColor: '#E53838',
    backgroundColor: '#FDEAEA',
    borderRadius: 11,
    marginBottom: 20,
    width: '100%',
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  },
  phoneInputContainer: {
    backgroundColor: COLORS.WHITE,
    width: '100%',
    height: 60,
    marginTop: 22,
    // borderRadius: 11,
    // marginBottom: 20,
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  },
  phoneNumberInputError: {
    backgroundColor: '#FDEAEA',
    padding: 0,
    borderRadius: 11,
    color: '#0C3F60',
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    height: 60,
    textAlignVertical: 'center',
  },
  phoneNumberInput: {
    backgroundColor: '#EDF6FD',
    backgroundColor: COLORS.WHITE,
    // backgroundColor: 'red',
    padding: 0,
    marginHorizontal: 2,
    marginVertical: 2,
    borderRadius: 11,
    color: '#0C3F60',
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    height: 55,
    textAlignVertical: 'center',
  },
  flagSelectBtn: {
    width: I18nManager.isRTL ? 65 : 55,
    marginLeft: I18nManager.isRTL ? 0 : 10,
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    justifyContent: 'space-between',
  },
  flagSelectBtnError: {
    width: I18nManager.isRTL ? 65 : 55,
    marginLeft: I18nManager.isRTL ? 0 : 10,
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    justifyContent: 'space-between',
  },
  loginBtn: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 11,
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#53a5ec',
    shadowOpacity: 1.0,
    elevation: 10,
    marginTop: 50,
    marginBottom: 80,
  },

  loginBtnText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  loginDisableBtn: {
    width: '100%',
    height: 60,
    // backgroundColor: '#2c2c2c',
    backgroundColor:'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 11,
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#2c2c2c',
    shadowOpacity: 1.0,
    elevation: 1,
    opacity: 0.5,
    marginTop: 50,
     marginBottom: 80,
  },

  getHelp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    marginTop: 10,
    marginHorizontal: 10,
  },
  getHelpText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: COLORS.WHITE,
    marginLeft: 7,
    top: 2,
  },
  appVersionText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    color: COLORS.WHITE,
    textAlign: 'center',
    paddingBottom: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    paddingTop: 46,
    fontSize: 18,
    textAlign: 'center',
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  success: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  failed: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginTop: 24,
  },
});

export default Login;
