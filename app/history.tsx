/**
 * HistoryScreen — Transaction history. React Native / Expo Router.
 * top:"50%" replaced with top:15, width:"100%" replaced with alignSelf:"stretch",
 * boxShadow → shadow*, backdropFilter removed, SVGs via react-native-svg.
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconArrowLeft, IconBolt, IconWalletSmall, IconSearch, IconSort, IconFilter } from '@/components/icons';
import { PS_400, PS_600, PS_700 } from '@/components/fonts';

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

function TxRow({ item }: { item: Tx }) {
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
  const [search, setSearch] = useState('');

  const filtered = TRANSACTIONS.filter(
    (t) =>
      search.trim() === '' ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.sub.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F6F8' }}>
      <View style={hs.screen}>
        {/* Header */}
        <View style={hs.header}>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7} style={hs.backBtn}>
            <IconArrowLeft size={24} color="#F70003" />
          </TouchableOpacity>
          <Text style={hs.headerTitle}>Transactions</Text>
        </View>

        {/* Search bar + filters */}
        <View style={hs.searchRow}>
          <View style={hs.searchBar}>
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
            />
          </View>
          <TouchableOpacity style={hs.filterBtn} activeOpacity={0.7}>
            <IconSort />
          </TouchableOpacity>
          <TouchableOpacity style={hs.filterBtn} activeOpacity={0.7}>
            <IconFilter />
          </TouchableOpacity>
        </View>

        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TxRow item={item} />}
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

const hs = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F7F6F8', position: 'relative', overflow: 'hidden' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 24, paddingVertical: 16, zIndex: 10 },
  backBtn: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  headerTitle: { fontFamily: PS_700, fontSize: 20, color: '#191c1e', lineHeight: 32, flex: 1 },
  searchRow: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 24, paddingBottom: 8 },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingLeft: 48,
    paddingRight: 16,
    paddingVertical: 15,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  // top:15 = (50px searchBar - 20px icon) / 2 → replaces top:"50%" + translateY:-10
  searchIcon: { position: 'absolute', left: 16, top: 15, width: 20, height: 20, alignItems: 'center', justifyContent: 'center' },
  searchInput: { fontFamily: PS_400, fontSize: 14, color: '#191c1e', flex: 1, lineHeight: 20 },
  filterBtn: { width: 40, height: 40, borderRadius: 9999, backgroundColor: '#F70003', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  listContent: { paddingHorizontal: 24, paddingBottom: 48, paddingTop: 8 },
  txRow: { flexDirection: 'row', alignItems: 'center', padding: 17, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.8)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.6)', shadowColor: '#F70003', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.04, shadowRadius: 8, elevation: 2 },
  txIcon: { width: 40, height: 40, borderRadius: 32, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  txIconDark: { backgroundColor: '#fbe3e4' },
  txIconLight: { backgroundColor: 'rgba(255,218,212,0.2)' },
  txName: { fontFamily: PS_400, fontSize: 16, color: '#191c1e', lineHeight: 20 },
  txSub: { fontFamily: PS_400, fontSize: 14, color: '#5f5e5e', lineHeight: 20 },
  txAmount: { fontFamily: PS_600, fontSize: 16, color: '#191c1e', lineHeight: 24, textAlign: 'right' },
  txAmountPos: { color: '#16A34A' },
  txTime: { fontFamily: PS_400, fontSize: 12, color: '#5f5e5e', letterSpacing: 0.6, lineHeight: 16, textAlign: 'right' },
  emptyWrap: { paddingTop: 60, alignItems: 'center' },
  emptyText: { fontFamily: PS_400, fontSize: 16, color: '#5f5e5e' },
});
