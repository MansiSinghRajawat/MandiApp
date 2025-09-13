import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

import {useNavigation} from '@react-navigation/core';
import {COLORS, ARABIC} from '../constants/theme';

import {ScrollView} from 'react-native-gesture-handler';

const IncomingHeader = ({
  searchText,
  setSearchText,
  props,
  handleNavigation,
  loadHome,
  openFilterModal,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{marginLeft: 5}} onPress={handleNavigation}>
        {loadHome ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : (
          <Icon name="arrow-back" size={30} color="white" />
        )}
      </TouchableOpacity>

      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#999" style={{marginLeft: 8}} />
        <TextInput
          placeholder=""
          style={styles.input}
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          numberOfLines={1}
          multiline={false}
        />
        {searchText.length > 0 && (
          <Icon
            name="close-outline"
            size={24}
            color="#999"
            style={{marginLeft: 8}}
            onPress={() => setSearchText('')}
          />
        )}
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={openFilterModal}>
          <Icon name="ellipsis-vertical-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.GRADIENT_FIRST,
    padding: 10,
    justifyContent: 'space-between',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 30,
    flex: 1,
    marginHorizontal: 18,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    marginLeft: 6,
    fontSize: 16,
    color: 'black',
  },

  iconContainer: {
    alignSelf: 'flex-end',
    padding: 5,
    // backgroundColor: '#333',
    borderRadius: 8,
  },



  
 
});

export default IncomingHeader;
