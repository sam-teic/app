/**
 * rnShims — barrel re-export of react-native primitives.
 *
 * Previously: a web-compatibility shim that rendered <div>, <span>, etc.
 * Now: direct re-exports from 'react-native' so any remaining references to
 * this module continue to compile while the project migrates to Expo Router.
 *
 * New code should import directly from 'react-native' or '@/components/*'.
 */
export {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';

export type {
  ViewStyle,
  TextStyle,
  ImageStyle,
  StyleProp,
} from 'react-native';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

/** Device screen width in logical pixels. */
export const SW: number = width;
/** Device screen height in logical pixels. */
export const SH: number = height;

/**
 * Convenience type alias for any React Native style.
 * @deprecated Import from react-native directly.
 */
export type RNStyle = import('react-native').ViewStyle | import('react-native').TextStyle | import('react-native').ImageStyle;
