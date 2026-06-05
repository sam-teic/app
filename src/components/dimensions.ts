/**
 * Screen dimension constants derived from the device window at startup.
 * For a portrait-locked app these values are stable throughout the session.
 */
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

/** Device screen width in logical pixels. */
export const SW: number = width;
/** Device screen height in logical pixels. */
export const SH: number = height;
