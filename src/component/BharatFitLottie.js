import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // zIndex: 100,
    // position: 'absolute',
    // left: 0,
    // top: 0,
    // height: '100%',
    // width: '100%',
  },
});

export default function BharatFitLottie({show = false}) {
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
            backgroundColor: 'red',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {showLogo && (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <LottieView
                source={require('../assets/animations/dumble.json')}
                autoPlay
                loop={true}
                style={{backgroundColor: '#FFFFFF', height: 80}}
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
