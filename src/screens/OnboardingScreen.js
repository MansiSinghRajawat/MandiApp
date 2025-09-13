// import React from 'react';
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalStyles} from '../styles/GlobalStyles';
import {COLORS, PERCENTAGE, SIZES, WEIGHT} from '../constants/theme';
import LinearGradient from 'react-native-linear-gradient';

const OnBoard = ({navigation, props}) => {
  const slideReference = useRef();

  let slider = AppIntroSlider || undefined;

  const _keyExtractor = item => item.title;

  const data = [
    {
      title: 'Welcome to Mandi App!',
      id: 0,
      text: 'Your Crop Inventory, Simplified.',
      image: require('../assets/images/aslide-one.png'),
    },
    {
      title: 'Join Our Community',
      id: 1,
      text: 'Track, Manage, Harvest Success.',
      image: require('../assets/images/aslide-two.png'),
    },
    {
      title: 'Get Started Today',
      id: 2,
      text: 'Grow Smart with Crop Insights.',
      image: require('../assets/images/aslide-three.png'),
    },
  ];

  const _clickedGetStarted = async () => {
    let value = 'OnBoarding';
    await AsyncStorage.setItem('OnBoarding', value);
    navigation.navigate('Login', {valueFromOnboarding: 'I_Onboarding'});
  };

  const _clickedNextButton = activeIndex => {
    slideReference.current.goToSlide(activeIndex + 1);
    // slideReference.current?.goToSlide(i, true)
  };

  const _clickedSkipBtn = () => {
    slideReference.current.goToSlide(2);
  };

  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image
          style={styles.slideImage}
          resizeMode="cover"
          source={item.image}
        />
        <View style={styles.paginationDots}>
          {data.map((_, i) => {
            return (
              <TouchableOpacity
                accessible={false}
                key={i}
                style={[
                  styles.dot,
                  i === item.id
                    ? styles.activeDot
                    : {backgroundColor: COLORS.WHITE},
                ]}
                onPress={() => slideReference.current?.goToSlide(i, true)}
              />
            );
          })}
        </View>
        <View style={styles.slideMessage}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const _renderPagination = activeIndex => {
    // alert(activeIndex)
    return (
      <View style={styles.btnGroup}>
        {activeIndex === 2 ? (
          <TouchableOpacity
            accessible={false}
            onPress={_clickedGetStarted}
            style={styles.getStartedBtn}>
            <Text style={styles.getStartedBtnText}>{'Get Started'}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            accessible={false}
            onPress={() => _clickedNextButton(activeIndex)}
            style={styles.nextBtn}>
            <Text style={styles.nextBtnText}>{'Next'}</Text>
          </TouchableOpacity>
        )}
        {activeIndex != 2 ? (
          <TouchableOpacity
            accessible={false}
            onPress={_clickedSkipBtn}
            style={styles.skipBtn}>
            <Text style={styles.skipBtnText}>{'Skip'}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };

  return (
    <LinearGradient
      colors={[COLORS.GRADIENT_FIRST, COLORS.GRADIENT_SECOND]}
      style={{flex: 1}}
      >
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.GRADIENT_FIRST}
      />
      <SafeAreaView style={[globalStyles.safeArea]}>
        <View style={[globalStyles.safeArea]}>
          <AppIntroSlider
            keyExtractor={_keyExtractor}
            renderItem={_renderItem}
            renderPagination={_renderPagination}
            data={data}
            ref={slideReference}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: SIZES.SIZES_1,
  },
  slideImage: {
    alignSelf: 'center',
    marginTop: PERCENTAGE.PERCENTAGE_15,
  },
  paginationDots: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: SIZES.SIZES_20,
  },
  dot: {
    width: SIZES.SIZES_8,
    height: SIZES.SIZES_8,
    borderRadius: SIZES.SIZES_4,
    marginHorizontal: SIZES.SIZES_4,
    backgroundColor: COLORS.BLACK,
  },
  activeDot: {
    backgroundColor: COLORS.WHITE,
    // backgroundColor: COLORS.BLACK,
    height: SIZES.SIZES_8,
    borderRadius: SIZES.SIZES_4,
    width: SIZES.SIZES_30,
    margin: SIZES.SIZES_16,
  },
  slideMessage: {
    paddingHorizontal: SIZES.SIZES_30,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.SIZES_28,
    color: COLORS.WHITE,
    fontWeight: WEIGHT.WEIGHT_BOLD,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.SIZES_14,
    color: COLORS.WHITE,
    fontWeight: WEIGHT.WEIGHT_BOLD,
  },
  btnGroup: {
    // backgroundColor: COLORS.APP_THEME,
    paddingHorizontal: SIZES.SIZES_60,
    paddingVertical: SIZES.SIZES_30,
  },
  nextBtn: {
    height: SIZES.SIZES_50,
    // backgroundColor: COLORS.WHITE,
    backgroundColor: COLORS.BLACK,
    // borderRadius: SIZES.SIZES_11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextBtnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.SIZES_16,
    // color: COLORS.APP_THEME,
    color: COLORS.WHITE,
    fontWeight: WEIGHT.WEIGHT_BOLD,
  },
  skipBtn: {
    height: SIZES.SIZES_50,
    // borderRadius: SIZES.SIZES_10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipBtnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.SIZES_16,
    color: COLORS.WHITE,
    fontWeight: WEIGHT.WEIGHT_BOLD,
  },
  getStartedBtn: {
    height: SIZES.SIZES_50,
    // backgroundColor: COLORS.WHITE,
    backgroundColor: COLORS.BLACK,
    // borderRadius: SIZES.SIZES_10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.SIZES_30,
  },
  getStartedBtnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.SIZES_16,
    // color: COLORS.APP_THEME,
    color: COLORS.WHITE,
    fontWeight: WEIGHT.WEIGHT_BOLD,
  },
});

export default OnBoard;
