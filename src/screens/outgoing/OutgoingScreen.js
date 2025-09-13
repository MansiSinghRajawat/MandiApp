import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../../styles/GlobalStyles';
import PageLoader from '../../component/PageLoader';
import {COLORS, PERCENTAGE, SIZES, WEIGHT, IMAGES} from '../../constants/theme';

const dataTransit = [
  {
    id: '1',
    product: 'Onion',
    // name: 'Gaurav',
    to: 'Banglore',
    from: 'Ratlam',
    status: 'Transit',
    price: 246.9,
    quantity: 12,
    amount: '₹7808.0',
  },
  {
    id: '2',
    product: 'Onion',
    to: 'Banglore',
    from: 'Ratlam',
    status: 'Transit',
    price: 246.9,
    quantity: 12,
    amount: '₹919000.0',
  },
  {
    id: '3',
    product: 'Onion',
    to: 'Banglore',
    from: 'Ratlam',
    status: 'Transit',
    price: 246.9,
    quantity: 12,
    amount: '₹919000.0',
  },
  {
    id: '4',
    product: 'Onion',
    to: 'Banglore',
    from: 'Ratlam',
    status: 'Transit',
    price: 246.9,
    quantity: 12,
    amount: '₹919000.0',
  },
  {
    id: '5',
    product: 'Onion',
    to: 'Banglore',
    from: 'Ratlam',
    status: 'Transit',
    price: 246.9,
    quantity: 12,
    amount: '₹919000.0',
  },
  {
    id: '6',
    product: 'Onion',
    to: 'Banglore',
    from: 'Ratlam',
    status: 'Transit',
    price: 246.9,
    quantity: 12,
    amount: '₹919000.0',
  },
  {
    id: '7',
    product: 'Onion',
    to: 'Banglore',
    from: 'Ratlam',
    status: 'Transit',
    price: 246.9,
    quantity: 12,
    amount: '₹919000.0',
  },
  {
    id: '8',
    product: 'Onion',
    to: 'Banglore',
    from: 'Ratlam',
    status: 'Transit',
    price: 246.9,
    quantity: 12,
    amount: '₹919000.0',
  },
  {
    id: '9',
    product: 'Onion',
    to: 'Banglore',
    from: 'Ratlam',
    status: 'Transit',
    price: 246.9,
    quantity: 12,
    amount: '₹919000.0',
  },
  {
    id: '10',
    product: 'Onion',
    to: 'Banglore',
    from: 'Ratlam',
    status: 'Transit',
    price: 246.9,
    quantity: 12,
    amount: '₹919000.0',
  },
];
const dataDeliver = [
  {
    id: '1',
    product: 'Onion',
    merchant: 'Gaurav',
    address: 'Akshya Nagar , Bangalore',
    License: 23123,
    status: 'Delivered',
    amount: '₹7808.0',
    date:'21 July 2025'
  },
  {
    id: '2',
    product: 'Onion',
    merchant: 'Gaurav',
    address: 'Akshya Nagar , Bangalore',
    License: 23123,
    status: 'Delivered',
    amount: '₹919000.0',
     date:'21 July 2025'
  },
  {
    id: '3',
    product: 'Onion',
    merchant: 'Gaurav',
    address: 'Akshya Nagar , Bangalore',
    License: 23123,
    status: 'Delivered',
    amount: '₹919000.0',
     date:'21 July 2025'
  },
  {
    id: '4',
    product: 'Onion',
    merchant: 'Gaurav',
    address: 'Akshya Nagar , Bangalore',
    License: 23123,
    status: 'Delivered',
    amount: '₹919000.0',
     date:'21 July 2025'
  },
  {
    id: '5',
    product: 'Onion',
    merchant: 'Gaurav',
    address: 'Akshya Nagar , Bangalore',
    License: 23123,
    status: 'Delivered',
    amount: '₹919000.0',
     date:'21 July 2025'
  },
  {
    id: '6',
    product: 'Onion',
    merchant: 'Gaurav',
    address: 'Akshya Nagar , Bangalore',
    License: 23123,
    status: 'Delivered',
    amount: '₹919000.0',
     date:'21 July 2025'
  },
  {
    id: '7',
    product: 'Onion',
    merchant: 'Gaurav',
    address: 'Akshya Nagar , Bangalore',
    License: 23123,
    status: 'Delivered',
    amount: '₹919000.0',
     date:'21 July 2025'
  },
  {
    id: '8',
    product: 'Onion',
    merchant: 'Gaurav',
    address: 'Akshya Nagar , Bangalore',
    License: 23123,
    status: 'Delivered',
    amount: '₹919000.0',
     date:'21 July 2025'
  },
  {
    id: '9',
    merchant: 'Gaurav',
    address: 'Akshya Nagar , Bangalore',
    License: 23123,
    status: 'Delivered',
    amount: '₹919000.0',
     date:'21 July 2025'
  },
  {
    id: '10',
    merchant: 'Gaurav',
    address: 'Akshya Nagar , Bangalore',
    License: 23123,
    status: 'Delivered',
    amount: '₹919000.0',
     date:'21 July 2025'
  },
];

export default function OutgoingScreen({navigation, props}) {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('transit');

  const renderTransit = ({item}) => (
    <View style={styles.card}>
      <View style={styles.info}>
        
        <Text style={styles.form}>FROM - {item.from}</Text>
        <Text style={styles.product}>Product - {item.product}</Text>
        <Text style={styles.status}>Status - {item.status}</Text>
      </View>
      <View style={styles.img}>
       

        <Text style={styles.to}>TO - {item.to}</Text>
        <Text style={styles.quantity}>Quantity - {item.quantity}</Text>
        <Text style={styles.price}>Price - {item.price}</Text>
        <Text style={styles.amount}>Total - {item.amount}</Text>
      </View>
    </View>
  );
  // const renderDeliver = ({item}) => (
  //   <View style={styles.deliverCard}>
  //     <Text style={styles.merchant}>Merchant - {item.merchant}</Text>
  //     <Text style={styles.License}>License No - {item.License}</Text>
  //     <Text style={styles.address}>Address - {item.address}</Text>
  //     <Text style={styles.date}>Date - {item.date}</Text>
  //     <Text style={styles.status}>Status - {item.status}</Text>
  //     <Text style={styles.amount}>Total - {item.amount}</Text>
  //   </View>
  // );

  const renderDeliver = ({ item }) => (
  <View style={styles.deliverCard}>
    <View style={styles.row}>
      <Text style={styles.bold}>Merchant   - </Text>
      <Text style={styles.value}>{item.merchant}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.bold}>License No   - </Text>
      <Text style={styles.value}>{item.License}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.bold}>Address   - </Text>
      <Text style={styles.value}>{item.address}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.bold}>Date   - </Text>
      <Text style={styles.value}>{item.date}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.bold}>Status   - </Text>
      <Text style={styles.value}>{item.status}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.bold}>Total   - </Text>
      <Text style={styles.value}>{item.amount}</Text>
    </View>
  </View>
);


  return (
    <SafeAreaView style={globalStyles.safeArea}>
      {loading ? (
        <PageLoader />
      ) : (
        <View style={globalStyles.pageBg}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'transit' && styles.activeTab,
              ]}
              onPress={() => setActiveTab('transit')}>
              <Text
                style={[
                  styles.tabText,
                  {color: activeTab === 'transit' ? '#fff' : '#000'},
                ]}>
                Transit
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'delivered' && styles.activeTab,
              ]}
              onPress={() => setActiveTab('delivered')}>
              <Text
                style={[
                  styles.tabText,
                  {color: activeTab === 'delivered' ? '#fff' : '#000'},
                ]}>
                Delivered
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            {activeTab === 'transit' ? (
              <FlatList
                data={dataTransit}
                keyExtractor={item => item.id}
                renderItem={renderTransit}
                contentContainerStyle={{padding: 16}}
              />
            ) : (
              <FlatList
                data={dataDeliver}
                keyExtractor={item => item.id}
                renderItem={renderDeliver}
                contentContainerStyle={{padding: 16}}
              />
            )}
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

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabButton: {
    width: '50%',
    padding: 20,
    borderBottomWidth:1,
    borderColor:"#000"
  },
  activeTab: {
    backgroundColor: COLORS.GRADIENT_FIRST,
    color: '#fff',
  },
  tabText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    // backgroundColor:"red",
    textAlign: 'center',
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
  deliverCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
    gap: 5,
  },
 row: {
    flexDirection: 'row',
    marginBottom: 4,
    gap:20,
    flexWrap: 'wrap', // in case value is too long
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    fontSize: 16,
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

  quantity: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'left',
  },

  status: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: '600',
    textAlign: 'left',
  },
  amount: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: '600',
    textAlign: 'left',
  },
});
