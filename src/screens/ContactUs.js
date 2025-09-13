import React, {useEffect, useState, useCallback, useRef} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Pressable,
  Platform,
  TouchableOpacity,
  Text,
  Alert,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  ActivityIndicator,
  StyleSheet,
  I18nManager,
  BackHandler,
  Button,
  Dimensions,
} from 'react-native';
// import {useSelector} from 'react-redux';
// import * as i18n from '../localization/i18n';
import {globalStyles} from '../styles/GlobalStyles';
// import HeaderBack from '../component/HeaderBack';
// import {getInstrumentedAxiosInstance} from '../globs/ajax-proxy';
// import PhoneInput from 'react-native-phone-number-input';
// import CloseCrossIcon from '../../assets/images/close-cross.svg';
// import CloseCrossIcon from '../assets/images/close-cross.svg';
// import ErrorImage from '../assets/images/404_Error.svg';

// import Recaptcha from 'react-native-recaptcha-that-works';
// import Recaptcha, {RecaptchaHandles} from 'react-native-recaptcha-that-works';
// import {any} from 'prop-types';
// import {BottomSheet} from '../component/BottomSheet';
// import {getTestId} from '../utils/testHelper';

export default function RaiseRequest({navigation, props}) {
  // const [showSuccessPop, setshowSuccessPop] = useState(false);
  // const [visible, setVisible] = useState(false);
  // const [isLoading, setisLoading] = React.useState(false);
  // const [numberErr, setnumberErr] = React.useState('');
  // const [emailErr, setemailErr] = React.useState('');
  // const [countryCodeIso, setCountryCodeIso] = useState('');
  // const [countryCode, setCountryCode] = React.useState('');
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [key, setKey] = useState('');
  // const [captchaErr, setCaptchaErr] = useState(false);
  // const [submitErr, setSubmitErr] = useState(false);
  // const [submitErrMsg, setSubmitErrMsg] = useState(false);
  // const [contactUsData, setContactUsData] = useState({
  //   name: contactUsData?.name,
  //   phoneNumber: contactUsData?.phoneNumber,
  //   phoneNumberWithCountryCode: contactUsData?.phoneNumberWithCountryCode,
  //   email: contactUsData?.email,
  //   title: contactUsData?.title,
  //   description: contactUsData?.description,
  // });

  const scrollRef = useRef();

  // const phoneInput = React.useRef(null);

  // const locale = useSelector(state => state.languageReducer.locale);

  // const validEmail = str => {
  //   const regExpression = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  //   return regExpression.test(str);
  // };

  // const toggleBottomNavigationView = () => {
  //   //Toggling the visibility state of the bottom sheet
  //   setVisible(false);
  // };

  // const _goBack = () => {
  //   setVisible(false);
  //   navigation.goBack();
  // };

  // const _gotoBackScreen = () => {
  //   setVisible(true);
  //   // navigation.goBack()
  // };

  // useEffect(() => {
  //   const backAction = () => {
  //     // navigation.goBack();
  //     setVisible(true);
  //     return true;
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

  // React.useEffect(() => {}, []);

  // const recaptcha = useRef();

  // React.useEffect(() => {
  //   // recaptcha.current.open();
  // }, []);

  // const isOnline = useSelector(
  //   state => state?.internetReducer?.isInternet?.isConnected,
  // );

  // const localeData = useSelector(
  //   state => state.businessReducer.business?.locale || '',
  // );

  // const countryName = localeData.split('-');

  // const _varifyCaptcha = () => {
  //   // console.log('recaptcha!', recaptcha);
  //   recaptcha.current.open();
  // };

  // const onVerify = token => {
  //   // console.log('success', token);
  //   // setKey(token);
  //   _verifyCaptchaApi(token);
  // };

  // const _verifyCaptchaApi = async val => {
  //   setisLoading(true);
  //   // console.log('_verifyCaptcha_token', val);
  //   const url = `/api/v1/faq_verify_captcha`;
  //   const formData = new FormData();
  //   formData.append('token', val);
  //   // const request_data = {
  //   //   token: val,
  //   // };
  //   // console.log('formdata', formData);

  //   getInstrumentedAxiosInstance()
  //     .post(url, formData)
  //     .then(res => {
  //       // console.log('res.status', res);
  //       if (res.status === 200) {
  //         setKey(res.data.message);
  //         submit();
  //       }
  //       setisLoading(false);
  //     })
  //     .catch(err => {
  //       console.log('_verifyCaptcha', err);
  //       setKey('');
  //       setCaptchaErr(true);
  //       setisLoading(false);
  //     });
  // };

  // const onExpire = () => {
  //   console.warn('expired!');
  // };

  // const handleError = async () => {
  //   setCaptchaErr(false);
  //   setSubmitErr(false);
  //   let errorFound = false;
  //   if (contactUsData?.email === '') {
  //     await setemailErr(i18n.t('PleaseEnterEmailAddress'));
  //     errorFound = true;
  //   } else if (
  //     contactUsData?.email !== '' &&
  //     !validEmail(contactUsData?.email)
  //   ) {
  //     await setemailErr(i18n.t('PleaseEnterCorrectEmailAddress'));
  //     errorFound = true;
  //   } else {
  //     setemailErr('');
  //   }
  //   // console.log('errorfound', errorFound);
  //   if (!errorFound) {
  //     // submit();
  //     _varifyCaptcha();
  //   }
  // };

  // const submit = async () => {
  //   setisLoading(true);
  //   console.log('name', contactUsData);

  //   // console.log(
  //   //   'phoneNumberWithCountryCode',
  //   //   contactUsData?.phoneNumberWithCountryCode,
  //   // );
  //   // console.log('countryCodeIso', countryCodeIso);
  //   // console.log('countryCode', countryCode);
  //   // console.log('email', contactUsData?.email);
  //   // console.log('title', contactUsData?.title);
  //   // console.log('description', contactUsData?.description);

  //   const url = `/login_contact_us`;
  //   const formData = new FormData();
  //   formData.append('name', contactUsData?.name);
  //   formData.append('phone_number', contactUsData?.phoneNumber);
  //   formData.append('country_iso2', countryCodeIso);
  //   formData.append('code', countryCode);
  //   // formData.append('phoneNumberWithCountryCode', contactUsData?.phoneNumberWithCountryCode);
  //   formData.append('email', contactUsData?.email);
  //   formData.append('title', contactUsData?.title);
  //   formData.append('description', contactUsData?.description);

  //   getInstrumentedAxiosInstance()
  //     .post(url, formData)
  //     .then(res => {
  //       // console.log('response_submit', res);

  //       if (res.data?.error != '') {
  //         // setshowSuccessPop(true);
  //         setnumberErr(res.data?.error);
  //       }
  //       if (res.data?.message == 'Success') {
  //         setnumberErr('');
  //         setshowSuccessPop(true);
  //         setisLoading(false);
  //       }
  //     })
  //     .catch(err => {
  //       console.log('submit', err.response.data.message);
  //       setisLoading(false);
  //       // setnumberErr('');
  //       if (err?.response?.data?.error === 'phoneError') {
  //         setnumberErr(err?.response?.data?.message);
  //       } else {
  //         setSubmitErrMsg(err?.response?.data?.message);
  //         setSubmitErr(true);
  //       }
  //       console.log('res', err.response);
  //     });
  // };

  // console.log('contactUsData', contactUsData);
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={{flex: 1, backgroundColor: '#F2F7FC'}}>
        {/* <HeaderBack
          pageName="Contact Us"
          header={i18n.t('ContactUs')}
          goBack={_gotoBackScreen}
        /> */}
        <KeyboardAvoidingView
          style={globalStyles.flexOne}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 40}
          enabled>
          <ScrollView ref={scrollRef}>
            <View style={styles.inputItem}>
            <Text style={styles.label}>
            {"Contact us screen"}</Text>
              {/* <Text style={styles.label}>
                {i18n.t('FullName')}
                <Text style={globalStyles.requiredAsterisk}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder={i18n.t('EnterYourFullName')}
                placeholderTextColor="#A3A1A8"
                onChangeText={name =>
                  setContactUsData({...contactUsData, name})
                }
                value={contactUsData?.name}
              />
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.label}>
                {i18n.t('PhoneNumber')}
                <Text style={globalStyles.requiredAsterisk}>*</Text>
              </Text>

              {isOnline && (
                <PhoneInput
                  containerStyle={
                    numberErr !== ''
                      ? styles.phoneInputContainerError
                      : styles.phoneInputContainer
                  }
                  textContainerStyle={
                    numberErr !== ''
                      ? styles.phoneNumberInputError
                      : styles.phoneNumberInput
                  }
                  textInputStyle={
                    numberErr !== ''
                      ? styles.phoneNumberInputError
                      : styles.phoneNumberInput
                  }
                  codeTextStyle={[
                    numberErr !== ''
                      ? styles.phoneNumberInputError
                      : styles.phoneNumberInput,
                    {
                 
                      paddingTop: Platform.OS == 'ios' ? 23 : 0,
                    },
                  ]}
                  flagButtonStyle={
                    numberErr !== ''
                      ? styles.flagSelectBtnError
                      : styles.flagSelectBtn
                  }
                  ref={phoneInput}
                  // defaultValue={''}
                  defaultValue={contactUsData.phone}
                  defaultCode={locale?.split('-')[1] || 'IN'}
                  // defaultCode={countryName[1]}
                  layout="first"
                  onChangeText={text => {
                    console.log('text', text);
                    let trimmedText = text.trim();
                    // setPhoneNumber(trimmedText);
                    console.log('trimmedText', trimmedText);
                    setContactUsData({
                      ...contactUsData,
                      phoneNumber: trimmedText,
                    });
                    // console.log('txt_phone_field--->', text);
                    setCountryCode(
                      '+' + phoneInput.current?.getCallingCode() || '',
                    );
                    setCountryCodeIso(
                      phoneInput.current?.getCountryCode() || '',
                    );

                    setnumberErr('');
                  }}
                  textInputProps={{
                    placeholder: i18n.t('EnterPhoneNumber'),
                    placeholderTextColor: '#A3A1A8',
                  }}
                  countryPickerProps={{
                    withAlphaFilter: true,
                    excludeCountries: [
                      'AF',
                      'AL',
                      'DZ',
                      'AS',
                      'AD',
                      'AO',
                      'AI',
                      'AQ',
                      'AG',
                      'AR',
                      'AM',
                      'AW',
                      'AU',
                      'AT',
                      'AZ',
                      'BS',
                      'BH',
                      'BD',
                      'BB',
                      'BY',
                      'BE',
                      'BZ',
                      'BJ',
                      'BM',
                      'BT',
                      'BO',
                      'BA',
                      'BW',
                      'BV',
                      'BR',
                      'IO',
                      'VG',
                      'BN',
                      'BG',
                      'BF',
                      'BI',
                      'KH',
                      'CM',
                      'CA',
                      'CV',
                      'BQ',
                      'KY',
                      'CF',
                      'TD',
                      'CL',
                      'CN',
                      'CX',
                      'CC',
                      'CO',
                      'KM',
                      'CK',
                      'CR',
                      'HR',
                      'CU',
                      'CW',
                      'CY',
                      'CZ',
                      'CD',
                      'DK',
                      'DJ',
                      'DM',
                      'DO',
                      'EC',
                      'SV',
                      'GQ',
                      'ER',
                      'EE',
                      'SZ',
                      'ET',
                      'FK',
                      'FO',
                      'FJ',
                      'FI',
                      'FR',
                      'GF',
                      'PF',
                      'TF',
                      'GA',
                      'GM',
                      'GE',
                      'DE',
                      'GH',
                      'GI',
                      'GR',
                      'GL',
                      'GD',
                      'GP',
                      'GU',
                      'GT',
                      'GG',
                      'GN',
                      'GW',
                      'GY',
                      'HT',
                      'HM',
                      'HN',
                      'HU',
                      'IS',
                      'IN',
                      'ID',
                      'IR',
                      'IQ',
                      'IE',
                      'IM',
                      'IL',
                      'IT',
                      'CI',
                      'JM',
                      'JP',
                      'JE',
                      'JO',
                      'KZ',
                      'XK',
                      'KW',
                      'KG',
                      'LA',
                      'LV',
                      'LB',
                      'LS',
                      'LR',
                      'LY',
                      'LI',
                      'LT',
                      'LU',
                      'MO',
                      'MK',
                      'MG',
                      'MW',
                      'MY',
                      'MV',
                      'ML',
                      'MT',
                      'MH',
                      'MQ',
                      'MR',
                      'MU',
                      'YT',
                      'MX',
                      'FM',
                      'MD',
                      'MC',
                      'MN',
                      'ME',
                      'MS',
                      'MA',
                      'MZ',
                      'MM',
                      'NA',
                      'NR',
                      'NP',
                      'NL',
                      'NC',
                      'NZ',
                      'NI',
                      'NE',
                      'NU',
                      'NF',
                      'KP',
                      'MP',
                      'NO',
                      'OM',
                      'PK',
                      'PW',
                      'PS',
                      'PA',
                      'PG',
                      'PY',
                      'PE',
                      'PN',
                      'PL',
                      'PT',
                      'PR',
                      'QA',
                      'CG',
                      'RO',
                      'RU',
                      'RW',
                      'RE',
                      'BL',
                      'SH',
                      'KN',
                      'LC',
                      'MF',
                      'PM',
                      'VC',
                      'WS',
                      'SM',
                      'SA',
                      'SN',
                      'RS',
                      'SC',
                      'SL',
                      'SG',
                      'SX',
                      'SK',
                      'SI',
                      'SB',
                      'SO',
                      'GS',
                      'KR',
                      'SS',
                      'ES',
                      'LK',
                      'SD',
                      'SR',
                      'SJ',
                      'SE',
                      'CH',
                      'SY',
                      'ST',
                      'TW',
                      'TJ',
                      'TZ',
                      'TH',
                      'TL',
                      'TG',
                      'TK',
                      'TO',
                      'TT',
                      'TN',
                      'TR',
                      'TM',
                      'TC',
                      'TV',
                      'UA',
                      'AE',
                      'GB',
                      'US',
                      'UM',
                      'VI',
                      'UY',
                      'UZ',
                      'VU',
                      'VA',
                      'VE',
                      'VN',
                      'WF',
                      'EH',
                      'YE',
                      'ZM',
                      'ZW',
                      'KI',
                      'HK',
                      'AX',
                    ],
                  }}
                />
              )}
              {numberErr !== '' && (
                <Text style={styles.errorText}>{numberErr}</Text>
              )}
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.label}>
                {i18n.t('EmailAddress')}
                <Text style={globalStyles.requiredAsterisk}>*</Text>
              </Text>
              <TextInput 
                style={[
                  emailErr !== '' ? styles.inputError : styles.input,
                  {textAlign: 'left'},
                ]}
                placeholder={i18n.t('EnterYourEmailAddress')}
                placeholderTextColor="#A3A1A8"
                onChangeText={email => {
                  setemailErr('');
                  setContactUsData({...contactUsData, email});
                }}
                value={contactUsData?.email}
              />
              {emailErr !== '' && (
                <Text style={styles.errorText}>{emailErr}</Text>
              )}
            </View>

            <View style={styles.inputItem}>
              <Text style={styles.label}>
                {i18n.t('Title')}
                <Text style={globalStyles.requiredAsterisk}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder={i18n.t('EnterTitle')}
                placeholderTextColor="#A3A1A8"
                onChangeText={title =>
                  setContactUsData({...contactUsData, title})
                }
                value={contactUsData?.title}
              />
            </View>

            <View style={styles.inputItem}>
              <Text style={styles.label}>
                {i18n.t('Description')}
                <Text style={globalStyles.requiredAsterisk}>*</Text>
              </Text>
              <View style={styles.textareaContainer}>
                <TextInput
                  onFocus={() => {
                    scrollRef.current?.scrollTo({y: 200, animated: true});
                  }}
                  style={styles.textareaInput}
                  placeholder={i18n.t('EnterDescription')}
                  placeholderTextColor="#A3A1A8"
                  onChangeText={description =>
                    setContactUsData({...contactUsData, description})
                  }
                  value={contactUsData?.description}
                  multiline
                />
              </View>
            </View>
 
            {isOnline && (
              <Recaptcha
                ref={recaptcha}
                 siteKey="6LfEucUfAAAAAHhXE0PnzbpZ0F9IZ4qaN3C6THVq"
                baseUrl="https://developers.google.com/recaptcha/docs/display"
                 onVerify={onVerify}
                onClose={() => { 
                  console.log('onClose');
                }}
                onExpire={onExpire}
                size="normal"
                onError={err => {
                  console.log('onError--381--', err);
                }}
                theme="light"
               />
            )}
       

            <View style={styles.submitBtn}>
              {captchaErr && (
                <Text style={styles.errorText}>
                  {i18n.t('UnableToVerifyCaptchaPleaseTryAgainLater')}
                </Text>
              )}
              {submitErr && (
                <Text style={styles.errorText}>
                  {!!submitErrMsg
                    ? submitErrMsg
                    : i18n.t('CouldntSubmitYourQueryPleaseTryAgainLater')}
                </Text>
              )}
              <TouchableOpacity
                accessible={false}
                disabled={
                  !contactUsData?.name ||
                  !contactUsData?.phoneNumber ||
                  !contactUsData?.email ||
                  !contactUsData?.title ||
                  !contactUsData?.description ||
                  numberErr ||
                  emailErr
              
                }
                style={
                  !contactUsData?.name ||
                  !contactUsData?.phoneNumber ||
                  !contactUsData?.email ||
                  !contactUsData?.title ||
                  !contactUsData?.description ||
                  numberErr ||
                  emailErr
                    ?  
                      globalStyles.primaryBtnDisable
                    : globalStyles.primaryBtn
                }
 
                onPress={handleError}>
                {isLoading ? (
                  <ActivityIndicator size="small" color="#ffffff" />
                ) : (
                  <Text style={globalStyles.primaryBtnText}>
                    {i18n.t('Submit')}
                  </Text>
                )}
              </TouchableOpacity> */}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        {/* {isOnline && (
          <>
            <BottomSheet
              visible={showSuccessPop}
              onBackButtonPress={() => {
                setshowSuccessPop(false);
                navigation.goBack();
              }}
              onBackdropPress={() => {
                setshowSuccessPop(false);
                navigation.goBack();
              }}>
              <View style={globalStyles.bsContainer}>
                <View style={globalStyles.bsHeader}>
                  <CloseCrossIcon
                    {...getTestId('app.crossButton')}
                    style={globalStyles.bsCloseIcon}
                    onPress={() => {
                      setshowSuccessPop(false);
                      navigation.goBack();
                    }}
                  />
                </View>
                <View style={globalStyles.bsBody}>
                  <Text style={styles.submittedText1}>
                    {i18n.t('SubmittedSuccessfully')}
                  </Text>
                  <Text style={styles.submittedText2}>
                    {i18n.t('YourQueryHasBeenSubmittedSuccessfully')}
                  </Text>
                </View>
              </View>
            </BottomSheet>

            <BottomSheet
              visible={visible}
              onBackButtonPress={toggleBottomNavigationView}
              onBackdropPress={toggleBottomNavigationView}>
              <View style={globalStyles.bsContainer}>
                <View style={globalStyles.bsHeader}>
                  <CloseCrossIcon
                    {...getTestId('app.crossButton')}
                    style={globalStyles.bsCloseIcon}
                    onPress={toggleBottomNavigationView}
                  />
                </View>
                <View style={globalStyles.alignSelfCenter}>
                  <Text style={styles.confirmText}>
                    {i18n.t(
                      'AreYouSureYouWantToContinueWithoutSubmittingThisForm',
                    )}
                  </Text>
                  <Pressable style={styles.doneBtn} onPress={_goBack}>
                    <Text style={globalStyles.primaryBtnText}>
                      {i18n.t('Yes')}
                    </Text>
                  </Pressable>
                </View>
              </View>
            </BottomSheet>
          </>
        )} */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputItem: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#0C3F60',
    paddingBottom: 10,
    alignSelf: 'flex-start',
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 11,
    padding: 20,
    fontSize: 13,
    color: '#2F3247',
    fontFamily: 'Poppins-Medium',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  textareaContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    marginBottom: 20,
  },
  textareaInput: {
    height: 120,
    textAlignVertical: 'top',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#2F3247',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  submitBtn: {
    marginHorizontal: 15,
    marginVertical: 30,
  },

  errorText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#E53838',
    position: 'relative',
    alignSelf: 'flex-start',
    bottom: 15,
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
    backgroundColor: '#FFFFFF',
    padding: 0,
    borderRadius: 11,
    color: '#0C3F60',
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    height: 60,
    textAlignVertical: 'center',
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
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 60,
    borderRadius: 11,
    marginBottom: 20,
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
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
  confirmText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#2F3247',
    padding: 20,
    textAlign: 'center',
  },
  doneBtn: {
    width: 215,
    height: 50,
    backgroundColor: '#53A5EC',
    borderRadius: 11,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  submittedText1: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#2F3247',
    paddingBottom: 15,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  submittedText2: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#2F3247',
    paddingBottom: 15,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});
