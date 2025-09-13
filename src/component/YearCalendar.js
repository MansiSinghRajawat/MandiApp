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
import React from 'react';
import {COLORS, PERCENTAGE, SIZES, WEIGHT, IMAGES} from './../constants/theme';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

export default function YearCalendar({
  selectedYear,
  setSelectedYear,
  showYearPicker,
  setShowYearPicker,
}) {
  const getYearsList = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 2000;
    return Array.from(
      {length: currentYear - startYear + 1},
      (_, i) => startYear + i,
    );
  };

  const years = getYearsList();

  return (
    <Modal visible={showYearPicker} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.dimBackground} />
        <View style={styles.yearPicker}>
          <View style={styles.yearHead}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 20,
                color: 'white',
                marginHorizontal: 10,
              }}>
              {'Filter by Year'}
            </Text>
            <Icon
              name="close-outline"
              size={30}
              color="#fff"
              onPress={() => setShowYearPicker(false)}
              style={{marginHorizontal: 10}}
            />
          </View>

          <View
            style={{
              marginTop: 35,
              // borderLeftWidth: 1,
              // borderRightWidth: 1,
              borderColor: '#ccc',
              height: 80,
              width: '50%',
              overflow: 'hidden',
              // backgroundColor: 'blue',
            }}>
            <ScrollView
              pagingEnabled
              showsVerticalScrollIndicator={false}
              snapToInterval={100}
              decelerationRate="fast"
              contentContainerStyle={{alignItems: 'center'}}>
              {years.map((year, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.yearItem,
                    {
                      height: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                    selectedYear === index && {
                      backgroundColor: '#ccc',
                      borderRadius: 8,
                    },
                  ]}
                  onPress={() => {
                    setSelectedYear(index);
                    // setShowYearPicker(false);
                  }}>
                  <Text style={styles.yearText}>{year}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={styles.YearFoot}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
                color: COLORS.GRADIENT_FIRST,
                marginHorizontal: 10,
              }}
              onPress={() => setShowYearPicker(false)}>
              Cancel
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
                color: COLORS.GRADIENT_FIRST,
                marginHorizontal: 10,
              }}
              onPress={() => setShowYearPicker(false)}>
              OK
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
  yearPicker: {
    width: '90%',
    minHeight: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  yearHead: {
    flexDirection: 'row',
    backgroundColor: COLORS.GRADIENT_FIRST,
    width: '100%',
    justifyContent: 'space-between',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 6,
  },
  yearItem: {
    padding: 10,
    marginVertical: 6,
    alignItems: 'center',
  },
  yearText: {
    fontSize: 16,
    textAlign: 'center',
    padding: 5,
  },
  YearFoot: {
    flexDirection: 'row',
    // backgroundColor: COLORS.GRADIENT_FIRST,
    width: '100%',
    gap: 25,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    marginVertical: 20,
  },
});
