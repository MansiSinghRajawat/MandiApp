import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';

const HomeStackNav = createStackNavigator();

const Homestack = props => {
  const [notif, setNotif] = useState(props.route?.params?.notif);

  return (
    <HomeStackNav.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}>
      <HomeStackNav.Screen
        initialParams={{notif: props.route?.params?.notif ? true : false}}
        name="HomeScreen"
        component={HomeScreen}
        options={{gestureEnabled: false}}
      />
    </HomeStackNav.Navigator>
  );
};

export default Homestack;
