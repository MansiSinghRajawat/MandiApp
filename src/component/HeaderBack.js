import React from 'react';
import {StyleSheet, View, Text, Pressable, I18nManager} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../constants/theme';
// import {useSelector, useDispatch} from 'react-redux';
// import * as i18n from '../localization/i18n';
 // import {getCustomEvents} from '../utils/google-analytics';
// import {getTestId} from '../utils/testHelper';
 export default function HeaderBack(props) {
  const navigation = useNavigation();
  // const dispatch = useDispatch();

  const goBackFun = () => {
    navigation.goBack();
  };

  return (
    <View
      style={[styles.header, props.rtlArrow && {flexDirection: 'row-reverse'}]}>
      <View style={styles.leftItem}>
        {!props.hideBackButton && (
          <Pressable
            style={styles.leftItemIcon}
            onPress={() => goBackFun()}
            disabled={props?.disable || false}>
            <AntDesign name="left" size={30} color={COLORS.WHITE} />
          </Pressable>
        )}
      </View>
      <View style={styles.centerItem}>
        {props.header && (
          <Text
            style={styles.centerItemText}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {props.header}
          </Text>
        )}
      </View>
      <View style={styles.rightItem}>
        {props.edit && (
          <Pressable style={styles.rightItemIcon}>
            <MaterialIcons name="home" size={30} color="#900" />
          </Pressable>
        )}
        {props.dismiss && (
          <Pressable
            disabled={props.btnDisable}
            style={
              props.btnDisable == true
                ? styles.dismissAllBtnDisable
                : styles.dismissAllBtn
            }
            onPress={props.dismissAccess}>
            <Text style={styles.dismissAllBtnText}>Dismiss All</Text>
          </Pressable>
        )}
        {props.filter && (
          <Pressable style={styles.rightItemIcon} onPress={filterNavigate}>
            <MaterialIcons name="home" size={30} color="#900" />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor:COLORS.GRADIENT_FIRST,
    borderBottomColor:COLORS.WHITE,
    borderBottomWidth:0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  centerItemText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#2F3247',
  },
  leftItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftItemIcon: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightItemIcon: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  helpStatus: {
    justifyContent: 'center',
  },
  dismissAllBtn: {
    minWidth: 70,
    minHeight: 34,
    backgroundColor: '#F2F7FC',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    position: 'absolute',
    right: 0,
  },
  dismissAllBtnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#2F3247',
    textAlign: 'center',
  },
  dismissAllBtnDisable: {
    minWidth: 70,
    minHeight: 34,
    backgroundColor: '#F2F7FC',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    position: 'absolute',
    right: 0,
    opacity: 0.5,
  },
});
