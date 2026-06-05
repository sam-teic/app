/**
 * HistoryScreen — React Native component.
 * In RN: remove rnShims import and use react-native primitives directly.
 * FlatList replaced with ScrollView + .map() due to web shim environment.
 */
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  SW,
  SH,
} from "./rnShims";
import { IconArrowLeft } from "./FormField";

interface HistoryScreenProps {
  onBack?: () => void;
}

type TxStatus = "PENDING" | "SUCCESSFUL" | "FAILED";

interface Transaction {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  amount: string;
  amountPositive: boolean;
  status: TxStatus;
  iconType: "bolt" | "wallet";
}

interface MonthGroup {
  month: string;
  transactions: Transaction[];
}

const HISTORY_DATA: MonthGroup[] = [
  {
    month: "MAY 2026",
    transactions: [
      {
        id: "1",
        title: "Wallet Top-up",
        subtitle: "May 28, 2026 • 11:20 AM",
        date: "",
        amount: "₦12,000.00",
        amountPositive: true,
        status: "PENDING",
        iconType: "wallet",
      },
      {
        id: "2",
        title: "Ikeja Electric • 45151438822",
        subtitle: "May 24, 2026 • 09:42 AM",
        date: "",
        amount: "-₦5,000",
        amountPositive: false,
        status: "SUCCESSFUL",
        iconType: "bolt",
      },
    ],
  },
  {
    month: "APRIL 2026",
    transactions: [
      {
        id: "3",
        title: "Wallet Top-up",
        subtitle: "April 28, 2026 • 11:20 AM",
        date: "",
        amount: "+₦20,000",
        amountPositive: true,
        status: "SUCCESSFUL",
        iconType: "wallet",
      },
      {
        id: "4",
        title: "Ibadan Electricity • 99002233114",
        subtitle: "April 05, 2026 • 08:00 AM",
        date: "",
        amount: "₦5,500.00",
        amountPositive: false,
        status: "FAILED",
        iconType: "bolt",
      },
    ],
  },
];

function IconBolt({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.25} viewBox="0 0 16 20" fill="none">
      <path d="M9 2L2 11h6.5L8 18 15 9H8.5L9 2z" fill="#F70003" />
    </svg>
  );
}

function IconWalletSmall({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M12 4H2a.67.67 0 00-.67.67v7.33A.67.67 0 002 12.67h10a.67.67 0 00.67-.67V4.67A.67.67 0 0012 4zM1.33 6.67H12.67M9.33 9.33h1.34" stroke="#F70003" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M3.67 1.33H10" stroke="#F70003" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconSearch({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="6" stroke="#F70003" strokeWidth="1.5" />
      <path d="M13.5 13.5L17 17" stroke="#F70003" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconSort({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 4.67H14M4 8h8M6.67 11.33H9.33" stroke="white" strokeLinecap="round" strokeWidth="1.2" />
    </svg>
  );
}

function IconFilter({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 3h12M4 8h8M6 13h4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

const STATUS_STYLES: Record<TxStatus, { bg: string; text: string }> = {
  PENDING: { bg: "#fef3c7", text: "#b45309" },
  SUCCESSFUL: { bg: "#d1fae5", text: "#047857" },
  FAILED: { bg: "#ffdad6", text: "#ba1a1a" },
};

function TransactionCard({ tx }: { tx: Transaction }) {
  const isFailed = tx.status === "FAILED";
  const statusStyle = STATUS_STYLES[tx.status];

  return (
    <View style={[hs.txCard, isFailed && { opacity: 0.7 }]}>
      <View style={hs.txCardShadow} />
      <View style={hs.txCardInner}>
        {/* Left: icon + info */}
        <View style={hs.txLeft}>
          <View style={tx.iconType === "bolt" ? hs.txIconBolt : hs.txIconWallet}>
            {tx.iconType === "bolt" ? <IconBolt /> : <IconWalletSmall />}
          </View>
          <View style={hs.txInfo}>
            <Text style={hs.txTitle}>{tx.title}</Text>
            <Text style={hs.txSubtitle}>{tx.subtitle}</Text>
          </View>
        </View>
        {/* Right: amount + badge */}
        <View style={hs.txRight}>
          <Text style={hs.txAmount}>{tx.amount}</Text>
          <View style={[hs.statusBadge, { backgroundColor: statusStyle.bg }]}>
            <Text style={[hs.statusText, { color: statusStyle.text }]}>{tx.status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default function HistoryScreen({ onBack }: HistoryScreenProps) {
  const [search, setSearch] = useState("");

  return (
    <View style={hs.screen}>
      <StatusBar />

      {/* Header */}
      <View style={hs.header}>
        <TouchableOpacity onPress={onBack} activeOpacity={0.7} style={hs.backBtn}>
          <IconArrowLeft size={24} color="#F70003" />
        </TouchableOpacity>
        <Text style={hs.headerTitle}>Transaction History</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={hs.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Search + controls */}
        <View style={hs.controls}>
          <View style={hs.searchBar}>
            <View style={hs.searchIcon}>
              <IconSearch />
            </View>
            <TextInput
              style={hs.searchInput}
              value={search}
              onChangeText={setSearch}
              placeholder="Search by token or reference..."
              placeholderTextColor="rgba(95,94,94,0.5)"
            />
          </View>
          <View style={hs.filterRow}>
            <TouchableOpacity style={hs.controlBtn} activeOpacity={0.7}>
              <Text style={hs.controlBtnText}>Sort by</Text>
              <IconSort />
            </TouchableOpacity>
            <TouchableOpacity style={hs.controlBtn} activeOpacity={0.7}>
              <Text style={hs.controlBtnText}>Filter</Text>
              <IconFilter />
            </TouchableOpacity>
          </View>
        </View>

        {/* Timeline */}
        <View style={hs.timeline}>
          {HISTORY_DATA.map((group) => (
            <View key={group.month} style={hs.monthGroup}>
              <Text style={hs.monthHeading}>{group.month}</Text>
              <View style={hs.monthCards}>
                {group.transactions.map((tx) => (
                  <TransactionCard key={tx.id} tx={tx} />
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const hs = StyleSheet.create({
  screen: {
    width: SW,
    height: SH,
    backgroundColor: "#F7F6F8",
    position: "relative",
    overflow: "hidden",
  },
  header: {
    position: "absolute",
    top: 76,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 24,
    paddingVertical: 16,
    zIndex: 10,
  },
  backBtn: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  headerTitle: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 20,
    color: "#191c1e",
    lineHeight: 32,
    flex: 1,
  },
  scrollContent: {
    paddingTop: 160,
    paddingHorizontal: 24,
    paddingBottom: 48,
    gap: 32,
  },
  controls: {
    gap: 10,
    alignItems: "flex-end",
  },
  searchBar: {
    backgroundColor: "#FFFFFF",
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 49,
    paddingRight: 17,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "rgba(234,188,180,0.3)",
    width: "100%",
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    left: 16,
    top: "50%",
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateY: -10 }],
  },
  searchInput: {
    flex: 1,
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 14,
    color: "#5f5e5e",
    lineHeight: 20,
  },
  filterRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  controlBtn: {
    backgroundColor: "#F70003",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  controlBtnText: {
    fontFamily: "Public Sans",
    fontWeight: "500",
    fontSize: 12,
    color: "#FFFFFF",
    lineHeight: 20,
  },
  timeline: {
    gap: 32,
  },
  monthGroup: {
    gap: 16,
  },
  monthHeading: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#5f5e5e",
    letterSpacing: 1.2,
    lineHeight: 16,
    textTransform: "uppercase",
    paddingLeft: 8,
  },
  monthCards: {
    gap: 8,
  },
  txCard: {
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 24,
    backdropFilter: "blur(10px)",
    position: "relative",
    overflow: "hidden",
    minHeight: 102,
  },
  txCardShadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
    borderRadius: 24,
    boxShadow: "0px 4px 20px 0px rgba(247,0,3,0.05)",
  },
  txCardInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 17,
  },
  txLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    flex: 1,
  },
  txIconBolt: {
    width: 40,
    height: 40,
    borderRadius: 32,
    backgroundColor: "#fbe3e4",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  txIconWallet: {
    width: 40,
    height: 40,
    borderRadius: 32,
    backgroundColor: "rgba(255,218,212,0.2)",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  txInfo: {
    flex: 1,
    gap: 4,
  },
  txTitle: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#191c1e",
    lineHeight: 24,
  },
  txSubtitle: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 14,
    color: "#5f5e5e",
    lineHeight: 20,
  },
  txRight: {
    alignItems: "flex-end",
    gap: 4,
    flexShrink: 0,
  },
  txAmount: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 16,
    color: "#191c1e",
    lineHeight: 24,
  },
  statusBadge: {
    borderRadius: 9999,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  statusText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 15,
    textTransform: "uppercase",
  },
});
