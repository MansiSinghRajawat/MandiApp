import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/profile/ProfileScreen';




const ProfileStackNav = createStackNavigator();

const ProfileStack = props => {
  const [notif, setNotif] = useState(props.route?.params?.notif);
 
  return (
    <ProfileStackNav.Navigator
      initialRouteName="OutgoingScreen"
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}>
      <ProfileStackNav.Screen
        initialParams={{notif: props.route?.params?.notif ? true : false}}
        name="OutgoingScreen"
        component={ProfileScreen}
        options={{gestureEnabled: false}}
      />

    </ProfileStackNav.Navigator>
  );
};

export default ProfileStack;
