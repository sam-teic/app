/**
 * TransactionHistoryScreen — React Native / Expo Router.
 * Uses SectionList for month grouping, responsive layouts, and matching design.
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SectionList,
  TextInput,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  IconArrowLeft,
  IconBolt,
  IconSearch,
  IconPlus,
} from '@/components/icons';
// We might need an IconSort and IconFilter. Let's assume they exist in icons.ts
// If they don't exactly match the "white" icon need, we'll pass color="white"
import { PS_400, PS_600, PS_700 } from '@/components/fonts';
import { useTheme } from '@/context/ThemeContext';
import { ThemeColors } from '@/constants/theme';

// ─── Transaction data ─────────────────────────────────────────────────────────

type TxStatus = 'PENDING' | 'SUCCESSFUL' | 'FAILED';
type TxType = 'topup' | 'token';

type Tx = {
  id: string;
  type: TxType;
  title: string;
  date: string;
  amount: string;
  status: TxStatus;
};

type TxSection = {
  title: string;
  data: Tx[];
};

const TRANSACTIONS: TxSection[] = [
  {
    title: 'MAY 2026',
    data: [
      {
        id: '1',
        type: 'topup',
        title: 'Wallet Top-up',
        date: 'May 28, 2026 • 11:20 AM',
        amount: '₦12,000.00',
        status: 'PENDING',
      },
      {
        id: '2',
        type: 'token',
        title: 'Ikeja Electric •\n45151438822',
        date: 'May 24, 2026 • 09:42 AM',
        amount: '-₦5,000',
        status: 'SUCCESSFUL',
      },
    ],
  },
  {
    title: 'APRIL 2026',
    data: [
      {
        id: '3',
        type: 'topup',
        title: 'Wallet Top-up',
        date: 'April 28, 2026 • 11:20 AM',
        amount: '+₦20,000',
        status: 'SUCCESSFUL',
      },
      {
        id: '4',
        type: 'token',
        title: 'Ibadan Electricity •\n99002233114',
        date: 'April 05, 2026 • 08:00 AM',
        amount: '₦5,500.00',
        status: 'FAILED',
      },
    ],
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────
// If IconSort or IconFilter from existing components don't match or look right,
// they can be updated later. We'll use SVG for Sort/Filter if needed.
// For now, I will use generic SVGs for Sort/Filter matching the design exactly.
import Svg, { Path } from 'react-native-svg';

function SortIcon({ color = '#FFF' }: { color?: string }) {
  return (
    <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <Path d="M3 18H15V16H3V18ZM3 6V8H21V6H3ZM3 13H18V11H3V13Z" fill={color} />
    </Svg>
  );
}

function FilterIcon({ color = '#FFF' }: { color?: string }) {
  return (
    <Svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <Path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill={color} />
    </Svg>
  );
}

// ─── Transaction row ──────────────────────────────────────────────────────────

function TxRow({ item }: { item: Tx }) {
  const { colors } = useTheme();
  const th = getStyles(colors);
  return (
    <View style={th.txRow}>
      <View style={th.txIconBox}>
        {item.type === 'token' ? (
          <IconBolt color={colors.primary} size={20} />
        ) : (
          <IconPlus color={colors.primary} size={20} />
        )}
      </View>
      <View style={th.txDetails}>
        <Text style={th.txTitle} numberOfLines={2}>{item.title}</Text>
        <Text style={th.txDate}>{item.date}</Text>
      </View>
      <View style={th.txRight}>
        <Text style={th.txAmount}>{item.amount}</Text>
        <View style={[
          th.statusPill,
          item.status === 'SUCCESSFUL' && th.statusSuccess,
          item.status === 'PENDING' && th.statusPending,
          item.status === 'FAILED' && th.statusFailed,
        ]}>
          <Text style={[
            th.statusText,
            item.status === 'SUCCESSFUL' && th.statusTextSuccess,
            item.status === 'PENDING' && th.statusTextPending,
            item.status === 'FAILED' && th.statusTextFailed,
          ]}>
            {item.status}
          </Text>
        </View>
      </View>
    </View>
  );
}

// ─── Main screen ──────────────────────────────────────────────────────────────

export default function TransactionHistoryScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const th = getStyles(colors);
  const [search, setSearch] = useState('');

  // Optional: filter logic could be applied here
  const filteredData = TRANSACTIONS.map(section => ({
    ...section,
    data: section.data.filter(t => 
      search.trim() === '' || 
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.amount.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(section => section.data.length > 0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={th.screen}>
        {/* Header */}
        <View style={th.header}>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7} style={th.backBtn}>
            <IconArrowLeft size={24} color={colors.primary} />
          </TouchableOpacity>
          <Text style={th.headerTitle}>Transaction History</Text>
        </View>

        {/* Search & Actions */}
        <View style={th.actionsContainer}>
          <View style={th.searchBar}>
            <View style={th.searchIcon}>
              <IconSearch color={colors.primary} size={20} />
            </View>
            <TextInput
              style={th.searchInput}
              value={search}
              onChangeText={setSearch}
              placeholder="Search by token or reference..."
              placeholderTextColor={colors.textSub}
              returnKeyType="search"
            />
          </View>
          <View style={th.filterRow}>
            <TouchableOpacity style={th.actionBtn} activeOpacity={0.8}>
              <Text style={th.actionBtnText}>Sort by</Text>
              <SortIcon />
            </TouchableOpacity>
            <TouchableOpacity style={th.actionBtn} activeOpacity={0.8}>
              <Text style={th.actionBtnText}>Filter</Text>
              <FilterIcon />
            </TouchableOpacity>
          </View>
        </View>

        {/* List */}
        <SectionList
          sections={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TxRow item={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={th.sectionHeader}>{title}</Text>
          )}
          contentContainerStyle={[th.listContent, { maxWidth: 800, width: '100%', alignSelf: 'center' }]}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          ListEmptyComponent={
            <View style={th.emptyWrap}>
              <Text style={th.emptyText}>No transactions found.</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const getStyles = (colors: ThemeColors) => StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, position: 'relative' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 24, paddingVertical: 16 },
  backBtn: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontFamily: PS_600, fontSize: 20, color: colors.textMain, lineHeight: 32, flex: 1 },
  
  actionsContainer: { paddingHorizontal: 24, paddingBottom: 16, gap: 12, maxWidth: 800, width: '100%', alignSelf: 'center' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceSolid,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: colors.borderLight,
    paddingLeft: 48,
    paddingRight: 16,
    height: 52,
    position: 'relative',
  },
  searchIcon: { position: 'absolute', left: 16, top: 15 },
  searchInput: { fontFamily: PS_400, fontSize: 14, color: colors.textMain, flex: 1, lineHeight: 20 },
  
  filterRow: { flexDirection: 'row', justifyContent: 'flex-end', gap: 8 },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 6,
  },
  actionBtnText: { fontFamily: PS_600, fontSize: 12, color: '#FFFFFF' },
  
  listContent: { paddingHorizontal: 24, paddingBottom: 48 },
  sectionHeader: { fontFamily: PS_600, fontSize: 12, color: colors.textSub, marginTop: 24, marginBottom: 12, letterSpacing: 0.5 },
  
  txRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceSolid,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  txIconBox: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.iconBgLight, alignItems: 'center', justifyContent: 'center' },
  txDetails: { flex: 1, marginLeft: 16, gap: 4 },
  txTitle: { fontFamily: PS_600, fontSize: 15, color: colors.textMain, lineHeight: 20 },
  txDate: { fontFamily: PS_400, fontSize: 13, color: colors.textSub, lineHeight: 18 },
  
  txRight: { alignItems: 'flex-end', gap: 6 },
  txAmount: { fontFamily: PS_700, fontSize: 15, color: colors.textMain, lineHeight: 20 },
  
  statusPill: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  statusSuccess: { backgroundColor: 'rgba(5, 150, 105, 0.15)' },
  statusPending: { backgroundColor: 'rgba(217, 119, 6, 0.15)' },
  statusFailed: { backgroundColor: 'rgba(239, 68, 68, 0.15)' },
  
  statusText: { fontFamily: PS_600, fontSize: 10, letterSpacing: 0.2 },
  statusTextSuccess: { color: '#059669' },
  statusTextPending: { color: '#D97706' },
  statusTextFailed: { color: '#EF4444' },
  
  emptyWrap: { paddingTop: 60, alignItems: 'center' },
  emptyText: { fontFamily: PS_400, fontSize: 16, color: colors.textSub },
});
