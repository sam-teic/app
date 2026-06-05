/**
 * Splash screen — shown for 2 seconds then navigates to onboarding.
 * Replaces the SplashScreen component from the original App.tsx.
 */
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/context/ThemeContext';
import { ThemeColors } from '@/constants/theme';
import AccessPowerLogoDark from '@/components/AccessPowerLogoDark';

const logoImg = require('@/imports/OnboardingPage/f63515ccfd8aeaadc3275663a9e2183ed31d98fd.png') as number;

/** App splash screen. Displays the APNG logo for 2 s then navigates to onboarding. */
export default function SplashScreen() {
  const router = useRouter();
  const { isDark, mode: theme, colors } = useTheme();
  const ss = getStyles(colors);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView style={ss.splash}>
      {theme === 'dark' || (theme === 'system' && isDark) ? (
        <AccessPowerLogoDark width={195} height={97} />
      ) : (
        <Image source={logoImg} style={ss.splashLogo} resizeMode="contain" />
      )}
    </SafeAreaView>
  );
}

const getStyles = (colors: ThemeColors) => StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashLogo: {
    width: 195,
    height: 97,
  },
});
