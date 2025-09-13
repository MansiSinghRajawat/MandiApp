import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {globalStyles} from '../styles/GlobalStyles';
import {months} from 'moment';

const NetworkInfo = ({props, showForceUpdate, onPress}) => {
  const _onPress = () => {
    onPress()
  };

  return (
    <Modal transparent={true} visible={showForceUpdate}>
      <View style={globalStyles.modalOverlay} />
      <View style={globalStyles.modalInCenter}>
        <View style={globalStyles.modalContent}>
          <Text style={globalStyles.modalMessage}>
            A newer version of this app is available, please update the app!
          </Text>
          <TouchableOpacity
            style={globalStyles.modalSingleBtn}
            onPress={() => {
              _onPress();
            }}>
            <Text style={globalStyles.modalSingleBtnText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
 

export default NetworkInfo;
