/**
 * Metro bundler configuration for Expo.
 *
 * KEY FIX: transformIgnorePatterns
 * ─────────────────────────────────
 * By default Metro does NOT apply Babel to anything inside node_modules.
 * react-native-worklets (a peer of react-native-reanimated v4) ships its
 * source with private class field syntax (#field), which older Hermes
 * versions reject at runtime with:
 *   "SyntaxError: private properties are not supported"
 *
 * The regex below is an allow-list: it tells Metro to SKIP transformation
 * for node_modules that are NOT in the list (i.e. third-party libs that
 * ship pre-compiled, Hermes-compatible code). Every package in the list
 * WILL be run through Babel, so its #field syntax gets transpiled before
 * the bundle reaches the device.
 */
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

/**
 * Packages that must be transpiled by Babel because they ship modern JS
 * syntax (private class fields, optional chaining, etc.) not supported by
 * all Hermes versions reachable via Expo Go.
 *
 * Rule: if a new "private properties" crash appears, add the offending
 * package name here and restart Metro with `npx expo start --clear`.
 */
const TRANSFORM_ALLOW_LIST = [
  // React Native core
  'react-native',
  '@react-native',
  '@react-native-community',
  // Expo SDK
  'expo',
  '@expo',
  '@expo-google-fonts',
  // Expo Router + React Navigation
  'expo-router',
  'react-navigation',
  '@react-navigation',
  // Reanimated v4 — both packages ship #field syntax
  'react-native-reanimated',
  'react-native-worklets',   // ← root cause of the crash
  // Other native modules used in this project
  'react-native-svg',
  'react-native-safe-area-context',
];

// Build the regex: match node_modules paths that are NOT in the allow-list.
// Those matched paths will be EXCLUDED from transformation (default behaviour).
// Paths that DON'T match (i.e. are in the allow-list) WILL be transformed.
const transformIgnorePattern =
  `node_modules/(?!(${TRANSFORM_ALLOW_LIST.join('|')})/)`;

config.transformer.transformIgnorePatterns = [transformIgnorePattern];

module.exports = config;
