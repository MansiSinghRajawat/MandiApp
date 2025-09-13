import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Pressable,
  Keyboard,
  StyleSheet,
  StatusBar,
  LogBox,
  BackHandler,
  ActivityIndicator,
  I18nManager,
  TouchableOpacity,
} from 'react-native';
// import {appSetLocale, setTncAccepted} from '../actions';
// import {useSelector, useDispatch} from 'react-redux';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';


// import * as i18n from '../localization/i18n';
import HeaderBack from '../component/HeaderBack';
import {globalStyles} from '../styles/GlobalStyles';
// import {SET_LOCALE} from '../actions/languageAction';
// import {getInstrumentedAxiosInstance} from '../globs/ajax-proxy';
// import {setIsVerified, loginSuccess, setUserAndInfo} from '../actions';
// import {getItem, setItem} from '../local/AsyncStorageUtil';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
// import {getCustomEvents} from '../utils/google-analytics';
import {useIsFocused, useNavigationState} from '@react-navigation/native';
// import {getTestId} from '../utils/testHelper';
import PageLoader from '../component/PageLoader';
import {COLORS, PERCENTAGE, SIZES, WEIGHT, IMAGES} from '../constants/theme';

const CELL_COUNT = 6;

const Otp = ({navigation, route}) => {
  // const {email, phone, otp, country_iso2, code, isSuper} = route.params;
  const [otpErrorMsg, setOtpErrorMsg] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpDisplay, setOtpDisplay] = useState('');
  // const [counter, setCounter] = useState(60); // set your own timer configurable
  const [random, setRandom] = useState(Math.random());
  const [disabled, setDisabled] = useState(true);
  // const userState = useSelector(state => state.userReducer?.user?.data);
  // const isFocused = useIsFocused();

  const [demoSecond, setDemoSecond] = useState(30);
  const [demoMinute, setDemoMinute] = useState(0);

  const [translatedSecond, setTranslatedSecond] = useState();
  const [translatedMinute, setTranslatedMinute] = useState();

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  // useEffect(() => {
  //   const demoTimer = setInterval(() => {
  //     setDemoSecond(demoSecond - 1);
  //     setDemoMinute(0);
  //     var _seconds = demoSecond - 1;
  //     if (_seconds < 0) {
  //       clearInterval(demoTimer);
  //      } else {
  //       if (_seconds == 0) {
  //         setDisabled(false);
  //       }
  //       setDemoSecond(_seconds);
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(demoTimer);
  //   };
  // });


  useEffect(() => {
    if (demoSecond <= 0) {
      if (demoSecond == 0) {
        setDisabled(false);
      }
      return;
    }  

    const timer = setInterval(() => {
      setDemoSecond((prev) => prev - 1);
    }, 1000);  

    return () => clearInterval(timer);  
  }, [demoSecond]);


  // useEffect(() => {
  //   renderDemoMinuteCounter(demoMinute);
  // });

  const renderDemoMinuteCounter = async _count => {
    //   let userLocale = await getItem('locale');
    //   userLocale = userLocale === 'ar-AE' ? 'ar-EG' : userLocale;
    const value = _count;
    setTranslatedMinute(value);
    //   const thousandSep = new Intl.NumberFormat(userLocale).format(value);
    //   setTranslatedMinute(thousandSep);
  };

  const renderDemoSecondCounter = async _count => {
    //   let userLocale = await getItem('locale');
    //   userLocale = userLocale === 'ar-AE' ? 'ar-EG' : userLocale;
    const value = _count;
    //   const thousandSep = new Intl.NumberFormat(userLocale).format(value);
    if (value == 0) {
      setDisabled(false);
    }
    setDemoSecond(_seconds);
    // setTranslatedSecond(value);
    //   setTranslatedSecond(thousandSep);
  };

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  LogBox.ignoreLogs([
    'Warning: ...',
    'VirtualizedLists should never be nested inside plain ScrollViews',
  ]);
  // const locale = useSelector(
  //   state => state.languageReducer.locale || i18n.DEFAULT_LANGUAGE,
  // );

  // const dispatch = useDispatch();

  // const isOtpDisable = value === '';

  // React.useEffect(() => {
  //   setOtpDisplay(otp);
  // }, []);

  // const localizationChange = locale => {
  //   dispatch(appSetLocale(locale, SET_LOCALE));
  // };

  const resendOtp = () => {
      setDemoMinute(0);
      setDemoSecond(30);

    //   setTranslatedSecond(translatedMinute);
    //   getCustomEvents(
    //     'ResendOTPClicked',
    //     'Click ToResendOTP',
    //     'Login Activity',
    //     {},
    //   );

      setDisabled(true);
      setOtpErrorMsg('');
      setRandom(Math.random());

    //   const url = '/businesses/resend_otp';
    //   getInstrumentedAxiosInstance()
    //     .post(url, {
    //       email: email,
    //       phone: phone,
    //       code: code,
    //       country_iso2: country_iso2,
    //     })
    //     .then(res => {
    //       if (res.data.otp) {
    //         setOtpDisplay(res.data.otp);
    //       }
    //     })
    //     .catch(err => {
    //       setOtpErrorMsg(err.response.data.message);
    //     });

  };

  const sendOtp = text => {
    setValue(text);
  };

  const onVerifyOtp = otpText => {
    setOtpLoading(true);
    setTimeout(() => {
      setOtpLoading(false);
      navigation.navigate('BottomTabNav')
    }, 3000);
    //   const url = '/businesses/verifyloginotp';
    //   getInstrumentedAxiosInstance()
    //     .post(url, {
    //       email: email,
    //       phone: phone,
    //       otp: otpText,
    //       code: code,
    //       country_iso2: country_iso2,
    //     })
    //     .then(res => {
    //       if (res.data.status) {
    //         const id = res.data.id;
    //         setItem('token', res.data._user_token);
    //         setItem('digital_ordering_system', res.data.digital_order_system);
    //         setOtpErrorMsg('');
    //         const userDetails = {
    //           email,
    //           phone,
    //         };
    //         const userDataUrl = `/businesses/users/${id}`;
    //         getInstrumentedAxiosInstance()
    //           .get(userDataUrl)
    //           .then(val => {
    //             console.log('val ===================================>', val);
    //             dispatch(setUserAndInfo(val));
    //             dispatch(loginSuccess(userDetails));
    //             dispatch(setIsVerified(true));
    //             setOtpLoading(false);
    //             getCustomEvents('user_info', 'User Info', 'User Info', [
    //               {
    //                 user_id: val.data.data.id,
    //                 dimension1: val.data.data.first_name,
    //                 dimension4: val.data.data.default_business_id,
    //                 dimension5:
    //                   val.data.data.country && val.data.data.country.name
    //                     ? val.data.data.country.name
    //                     : '',
    //               },
    //             ]);
    //           })
    //           .catch(err => {
    //             setOtpLoading(false);
    //           });
    //       } else {
    //         getCustomEvents(
    //           'ViewErrorOTP',
    //           'View ErrorOTP',
    //           'Login Activity',
    //           {},
    //         );
    //         dispatch(setIsVerified(false));
    //         setOtpLoading(false);
    //         setOtpErrorMsg(res.data.message);
    //       }
    //     })
    //     .catch(err => {
    //       setOtpLoading(false);
    //       setOtpErrorMsg(err.response.data.message);
    //     });
  };

  return (
    <LinearGradient
      colors={[COLORS.GRADIENT_FIRST, COLORS.GRADIENT_SECOND]}
      style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.GRADIENT_FIRST}
      />
      <SafeAreaView style={globalStyles.safeArea}>
        <HeaderBack pageName={'OTP'} goBack={navigation.goBack} />
        <ScrollView>
          <View style={styles.otpPage}>
            <TouchableOpacity
              style={styles.otp}
              onPress={() => navigation.navigate('BottomTabNav')}>
              <Text style={styles.otpText}>OTP : {otpDisplay}</Text>
            </TouchableOpacity>
            {/* <AntDesign name="left" size={30} color="#FFF" /> */}
            <Text style={styles.verifyingText}>Verifying</Text>
            <View>
              <Text style={styles.enterCodeText}>
                Enter The Code Sent To Your Phone Number
              </Text>
            </View>
            <View>
              <CodeField
                // showSoftInputOnFocus={false}
                ref={ref}
                {...props}
                caretHidden={false}
                value={value}
                onChangeText={text => {
                  setValue(text.replace(/[^0-9]/g, ''));
                  if (text.length === 6) {
                    onVerifyOtp(text);
                  }
                }}
                cellCount={CELL_COUNT}
                autoFocus={true}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={
                      otpErrorMsg
                        ? styles.otpNumberBoxError
                        : styles.otpNumberBox
                    }
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
              {otpLoading ? <PageLoader /> : null}
            </View>
            <View
              style={[
                globalStyles.rowSpaceBetween,
                styles.resendCodeTextCountDown,
              ]}>
              <Pressable
                style={styles.resendCodeContainer}
                onPress={resendOtp}
                disabled={disabled}
                opacity={disabled ? 0.5 : 1}>
                <Text style={styles.resendCodeText}>Resend Security Code</Text>
              </Pressable>

              <View style={styles.countdownText}>
                <Text style={styles.countdownNumberText}>{demoMinute}</Text>
                <Text style={styles.colonText}> : </Text>
                <Text style={styles.countdownNumberText}>{demoSecond}</Text>
              </View>

              {/* <View style={styles.countdownText}>
                <Text style={styles.countdownNumberText}>
                  {demoMinute < 10
                    ? translatedMinute + translatedMinute
                    : translatedMinute}
                </Text>
                <Text style={styles.colonText}> : </Text>
                <Text style={styles.countdownNumberText}>
                  {demoSecond < 10
                    ? translatedMinute + translatedSecond
                    : translatedSecond}
                </Text>
              </View> */}
            </View>
            <View>
              {!otpErrorMsg ? (
                <View>
                  {false && (
                    <View>
                      <Text style={styles.noCodeText}>
                        No Security Code Received
                      </Text>
                      <Text style={styles.tapGetHelpText}>
                        <Text
                          style={styles.textLink}
                          onPress={() => navigation.navigate('Faq')}>
                          Tap Here{' '}
                        </Text>
                        To Get Help
                      </Text>
                    </View>
                  )}
                </View>
              ) : (
                <Text style={styles.unableVerifyCodeText}>
                  Unable To Verify Security Code{' '}
                  <Text style={styles.errorText}>Please Try Again</Text>
                </Text>
              )}
            </View>
          </View>{' '}
          *
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  otpPage: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  verifyingText: {
    fontSize: 38,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
    color: COLORS.WHITE,
    marginHorizontal: 20,
    alignSelf: 'flex-start',
  },
  enterCodeText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 30,
    marginHorizontal: 20,
    color: COLORS.WHITE,
    alignSelf: 'flex-start',
  },
  resendCodeTextCountDown: {
    paddingTop: 10,
    marginHorizontal: 20,
  },
  resendCodeContainer: {
    width: '75%',
  },
  resendCodeText: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    // color: '#53A5EC',
    color: COLORS.WHITE,
    textDecorationLine: 'underline',
  },
  noCodeText: {
    color: COLORS.WHITE,
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    marginTop: 20,
  },
  separatorText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#0C3F60',
  },
  countdownNumberBg: {
    backgroundColor: '#FFFFFF',
  },
  countdownText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  countdownNumberText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    // color: '#0C3F60',
    color: COLORS.WHITE,
    minWidth: 20,
    textAlign: 'center',
  },
  colonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: COLORS.WHITE,
    position: 'relative',
    bottom: 1,
  },
  submitBtn: {
    height: 60,
    backgroundColor: '#53A5EC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#53a5ec',
    shadowOpacity: 1.0,
    elevation: 10,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  submitDisableBtn: {
    height: 60,
    backgroundColor: '#53A5EC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#53a5ec',
    shadowOpacity: 1.0,
    elevation: 10,
    marginVertical: 20,
    marginHorizontal: 20,
    opacity: 0.5,
  },

  submitBtnIos: {
    height: 60,
    backgroundColor: '#53A5EC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    // shadowOffset: {width: 10, height: 10},
    // shadowColor: '#53a5ec',
    // shadowOpacity: 1.0,
    // elevation: 10,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  submitnDisableBtnIos: {
    height: 60,
    backgroundColor: '#53A5EC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    // shadowOffset: {width: 10, height: 10},
    // shadowColor: '#53a5ec',
    // shadowOpacity: 1.0,
    // elevation: 10,
    marginVertical: 20,
    marginHorizontal: 20,
    opacity: 0.5,
  },
  submitBtnText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  tapGetHelpText: {
    color: COLORS.WHITE,
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
  },
  otpNumberBox: {
    width: 50,
    height: 60,
    // backgroundColor: '#EDF6FD',
    backgroundColor: COLORS.WHITE,
    borderRadius: 11,
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#0C3F60',

    lineHeight: 65,
    textAlign: 'center',
    marginHorizontal: 2,
    overflow: 'hidden',
  },
  otpNumberBoxError: {
    width: 50,
    height: 60,
    backgroundColor: '#E538381A',
    borderRadius: 11,
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#E53838',
    lineHeight: 65,
    textAlign: 'center',
    marginHorizontal: 2,
    overflow: 'hidden',
  },
  otp: {
    minWidth: 200,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    marginBottom: 20,
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: COLORS.WHITE,
  },
  unableVerifyCodeText: {
    color: COLORS.WHITE,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    marginTop: 20,
    marginHorizontal: 20,
    alignSelf: 'flex-start',
  },
  textLink: {
    textDecorationLine: 'underline',
    color: COLORS.WHITE,
  },
  errorText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#E53838',
  },
  codeFieldRoot: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  },
});

export default Otp;
