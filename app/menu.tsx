/**
 * MenuScreen — Side drawer overlay. React Native / Expo Router.
 * web-only CSS removed; SVGs replaced with react-native-svg.
 */
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Animated,
  Easing,
  BackHandler,
} from "react-native";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import { SafeAreaView } from "react-native-safe-area-context";
// Icons imported as local PNG assets
import { PS_400, PS_600, PS_700 } from "@/components/fonts";
import { useTheme } from "@/context/ThemeContext";
import { ThemeColors } from "@/constants/theme";
import { InteractiveButton } from "@/components/FormField";

const logoImg =
  require("@/imports/Menu/f63515ccfd8aeaadc3275663a9e2183ed31d98fd.png") as number;
const darkLogoImg = require("@/assets/icons/darklogo.png") as number;
const ASIDE_W = 260;

const lightIcon = require("@/assets/icons/light.png") as number;
const moonIcon = require("@/assets/icons/moon.png") as number;
const systemIcon = require("@/assets/icons/sstem.png") as number;

const profileIcon = require("@/assets/icons/profile.png") as number;
const changepasswordIcon =
  require("@/assets/icons/changepassword.png") as number;
const securityIcon = require("@/assets/icons/security.png") as number;
const logoutIcon = require("@/assets/icons/logout.png") as number;

// ─── Nav item ─────────────────────────────────────────────────────────────────

function NavItem({
  icon,
  label,
  onPress,
  labelColor,
  colors,
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
  labelColor?: string;
  colors: ThemeColors;
}) {
  const ms = getStyles(colors);
  return (
    <InteractiveButton
      style={ms.navItem}
      onPress={onPress ?? (() => {})}
      activeScale={0.98}
    >
      <View style={ms.navIcon}>{icon}</View>
      <Text style={[ms.navLabel, { color: labelColor || colors.textMain }]}>
        {label}
      </Text>
    </InteractiveButton>
  );
}

/** Side-drawer menu screen. */
export default function MenuScreen() {
  const router = useRouter();
  const { mode: theme, setMode: setTheme, colors, isDark } = useTheme();
  const ms = getStyles(colors, isDark);

  const slideAnim = useRef(new Animated.Value(-ASIDE_W)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 280,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 280,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -ASIDE_W,
        duration: 220,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 220,
        useNativeDriver: true,
      }),
    ]).start(() => {
      router.back();
    });
  };

  useEffect(() => {
    const backAction = () => {
      handleClose();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <View style={ms.screen}>
        {/* Dark overlay with native blur — tap to close */}
        <Animated.View style={[ms.overlay, { opacity: fadeAnim }]}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={handleClose}
            activeOpacity={1}
          >
            <BlurView
              intensity={20}
              tint={isDark ? "dark" : "light"}
              style={ms.blur}
            />
          </TouchableOpacity>
        </Animated.View>

        {/* Side drawer */}
        <Animated.View style={[ms.aside, { transform: [{ translateX: slideAnim }] }]}>
          <View style={ms.asideShadow} />

          <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
            <View style={ms.drawerHeader}>
              {theme === "dark" || (theme === "system" && isDark) ? (
                <Image
                  source={darkLogoImg}
                  style={ms.drawerLogo}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={logoImg}
                  style={ms.drawerLogo}
                  resizeMode="contain"
                />
              )}
            </View>

            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
            >
              <View style={ms.navItems}>
                <NavItem
                  colors={colors}
                  icon={
                    <Image
                      source={profileIcon}
                      style={{
                        width: 20,
                        height: 20,
                        tintColor: colors.primary,
                      }}
                      resizeMode="contain"
                    />
                  }
                  label="Update Profile"
                  onPress={() => {
                    handleClose();
                    setTimeout(() => {
                      router.push("/profile");
                    }, 230);
                  }}
                />
                <NavItem
                  colors={colors}
                  icon={
                    <Image
                      source={changepasswordIcon}
                      style={{
                        width: 20,
                        height: 20,
                        tintColor: colors.primary,
                      }}
                      resizeMode="contain"
                    />
                  }
                  label="Change Password"
                  onPress={() => {
                    handleClose();
                    setTimeout(() => {
                      router.push("/change-password");
                    }, 230);
                  }}
                />
                <NavItem
                  colors={colors}
                  icon={
                    <Image
                      source={securityIcon}
                      style={{
                        width: 20,
                        height: 20,
                        tintColor: colors.primary,
                      }}
                      resizeMode="contain"
                    />
                  }
                  label="Privacy Policy"
                  onPress={handleClose}
                />

                <View style={ms.divider} />

                <View style={ms.themeSection}>
                  <Text style={ms.themeLabel}>SWITCH THEME</Text>
                  <View style={ms.themeSwitcher}>
                    <InteractiveButton
                      style={[
                        ms.themeOption,
                        theme === "light" && ms.themeOptionActive,
                      ]}
                      onPress={() => setTheme("light")}
                      activeScale={0.92}
                    >
                      <Image
                        source={lightIcon}
                        style={{
                          width: 14,
                          height: 14,
                          tintColor:
                            theme === "light" ? colors.primary : colors.textSub,
                        }}
                        resizeMode="contain"
                      />
                    </InteractiveButton>
                    <InteractiveButton
                      style={[
                        ms.themeOption,
                        theme === "dark" && ms.themeOptionActive,
                      ]}
                      onPress={() => setTheme("dark")}
                      activeScale={0.92}
                    >
                      <Image
                        source={moonIcon}
                        style={{
                          width: 14,
                          height: 14,
                          tintColor:
                            theme === "dark" ? colors.primary : colors.textSub,
                        }}
                        resizeMode="contain"
                      />
                    </InteractiveButton>
                    <InteractiveButton
                      style={[
                        ms.themeOption,
                        theme === "system" && ms.themeOptionActive,
                      ]}
                      onPress={() => setTheme("system")}
                      activeScale={0.92}
                    >
                      <Image
                        source={systemIcon}
                        style={{
                          width: 14,
                          height: 14,
                          tintColor:
                            theme === "system"
                              ? colors.primary
                              : colors.textSub,
                        }}
                        resizeMode="contain"
                      />
                    </InteractiveButton>
                  </View>
                </View>
              </View>
            </ScrollView>

            <View style={ms.footer}>
              <NavItem
                colors={colors}
                icon={
                  <Image
                    source={logoutIcon}
                    style={{ width: 20, height: 20, tintColor: colors.primary }}
                    resizeMode="contain"
                  />
                }
                label="Logout"
                onPress={() => {
                  handleClose();
                  setTimeout(() => {
                    router.replace("/welcome");
                  }, 230);
                }}
                labelColor={colors.primary}
              />
            </View>
          </SafeAreaView>
        </Animated.View>
      </View>
    </View>
  );
}

const getStyles = (colors: ThemeColors, isDark: boolean = false) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: "transparent",
      position: "relative",
      overflow: "hidden",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 10,
    },
    blur: { flex: 1, backgroundColor: colors.transparentOverlay },
    aside: {
      position: "absolute",
      top: 0,
      left: 0,
      width: ASIDE_W,
      bottom: 0,
      backgroundColor: colors.surfaceSolid,
      zIndex: 20,
      flexDirection: "column",
    },
    asideShadow: {
      position: "absolute",
      top: 0,
      left: 0,
      width: ASIDE_W,
      bottom: 0,
      shadowColor: "#000",
      shadowOffset: { width: 12, height: 0 },
      shadowOpacity: 0.25,
      shadowRadius: 25,
      elevation: 10,
    },
    drawerHeader: {
      paddingHorizontal: 24,
      paddingTop: 24,
      paddingBottom: 25,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      flexShrink: 0,
    },
    drawerLogo: { width: 110, height: 55 },
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
    navLabel: { fontFamily: PS_400, fontSize: 16, lineHeight: 24 },
    divider: { height: 1, backgroundColor: colors.border, marginVertical: 8 },
    themeSection: { gap: 12, paddingHorizontal: 16, paddingVertical: 8 },
    themeLabel: {
      fontFamily: PS_600,
      fontSize: 12,
      color: colors.textSub,
      letterSpacing: 0.6,
      lineHeight: 16,
      textTransform: "uppercase",
    },
    themeSwitcher: {
      flexDirection: "row",
      backgroundColor: isDark ? "#0F0F11" : "#E6E4E8",
      borderRadius: 32,
      padding: 4,
      width: 208,
    },
    themeOption: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 6,
      borderRadius: 9999,
    },
    themeOptionActive: {
      backgroundColor: colors.surfaceSolid,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 1,
      elevation: 1,
    },
    footer: { paddingHorizontal: 16, paddingVertical: 16, flexShrink: 0 },
  });
