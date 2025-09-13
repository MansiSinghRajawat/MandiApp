// Imports: Dependencies
import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Linking} from 'react-native';

import Login from '../screens/Login';
import Otp from '../screens/Otp';
import Faq from '../screens/Faq';
import OnBoard from '../screens/OnboardingScreen';
import ContactUs from '../screens/ContactUs';
import BottomTabNav from '../screens/BottomTabNav';
const AuthStackNav = createStackNavigator();
const MainStackNav = createStackNavigator();

const NavStack = ({props, navigation}) => {
  const [onboarding, setOnboarding] = useState('blanck');
  const isVerified = true;
  const routeNameRef = useRef();
  const navigationRef = useRef();

  const onBoarding = '';
  async function comingFromOnboarding() {
    const onBoarding = await AsyncStorage.getItem('OnBoarding');
    setOnboarding(onBoarding);
  }
  comingFromOnboarding();

  // let navigateTo = 'Login';
  // if (onboarding != '' && onboarding != null) {
  //   navigateTo = 'Login';
  // } else {
  //   navigateTo = 'OnBoard';
  // }

  let navigateTo = 'OnBoard';

  const AuthStack = () => {
    return (
      <AuthStackNav.Navigator
        initialRouteName={navigateTo}
        // initialRouteName={'Otp'}
        screenOptions={{
          headerShown: false,
        }}>
 
        <AuthStackNav.Screen name="OnBoard" component={OnBoard} />
        <AuthStackNav.Screen
          name="Login"
          component={Login}
          options={{
            gestureEnabled: false,
          }}
        />
        <AuthStackNav.Screen name="Otp" component={Otp} />
        <AuthStackNav.Screen name="Faq" component={Faq} />
        <AuthStackNav.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            gestureEnabled: false,
          }}
        />
        <AuthStackNav.Screen name="BottomTabNav" component={BottomTabNav} />
      </AuthStackNav.Navigator>
    );
  };

  const MainStack = () => {
    return (
      <MainStackNav.Navigator
        initialRouteName={'BottomStackNav'}
        screenOptions={{
          headerShown: false,
        }}>
        <MainStackNav.Screen
          name="BottomStackNav"
          component={BottomTabNav}
          initialParams={{notif: false}}
          options={{tabBarStyle: {height: 70}}}
        />
      </MainStackNav.Navigator>
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
        routeNameRef.current = currentRouteName;
      }}>
      {isVerified ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
};
export default NavStack;
