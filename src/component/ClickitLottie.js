import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

 

export default function ClickitLottie({show = false}) {

   const [showLogo, setShowLogo] = React.useState(false);
   React.useEffect(() => {
    if (show) {
      setShowLogo(true);
    }
  }, [show]);

  React.useEffect(() => {
    if (showLogo) {
      setTimeout(() => {
        setShowLogo(false);
      }, 2500);
    }
  }, [showLogo]);

  const getView = () => {
    if (show) {
      return (
        <View
          style={{
            backgroundColor: '#e3f1ec',
            flex: 1,
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
          {showLogo && (
            <View
              style={{
                // alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <LottieView
                source={require('../assets/animations/AnimProgressBar.json')}
                // source={require('../assets/animations/dumble.json')}
                autoPlay
                loop={true}
                style={{backgroundColor: '#e3f1ec', height: 280}}
                speed={0.7}
              />
            </View>
          )}
        </View>
      );
    } else {
      return <View />;
    }
  };

  return getView();
}
