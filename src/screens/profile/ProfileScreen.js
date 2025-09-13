import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {globalStyles} from '../../styles/GlobalStyles';
import {COLORS, PERCENTAGE, SIZES, WEIGHT, IMAGES} from '../../constants/theme';

import PageLoader from '../../component/PageLoader';

export default function ProfileScreen({navigation, props}) {
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      {loading ? (
        <PageLoader />
      ) : (
        <View style={globalStyles.pageBg}>
          <ScrollView>
            {/* <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.profileSection}>
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    }}
                    style={{width: 150, height: 150, borderRadius: 75}}
                  />
                </View>

                <View style={styles.userInfo}>
                  <View style={styles.infoItem}>
                    <Text style={styles.label}>User Name</Text>
                    <Text style={styles.value}>Sneha</Text>
                  </View>

                  <View style={styles.infoItem}>
                    <Text style={styles.label}>Licence no</Text>
                    <Text style={styles.smallValue}>LIC123456</Text>
                  </View>

                  <View style={styles.infoItem}>
                    <Text style={styles.label}>Trade</Text>
                    <Text style={styles.smallValue}>Onion Trade</Text>
                  </View>
                </View>
              </View>
              <View style={styles.main}>
                <View style={styles.infoStock}>
                  <Text style={styles.stock}>In Stock</Text>
                  <View style={{marginVertical: 10}}>
                    <Text style={styles.stockValue}>Wheat</Text>
                    <Text style={styles.stockValue}>1000 Kuntal</Text>
                  </View>
                </View>
                <View style={styles.infoTransit}>
                  <Text style={styles.transit}>In Transit</Text>
                  <View style={{marginVertical: 10}}>
                    <Text style={styles.stockValue}>Wheat</Text>
                    <Text style={styles.stockValue}>500</Text>
                  </View>
                </View>
              </View>
            </View> */}

            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80',
                  }}
                  style={styles.profileImage}
                />
              </View>

              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Profile Info</Text>

                <View style={styles.infoItem}>
                  <Text style={styles.label}>User Name:</Text>
                  <Text style={styles.value}>Sneha</Text>
                </View>

                <View style={styles.infoItem}>
                  <Text style={styles.label}>License No:</Text>
                  <Text style={styles.value}>LIC123456</Text>
                </View>

                <View style={styles.infoItem}>
                  <Text style={styles.label}>Trade:</Text>
                  <Text style={styles.value}>Onion Trade</Text>
                </View>

                <View style={styles.infoItem}>
                  <Text style={styles.label}>Mobile:</Text>
                  <Text style={styles.value}>+91-9876543210</Text>
                </View>

                <View style={styles.infoItem}>
                  <Text style={styles.label}>KYC Status:</Text>
                  <Text style={[styles.value, {color: 'green'}]}>Verified</Text>
                </View>
              </View>

              <View style={styles.stockContainer}>
                <View style={styles.stockCard}>
                  <Text style={styles.stockTitle}>In Stock</Text>
                  <Text style={styles.stockValue}>Wheat</Text>
                  <Text style={styles.stockValue}>1000 Kuntal</Text>
                </View>

                <View style={styles.stockCard}>
                  <Text style={styles.stockTitle}>In Transit</Text>
                  <Text style={styles.stockValue}>Wheat</Text>
                  <Text style={styles.stockValue}>500 Kuntal</Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.editButton}
                onPress={() => console.log('Edit Profile')}>
                <Text style={styles.editButtonText}>Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => console.log('logOut')}>
                <Text style={styles.editButtonText}>Log Out</Text>
              </TouchableOpacity>
            </View>
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

  // container: {
  //   flex:1,
  //   backgroundColor: 'white',
  //   padding: 24,
  //   borderRadius: 8,
  //   shadowColor: '#000',
  //   shadowOffset: {width: 0, height: 2},
  //   shadowOpacity: 0.1,
  //   shadowRadius: 4,
  //   elevation: 3,
  //   margin: 16,
  // },

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#333',
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    width: 110,
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
  },

  stockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stockCard: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    padding: 16,
    borderRadius: 10,
    elevation: 2,
  },
  stockTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: '#222',
  },
  stockValue: {
    fontSize: 15,
    marginBottom: 4,
  },
  editButton: {
    width: '95%',
    backgroundColor: COLORS.GRADIENT_FIRST,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 20,
    elevation: 2,
  },
  logoutButton: {
    width: '95%',
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    // marginBottom: 20,
    elevation: 2,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
