import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OutgoingScreen from '../screens/outgoing/OutgoingScreen';




const OutgoingStackNav = createStackNavigator();

const OutgoingStack = props => {
  const [notif, setNotif] = useState(props.route?.params?.notif);
 
  return (
    <OutgoingStackNav.Navigator
      initialRouteName="OutgoingScreen"
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}>
      <OutgoingStackNav.Screen
        initialParams={{notif: props.route?.params?.notif ? true : false}}
        name="OutgoingScreen"
        component={OutgoingScreen}
        options={{gestureEnabled: false}}
      />

    </OutgoingStackNav.Navigator>
  );
};

export default OutgoingStack;
