/**
 * ReceiptScreen — React Native / Expo Router.
 * height:"100%" → alignSelf:"stretch", width:"100%" → alignSelf:"stretch" / flex:1,
 * boxShadow → shadow*, backdropFilter removed, SVGs via react-native-svg.
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
import { IconCheck, IconCopy, IconShare } from '@/components/icons';
import { PS_400, PS_600, PS_700 } from '@/components/fonts';

// ─── Row component ────────────────────────────────────────────────────────────

function ReceiptRow({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <View style={rs.receiptRow}>
      <Text style={rs.receiptLabel}>{label}</Text>
      <Text style={[rs.receiptValue, mono && rs.receiptValueMono]}>{value}</Text>
    </View>
  );
}

// ─── Main screen ──────────────────────────────────────────────────────────────

/** Payment receipt screen. */
export default function ReceiptScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F6F8' }}>
      <View style={rs.screen}>
        <View style={rs.header}>
          <Text style={rs.headerTitle}>Receipt</Text>
          <TouchableOpacity style={rs.shareBtn} onPress={() => {}} activeOpacity={0.7}>
            <IconShare />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={[rs.scrollContent, { flexGrow: 1, justifyContent: 'space-between', maxWidth: 600, width: '100%', alignSelf: 'center' }]} showsVerticalScrollIndicator={false}>
          <View style={{ gap: 20, alignItems: 'center', alignSelf: 'stretch' }}>
            {/* Success hero */}
            <View style={rs.hero}>
            <View style={rs.heroCircle}>
              <View style={rs.heroInnerCircle}>
                <IconCheck size={40} />
              </View>
            </View>
            <Text style={rs.heroTitle}>Payment Successful!</Text>
            <Text style={rs.heroSub}>Your electricity token has been generated</Text>
            <View style={rs.amountPill}>
              <Text style={rs.amountText}>₦5,000</Text>
            </View>
          </View>

          {/* Token card */}
          <View style={rs.tokenContainer}>
            <View style={rs.tokenCard}>
              <Text style={rs.tokenLabel}>YOUR TOKEN</Text>
              <Text style={rs.tokenCode}>4515  -  1438  -  8822</Text>

              {/* Barcode bars — height:"100%" replaced with alignSelf:"stretch" */}
              <View style={rs.barcodeBarRow}>
                {[12, 8, 16, 6, 10, 8, 14, 6, 10, 12, 8, 16, 6, 10, 8, 14, 6, 10, 12, 8].map((w, i) => (
                  <View key={i} style={[rs.barcodeBar, { width: w, alignSelf: 'stretch' }]} />
                ))}
              </View>

              <TouchableOpacity style={rs.copyBtn} onPress={() => {}} activeOpacity={0.7}>
                <IconCopy size={13} />
                <Text style={rs.copyBtnText}>Copy Token</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Details */}
          <View style={rs.detailCard}>
            <ReceiptRow label="Provider" value="AEDC" />
            <View style={rs.sep} />
            <ReceiptRow label="Meter Number" value="4515-1438-8822" mono />
            <View style={rs.sep} />
            <ReceiptRow label="Customer Name" value="David Abuh" />
            <View style={rs.sep} />
            <ReceiptRow label="Phone" value="090 7380 8749" />
            <View style={rs.sep} />
            <ReceiptRow label="Amount Paid" value="₦5,000" />
            <View style={rs.sep} />
            <ReceiptRow label="Units" value="22.47 kWh" />
            <View style={rs.sep} />
            <ReceiptRow label="Reference" value="APNG-24051-7732" mono />
            <View style={rs.sep} />
            <ReceiptRow label="Date" value="22 May 2026, 15:30" />
          </View>
          </View>

          {/* Actions */}
          <View style={rs.actions}>
            <TouchableOpacity style={rs.backHomeBtn} onPress={() => router.replace('/dashboard')} activeOpacity={0.85}>
              <Text style={rs.backHomeBtnText}>Back to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={rs.newPurchaseBtn} onPress={() => router.push('/purchase-unit')} activeOpacity={0.85}>
              <Text style={rs.newPurchaseBtnText}>New Purchase</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const rs = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F7F6F8', position: 'relative', overflow: 'hidden' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, paddingVertical: 16 },
  headerTitle: { fontFamily: PS_700, fontSize: 20, color: '#191c1e', lineHeight: 32 },
  shareBtn: { width: 40, height: 40, borderRadius: 9999, backgroundColor: '#F70003', alignItems: 'center', justifyContent: 'center', shadowColor: '#BC0001', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.2, shadowRadius: 6, elevation: 4 },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 48, gap: 20, alignItems: 'center' },
  hero: { alignItems: 'center', paddingTop: 8, gap: 8 },
  heroCircle: { width: 80, height: 80, borderRadius: 9999, backgroundColor: 'rgba(22,163,74,0.1)', alignItems: 'center', justifyContent: 'center' },
  heroInnerCircle: { width: 64, height: 64, borderRadius: 9999, backgroundColor: 'rgba(22,163,74,0.15)', alignItems: 'center', justifyContent: 'center' },
  heroTitle: { fontFamily: PS_700, fontSize: 24, color: '#191c1e', lineHeight: 32, textAlign: 'center' },
  heroSub: { fontFamily: PS_400, fontSize: 14, color: '#5f5e5e', lineHeight: 20, textAlign: 'center' },
  amountPill: { backgroundColor: 'rgba(22,163,74,0.1)', borderRadius: 9999, paddingHorizontal: 20, paddingVertical: 8, marginTop: 4 },
  amountText: { fontFamily: PS_700, fontSize: 28, color: '#16A34A', lineHeight: 36 },
  tokenContainer: { alignSelf: 'stretch' },
  tokenCard: {
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    padding: 24,
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(234,188,180,0.2)',
    shadowColor: '#F70003',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  tokenLabel: { fontFamily: PS_600, fontSize: 12, color: '#5f5e5e', letterSpacing: 0.6, lineHeight: 16, textTransform: 'uppercase' },
  tokenCode: { fontFamily: PS_700, fontSize: 22, color: '#191c1e', letterSpacing: 2, lineHeight: 32, textAlign: 'center' },
  barcodeBarRow: { flexDirection: 'row', alignItems: 'stretch', gap: 3, height: 48, alignSelf: 'stretch' },
  // height:"100%" replaced with alignSelf:"stretch" on each bar (set inline)
  barcodeBar: { backgroundColor: '#191c1e', borderRadius: 9999, opacity: 0.08 },
  copyBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: 'rgba(188,0,1,0.06)', borderRadius: 9999, paddingHorizontal: 16, paddingVertical: 8, borderWidth: 1, borderColor: 'rgba(188,0,1,0.1)' },
  copyBtnText: { fontFamily: PS_600, fontSize: 12, color: '#BC0001', lineHeight: 16 },
  detailCard: { alignSelf: 'stretch', borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.9)', padding: 24, borderWidth: 1, borderColor: 'rgba(234,188,180,0.2)', shadowColor: '#F70003', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 8, elevation: 2 },
  receiptRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 2 },
  receiptLabel: { fontFamily: PS_400, fontSize: 14, color: '#5f5e5e', lineHeight: 20 },
  receiptValue: { fontFamily: PS_600, fontSize: 14, color: '#191c1e', lineHeight: 20, textAlign: 'right', flex: 1, paddingLeft: 16 },
  receiptValueMono: { letterSpacing: 0.5 },
  sep: { height: 1, backgroundColor: 'rgba(234,188,180,0.2)', marginVertical: 10 },
  actions: { flexDirection: 'row', gap: 12, alignSelf: 'stretch' },
  backHomeBtn: { flex: 1, backgroundColor: '#F70003', borderRadius: 32, height: 54, alignItems: 'center', justifyContent: 'center', shadowColor: '#BC0001', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.2, shadowRadius: 6, elevation: 4 },
  backHomeBtnText: { fontFamily: PS_600, fontSize: 16, color: '#FFFFFF', lineHeight: 24 },
  newPurchaseBtn: { flex: 1, backgroundColor: 'rgba(247,0,3,0.06)', borderRadius: 32, height: 54, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(247,0,3,0.15)' },
  newPurchaseBtnText: { fontFamily: PS_600, fontSize: 16, color: '#F70003', lineHeight: 24 },
});
