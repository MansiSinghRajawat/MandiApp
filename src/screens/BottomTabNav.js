import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, View, Text, Platform, AppState} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const BottomTab = createBottomTabNavigator();

import Homestack from '../navigation/HomeStack';
import IncomingStack from '../navigation/IncomingStack';
import OutgoingStack from '../navigation/OutgoingStack';
import ProfileStack from '../navigation/ProfileStack';

import {COLORS, PERCENTAGE, SIZES, WEIGHT, IMAGES} from '../constants/theme';

// import MoreStack from '../navigation/HomeStack';

import {checkNotifications} from 'react-native-permissions';

function BottomTabNav(props, route) {
  // const dispatch = useDispatch();
  const [notif, setNotif] = useState(props.route?.params?.notif);
  const navigation = useNavigation();
  const index = useNavigationState(state => state?.routes[0]?.state?.index);
  const [isActive, setIsActive] = useState(false);
  const appState = useRef(AppState.currentState);
  const [notiPermission, setNotiPermission] = useState(true);

  const checkPermission = async () => {
    await checkNotifications().then(({status, settings}) => {
      if (status == 'granted') {
        setNotiPermission(true);
      } else {
        setNotiPermission(false);
      }
    });
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;
      if (appState.current === 'background') {
        checkPermission();
      }
      if (appState.current === 'active') {
        checkPermission();
      }
      if (appState.current === 'inactive') {
        checkPermission();
      }
    });
  }, [notiPermission]);

  const getTabBarStyle = route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeScreen';
    let display =
      bottomHideScreenNames.indexOf(routeName) >= 0 ? 'none' : 'flex';

    return {
      display,
      height: Platform.OS === 'ios' ? 80 : 60,
      width: '100%',
      alignSelf: 'center',
    };
  };

  const bottomHideScreenNames = ['Settings', 'BioVerify', 'HelpCenter'];

  return (
    <BottomTab.Navigator
      initialRouteName={'Homestack'}
      screenOptions={({route}) => ({
        tabBarBackground: () => (
          <LinearGradient
            // colors={['#4c669f', '#3b5998', '#192f6a']}
            colors={[COLORS.GRADIENT_FIRST, COLORS.GRADIENT_SECOND]}
            style={{flex: 1}}
          />
        ),

        tabBarActiveTintColor: COLORS.GRADIENT_FIRST,
        headerShown: false,
        tabBarStyle: getTabBarStyle(route),
        // unmountOnBlur: true,
      })}>
      <BottomTab.Screen
        name="Homestack"
        component={Homestack}
        initialParams={{notif: false}}
        listeners={() => ({
          tabPress: e => {
            setIsActive(false);
          },
        })}
        options={{
          unmountOnBlur: true,
          tabBarLabel: '',
          tabBarIcon: ({focused, size}) =>
            focused ? (
              <Entypo
                style={{bottom: -6}}
                name="home"
                size={30}
                color={COLORS.WHITE}
              />
            ) : (
              <AntDesign
                style={{bottom: -6}}
                name="home"
                size={30}
                color={'#d3d3d3'}
              />
            ),
        }}
      />
      <BottomTab.Screen
        name="IncomingStack"
        component={IncomingStack}
        listeners={() => ({
          tabPress: e => {
            setIsActive(false);
          },
        })}
        options={{
          unmountOnBlur: true,
          tabBarLabel: '',
          tabBarIcon: ({focused, size}) =>
            focused ? (
              <Ionicons
                name="arrow-down-outline"
                size={30}
                style={{bottom: -6}}
                color={COLORS.WHITE}
              />
            ) : (
              <Ionicons
                name="arrow-down-outline"
                size={30}
                style={{bottom: -6}}
                color={'#d3d3d3'}
                // color={COLORS.WHITE}
              />
            ),
        }}
      />

      <BottomTab.Screen
        name="OutgoingStack"
        component={OutgoingStack}
        listeners={() => ({
          tabPress: e => {
            if (isActive) {
              e.preventDefault();
              navigation.navigate('IncomingStack');
              setIsActive(false);
            } else {
              navigation.navigate('Homestack');

              setIsActive(true);
            }
          },
        })}
        options={{
          unmountOnBlur: true,
          tabBarLabel: '',
          tabBarIcon: ({focused, size}) => (
            <View
              style={{
                height: 60,
                bottom: -6,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {focused ? (
                <Ionicons
                  name="arrow-up-outline"
                  size={30}
                  color={COLORS.WHITE}
                />
              ) : (
                <Ionicons
                  name="arrow-up-outline"
                  size={30}
                  // color={COLORS.WHITE}
                  color={'#d3d3d3'}
                />
              )}
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        name="ProfileStack"
        component={ProfileStack}
        listeners={() => ({
          tabPress: e => {
            setIsActive(false);
          },
        })}
        options={{
          unmountOnBlur: true,
          tabBarLabel: '',
          tabBarIcon: ({focused, size}) =>
            focused ? (
              <AntDesign
                name="profile"
                style={{bottom: -6}}
                size={30}
                color={COLORS.WHITE}
              />
            ) : (
              <AntDesign
                style={{bottom: -6}}
                name="profile"
                size={30}
                color={'#d3d3d3'}
                // color={COLORS.WHITE}
              />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  toolTipContainer: {
    paddingHorizontal: 20,
  },
  TTContentStyle: {
    backgroundColor: '#2F3247',
    borderRadius: 11,
    width: 220,
    height: 50,
  },
  ttTextStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  notificationCountBadge: {
    width: 16,
    height: 16,
    backgroundColor: '#2f3247',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    top: -10,
    right: -5,
    zIndex: 1,
  },
  notificationCountText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    color: '#ffffff',
  },
});

export default BottomTabNav;
