import React from 'react';
import {StyleSheet, View, Text, Pressable, Modal} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {globalStyles} from '../styles/GlobalStyles';
import { months } from 'moment';

const NetworkInfo = ({props,networkAvail}) => {

  const _closeBtn =()=>{
    // alert("call")
    networkAvail(networkAvail)
  }

  return (
    <Modal visible={true} transparent>
      <View style={styles.centeredOfflineCard}>
        <View style={[globalStyles.columnItemCenter, styles.offlineCard]}>
          <MaterialIcons name="signal-wifi-connected-no-internet-4" size={30} />
          <Text style={styles.offlineText}>You Are Offline</Text>
          <Text style={styles.checkConnectionText}>
            Please Check Your Internet Connection
          </Text>
          <Pressable
            onPress={() => _closeBtn()}
            style={styles.refreshButton}>
            <Text style={globalStyles.primaryBtnText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredOfflineCard: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  offlineCard: {
    height: 300,
    backgroundColor: '#ffffff',
    borderRadius: 11,
    margin: 15,
    padding: 15,
  },
  offlineText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#2F3247',
    paddingVertical: 20,
  },
  checkConnectionText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#2F3247',
    paddingBottom: 25,
  },
  refreshButton: {
    width: 175,
    height: 50,
    backgroundColor: '#53A5EC',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NetworkInfo;



