import {Platform} from 'react-native';
import {globalStyles} from '../styles/GlobalStyles';

export function getTestId(id) {
  if (Platform.OS === 'ios') {
    return {testID: id, accessible: true};
  }

  return {accessibilityLabel: id, accessible: true};
}

export function getTestTabNavigationId(id) {
  if (Platform.OS === 'ios') {
    return {tabBarTestID: id};
  }

  return {tabBarAccessibilityLabel: id};
}
