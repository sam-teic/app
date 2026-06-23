/**
 * Babel configuration for Expo SDK 54 + React Native.
 *
 * HOW THIS FIXES "private properties are not supported" IN HERMES
 * ──────────────────────────────────────────────────────────────
 * 1. `babel-preset-expo` automatically enables:
 *      @babel/plugin-transform-class-properties
 *      @babel/plugin-transform-private-methods
 *    These transforms rewrite `#field` private class field syntax into
 *    Hermes-compatible property access code for every file Babel processes.
 *
 * 2. Metro's `transformIgnorePatterns` (see metro.config.js) is configured
 *    to run Babel over react-native-worklets and react-native-reanimated,
 *    so their #field syntax is also transformed before reaching the device.
 *
 * 3. `react-native-reanimated/plugin` MUST be listed last. It rewrites
 *    worklet functions into serialisable descriptors that Reanimated's
 *    native thread can execute. It requires react-native-worklets to be
 *    installed (which it is, as a peer dep of reanimated v4).
 */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        'babel-preset-expo',
        {
          // Explicitly target Hermes to ensure the preset selects
          // transforms that produce Hermes-compatible output.
          jsxRuntime: 'automatic',
        },
      ],
    ],
    plugins: [
      // Module path aliases: `@/` → `./src/`
      [
        'module-resolver',
        {
          root: ['./'],
          alias: { '@': './src' },
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
            '.png',
            '.jpg',
            '.jpeg',
            '.gif',
            '.svg',
          ],
        },
      ],
      // MUST BE LAST — rewrites worklet functions for react-native-reanimated.
      // Requires react-native-worklets (installed as reanimated v4 peer dep).
      'react-native-reanimated/plugin',
    ],
  };
};
