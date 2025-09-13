import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Pressable,
  FlatList,
  Text,
  Image,
  LogBox,
  BackHandler,
  Animated,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
// import * as i18n from '../localization/i18n';
import {globalStyles} from '../styles/GlobalStyles';
// import HeaderBack from '../component/HeaderBack';
// import ArrowUpIcon from '../assets/images/arrow-up.svg';
// import ArrowDownIcon from '../assets/images/arrow-down.svg';
// import MessageIcon from '../assets/images/message.svg';
// import CallIcon from '../assets/images/call.svg';
// import CloseCrossIcon from '../assets/images/close-cross.svg';
// import {TextInput} from 'react-native-gesture-handler';
// import {getInstrumentedAxiosInstance} from '../globs/ajax-proxy';
// import {Linking} from 'react-native';
import PageLoader from '../component/PageLoader';
// import {useSelector} from 'react-redux';
// import Fuse from 'fuse.js';

// import NoDataFound from '../component/NoDataFound';

// import Cameroon from '../assets/images/flag-cameroon.png';
// import Egypt from '../assets/images/flag-egypt.png';
// import Guinea from '../assets/images/flag-guinea.png';
// import Kenya from '../assets/images/flag-kenya.png';
// import Madagascar from '../assets/images/flag-madagascar.png';
// import Malawi from '../assets/images/flag-malawi.png';
// import Nigeria from '../assets/images/flag-nigeria.png';
// import Philippines from '../assets/images/flag-philippines.png';
// import SouthAfrica from '../assets/images/flag-south-africa.png';
// import Tanzania from '../assets/images/flag-tanzania.png';
// import UAE from '../assets/images/flag-uae.png';
// import Uganda from '../assets/images/flag-uganda.png';
// import Zimbabwe from '../assets/images/flag-zimbabwe.png';
// import Maritius from '../assets/images/flag-maritius.png';
// import Zambia from '../assets/images/flag-zambia.png';
// import UnitedKingdom from '../assets/images/flag-united-kingdom.png';
// import {BottomSheet} from '../component/BottomSheet';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {getTestId} from '../utils/testHelper';

export default function RaiseRequest({navigation, props}) {
  // const animationHeight = useRef(new Animated.Value(0)).current;
  const [loading, setLoading] = useState(false);
  // const [callUsBottomSheet, setCallUsBottomSheet] = useState(false);
  // const [isLoding, setIsLoding] = useState(false);
  // const [list, setList] = useState([]);
  // const [loginList, setLoginList] = useState([]);
  // const [contactUsList, setContactUsList] = useState([]);
  // const [searchContacts, setSearchContacts] = React.useState('');
  // const [filterContact, setFilterContact] = React.useState([]);

  // LogBox.ignoreLogs([
  //   'Warning: ...',
  //   'VirtualizedLists should never be nested inside plain ScrollViews',
  //   'Cannot update a component (`HelpCenter`)',
  // ]);

  // useEffect(() => {
  //   const backAction = () => {
  //     navigation.goBack();
  //     return true;
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

  // const isOnline = useSelector(
  //   state => state?.internetReducer?.isInternet?.isConnected,
  // );

  // const _toggleCollapsed = (item, isRegistration) => {
  //   if (isRegistration) {
  //     let objIndex = list.findIndex(obj => obj.id == item?.item?.id);
  //     list[objIndex].isCollapsed = !list[objIndex].isCollapsed;
  //     setList([...list]);
  //   } else {
  //     let objIndex = loginList.findIndex(obj => obj.id == item?.item?.id);
  //     loginList[objIndex].isCollapsed = !loginList[objIndex].isCollapsed;
  //     setLoginList([...loginList]);
  //   }
  // };

  // useEffect(() => {
  //   setLoading(true);
  //   callUsApi();
  //   loginFaqCategories();
  //   _registrationQna();
  // }, [isOnline]);

  // const _registrationQna = async () => {
  //   const locale = await AsyncStorage.getItem('locale');
  //   setIsLoding(true);
  //   const url = `/api/v1/registration_faq_qna?locale=${locale}`;

  //   getInstrumentedAxiosInstance()
  //     .get(url)
  //     .then(res => {
  //       if (res.status) {
  //         const result = res.data;

  //         const data = res?.data?.map(item => ({
  //           ...item,
  //           isCollapsed: true,
  //         }));
  //         setList(data);
  //       }
  //       setIsLoding(false);
  //     })
  //     .catch(err => {
  //       setLoading(false);
  //     });
  // };

  // const loginFaqCategories = async () => {
 
  //   const locale = await AsyncStorage.getItem('locale');

  //   const url = `/api/v1/login_faq_qna?locale=${locale}`;

  //   getInstrumentedAxiosInstance()
  //     .get(url)
  //     .then(res => {
  //       if (res.status) {
  //         const result = res.data;

  //         const data = res.data.map(item => ({
  //           ...item,
  //           isCollapsed: true,
  //         }));
  //         setLoginList(data);
  //       }
  //       setIsLoding(false);
  //     })
  //     .catch(err => {
  //       setLoading(false);
  //     });
  // };

 

  // const callUsApi = async () => {
  //   setIsLoding(true);
  //   const url = `/api/v1/faq_call_us`;

  //   getInstrumentedAxiosInstance()
  //     .get(url)
  //     .then(res => {
  //       if (res.status) {
  //         const result = res.data;
  //         setIsLoding(false);
  //         setContactUsList(res.data);
  //          setLoading(false);
  //       }
  //     })
  //     .catch(err => {
  //       setLoading(false);
  //     });
  // };

 

  // let fuse;

  // const filter = text => {
  //   setSearchContacts(text);
  //   fuse = new Fuse(contactUsList, options);
  //   const result = fuse.search(text);
  //   const locationsArray = result.map(val => val.item);
  //   setFilterContact(locationsArray); 
  // };

  // var options = { 
  //   threshold: 0.2,
  //   location: 0, 
  //   includeMatches: true, 
  //   isCaseSensitive: false,
  //   keys: ['name', 'country'],
  // };

  // const renderItemRegistration = item => {
  //   return (
  //     <Pressable
  //       onPress={() => {
  //         _toggleCollapsed(item, true);
  //       }}>
   
  //       <View style={styles.faqCard}>
  //         <View style={styles.faqCardItemRow}>
  //           <Text
  //             style={[
  //               styles.faqQuestionText,
  //               item?.item?.isCollapsed == false ? {marginBottom: 3} : null,
  //             ]}>
  //             {item.item.question}
  //           </Text>
  //           <View style={styles.toggleDownUpArrow}>
  //             {item.item.isCollapsed == false ? (
  //               <ArrowUpIcon />
  //             ) : (
  //               <ArrowDownIcon />
  //             )}
  //           </View>
  //         </View>
  //         {item.item.isCollapsed == false && (
  //           <View>
  //             <Text style={styles.faqAnswerText}>{item.item.answer}</Text>
  //             <Pressable
  //               onPress={() => navigation.navigate('ContactUs')}
  //               style={styles.contactusBtn}>
  //               <Text
  //                 style={[
  //                   styles.contactUsText,
  //                   {fontSize: 14, paddingHorizontal: 12, paddingVertical: 5},
  //                 ]}>
  //                 {i18n.t('ContactUs')}
  //               </Text>
  //             </Pressable>
  //           </View>
  //         )}
  //       </View>
  //     </Pressable>
  //   );
  // };

  // const renderItemLogin = item => {
  //   return (
  //     <Pressable
  //       onPress={() => {
  //         _toggleCollapsed(item, false);
  //       }}>
  //       <View style={styles.faqCard}>
  //         <View style={styles.faqCardItemRow}>
  //           <Text
  //             style={[
  //               styles.faqQuestionText,
  //               item?.item?.isCollapsed == false ? {marginBottom: 3} : null,
  //             ]}>
  //             {item.item.question}
  //           </Text>
  //           <View style={styles.toggleDownUpArrow}>
  //             {item?.item?.isCollapsed == false ? (
  //               <ArrowUpIcon />
  //             ) : (
  //               <ArrowDownIcon />
  //             )}
  //           </View>
  //         </View>
  //         {item?.item?.isCollapsed == false && (
  //           <View>
  //             <Text style={styles.faqAnswerText}>{item.item.answer}</Text>
  //             <Pressable
  //               onPress={() => navigation.navigate('ContactUs')}
  //               style={styles.contactusBtn}>
  //               <Text
  //                 style={[
  //                   styles.contactUsText,
  //                   {fontSize: 14, paddingHorizontal: 12, paddingVertical: 5},
  //                 ]}>
  //                 {i18n.t('ContactUs')}
  //               </Text>
  //             </Pressable>
  //           </View>
  //         )}
  //       </View>
  //     </Pressable>
  //   );
  // };

  // const _dialNumber = val => {
  //   let phoneNumber = val?.item.list;
  //   if (Platform.OS === 'android') {
  //     phoneNumber = `tel:${phoneNumber}`;
  //   } else {
  //     phoneNumber = `telprompt:${phoneNumber}`;
  //   }
  //   Linking.openURL(phoneNumber);
  // };

  // const renderCountryImage = val => {
  //   // alert('call');
  //   var imageVal = '';
  //   if (val.item.country === 'Kenya') {
  //     // alert('Call');
  //     imageVal = Kenya;
  //   } else if (val.item.country === 'Cameroon') {
  //     imageVal = Cameroon;
  //   } else if (val.item.country === 'Egypt') {
  //     imageVal = Egypt;
  //   } else if (val.item.country === 'Guinea') {
  //     imageVal = Guinea;
  //   } else if (val.item.country === 'Madagascar') {
  //     imageVal = Madagascar;
  //   } else if (val.item.country === 'Malawi') {
  //     imageVal = Malawi;
  //   } else if (val.item.country === 'Nigeria') {
  //     imageVal = Nigeria;
  //   } else if (val.item.country === 'Philippines') {
  //     imageVal = Philippines;
  //   } else if (val.item.country === 'South Africa') {
  //     imageVal = SouthAfrica;
  //   } else if (val.item.country === 'Tanzania') {
  //     imageVal = Tanzania;
  //   } else if (val.item.country === 'UAE') {
  //     imageVal = UAE;
  //   } else if (val.item.country === 'Uganda') {
  //     imageVal = Uganda;
  //   } else if (val.item.country === 'Zimbabwe') {
  //     imageVal = Zimbabwe;
  //   } else if (val.item.country === 'Mauritius') {
  //     imageVal = Maritius;
  //   } else if (val.item.country === 'Zambia') {
  //     imageVal = Zambia;
  //   } else if (val.item.country === 'United Kingdom') {
  //     imageVal = UnitedKingdom;
  //   } else {
  //     imageVal = '';
  //   }
    
  //   return (
  //     <Image
  //       style={{height: 25, width: 25}}
  //       source={imageVal}
    
  //     />
  //   );
  // };

 

  // const renderItemCallUs = item => {
  //   return (
  //     <TouchableOpacity
  //       accessible={false}
  //       onPress={() => {
  //         _dialNumber(item);
  //       }}
  //       style={[globalStyles.rowSpaceBetween, styles.callUsListItem]}>
  //       <View style={globalStyles.rowAlignCenter}>
  //         {renderCountryImage(item)}
  //         <View style={styles.callUsListSubItem}>
  //           <Text style={styles.callusName}>
  //             {item?.item.name ? item?.item.name : ''}
  //           </Text>
  //           <Text style={styles.callusName}>
  //             {item?.item.country ? item?.item.country : ''}
  //           </Text>
  //         </View>
  //       </View>
  //       <CallIcon />
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      {loading ? (
        <PageLoader />
      ) : (
        <View style={globalStyles.pageBg}>
          {/* <HeaderBack header={i18n.t('FAQ')} /> */}
          <ScrollView>
          <Text style={styles.faqForLabelText}>
                {'FAQ screen'}
              </Text>
            {/* <View>
              <Text style={styles.faqForLabelText}>
                {i18n.t('Registration')}
              </Text>
              <FlatList
                data={list}
                extraData={list}
                renderItem={renderItemRegistration}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

            <View>
              <Text style={styles.faqForLabelText}>{i18n.t('Login')}</Text>
              <FlatList
                data={loginList}
                extraData={loginList}
                renderItem={renderItemLogin}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <Text style={[styles.contactUsText, globalStyles.alignSelfCenter]}>
              {i18n.t('ContactUs')}
            </Text>
            <View style={styles.contactUsItemBtns}>
              <Pressable
                style={styles.contactUsItemBtn}
                onPress={() => navigation.navigate('ContactUs')}>
                <MessageIcon />
                <Text style={styles.contactUsItemBtnText}>
                  {i18n.t('WriteToUs')}
                </Text>
              </Pressable>
              <Pressable
                style={styles.contactUsItemBtn}
                onPress={() => setCallUsBottomSheet(true)}>
                <CallIcon />
                <Text style={styles.contactUsItemBtnText}>
                  {i18n.t('CallUs')}
                </Text>
                {isOnline && (
                  <BottomSheet
                    visible={callUsBottomSheet}
                    onBackButtonPress={() => {
                      setFilterContact([]);
                      setSearchContacts('');
                      setCallUsBottomSheet(false);
                    }}
                    onBackdropPress={() => {
                      setFilterContact([]);
                      setSearchContacts('');
                      setCallUsBottomSheet(false);
                    }}>
                    <View
                      style={[
                        globalStyles.bsContainer,
                        styles.callUsListBottomsheet,
                      ]}>
                      <View style={globalStyles.bsHeader}>
                        <CloseCrossIcon
                          {...getTestId('app.crossButton')}
                          style={globalStyles.bsCloseIcon}
                          onPress={() => {
                            setFilterContact([]);
                            setSearchContacts('');
                            setCallUsBottomSheet(false);
                          }}
                        />
                        <Text style={globalStyles.bsHeaderText}>
                          {i18n.t('CallUs')}
                        </Text>
                      </View>
                      <View style={globalStyles.bsBody}>
                        <TextInput
                          style={styles.searchInput}
                          placeholder={i18n.t('Search')}
                          placeholderTextColor="#A3A1A8"
                          // onChangeText={text => _searchContact(text)}
                          onChangeText={text => {
                            filter(text);
                          }}
                        />
                        <View style={styles.callUsList}>
                          {isLoding ? (
                            <ActivityIndicator size="large" color="#53A5EC" />
                          ) : (
                            <View>
                              {filterContact.length === 0 &&
                              searchContacts != '' ? (
                                <NoDataFound />
                              ) : (
                                <FlatList
                                  data={
                                    filterContact &&
                                    filterContact &&
                                    filterContact.length > 0
                                      ? filterContact
                                      : contactUsList
                                  }
                                  renderItem={renderItemCallUs}
                                  // ListEmptyComponent={noItemDisplay}
                                  keyExtractor={(item, index) =>
                                    index.toString()
                                  }
                                />
                              )}
                            </View>
                          )}
                        </View>
                      </View>
                    </View>
                  </BottomSheet>
                )}
              </Pressable>
            </View> */}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  faqForLabelText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#2F3247',
    paddingTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 10,
    alignSelf: 'flex-start',
  },
  faqCard: {
    backgroundColor: '#ffffff',
    borderRadius: 11,
    // paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  faqCardItemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    // paddingVertical: 15,
  },
  faqQuestionText: {
    width: '90%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#2F3247',
    textAlign: 'left',
    marginVertical: 15,
    // position: 'relative',
    // top: 5,
  },
  faqAnswerText: {
    width: '90%',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#2F3247',
    textAlign: 'left',
  },
  contactUsText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#2F3247',
  },
  contactUsItemBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  contactUsItemBtn: {
    width: '45%',
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 11,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactUsItemBtnText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#0A1943',
    marginLeft: 10,
    marginTop: 5,
  },
  searchInput: {
    backgroundColor: '#EDF6FD',
    height: 50,
    borderRadius: 11,
    paddingHorizontal: 20,
    marginBottom: 25,
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#A3A1A8',
  },
  callUsListItem: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  callUsListSubItem: {
    width: '85%',
  },
  callusName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#2F3247',
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  toggleDownUpArrow: {
    marginTop: 20,
  },
  contactusBtn: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#3999F8',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  callUsListBottomsheet: {
    height: '90%',
  },
  callUsList: {
    marginBottom: 185,
  },
});
