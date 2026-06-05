/**
 * MenuScreen — Side drawer overlay. React Native / Expo Router.
 * web-only CSS removed; SVGs replaced with react-native-svg.
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  IconHamburger,
  IconUpdateProfile,
  IconChangePassword,
  IconReferrals,
  IconPrivacyPolicy,
  IconLogout,
  IconSun,
  IconMoon,
  IconSystem,
} from '@/components/icons';
import { PS_400, PS_600, PS_700 } from '@/components/fonts';
import { useTheme } from '@/context/ThemeContext';
import { ThemeColors } from '@/constants/theme';
import AccessPowerLogoDark from '@/components/AccessPowerLogoDark';

const logoImg = require('@/imports/Menu/f63515ccfd8aeaadc3275663a9e2183ed31d98fd.png') as number;
const ASIDE_W = 280;

// ─── Nav item ─────────────────────────────────────────────────────────────────

function NavItem({ icon, label, onPress, labelColor, colors }: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
  labelColor?: string;
  colors: ThemeColors;
}) {
  const ms = getStyles(colors);
  return (
    <TouchableOpacity style={ms.navItem} onPress={onPress} activeOpacity={0.7}>
      <View style={ms.navIcon}>{icon}</View>
      <Text style={[ms.navLabel, { color: labelColor || colors.textMain }]}>{label}</Text>
    </TouchableOpacity>
  );
}

/** Side-drawer menu screen. */
export default function MenuScreen() {
  const router = useRouter();
  const { mode: theme, setMode: setTheme, colors, isDark } = useTheme();
  const ms = getStyles(colors);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={ms.screen}>
        {/* Dashboard background preview */}
        <View style={ms.background}>
          <View style={ms.bgHeader}>
            <View>
              <Text style={ms.bgGreeting}>GOOD MORNING</Text>
              <Text style={ms.bgUserName}>David Abuh</Text>
            </View>
            <View style={ms.bgMenuBtn}>
              <IconHamburger />
            </View>
          </View>
        </View>

        {/* Dark overlay — tap to close */}
        <TouchableOpacity style={ms.overlay} onPress={() => router.back()} activeOpacity={1} />

        {/* Side drawer */}
        <View style={ms.aside}>
          <View style={ms.asideShadow} />

          <View style={ms.drawerHeader}>
            {theme === 'dark' || (theme === 'system' && isDark) ? (
              <AccessPowerLogoDark width={110} height={55} />
            ) : (
              <Image source={logoImg} style={ms.drawerLogo} resizeMode="contain" />
            )}
          </View>

          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={ms.navItems}>
              <NavItem colors={colors} icon={<IconUpdateProfile />} label="Update Profile" onPress={() => router.push('/profile')} />
              <NavItem colors={colors} icon={<IconChangePassword />} label="Change Password" onPress={() => router.push('/change-password')} />
              <NavItem colors={colors} icon={<IconReferrals />} label="Transactions" onPress={() => router.push('/transaction-history')} />
              <NavItem colors={colors} icon={<IconPrivacyPolicy />} label="Privacy Policy" onPress={() => router.back()} />

              <View style={ms.divider} />

              <View style={ms.themeSection}>
                <Text style={ms.themeLabel}>SWITCH THEME</Text>
                <View style={ms.themeSwitcher}>
                  <TouchableOpacity style={[ms.themeOption, theme === 'light' && ms.themeOptionActive]} onPress={() => setTheme('light')} activeOpacity={0.7}>
                    <IconSun color={theme === 'light' ? colors.primary : colors.textSub} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[ms.themeOption, theme === 'dark' && ms.themeOptionActive]} onPress={() => setTheme('dark')} activeOpacity={0.7}>
                    <IconMoon color={theme === 'dark' ? colors.primary : colors.textSub} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[ms.themeOption, theme === 'system' && ms.themeOptionActive]} onPress={() => setTheme('system')} activeOpacity={0.7}>
                    <IconSystem color={theme === 'system' ? colors.primary : colors.textSub} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>

          <View style={ms.footer}>
            <NavItem colors={colors} icon={<IconLogout />} label="Logout" onPress={() => router.replace('/welcome')} labelColor={colors.primary} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const getStyles = (colors: ThemeColors) => StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, position: 'relative', overflow: 'hidden' },
  background: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: colors.background },
  bgHeader: { position: 'absolute', top: 76, left: 0, right: 0, backgroundColor: colors.headerBg, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, paddingVertical: 16 },
  bgGreeting: { fontFamily: PS_600, fontSize: 12, color: colors.textSub, letterSpacing: 0.6, lineHeight: 16, textTransform: 'uppercase' },
  bgUserName: { fontFamily: PS_700, fontSize: 24, color: colors.textMain, lineHeight: 32 },
  bgMenuBtn: { width: 40, height: 40, borderRadius: 9999, alignItems: 'center', justifyContent: 'center' },
  overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: colors.transparentOverlay, zIndex: 10 },
  aside: { position: 'absolute', top: 0, left: 0, width: ASIDE_W, bottom: 0, backgroundColor: colors.surfaceSolid, zIndex: 20, flexDirection: 'column' },
  asideShadow: { position: 'absolute', top: 0, left: 0, width: ASIDE_W, bottom: 0, shadowColor: '#000', shadowOffset: { width: 12, height: 0 }, shadowOpacity: 0.25, shadowRadius: 25, elevation: 10 },
  drawerHeader: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 25, borderBottomWidth: 1, borderBottomColor: colors.border, flexShrink: 0 },
  drawerLogo: { width: 110, height: 55 },
  navItems: { flexDirection: 'column', gap: 4, paddingHorizontal: 16, paddingVertical: 24 },
  navItem: { flexDirection: 'row', alignItems: 'center', gap: 16, paddingHorizontal: 16, paddingVertical: 12, borderRadius: 12 },
  navIcon: { width: 22, height: 22, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  navLabel: { fontFamily: PS_400, fontSize: 16, lineHeight: 24 },
  divider: { height: 1, backgroundColor: colors.border, marginVertical: 8 },
  themeSection: { gap: 12, paddingHorizontal: 16, paddingVertical: 8 },
  themeLabel: { fontFamily: PS_600, fontSize: 12, color: colors.textSub, letterSpacing: 0.6, lineHeight: 16, textTransform: 'uppercase' },
  themeSwitcher: { flexDirection: 'row', backgroundColor: colors.background, borderRadius: 32, padding: 4, width: 216 },
  themeOption: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 6, borderRadius: 9999 },
  themeOptionActive: { backgroundColor: colors.surfaceSolid, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 1, elevation: 1 },
  footer: { paddingHorizontal: 16, paddingVertical: 16, flexShrink: 0 },
});
