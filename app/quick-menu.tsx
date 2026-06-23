/**
 * QuickMenuScreen — Floating action overlay. React Native / Expo Router.
 * All SVGs replaced with react-native-svg; boxShadow → shadow*, backdropFilter removed.
 */
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  IconX,
  IconWallet,
  IconHistory,
  IconBolt,
  IconRefresh,
} from "@/components/icons";
import { PS_600, PS_700 } from "@/components/fonts";
import { InteractiveButton } from "@/components/FormField";
import { useTheme } from "@/context/ThemeContext";
import { BlurView } from "expo-blur";

/** Quick-action button component. */
function QuickActionBtn({
  icon,
  label,
  onPress,
  styles,
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
  styles: any;
}) {
  return (
    <InteractiveButton
      style={styles.actionBtn}
      onPress={onPress ?? (() => {})}
      activeScale={0.95}
    >
      <View style={styles.actionBtnShadow} />
      <View style={styles.actionBtnInner}>{icon}</View>
      <Text style={styles.actionBtnLabel}>{label}</Text>
    </InteractiveButton>
  );
}

/** Quick menu floating overlay. */
export default function QuickMenuScreen() {
  const router = useRouter();
  const { isDark, colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <View style={styles.screen}>
        {/* Dark overlay with native blur */}
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => router.back()}
          activeOpacity={1}
        >
          <BlurView
            intensity={20}
            tint={isDark ? "dark" : "light"}
            style={styles.blur}
          />
        </TouchableOpacity>

        {/* X FAB */}
        <InteractiveButton
          style={styles.fab}
          onPress={() => router.back()}
          activeScale={0.9}
        >
          <View style={styles.fabShadow} />
          <IconX />
        </InteractiveButton>

        {/* Quick actions stack */}
        <View style={styles.actionsStack}>
          <QuickActionBtn
            styles={styles}
            icon={<IconWallet color="white" size={20} />}
            label="Create Wallet"
            onPress={() => router.push("/create-wallet")}
          />
          <QuickActionBtn
            styles={styles}
            icon={<IconHistory />}
            label="View Transactions"
            onPress={() => router.push("/transaction-history")}
          />
          <QuickActionBtn
            styles={styles}
            icon={<IconBolt color="white" size={18} />}
            label="Purchase Units"
            onPress={() => router.push("/purchase-unit")}
          />
          <QuickActionBtn
            styles={styles}
            icon={<IconRefresh />}
            label="Process Pending Transaction"
            onPress={() => router.back()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const getStyles = (colors: any) =>
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
    fab: {
      position: "absolute",
      right: 24,
      bottom: 64,
      width: 56,
      height: 56,
      backgroundColor: "#fee2e2",
      borderRadius: 32,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 30,
      overflow: "hidden",
    },
    fabShadow: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 32,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.32,
      shadowRadius: 8,
      elevation: 8,
    },
    actionsStack: {
      position: "absolute",
      right: 24,
      bottom: 136,
      alignItems: "flex-end",
      gap: 16,
      zIndex: 30,
    },
    actionBtn: {
      backgroundColor: "#F70003",
      borderRadius: 9999,
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 12,
      paddingHorizontal: 24,
      gap: 12,
      position: "relative",
      overflow: "hidden",
    },
    actionBtnShadow: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 9999,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    actionBtnInner: {
      width: 20,
      height: 20,
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    actionBtnLabel: {
      fontFamily: PS_600,
      fontSize: 14,
      color: "#FFFFFF",
      lineHeight: 20,
    },
  });
