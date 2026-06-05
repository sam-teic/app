/**
 * QuickMenuScreen — React Native component.
 * Overlay showing dashboard background + dark blur + quick action buttons.
 * Render on top of DashboardScreen in a real RN app (Modal or navigation overlay).
 */
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SW,
  SH,
} from "./rnShims";

interface QuickMenuScreenProps {
  onClose?: () => void;
  onCreateWallet?: () => void;
  onViewTransactions?: () => void;
  onPurchaseUnits?: () => void;
  onProcessPending?: () => void;
}

function IconX() {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <path d="M8 24L24 8M8 8L24 24" stroke="#F70003" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
    </svg>
  );
}

function IconWallet({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 20 18" fill="none">
      <path d="M18 5H2a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1zM1 9h18M14 14h2" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 1h10" stroke="white" strokeWidth="1.67" strokeLinecap="round" />
    </svg>
  );
}

function IconHistory({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.67" />
      <path d="M10 6v4l3 2" stroke="white" strokeWidth="1.67" strokeLinecap="round" />
    </svg>
  );
}

function IconBolt({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M10 2L4 10h5.5L9 16 15 8H9.5L10 2z" fill="white" />
    </svg>
  );
}

function IconRefresh({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M3.3 10A6.7 6.7 0 0010 16.7a6.7 6.7 0 006.7-6.7 6.7 6.7 0 00-6.7-6.7c-2 0-3.8.9-5 2.3" stroke="white" strokeWidth="1.67" strokeLinecap="round" />
      <path d="M3 6.5V3.5h3" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function QuickActionBtn({
  icon,
  label,
  onPress,
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={qm.actionBtn} onPress={onPress} activeOpacity={0.85}>
      <View style={qm.actionBtnShadow} />
      <View style={qm.actionBtnInner}>
        {icon}
      </View>
      <Text style={qm.actionBtnLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function QuickMenuScreen({
  onClose,
  onCreateWallet,
  onViewTransactions,
  onPurchaseUnits,
  onProcessPending,
}: QuickMenuScreenProps) {
  return (
    <View style={qm.screen}>
      {/* Dashboard bg preview */}
      <View style={qm.bgPreview}>
        <View style={qm.bgHeader}>
          <View>
            <Text style={qm.bgGreeting}>GOOD MORNING</Text>
            <Text style={qm.bgName}>David Abuh</Text>
          </View>
        </View>
      </View>

      {/* Dark overlay */}
      <TouchableOpacity style={qm.overlay} onPress={onClose} activeOpacity={1} />

      {/* X FAB */}
      <TouchableOpacity style={qm.fab} onPress={onClose} activeOpacity={0.85}>
        <View style={qm.fabShadow} />
        <IconX />
      </TouchableOpacity>

      {/* Quick actions stack */}
      <View style={qm.actionsStack}>
        <QuickActionBtn
          icon={<IconWallet />}
          label="Create Wallet"
          onPress={onCreateWallet}
        />
        <QuickActionBtn
          icon={<IconHistory />}
          label="View Transactions"
          onPress={onViewTransactions}
        />
        <QuickActionBtn
          icon={<IconBolt />}
          label="Purchase Units"
          onPress={onPurchaseUnits}
        />
        <QuickActionBtn
          icon={<IconRefresh />}
          label="Process Pending Transaction"
          onPress={onProcessPending}
        />
      </View>
    </View>
  );
}

const qm = StyleSheet.create({
  screen: {
    width: SW,
    height: SH,
    backgroundColor: "#F7F6F8",
    position: "relative",
    overflow: "hidden",
  },
  bgPreview: {
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
  bgName: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 24,
    color: "#191c1e",
    lineHeight: 32,
  },
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
    boxShadow: "0px 16px 16px -8px rgba(0,0,0,0.32)",
    borderRadius: 32,
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
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
    borderRadius: 9999,
  },
  actionBtnInner: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  actionBtnLabel: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 14,
    color: "#FFFFFF",
    lineHeight: 20,
  },
});
