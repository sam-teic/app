/**
 * ConfirmDetailsScreen — React Native / Expo Router.
 * filter:"drop-shadow(...)" → shadow*, backdropFilter removed,
 * '&amp;' HTML entity replaced with plain '&', SVGs via react-native-svg.
 * borderStyle:"dashed" is valid in RN — kept as-is.
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconArrowLeft, IconArrowRight, IconLockSmall } from '@/components/icons';
import { PS_400, PS_600, PS_700 } from '@/components/fonts';

// ─── Row components ───────────────────────────────────────────────────────────

function DetailRow({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <View style={cd.detailRow}>
      <Text style={cd.detailLabel}>{label}</Text>
      <Text style={[cd.detailValue, mono && cd.detailValueMono]}>{value}</Text>
    </View>
  );
}

// ─── Main screen ──────────────────────────────────────────────────────────────

/** Confirm payment details before purchase. */
export default function ConfirmDetailsScreen() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F6F8' }}>
      <View style={cd.screen}>
        <View style={cd.header}>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7} style={cd.backBtn}>
            <IconArrowLeft size={24} color="#F70003" />
          </TouchableOpacity>
          <Text style={cd.headerTitle}>Confirm Details</Text>
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={[cd.scrollContent, { flexGrow: 1, justifyContent: 'space-between', maxWidth: 600, width: '100%', alignSelf: 'center' }]} showsVerticalScrollIndicator={false}>
          <View style={{ gap: 20 }}>
            {/* Account card */}
            <View style={cd.accountCard}>
            <View style={cd.accountGlow} />
            <View style={cd.accountTop}>
              <View>
                <Text style={cd.accountLabel}>ACCOUNT</Text>
                <Text style={cd.accountName}>AEDC</Text>
              </View>
              <View style={cd.meterPill}>
                <Text style={cd.meterPillText}>Meter: 4515-1438-8822</Text>
              </View>
            </View>

            <View style={cd.billingDivider} />

            <View style={cd.billingRow}>
              <Text style={cd.billingLabel}>{'Confirm & Pay'}</Text>
              <Text style={cd.billingAmount}>₦5,000</Text>
            </View>
          </View>

          {/* Details */}
          <View style={cd.detailCard}>
            <DetailRow label="Provider" value="AEDC" />
            <View style={cd.detailSep} />
            <DetailRow label="Meter Number" value="4515-1438-8822" mono />
            <View style={cd.detailSep} />
            <DetailRow label="Phone" value="090 7380 8749" />
            <View style={cd.detailSep} />
            <DetailRow label="Email" value="iamfarukdeyemi@gmail.com" />
            <View style={cd.detailSep} />
            <DetailRow label="Amount" value="₦5,000" />
            <View style={cd.detailSep} />
            <DetailRow label="Service Fee" value="₦0.00" />
          </View>

          {/* Terms */}
          <View style={cd.termsRow}>
            <TouchableOpacity style={[cd.checkbox, agreed && cd.checkboxChecked]} onPress={() => setAgreed((v) => !v)} activeOpacity={0.7}>
              {agreed && <Text style={cd.checkboxTick}>✓</Text>}
            </TouchableOpacity>
            <Text style={cd.termsText}>
              I agree to the{' '}
              <Text style={cd.termsLink}>Terms & Conditions</Text>
              {' '}and{' '}
              <Text style={cd.termsLink}>Privacy Policy</Text>
            </Text>
          </View>
          </View>

          <View style={{ gap: 20, marginTop: 20 }}>
            <TouchableOpacity
              style={[cd.submitBtn, !agreed && cd.submitBtnDisabled]}
            onPress={() => agreed && router.push('/receipt')}
            activeOpacity={agreed ? 0.85 : 1}
          >
            <Text style={cd.submitText}>{'Confirm & Pay'}</Text>
            <IconArrowRight size={12} />
          </TouchableOpacity>

          {/* Security badge */}
          <View style={cd.securityBadge}>
            <View style={cd.securityIcon}><IconLockSmall /></View>
            <Text style={cd.securityText}>256-bit SSL Encrypted Payment</Text>
          </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const cd = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F7F6F8', position: 'relative', overflow: 'hidden' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 24, paddingVertical: 16, zIndex: 10 },
  backBtn: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  headerTitle: { fontFamily: PS_700, fontSize: 20, color: '#191c1e', lineHeight: 32, flex: 1 },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 48, gap: 20 },
  accountCard: {
    borderRadius: 24,
    backgroundColor: '#2D3133',
    padding: 25,
    gap: 16,
    overflow: 'hidden',
    // filter:"drop-shadow" replaced with shadow props
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  accountGlow: { position: 'absolute', right: -39, top: -39, width: 141, height: 141, borderRadius: 9999, backgroundColor: 'rgba(188,0,1,0.08)' },
  accountTop: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  accountLabel: { fontFamily: PS_600, fontSize: 12, color: 'rgba(239,241,243,0.4)', letterSpacing: 0.6, lineHeight: 16, textTransform: 'uppercase' },
  accountName: { fontFamily: PS_700, fontSize: 24, color: '#EFF1F3', lineHeight: 32 },
  meterPill: { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 200, paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  meterPillText: { fontFamily: PS_600, fontSize: 12, color: 'rgba(239,241,243,0.6)', lineHeight: 16 },
  billingDivider: { height: 1, borderTopWidth: 1, borderTopColor: 'rgba(234,188,180,0.4)', borderStyle: 'dashed' },
  billingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  billingLabel: { fontFamily: PS_600, fontSize: 16, color: '#EFF1F3', lineHeight: 24 },
  billingAmount: { fontFamily: PS_700, fontSize: 28, color: '#F70003', lineHeight: 36 },
  detailCard: { borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.9)', padding: 24, borderWidth: 1, borderColor: 'rgba(234,188,180,0.2)', shadowColor: '#F70003', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.04, shadowRadius: 12, elevation: 2 },
  detailRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 2 },
  detailLabel: { fontFamily: PS_400, fontSize: 14, color: '#5f5e5e', lineHeight: 20 },
  detailValue: { fontFamily: PS_600, fontSize: 14, color: '#191c1e', lineHeight: 20, textAlign: 'right', flex: 1, paddingLeft: 16 },
  detailValueMono: { letterSpacing: 0.5 },
  detailSep: { height: 1, backgroundColor: 'rgba(234,188,180,0.2)', marginVertical: 10 },
  termsRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  checkbox: { width: 18, height: 18, borderRadius: 4, borderWidth: 1.5, borderColor: '#D8DADC', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 },
  checkboxChecked: { backgroundColor: '#F70003', borderColor: '#F70003' },
  checkboxTick: { color: '#FFFFFF', fontSize: 12, lineHeight: 14 },
  termsText: { fontFamily: PS_400, fontSize: 13, color: '#5f5e5e', lineHeight: 20, flex: 1 },
  termsLink: { fontFamily: PS_600, color: '#F70003' },
  submitBtn: { backgroundColor: '#F70003', borderRadius: 32, height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, shadowColor: '#BC0001', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 5 },
  submitBtnDisabled: { opacity: 0.5 },
  submitText: { fontFamily: PS_600, fontSize: 18, color: '#FFFFFF', lineHeight: 28, textAlign: 'center' },
  securityBadge: { flexDirection: 'row', alignItems: 'center', gap: 8, alignSelf: 'center', paddingBottom: 8 },
  securityIcon: { width: 20, height: 20, alignItems: 'center', justifyContent: 'center' },
  securityText: { fontFamily: PS_400, fontSize: 12, color: '#5f5e5e', lineHeight: 16 },
});
