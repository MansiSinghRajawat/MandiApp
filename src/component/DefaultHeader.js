import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {COLORS,ARABIC} from '../constants/theme';
import LinearGradient from 'react-native-linear-gradient';

const DefaultHeader = ({props}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <LinearGradient
        // colors={['#4c669f', '#3b5998', '#192f6a']}
        colors={[COLORS.GRADIENT_FIRST, COLORS.GRADIENT_SECOND]}
        style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.accountInfo}>
            <Pressable
              style={styles.rightItemIcon}
              onPress={() => navigation.navigate('ProfileScreen')}>
              <Image
                source={{
                  uri: 'https://instagram.fidr4-3.fna.fbcdn.net/v/t51.2885-19/465006927_1568227453782017_9061035273081897493_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fidr4-3.fna.fbcdn.net&_nc_cat=105&_nc_ohc=U_791ASKEhgQ7kNvgHAw_CU&_nc_gid=3b3d705d6dd2453f836442fa4474a904&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYBW2VqJRFXid8jaBOmvonvfth7jGWQQVEF-nmZudrwdFg&oe=67588651&_nc_sid=7a9f4b',
                }}
                  // source={require('../assets/images/account-photo.png')}
                style={styles.accountPhoto}
              />
            </Pressable>

            <Pressable
              style={styles.rowAlignCenter}
              onPress={() => navigation.navigate('ProfileScreen')}>
              <Text
                style={styles.accountNameText}
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                {'Rahul bhati'}
              </Text>

              <Text
                style={styles.businessNameText}
                numberOfLines={1}
                ellipsizeMode={'tail'}
                onPress={() => navigation.navigate('ProfileScreen')}>
                {'Garlic Buyer'}
              </Text>
            </Pressable>
          </View>

          <Pressable
            style={styles.rightItemIcon}
            onPress={async () => {
              navigation.navigate('ProfileScreen', {backIndex: false});
            }}>
            <Image
              source={require('../assets/images/account-photo.png')}
              style={styles.accountPhoto}
            />
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  rowAlignCenter: {
    // flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.GRADIENT_FIRST,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightItem: {
    // width: 60,
    // height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // right: 0,
  },
  rightItemIcon: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,

    // borderRadius: 50,
  },
  accountNameText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    // paddingHorizontal: 10,
    // alignSelf: 'center',
  },
  businessNameText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#FFF',
    // paddingHorizontal: 10,
    // alignSelf: 'center',
  },
});

export default DefaultHeader;
