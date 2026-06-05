/**
 * DashboardScreen — React Native / Expo Router.
 * web-only CSS props replaced: boxShadow → shadow*, backdropFilter removed,
 * all SVG icons replaced with react-native-svg via @/components/icons.
 */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconHamburger, IconBolt, IconWallet, IconArrowUp } from '@/components/icons';
import { PS_400, PS_600, PS_700 } from '@/components/fonts';
import { useTheme } from '@/context/ThemeContext';
import { ThemeColors } from '@/constants/theme';


// ─── Sub-components ───────────────────────────────────────────────────────────

/** Active wallet card showing balance. */
function WalletCard() {
  const { colors } = useTheme();
  const ss = getStyles(colors);
  return (
    <View style={ss.walletCardShadowWrapper}>
      <View style={ss.walletCardInner}>
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
            <IconBolt color={colors.primary} size={18} />
          </View>
        </View>
        <View style={ss.walletIdPill}>
          <IconBolt color={colors.primary} size={12} />
          <Text style={ss.walletIdText}>Active Wallet ID: AP-8822</Text>
        </View>
      </View>
    </View>
  );
}

/** Empty-wallet card prompting wallet creation. */
function NoWalletCard({ onCreateWallet }: { onCreateWallet: () => void }) {
  const { colors } = useTheme();
  const ss = getStyles(colors);
  return (
    <View style={ss.walletCardShadowWrapper}>
      <View style={ss.walletCardInner}>
        <View style={ss.walletGlow} />
        <View style={ss.noWalletRow}>
          <View style={ss.noWalletIconCircle}>
            <IconWallet color={colors.primary} size={25} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={ss.noWalletTitle}>No Active Wallet</Text>
            <Text style={ss.noWalletDesc}>{'Create one to unlock bonuses and\nexclusive benefits.'}</Text>
          </View>
        </View>
        <TouchableOpacity style={ss.noWalletCreateBtn} onPress={onCreateWallet} activeOpacity={0.85}>
          <Text style={ss.noWalletCreateText}>Create Wallet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ─── Main screen ──────────────────────────────────────────────────────────────

/** Dashboard — main app home screen. */
export default function DashboardScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const ss = getStyles(colors);
  const hasWallet = true;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={ss.screen}>
        {/* Sticky header */}
        <View style={ss.header}>
          <View>
            <Text style={ss.greeting}>GOOD MORNING</Text>
            <Text style={ss.userName}>David Abuh</Text>
          </View>
          <TouchableOpacity style={ss.menuBtn} onPress={() => router.push('/menu')} activeOpacity={0.7}>
            <IconHamburger color={colors.primary} />
          </TouchableOpacity>
        </View>

        <ScrollView style={ss.scroll} contentContainerStyle={ss.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Wallet card */}
          {hasWallet
            ? <WalletCard />
            : <NoWalletCard onCreateWallet={() => router.push('/create-wallet')} />
          }

          {/* Action grid */}
          <View style={ss.actionGrid}>
            <TouchableOpacity style={ss.purchaseBtn} onPress={() => router.push('/purchase-unit')} activeOpacity={0.85}>
              <View style={ss.purchaseIconCircle}>
                <IconBolt color="#FFFFFF" size={20} />
              </View>
              <Text style={ss.purchaseBtnText}>Purchase Units</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ss.createWalletBtn} onPress={() => router.push('/create-wallet')} activeOpacity={0.85}>
              <View style={ss.createWalletIconCircle}>
                <IconWallet color={colors.primary} size={22} />
              </View>
              <Text style={ss.createWalletBtnText}>Create Wallet</Text>
            </TouchableOpacity>
          </View>

          {/* Transactions */}
          <View style={{ gap: 8 }}>
            <View style={ss.transHeader}>
              <Text style={ss.transTitle}>Recent Transactions</Text>
              <TouchableOpacity activeOpacity={0.7} onPress={() => router.push('/transaction-history')}>
                <Text style={ss.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>

            <View style={ss.transRow}>
              <View style={ss.transIconBg}><IconBolt color={colors.primary} size={16} /></View>
              <View style={{ flex: 1, marginLeft: 12, gap: 4 }}>
                <Text style={ss.transName}>Ikeja Electric</Text>
                <Text style={ss.transSub}>Token: 4515-1438-8822</Text>
              </View>
              <View style={{ alignItems: 'flex-end', gap: 4 }}>
                <Text style={ss.transAmountNeg}>-₦5,000</Text>
                <Text style={ss.transTime}>2h ago</Text>
              </View>
            </View>

            <View style={ss.transRow}>
              <View style={ss.transIconBgLight}><IconArrowUp color={colors.primary} size={14} /></View>
              <View style={{ flex: 1, marginLeft: 12, gap: 4 }}>
                <Text style={ss.transName}>Wallet Top-up</Text>
                <Text style={ss.transSub}>Via Bank Transfer</Text>
              </View>
              <View style={{ alignItems: 'flex-end', gap: 4 }}>
                <Text style={ss.transAmountPos}>+₦20,000</Text>
                <Text style={ss.transTime}>Yesterday</Text>
              </View>
            </View>
          </View>

          {/* Power Saving Tip */}
          <View style={ss.tipCard}>
            <Text style={ss.tipTitle}>Power Saving <Text style={{ color: '#F9943A' }}>Tip</Text></Text>
            <Text style={ss.tipBody}>
              Switching to LED bulbs can reduce your lighting energy usage by up to 80%.
            </Text>
          </View>
        </ScrollView>

        {/* Floating action button */}
        <View style={ss.fab}>
          <IconBolt color="#FFFFFF" size={20} />
        </View>
      </View>
    </SafeAreaView>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const getStyles = (colors: ThemeColors) => StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, position: 'relative', overflow: 'hidden' },
  header: {
    backgroundColor: colors.headerBg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    zIndex: 10,
  },
  greeting: { fontFamily: PS_600, fontSize: 12, color: colors.textSub, letterSpacing: 0.6, lineHeight: 16, textTransform: 'uppercase' },
  userName: { fontFamily: PS_700, fontSize: 24, color: colors.textMain, lineHeight: 32 },
  menuBtn: { width: 40, height: 40, borderRadius: 9999, alignItems: 'center', justifyContent: 'center' },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 24, paddingTop: 16, paddingBottom: 96, gap: 16, maxWidth: 800, width: '100%', alignSelf: 'center' },
  walletCardShadowWrapper: {
    borderRadius: 32,
    backgroundColor: colors.surfaceSolid,
  },
  walletCardInner: {
    borderRadius: 32,
    padding: 25,
    gap: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  walletGlow: { position: 'absolute', right: -39, top: -39, width: 141, height: 141, borderRadius: 9999, backgroundColor: colors.pillBg },
  walletRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  walletLabel: { fontFamily: PS_600, fontSize: 12, color: colors.textSub, letterSpacing: 0.6, lineHeight: 16 },
  balanceRow: { flexDirection: 'row', alignItems: 'baseline', gap: 2, marginTop: 3.5 },
  currencySign: { fontFamily: PS_600, fontSize: 20, color: colors.textSub, letterSpacing: -0.96, lineHeight: 28 },
  balanceMain: { fontFamily: PS_700, fontSize: 32, color: colors.textMain, letterSpacing: -0.96, lineHeight: 56 },
  balanceCents: { fontFamily: PS_400, fontSize: 16, color: colors.textSub, lineHeight: 20 },
  walletIconBox: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.iconBgLight, alignItems: 'center', justifyContent: 'center' },
  walletIdPill: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: colors.pillBg, borderRadius: 9999, paddingHorizontal: 13, paddingVertical: 9, alignSelf: 'flex-start', borderWidth: 1, borderColor: colors.border },
  walletIdText: { fontFamily: PS_600, fontSize: 12, color: colors.primary, letterSpacing: 0.6, lineHeight: 16 },
  noWalletRow: { flexDirection: 'row', alignItems: 'center', gap: 24 },
  noWalletIconCircle: { width: 64, height: 64, borderRadius: 9999, backgroundColor: colors.iconBgLight, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  noWalletTitle: { fontFamily: PS_600, fontSize: 20, color: colors.textMain, lineHeight: 28 },
  noWalletDesc: { fontFamily: PS_400, fontSize: 12, color: colors.textSub, lineHeight: 16, marginTop: 4 },
  noWalletCreateBtn: { height: 44, backgroundColor: colors.primary, borderRadius: 200, alignItems: 'center', justifyContent: 'center' },
  noWalletCreateText: { fontFamily: PS_600, fontSize: 12, color: '#FFFFFF', lineHeight: 16, textAlign: 'center' },
  actionGrid: { flexDirection: 'row', gap: 16, minHeight: 110, flexWrap: 'wrap' },
  purchaseBtn: { flex: 1, minWidth: 140, backgroundColor: colors.primary, borderRadius: 32, alignItems: 'center', justifyContent: 'center', gap: 12, paddingVertical: 32 },
  purchaseIconCircle: { width: 56, height: 56, borderRadius: 28, backgroundColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center' },
  purchaseBtnText: { fontFamily: PS_600, fontSize: 12, color: '#FFFFFF', letterSpacing: 0.2, lineHeight: 16, textAlign: 'center' },
  createWalletBtn: { flex: 1, minWidth: 140, borderRadius: 32, backgroundColor: colors.surfaceSolid, alignItems: 'center', justifyContent: 'center', gap: 12, paddingVertical: 32 },
  createWalletIconCircle: { width: 56, height: 56, borderRadius: 28, backgroundColor: colors.iconBgLight, alignItems: 'center', justifyContent: 'center' },
  createWalletBtnText: { fontFamily: PS_600, fontSize: 12, color: colors.primary, letterSpacing: 0.2, lineHeight: 16, textAlign: 'center' },
  transHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 4 },
  transTitle: { fontFamily: PS_600, fontSize: 20, color: colors.textMain, lineHeight: 28 },
  seeAll: { fontFamily: PS_600, fontSize: 12, color: colors.primary, letterSpacing: 0.6, lineHeight: 16, textAlign: 'center' },
  transRow: { flexDirection: 'row', alignItems: 'center', padding: 17, borderRadius: 24, backgroundColor: colors.surfaceSolid },
  transIconBg: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.iconBgSubtle, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  transIconBgLight: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.iconBgLight, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  transName: { fontFamily: PS_400, fontSize: 16, color: colors.textMain, lineHeight: 20 },
  transSub: { fontFamily: PS_400, fontSize: 14, color: colors.textSub, lineHeight: 20 },
  transAmountNeg: { fontFamily: PS_400, fontSize: 16, color: colors.textMain, lineHeight: 24, textAlign: 'right' },
  transAmountPos: { fontFamily: PS_400, fontSize: 16, color: colors.primary, lineHeight: 24, textAlign: 'right' },
  transTime: { fontFamily: PS_400, fontSize: 12, color: colors.textSub, letterSpacing: 0.6, lineHeight: 16, textAlign: 'right' },
  tipCard: { backgroundColor: '#2D3133', borderRadius: 32, padding: 24, paddingBottom: 40, gap: 8, overflow: 'hidden' },
  tipTitle: { fontFamily: PS_600, fontSize: 20, color: '#FFFFFF', lineHeight: 28 },
  tipBody: { fontFamily: PS_400, fontSize: 14, color: '#EFF1F3', lineHeight: 20, opacity: 0.8, paddingBottom: 8, maxWidth: 269 },
  fab: { position: 'absolute', right: 24, bottom: 48, width: 56, height: 56, backgroundColor: colors.primary, borderRadius: 28, alignItems: 'center', justifyContent: 'center' },
});
