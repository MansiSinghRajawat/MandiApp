import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IncomingScreen from '../screens/incoming/IncomingScreen';




const IncomingStackNav = createStackNavigator();

const IncomingStack = props => {
  const [notif, setNotif] = useState(props.route?.params?.notif);
 
  return (
    <IncomingStackNav.Navigator
      initialRouteName="IncomingScreen"
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}>
      <IncomingStackNav.Screen
        initialParams={{notif: props.route?.params?.notif ? true : false}}
        name="IncomingScreen"
        component={IncomingScreen}
        options={{gestureEnabled: false}}
      />

    </IncomingStackNav.Navigator>
  );
};

export default IncomingStack;
