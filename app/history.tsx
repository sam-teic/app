import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconArrowLeft, IconBolt, IconWalletSmall, IconSearch, IconSort, IconFilter } from '@/components/icons';
import { PS_400, PS_600, PS_700 } from '@/components/fonts';
import { InteractiveButton } from '@/components/FormField';
import { useTheme } from '@/context/ThemeContext';
import { ThemeColors } from '@/constants/theme';

// ─── Transaction data ─────────────────────────────────────────────────────────

type Tx = {
  id: string;
  type: 'token' | 'topup';
  name: string;
  sub: string;
  amount: string;
  positive: boolean;
  time: string;
};

const TRANSACTIONS: Tx[] = [
  { id: '1', type: 'token', name: 'Ikeja Electric', sub: 'Token: 4515-1438-8822', amount: '-₦5,000', positive: false, time: '2h ago' },
  { id: '2', type: 'topup', name: 'Wallet Top-up', sub: 'Via Bank Transfer', amount: '+₦20,000', positive: true, time: 'Yesterday' },
  { id: '3', type: 'token', name: 'AEDC', sub: 'Token: 2211-0099-7733', amount: '-₦3,500', positive: false, time: '2 days ago' },
  { id: '4', type: 'topup', name: 'Wallet Top-up', sub: 'Via Bank Transfer', amount: '+₦10,000', positive: true, time: '3 days ago' },
  { id: '5', type: 'token', name: 'BEDC', sub: 'Token: 6617-0012-4421', amount: '-₦2,000', positive: false, time: '5 days ago' },
];

// ─── Transaction row ──────────────────────────────────────────────────────────

function TxRow({ item, hs }: { item: Tx; hs: any }) {
  return (
    <View style={hs.txRow}>
      <View style={[hs.txIcon, item.type === 'topup' ? hs.txIconLight : hs.txIconDark]}>
        {item.type === 'token'
          ? <IconBolt color="#F70003" size={16} />
          : <IconWalletSmall color="#F70003" size={14} />
        }
      </View>
      <View style={{ flex: 1, marginLeft: 12, gap: 4 }}>
        <Text style={hs.txName}>{item.name}</Text>
        <Text style={hs.txSub}>{item.sub}</Text>
      </View>
      <View style={{ alignItems: 'flex-end', gap: 4 }}>
        <Text style={[hs.txAmount, item.positive && hs.txAmountPos]}>{item.amount}</Text>
        <Text style={hs.txTime}>{item.time}</Text>
      </View>
    </View>
  );
}

// ─── Main screen ──────────────────────────────────────────────────────────────

/** Transaction history screen with search and filter. */
export default function HistoryScreen() {
  const router = useRouter();
  const { colors, isDark } = useTheme();
  const hs = getStyles(colors, isDark);
  const [search, setSearch] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const searchFocusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(searchFocusAnim, {
      toValue: searchFocused ? 1 : 0,
      duration: 180,
      useNativeDriver: false,
    }).start();
  }, [searchFocused]);

  const searchBorderColor = searchFocusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.border, '#F70003'],
  });

  const filtered = TRANSACTIONS.filter(
    (t) =>
      search.trim() === '' ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.sub.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={hs.screen}>
        {/* Header */}
        <View style={hs.header}>
          <InteractiveButton onPress={() => router.back()} style={hs.backBtn}>
            <IconArrowLeft size={24} color={isDark ? "white" : "black"} />
          </InteractiveButton>
          <Text style={hs.headerTitle}>Transactions</Text>
        </View>

        {/* Search bar + filters */}
        <View style={hs.searchRow}>
          <Animated.View style={[hs.searchBar, { borderColor: searchBorderColor }]}>
            {/* Icon positioned at top:15 → replaces top:"50%" + translateY:-10 */}
            <View style={hs.searchIcon}>
              <IconSearch color="#94A3B8" size={20} />
            </View>
            <TextInput
              style={hs.searchInput}
              value={search}
              onChangeText={setSearch}
              placeholder="Search transactions…"
              placeholderTextColor="#94A3B8"
              returnKeyType="search"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </Animated.View>
          <InteractiveButton style={hs.filterBtn} onPress={() => {}}>
            <IconSort />
          </InteractiveButton>
          <InteractiveButton style={hs.filterBtn} onPress={() => {}}>
            <IconFilter />
          </InteractiveButton>
        </View>

        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TxRow item={item} hs={hs} />}
          contentContainerStyle={hs.listContent}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          ListEmptyComponent={
            <View style={hs.emptyWrap}>
              <Text style={hs.emptyText}>No transactions found.</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const getStyles = (colors: ThemeColors, isDark: boolean) => StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, position: 'relative', overflow: 'hidden' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 24, paddingVertical: 16, zIndex: 10 },
  backBtn: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  headerTitle: { fontFamily: PS_700, fontSize: 20, color: colors.textMain, lineHeight: 32, flex: 1 },
  searchRow: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 24, paddingBottom: 8 },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: colors.border,
    paddingLeft: 48,
    paddingRight: 16,
    paddingVertical: 15,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: isDark ? 0.2 : 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  // top:15 = (50px searchBar - 20px icon) / 2 → replaces top:"50%" + translateY:-10
  searchIcon: { position: 'absolute', left: 16, top: 15, width: 20, height: 20, alignItems: 'center', justifyContent: 'center' },
  searchInput: { fontFamily: PS_400, fontSize: 14, color: colors.textMain, flex: 1, lineHeight: 20 },
  filterBtn: { width: 40, height: 40, borderRadius: 9999, backgroundColor: '#F70003', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  listContent: { paddingHorizontal: 24, paddingBottom: 48, paddingTop: 8 },
  txRow: { flexDirection: 'row', alignItems: 'center', padding: 17, borderRadius: 12, backgroundColor: colors.surfaceAlt, borderWidth: 1, borderColor: colors.border, shadowColor: '#F70003', shadowOffset: { width: 0, height: 2 }, shadowOpacity: isDark ? 0.2 : 0.04, shadowRadius: 8, elevation: 2 },
  txIcon: { width: 40, height: 40, borderRadius: 32, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  txIconDark: { backgroundColor: isDark ? 'rgba(247,0,3,0.15)' : '#fbe3e4' },
  txIconLight: { backgroundColor: isDark ? 'rgba(247,0,3,0.15)' : 'rgba(255,218,212,0.2)' },
  txName: { fontFamily: PS_400, fontSize: 16, color: colors.textMain, lineHeight: 20 },
  txSub: { fontFamily: PS_400, fontSize: 14, color: colors.textSub, lineHeight: 20 },
  txAmount: { fontFamily: PS_600, fontSize: 16, color: colors.textMain, lineHeight: 24, textAlign: 'right' },
  txAmountPos: { color: '#16A34A' },
  txTime: { fontFamily: PS_400, fontSize: 12, color: colors.textSub, letterSpacing: 0.6, lineHeight: 16, textAlign: 'right' },
  emptyWrap: { paddingTop: 60, alignItems: 'center' },
  emptyText: { fontFamily: PS_400, fontSize: 16, color: colors.textSub },
});
