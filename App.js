import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, LogBox, StatusBar, View} from 'react-native';
import LottieView from 'lottie-react-native';
LogBox.ignoreAllLogs();
import PageLoader from './src/component/PageLoader';
import {globalStyles} from './src/styles/GlobalStyles';
import ClickitLottie from './src/component/ClickitLottie';
import AuthContext from './src/authContext';
import NavStack from './src/navigation/NavStack';
import {COLORS, SIZES} from './src/constants/theme';

const App = ({navigation, props, route}) => {
  // const App = () => {
  const [showLoding, setShowLoding] = useState(true);
  const [notifBool, setNotifBool] = useState(false);
  const [loaderHomeScreen, setLoaderHomeScreen] = useState(true);

  // useEffect(() => {}, []);

  useEffect(() => {
    setTimeout(() => {
      setShowLoding(false);
      // setLoaderHomeScreen(false)
    }, 2500);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (Platform.OS == 'ios') {
  //       RNBootSplash.hide();
  //     } else {
  //       SplashScreen.hide();
  //     }
  //     versionUpdate();
  //   }, 1000);
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="light-content" backgroundColor={COLORS.GRADIENT_FIRST} /> */}
      {/* {loaderHomeScreen && (
        <View>
          <PageLoader />
        </View>
      )} */}
      {/* {showLoding ? (
        <ClickitLottie show={showLoding} />
      ) : (  */}
      <AuthContext.Provider value={{isSecured: 'false'}}>
        <NavStack notif={notifBool} />
      </AuthContext.Provider>
        {/* // )}   */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: SIZES.SIZES_1,
    backgroundColor: COLORS.APP_THEME,
  },
});

export default App;
