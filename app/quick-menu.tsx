/**
 * QuickMenuScreen — Floating action overlay. React Native / Expo Router.
 * All SVGs replaced with react-native-svg; boxShadow → shadow*, backdropFilter removed.
 */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconX, IconWallet, IconHistory, IconBolt, IconRefresh } from '@/components/icons';
import { PS_600, PS_700 } from '@/components/fonts';


/** Quick-action button component. */
function QuickActionBtn({ icon, label, onPress }: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={qm.actionBtn} onPress={onPress} activeOpacity={0.85}>
      <View style={qm.actionBtnShadow} />
      <View style={qm.actionBtnInner}>{icon}</View>
      <Text style={qm.actionBtnLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

/** Quick menu floating overlay. */
export default function QuickMenuScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F6F8' }}>
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
        <TouchableOpacity style={qm.overlay} onPress={() => router.back()} activeOpacity={1} />

        {/* X FAB */}
        <TouchableOpacity style={qm.fab} onPress={() => router.back()} activeOpacity={0.85}>
          <View style={qm.fabShadow} />
          <IconX />
        </TouchableOpacity>

        {/* Quick actions stack */}
        <View style={qm.actionsStack}>
          <QuickActionBtn icon={<IconWallet color="white" size={20} />} label="Create Wallet" onPress={() => router.push('/create-wallet')} />
          <QuickActionBtn icon={<IconHistory />} label="View Transactions" onPress={() => router.push('/transaction-history')} />
          <QuickActionBtn icon={<IconBolt color="white" size={18} />} label="Purchase Units" onPress={() => router.push('/purchase-unit')} />
          <QuickActionBtn icon={<IconRefresh />} label="Process Pending Transaction" onPress={() => router.back()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const qm = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F7F6F8', position: 'relative', overflow: 'hidden' },
  bgPreview: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#F7F6F8' },
  bgHeader: { position: 'absolute', top: 76, left: 0, right: 0, backgroundColor: 'rgba(255,255,255,0.4)', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, paddingVertical: 16 },
  bgGreeting: { fontFamily: PS_600, fontSize: 12, color: '#5f5e5e', letterSpacing: 0.6, lineHeight: 16, textTransform: 'uppercase' },
  bgName: { fontFamily: PS_700, fontSize: 24, color: '#191c1e', lineHeight: 32 },
  overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(25,28,30,0.4)', zIndex: 10 },
  fab: { position: 'absolute', right: 24, bottom: 64, width: 56, height: 56, backgroundColor: '#fee2e2', borderRadius: 32, alignItems: 'center', justifyContent: 'center', zIndex: 30, overflow: 'hidden' },
  fabShadow: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: 32, shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.32, shadowRadius: 8, elevation: 8 },
  actionsStack: { position: 'absolute', right: 24, bottom: 136, alignItems: 'flex-end', gap: 16, zIndex: 30 },
  actionBtn: { backgroundColor: '#F70003', borderRadius: 9999, flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 24, gap: 12, position: 'relative', overflow: 'hidden' },
  actionBtnShadow: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: 9999, shadowColor: '#000', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 5 },
  actionBtnInner: { width: 20, height: 20, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  actionBtnLabel: { fontFamily: PS_600, fontSize: 14, color: '#FFFFFF', lineHeight: 20 },
});
