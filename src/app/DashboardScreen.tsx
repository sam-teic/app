/**
 * DashboardScreen — React Native component.
 * In RN: remove rnShims import and use react-native primitives directly.
 */
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  SW,
  SH,
} from "./rnShims";

interface DashboardScreenProps {
  hasWallet?: boolean;
  onMenu?: () => void;
  onCreateWallet?: () => void;
  onPurchase?: () => void;
}

// ── Icons (inline SVG for web; swap for react-native-svg in RN) ───────────────

function IconHamburger() {
  return (
    <svg width={18} height={12} viewBox="0 0 18 12" fill="none">
      <path d="M1 1h16M1 6h16M1 11h16" stroke="#F70003" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconBolt({ color = "#FFFFFF", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M11.5 2L3.5 11.5H10L8.5 18L16.5 8.5H10L11.5 2Z" fill={color} />
    </svg>
  );
}

function IconWallet({ color = "#F70003", size = 22 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={Math.round(size * 0.82)} viewBox="0 0 22 18" fill="none">
      <rect x="2" y="3" width="18" height="13" rx="2" stroke={color} strokeWidth="1.5" />
      <path d="M2 8h18" stroke={color} strokeWidth="1.5" />
      <circle cx="16" cy="12" r="1.2" fill={color} />
    </svg>
  );
}

function IconArrowUp({ color = "#F70003", size = 14 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M7 11V3M3 7l4-4 4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function WalletCard() {
  return (
    <View style={ss.walletCard}>
      <View style={ss.walletGlow} />
      <View style={ss.walletRow}>
        <View>
          <Text style={ss.walletLabel}>Total Wallet Balance</Text>
          <View style={ss.balanceRow}>
            <Text style={ss.currencySign}>₦</Text>
            <Text style={ss.balanceMain}>12,500</Text>
            <Text style={ss.balanceCents}>.00</Text>
          </View>
        </View>
        <View style={ss.walletIconBox}>
          <IconBolt color="#F70003" size={18} />
        </View>
      </View>
      <View style={ss.walletIdPill}>
        <IconBolt color="#F70003" size={12} />
        <Text style={ss.walletIdText}>Active Wallet ID: AP-8822</Text>
      </View>
    </View>
  );
}

function NoWalletCard({ onCreateWallet }: { onCreateWallet?: () => void }) {
  return (
    <View style={ss.walletCard}>
      <View style={ss.walletGlow} />
      <View style={ss.noWalletRow}>
        <View style={ss.noWalletIconCircle}>
          <IconWallet color="#F70003" size={25} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={ss.noWalletTitle}>No Active Wallet</Text>
          <Text style={ss.noWalletDesc}>{"Create one to unlock bonuses and\nexclusive benefits."}</Text>
        </View>
      </View>
      <TouchableOpacity style={ss.noWalletCreateBtn} onPress={onCreateWallet} activeOpacity={0.85}>
        <Text style={ss.noWalletCreateText}>Create Wallet</Text>
      </TouchableOpacity>
    </View>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function DashboardScreen({
  hasWallet = true,
  onMenu,
  onCreateWallet,
  onPurchase,
}: DashboardScreenProps) {
  return (
    <View style={ss.screen}>
      <StatusBar />

      {/* Sticky header */}
      <View style={ss.header}>
        <View>
          <Text style={ss.greeting}>GOOD MORNING</Text>
          <Text style={ss.userName}>David Abuh</Text>
        </View>
        <TouchableOpacity style={ss.menuBtn} onPress={onMenu} activeOpacity={0.7}>
          <IconHamburger />
        </TouchableOpacity>
      </View>

      <ScrollView style={ss.scroll} contentContainerStyle={ss.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Wallet card */}
        {hasWallet
          ? <WalletCard />
          : <NoWalletCard onCreateWallet={onCreateWallet} />
        }

        {/* Action grid */}
        <View style={ss.actionGrid}>
          <TouchableOpacity style={ss.purchaseBtn} onPress={onPurchase} activeOpacity={0.85}>
            <View style={ss.purchaseIconCircle}>
              <IconBolt color="#FFFFFF" size={20} />
            </View>
            <Text style={ss.purchaseBtnText}>Purchase Units</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ss.createWalletBtn} onPress={onCreateWallet} activeOpacity={0.85}>
            <View style={ss.createWalletIconCircle}>
              <IconWallet color="#F70003" size={22} />
            </View>
            <Text style={ss.createWalletBtnText}>Create Wallet</Text>
          </TouchableOpacity>
        </View>

        {/* Transactions */}
        <View style={{ gap: 8 }}>
          <View style={ss.transHeader}>
            <Text style={ss.transTitle}>Recent Transactions</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={ss.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={ss.transRow}>
            <View style={ss.transIconBg}>
              <IconBolt color="#F70003" size={16} />
            </View>
            <View style={{ flex: 1, marginLeft: 12, gap: 4 }}>
              <Text style={ss.transName}>Ikeja Electric</Text>
              <Text style={ss.transSub}>Token: 4515-1438-8822</Text>
            </View>
            <View style={{ alignItems: "flex-end", gap: 4 }}>
              <Text style={ss.transAmountNeg}>-₦5,000</Text>
              <Text style={ss.transTime}>2h ago</Text>
            </View>
          </View>

          <View style={ss.transRow}>
            <View style={ss.transIconBgLight}>
              <IconArrowUp color="#F70003" size={14} />
            </View>
            <View style={{ flex: 1, marginLeft: 12, gap: 4 }}>
              <Text style={ss.transName}>Wallet Top-up</Text>
              <Text style={ss.transSub}>Via Bank Transfer</Text>
            </View>
            <View style={{ alignItems: "flex-end", gap: 4 }}>
              <Text style={ss.transAmountPos}>+₦20,000</Text>
              <Text style={ss.transTime}>Yesterday</Text>
            </View>
          </View>
        </View>

        {/* Power Saving Tip */}
        <View style={ss.tipCard}>
          <Text style={ss.tipTitle}>Power Saving Tip</Text>
          <View style={ss.tipDecor}>
            <svg width={99} height={115} viewBox="0 0 99 115" fill="none">
              <path d="M65 0L0 58h43L26 115L99 57H55L65 0z" fill="white" opacity="0.1" />
            </svg>
          </View>
          <Text style={ss.tipBody}>
            Switching to LED bulbs can reduce your lighting energy usage by up to 80%.
          </Text>
          <TouchableOpacity style={ss.learnMoreBtn} activeOpacity={0.8}>
            <Text style={ss.learnMoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Floating action button */}
      <View style={ss.fab}>
        <IconBolt color="#FFFFFF" size={20} />
      </View>
    </View>
  );
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const ss = StyleSheet.create({
  screen: {
    width: SW,
    height: SH,
    backgroundColor: "#F7F6F8",
    position: "relative",
    overflow: "hidden",
  },
  // Header
  header: {
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
    zIndex: 10,
  },
  greeting: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#5f5e5e",
    letterSpacing: 0.6,
    lineHeight: 16,
    textTransform: "uppercase",
  },
  userName: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 24,
    color: "#191c1e",
    lineHeight: 32,
  },
  menuBtn: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
  // Scroll
  scroll: { flex: 1 },
  scrollContent: {
    paddingTop: 180,
    paddingHorizontal: 24,
    paddingBottom: 96,
    gap: 16,
  },
  // Wallet card
  walletCard: {
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(10px)",
    padding: 25,
    gap: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.8)",
    boxShadow: "0px 10px 30px -5px rgba(247,0,3,0.05)",
  },
  walletGlow: {
    position: "absolute",
    right: -39,
    top: -39,
    width: 141,
    height: 141,
    borderRadius: 9999,
    backgroundColor: "rgba(188,0,1,0.05)",
    filter: "blur(32px)",
  },
  walletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  walletLabel: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#5f5e5e",
    letterSpacing: 0.6,
    lineHeight: 16,
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 2,
    marginTop: 3.5,
  },
  currencySign: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 20,
    color: "rgba(25,28,30,0.6)",
    letterSpacing: -0.96,
    lineHeight: 28,
  },
  balanceMain: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 32,
    color: "#191c1e",
    letterSpacing: -0.96,
    lineHeight: 56,
  },
  balanceCents: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#5f5e5e",
    lineHeight: 20,
  },
  walletIconBox: {
    width: 35,
    height: 34,
    borderRadius: 12,
    backgroundColor: "rgba(255,218,212,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  walletIdPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(188,0,1,0.05)",
    borderRadius: 9999,
    paddingHorizontal: 13,
    paddingVertical: 9,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "rgba(188,0,1,0.1)",
  },
  walletIdText: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#F70003",
    letterSpacing: 0.6,
    lineHeight: 16,
  },
  // No-wallet state
  noWalletRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  noWalletIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 9999,
    backgroundColor: "rgba(255,218,212,0.3)",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  noWalletTitle: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 20,
    color: "#191c1e",
    lineHeight: 28,
  },
  noWalletDesc: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 12,
    color: "rgba(95,94,94,0.8)",
    lineHeight: 16,
    marginTop: 4,
  },
  noWalletCreateBtn: {
    height: 44,
    backgroundColor: "#F70003",
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 10px 15px -3px rgba(188,0,1,0.2), 0px 4px 6px -4px rgba(188,0,1,0.2)",
  },
  noWalletCreateText: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#FFFFFF",
    lineHeight: 16,
    textAlign: "center",
  },
  // Action grid
  actionGrid: {
    flexDirection: "row",
    gap: 16,
    height: 110,
  },
  purchaseBtn: {
    flex: 1,
    backgroundColor: "#F70003",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    boxShadow: "0px 10px 15px -3px rgba(188,0,1,0.2), 0px 4px 6px -4px rgba(188,0,1,0.2)",
  },
  purchaseIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  purchaseBtnText: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#FFFFFF",
    letterSpacing: 0.2,
    lineHeight: 16,
    textAlign: "center",
  },
  createWalletBtn: {
    flex: 1,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    boxShadow: "0px 10px 30px -5px rgba(247,0,3,0.05)",
  },
  createWalletIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    backgroundColor: "rgba(255,218,212,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  createWalletBtnText: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#F70003",
    letterSpacing: 0.2,
    lineHeight: 16,
    textAlign: "center",
  },
  // Transactions
  transHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  transTitle: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 20,
    color: "#191c1e",
    lineHeight: 28,
  },
  seeAll: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#F70003",
    letterSpacing: 0.6,
    lineHeight: 16,
    textAlign: "center",
  },
  transRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 17,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    boxShadow: "0px 10px 30px -5px rgba(247,0,3,0.05)",
  },
  transIconBg: {
    width: 40,
    height: 40,
    borderRadius: 32,
    backgroundColor: "#fbe3e4",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  transIconBgLight: {
    width: 40,
    height: 40,
    borderRadius: 32,
    backgroundColor: "rgba(255,218,212,0.2)",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  transName: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#191c1e",
    lineHeight: 20,
  },
  transSub: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 14,
    color: "#5f5e5e",
    lineHeight: 20,
  },
  transAmountNeg: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#191c1e",
    lineHeight: 24,
    textAlign: "right",
  },
  transAmountPos: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#F70003",
    lineHeight: 24,
    textAlign: "right",
  },
  transTime: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 12,
    color: "#5f5e5e",
    letterSpacing: 0.6,
    lineHeight: 16,
    textAlign: "right",
  },
  // Power Saving Tip
  tipCard: {
    backgroundColor: "#2D3133",
    borderRadius: 24,
    padding: 24,
    gap: 8,
    overflow: "hidden",
    position: "relative",
  },
  tipTitle: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 20,
    color: "#FFFFFF",
    lineHeight: 28,
  },
  tipDecor: {
    position: "absolute",
    bottom: 0,
    right: -14,
    width: 99,
    height: 115,
  },
  tipBody: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 14,
    color: "#EFF1F3",
    lineHeight: 20,
    opacity: 0.8,
    paddingBottom: 8,
    maxWidth: 269,
  },
  learnMoreBtn: {
    backgroundColor: "#FFFFFF",
    borderRadius: 9999,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: "flex-start",
  },
  learnMoreText: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#191c1e",
    lineHeight: 16,
    textAlign: "center",
  },
  // Floating action button
  fab: {
    position: "absolute",
    right: 24,
    bottom: 48,
    width: 56,
    height: 56,
    backgroundColor: "#F70003",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    boxShadow: "0px 16px 16px -8px rgba(0,0,0,0.32)",
  },
});
