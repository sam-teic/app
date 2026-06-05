/**
 * MenuScreen — React Native component.
 * In RN: remove rnShims import and use react-native primitives directly.
 * Renders a side drawer overlay. In a real RN app, implement as a Modal or
 * DrawerNavigator overlay on top of DashboardScreen.
 */
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  SW,
  SH,
} from "./rnShims";
import logoImg from "@/imports/Menu/f63515ccfd8aeaadc3275663a9e2183ed31d98fd.png";

interface MenuScreenProps {
  onClose?: () => void;
  onUpdateProfile?: () => void;
  onChangePassword?: () => void;
  onReferrals?: () => void;
  onPrivacyPolicy?: () => void;
  onLogout?: () => void;
}

// ── Icons (inline SVG for web; swap for react-native-svg in RN) ───────────────

function IconUpdateProfile({ color = "#F70003" }: { color?: string }) {
  return (
    <svg width={22} height={16} viewBox="0 0 22 16" fill="none">
      <path
        d="M1 15c0-3.87 4.03-7 9-7s9 3.13 9 7M11 8a4 4 0 100-8 4 4 0 000 8z"
        fill={color}
      />
    </svg>
  );
}

function IconChangePassword({ color = "#F70003" }: { color?: string }) {
  return (
    <svg width={22} height={20} viewBox="0 0 22 20" fill="none">
      <path
        d="M7 9V5.5a4 4 0 018 0V9M3 9h16a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8a1 1 0 011-1zM11 14v2"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconReferrals({ color = "#F70003" }: { color?: string }) {
  return (
    <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      <circle cx="8" cy="6" r="3.5" stroke={color} strokeWidth="1.8" />
      <path d="M1.5 19c0-3.6 3-6.5 6.5-6.5s6.5 2.9 6.5 6.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="17" cy="5" r="2.5" stroke={color} strokeWidth="1.8" />
      <path d="M14 14.5c.8-.3 1.9-.5 3-.5 2.5 0 4.5 1.8 4.5 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconPrivacyPolicy({ color = "#F70003" }: { color?: string }) {
  return (
    <svg width={22} height={20} viewBox="0 0 22 20" fill="none">
      <path
        d="M11 1L2 5v5c0 5.25 3.8 10.15 9 11 5.2-.85 9-5.75 9-11V5L11 1z"
        fill={color}
      />
    </svg>
  );
}

function IconLogout({ color = "#F70003" }: { color?: string }) {
  return (
    <svg width={18} height={18} viewBox="0 0 18 18" fill="none">
      <path
        d="M7 17H3a2 2 0 01-2-2V3a2 2 0 012-2h4M12 13l4-4-4-4M16 9H7"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSun({ color = "#F70003" }: { color?: string }) {
  return (
    <svg width={16} height={16} viewBox="0 0 16.5 16.5" fill="none">
      <circle cx="8.25" cy="8.25" r="3" fill={color} />
      <path
        d="M8.25 1v1.5M8.25 14v1.5M1 8.25h1.5M14 8.25h1.5M3.2 3.2l1.06 1.06M11.24 11.24l1.06 1.06M3.2 13.3l1.06-1.06M11.24 5.26l1.06-1.06"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMoon({ color = "#5F5E5E" }: { color?: string }) {
  return (
    <svg width={13} height={13} viewBox="0 0 13.5 13.5" fill="none">
      <path
        d="M12 8.5A6.5 6.5 0 015 1.5a6.5 6.5 0 100 11.5A6.5 6.5 0 0012 8.5z"
        fill={color}
      />
    </svg>
  );
}

function IconSystem({ color = "#5F5E5E" }: { color?: string }) {
  return (
    <svg width={15} height={12} viewBox="0 0 15 12" fill="none">
      <rect x="1" y="1" width="13" height="9" rx="1.5" fill={color} />
      <path d="M5 11h5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconHamburger() {
  return (
    <svg width={18} height={12} viewBox="0 0 18 12" fill="none">
      <path d="M1 1h16M1 6h16M1 11h16" stroke="#F70003" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ── Nav item ──────────────────────────────────────────────────────────────────

function NavItem({
  icon,
  label,
  onPress,
  labelColor = "#191c1e",
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
  labelColor?: string;
}) {
  return (
    <TouchableOpacity style={ms.navItem} onPress={onPress} activeOpacity={0.7}>
      <View style={ms.navIcon}>{icon}</View>
      <Text style={[ms.navLabel, { color: labelColor }]}>{label}</Text>
    </TouchableOpacity>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function MenuScreen({
  onClose,
  onUpdateProfile,
  onChangePassword,
  onReferrals,
  onPrivacyPolicy,
  onLogout,
}: MenuScreenProps) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");

  return (
    <View style={ms.screen}>
      <StatusBar />

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
      <TouchableOpacity style={ms.overlay} onPress={onClose} activeOpacity={1} />

      {/* Side drawer */}
      <View style={ms.aside}>
        <View style={ms.asideShadow} />

        {/* Drawer header with logo */}
        <View style={ms.drawerHeader}>
          <Image source={logoImg} style={ms.drawerLogo} resizeMode="contain" />
        </View>

        {/* Navigation links */}
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={ms.navItems}>
            <NavItem
              icon={<IconUpdateProfile />}
              label="Update Profile"
              onPress={onUpdateProfile}
            />
            <NavItem
              icon={<IconChangePassword />}
              label="Change Password"
              onPress={onChangePassword}
            />
            <NavItem
              icon={<IconReferrals />}
              label="Referrals"
              onPress={onReferrals}
            />
            <NavItem
              icon={<IconPrivacyPolicy />}
              label="Privacy Policy"
              onPress={onPrivacyPolicy}
            />

            {/* Divider */}
            <View style={ms.divider} />

            {/* Theme switcher */}
            <View style={ms.themeSection}>
              <Text style={ms.themeLabel}>SWITCH THEME</Text>
              <View style={ms.themeSwitcher}>
                <TouchableOpacity
                  style={[ms.themeOption, theme === "light" && ms.themeOptionActive]}
                  onPress={() => setTheme("light")}
                  activeOpacity={0.7}
                >
                  <IconSun color={theme === "light" ? "#F70003" : "#5F5E5E"} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[ms.themeOption, theme === "dark" && ms.themeOptionActive]}
                  onPress={() => setTheme("dark")}
                  activeOpacity={0.7}
                >
                  <IconMoon color={theme === "dark" ? "#F70003" : "#5F5E5E"} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[ms.themeOption, theme === "system" && ms.themeOptionActive]}
                  onPress={() => setTheme("system")}
                  activeOpacity={0.7}
                >
                  <IconSystem color={theme === "system" ? "#F70003" : "#5F5E5E"} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Logout */}
        <View style={ms.footer}>
          <NavItem
            icon={<IconLogout />}
            label="Logout"
            onPress={onLogout}
            labelColor="#F70003"
          />
        </View>
      </View>
    </View>
  );
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const ASIDE_W = 280;

const ms = StyleSheet.create({
  screen: {
    width: SW,
    height: SH,
    backgroundColor: "#F7F6F8",
    position: "relative",
    overflow: "hidden",
  },
  // Dashboard background preview
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#F7F6F8",
  },
  bgHeader: {
    position: "absolute",
    top: 76,
    left: 0,
    right: 0,
    backgroundColor: "rgba(255,255,255,0.4)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  bgGreeting: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#5f5e5e",
    letterSpacing: 0.6,
    lineHeight: 16,
    textTransform: "uppercase",
  },
  bgUserName: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 24,
    color: "#191c1e",
    lineHeight: 32,
  },
  bgMenuBtn: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
  // Overlay
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(25,28,30,0.4)",
    backdropFilter: "blur(4px)",
    zIndex: 10,
  },
  // Aside drawer
  aside: {
    position: "absolute",
    top: 0,
    left: 0,
    width: ASIDE_W,
    height: SH + 100,
    backgroundColor: "#FFFFFF",
    zIndex: 20,
    flexDirection: "column",
  },
  asideShadow: {
    position: "absolute",
    top: 0,
    left: 0,
    width: ASIDE_W,
    height: SH + 100,
    boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)",
  },
  // Drawer header
  drawerHeader: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 25,
    borderBottom: "1px solid rgba(234,188,180,0.3)",
    flexShrink: 0,
  },
  drawerLogo: {
    width: 110,
    height: 55,
  },
  // Nav
  navItems: {
    flexDirection: "column",
    gap: 4,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  navIcon: {
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  navLabel: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(234,188,180,0.2)",
    marginVertical: 8,
  },
  // Theme switcher
  themeSection: {
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  themeLabel: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#5f5e5e",
    letterSpacing: 0.6,
    lineHeight: 16,
    textTransform: "uppercase",
  },
  themeSwitcher: {
    flexDirection: "row",
    backgroundColor: "#ECEEF0",
    borderRadius: 32,
    padding: 4,
    width: 216,
  },
  themeOption: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    borderRadius: 9999,
  },
  themeOptionActive: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 1px 1px rgba(0,0,0,0.05)",
  },
  // Footer logout
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexShrink: 0,
  },
});
