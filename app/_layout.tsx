/**
 * Root layout for Expo Router.
 * Loads Google Fonts (Public Sans + Poppins) via expo-font,
 * hides the native splash screen once fonts are ready, and
 * configures the top-level Stack navigator with no headers.
 */
import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Platform } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import {
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_600SemiBold,
  PublicSans_700Bold,
} from '@expo-google-fonts/public-sans';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';

// Keep the native splash visible while fonts load.
SplashScreen.preventAutoHideAsync();

/** Root layout — single Stack navigator, all headers hidden. */
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_600SemiBold,
    PublicSans_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the native splash whether fonts succeeded or failed.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Render nothing until fonts are ready to avoid a flash of unstyled text.
  if (!fontsLoaded && !fontError) return null;

  return (
    <ThemeProvider>
      <LayoutContent />
    </ThemeProvider>
  );
}

function LayoutContent() {
  const { isDark, colors } = useTheme();

  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync(colors.background);
      NavigationBar.setButtonStyleAsync(isDark ? 'light' : 'dark');
    }
  }, [isDark, colors.background]);

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="welcome" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="dashboard" />
        <Stack.Screen name="create-wallet" />
        <Stack.Screen
          name="menu"
          options={{
            presentation: 'transparentModal',
            animation: 'fade',
            contentStyle: { backgroundColor: 'transparent' },
          }}
        />
        <Stack.Screen
          name="quick-menu"
          options={{
            presentation: 'transparentModal',
            animation: 'fade',
            contentStyle: { backgroundColor: 'transparent' },
          }}
        />
        <Stack.Screen name="profile" />
        <Stack.Screen name="change-password" />
        <Stack.Screen name="history" />
        <Stack.Screen name="purchase-unit" />
        <Stack.Screen name="confirm-details" />
        <Stack.Screen name="receipt" />
      </Stack>
    </>
  );
}
