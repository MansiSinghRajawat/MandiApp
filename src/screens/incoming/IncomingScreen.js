import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../../styles/GlobalStyles';
import DefaultHeader from '../../component/DefaultHeader';
import PageLoader from '../../component/PageLoader';
import IncomingHeader from '../../component/IncomingHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/core';

import {COLORS, PERCENTAGE, SIZES, WEIGHT, IMAGES} from '../../constants/theme';
import YearCalendar from '../../component/YearCalendar';

const data = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb258ZW58MHx8MHx8fDA%3D',

    product: 'Onion',
    name: 'Gaurav',
    village: 'Namli',
    contact: '1234567890',
    district: 'Ratlam',
    price: 12,
    weight: 246.9,
    amount: '₹7808.0',
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb258ZW58MHx8MHx8fDA%3D',

    product: 'Onion',
    name: 'Megha',
    village: ' Ratlam',
    contact: '9876543210',
    district: 'Ratlam',
    price: 12,
    weight: 367.6,
    amount: '₹919000.0',
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb258ZW58MHx8MHx8fDA%3D',

    product: 'Onion',
    name: 'Palak',
    village: ' Namli',
    contact: '9876543210',
    district: 'Ratlam',
    price: 12,
    weight: 367.6,
    amount: '₹919000.0',
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb258ZW58MHx8MHx8fDA%3D',

    product: 'Onion',
    name: 'Uday',
    village: 'Namli',
    contact: '9999999999',
    district: 'Ratlam',
    price: 12,
    weight: 367.6,
    amount: '₹919000.0',
  },
  {
    id: '5',
    image:
      'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb258ZW58MHx8MHx8fDA%3D',

    product: 'Onion',
    name: 'Lucky',
    village: 'Ashoknagar',
    contact: '1234567890',
    district: 'Ratlam',
    price: 12,
    weight: 367.6,
    amount: '₹919000.0',
  },
  {
    id: '6',
    image:
      'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb258ZW58MHx8MHx8fDA%3D',

    product: 'Onion',
    name: 'Deepak',
    village: ' BhoNamlipal',
    contact: '9876543210',
    district: 'Ratlam',
    price: 12,
    weight: 367.6,
    amount: '₹919000.0',
  },
  {
    id: '7',
    image:
      'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb258ZW58MHx8MHx8fDA%3D',

    product: 'Onion',
    name: 'Priya',
    village: 'Namli',
    contact: '9999999999',
    district: 'Ratlam',
    price: 12,
    weight: 367.6,
    amount: '₹919000.0',
  },
  {
    id: '8',
    image:
      'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb258ZW58MHx8MHx8fDA%3D',

    product: 'Onion',
    name: 'Poonam',
    village: 'Namli',
    contact: '1234567890',
    district: 'Ratlam',
    price: 12,
    weight: 367.6,
    amount: '₹919000.0',
  },
  {
    id: '9',
    image:
      'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb258ZW58MHx8MHx8fDA%3D',

    product: 'Onion',
    name: 'Tisha',
    village: ' Namli',
    contact: '9876543210',
    district: 'Ratlam',
    price: 12,
    weight: 367.6,
    amount: '₹919000.0',
  },
  {
    id: '10',
    image:
      'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb258ZW58MHx8MHx8fDA%3D',

    product: 'Onion',
    name: 'Mansi',
    village: 'Namli',
    contact: '9999999999',
    district: 'Ratlam',
    price: 12,
    weight: 367.6,
    amount: '₹919000.0',
  },
];

export default function IncomingScreen({navigation, props}) {
  // const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const [loadHome, setLoadHome] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [mode, setMode] = useState('');

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleNavigation = () => {
    setLoadHome(true);
    setTimeout(() => {
      setLoadHome(false);
      navigation.navigate('Homestack');
    }, 500);
  };

  const handleChange = (event, date) => {
    if (date) {
      setSelectedDate(date);
      setSelectedMonth(date.getMonth());
      setSelectedYear(date.getYear());
    }

    setShowDatePicker(false);
  };

  const openFilterModal = () => setModalVisible(true);
  const closeFilterModal = () => setModalVisible(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const selectFilter = type => {
    setModalVisible(false);
    setTimeout(() => {
      setMode(type);
      if (type === 'date') {
        setShowDatePicker(true);
      } else if (type === 'month') {
        setShowMonthPicker(true);
      } else if (type === 'year') {
        setShowYearPicker(true);
      }
    }, 300);
  };

  const handleMonthSelect = month => {
    // const updatedDate = new Date(selectedDate);
    // updatedDate.setMonth(month);
    // setSelectedDate(updatedDate);
    setSelectedMonth(month);
    // setShowMonthPicker(false);
  };

  const handleYearSelect = year => {
    const updatedDate = new Date(selectedDate);
    updatedDate.setFullYear(year);
    setSelectedDate(updatedDate);
    setSelectedYear(year);
    setShowYearPicker(false);
  };

  const filterData = data.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderItems = ({item}) => (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>Farmer - {item.name}</Text>
        <Text style={styles.product}>Product - {item.product}</Text>
        <Text style={styles.village}>Village - {item.village}</Text>
        <Text style={styles.district}>District - {item.district}</Text>
        <Text style={styles.contact}>MobileNo - {item.contact}</Text>
        {/* <Text style={styles.qty}>Price - {item.price}</Text> */}
        {/* <Text style={styles.weight}>weight - {item.weight}</Text> */}
      </View>
      <View style={styles.img}>
        <Image
          source={{uri: item.image}}
          // source={require('../assets/images/aslide-one.png')}
          style={styles.circle}
        />
        <Text style={styles.price}>Price - {item.price}</Text>
        <Text style={styles.weight}>weight - {item.weight}</Text>
        <Text style={styles.amount}>Total - {item.amount}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      {loading ? (
        <PageLoader />
      ) : (
        <View style={globalStyles.pageBg}>
          <View style={styles.pageBg}>
            <IncomingHeader
              searchText={searchText}
              setSearchText={setSearchText}
              handleNavigation={handleNavigation}
              loadHome={loadHome}
              openFilterModal={openFilterModal}
            />

            <Modal isVisible={isModalVisible}>
              <View style={styles.popup}>
                <View style={styles.popupHaeder}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      marginVertical: 8,
                    }}>
                    Filters
                  </Text>
                  <Icon
                    name="close-outline"
                    size={30}
                    color="black"
                    onPress={toggleModal}
                  />
                </View>
                <TouchableOpacity onPress={() => selectFilter('date')}>
                  <Text style={styles.option}> Date</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectFilter('month')}>
                  <Text style={styles.option}> Month</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectFilter('year')}>
                  <Text style={styles.option}> Year</Text>
                </TouchableOpacity>
              </View>
            </Modal>

            {/* DATE PICKER */}
            {showDatePicker && mode === 'date' && (
              <DateTimePicker
                value={selectedDate}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={handleChange}
              />
            )}
            {/* MONTH PICKER */}
            {showMonthPicker && mode === 'month' && (
              <Modal visible={true} transparent={true} animationType="fade">
                <View style={styles.modalContainer}>
                  <View style={styles.dimBackground} />
                  <View style={[styles.monthPicker]}>
                    <View style={styles.monthHead}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 20,
                          color: 'white',
                          marginHorizontal: 10,
                        }}>
                        {'Filter by Month'}
                      </Text>
                      <Icon
                        name="close-outline"
                        size={30}
                        color="white"
                        onPress={() => setShowMonthPicker(false)}
                        style={{marginHorizontal: 10}}
                      />
                    </View>

                    <View style={styles.monthGrid}>
                      {months.map((month, index) => (
                        <TouchableOpacity
                          key={index}
                          style={[
                            styles.monthItem,
                            selectedMonth === index && styles.selectedMonthBox,
                          ]}
                          onPress={() => {
                            setSelectedMonth(index);
                            // setShowMonthPicker(false);
                          }}>
                          <Text
                            style={[
                              styles.monthText,
                              selectedMonth === index &&
                                styles.selectedMonthText,
                            ]}>
                            {month}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                    <View style={styles.monthFoot}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 18,
                          color: COLORS.GRADIENT_FIRST,
                          marginHorizontal: 10,
                        }}
                        onPress={() => setShowMonthPicker(false)}>
                        Cancel
                      </Text>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 18,
                          color: COLORS.GRADIENT_FIRST,
                          marginHorizontal: 10,
                        }}
                        onPress={() => setShowMonthPicker(false)}>
                        OK
                      </Text>
                    </View>
                  </View>
                </View>
              </Modal>
            )}
            {/* YEAR PICKER */}
            {showYearPicker && mode === 'year' && (
              <YearCalendar
                setSelectedYear={setSelectedYear}
                selectedYear={selectedDate}
                showYearPicker={showYearPicker}
                setShowYearPicker={setShowYearPicker}
              />
            )}
          </View>
          <ScrollView>
            <FlatList
              data={filterData}
              keyExtractor={item => item.id}
              renderItem={renderItems}
              contentContainerStyle={{padding: 16}}
            />
            <Text>Date: {selectedDate.toDateString()}</Text>
            <Text>
              Month: {selectedMonth !== null ? months[selectedMonth] : ''}
            </Text>
            <Text>Year: {selectedYear}</Text>
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
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  faqCardItemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  faqQuestionText: {
    width: '90%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#2F3247',
    textAlign: 'left',
    marginVertical: 15,
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

  card: {
    flexDirection: 'row',
    // justifyContent:"space-between",
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
    gap: 20,
  },
  circle: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  product: {
    fontSize: 14,
    fontWeight: 'bold',
    // marginRight: 54,
  },
  info: {
    flex: 1,
    justifyContent: 'space-around',
  },
  img: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  village: {
    fontSize: 14,
    color: '#555',
  },
  contact: {
    fontSize: 14,
    // marginTop: 4,
  },
  price: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'left',
  },
  weight: {
    fontSize: 14,
    marginTop: 4,

    textAlign: 'left',
  },
  amount: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: '600',
    textAlign: 'left',
  },

  popup: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
  popupHaeder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  option: {
    // fontWeight:"bold"
    paddingVertical: 10,
    fontSize: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: -20,
  },

  dimBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    // backgroundColor:'red'
  },

  monthPicker: {
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 12,

    elevation: 5,
  },
  monthHead: {
    flexDirection: 'row',
    backgroundColor: COLORS.GRADIENT_FIRST,
    width: '100%',
    justifyContent: 'space-between',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: 6,
  },
  monthFoot: {
    flexDirection: 'row',
    // backgroundColor: COLORS.GRADIENT_FIRST,
    width: '100%',
    gap: 25,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    marginVertical: 20,
  },

  monthGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  monthItem: {
    width: '30%',
    marginVertical: 8,
    alignItems: 'center',
    padding: 10,
    borderRadius: 6,
  },
  selectedMonthBox: {
    backgroundColor: COLORS.GRADIENT_FIRST,
    marginHorizontal: 6,
  },
  monthText: {
    fontSize: 14,
  },
  selectedMonthText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
