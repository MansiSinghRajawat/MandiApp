import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';
import {globalStyles} from '../styles/GlobalStyles';
import {COLORS} from '../constants/theme';
import {getTestId} from '../utils/testHelper';

export default function PageLoader() {
  return (
    <Modal transparent={true}>
      <View style={globalStyles.modalOverlay} />
      <View style={globalStyles.modalInCenter}>
        <View {...getTestId('app.Loader')} style={styles.pageLoader}>
          <ActivityIndicator size="large" color={COLORS.APP_THEME} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  pageLoader: {
    width: 115,
    height: 115,
    borderRadius: 11,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
