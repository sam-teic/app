import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconArrowLeft } from '@/components/icons';
import { PS_400, PS_600, PS_700 } from '@/components/fonts';
import { useTheme } from '@/context/ThemeContext';
import { ThemeColors } from '@/constants/theme';
import { InteractiveButton } from '@/components/FormField';
import Svg, { Rect, Path } from 'react-native-svg';

const flashIcon = require('@/assets/icons/flash.png') as number;

// ─── Custom copy icon ─────────────────────────────────────────────────────────

function IconCopy({ color = '#F70003', size = 14 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x="9" y="9" width="12" height="12" rx="2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

// ─── Row component ───────────────────────────────────────────────────────────

function DetailRow({ label, value, cd }: { label: string; value: string; cd: any }) {
  return (
    <View style={cd.detailRow}>
      <Text style={cd.detailLabel}>{label}</Text>
      <Text style={cd.detailValue}>{value}</Text>
    </View>
  );
}

// ─── Main screen ──────────────────────────────────────────────────────────────

export default function ConfirmDetailsScreen() {
  const router = useRouter();
  const { colors, isDark } = useTheme();
  const cd = getStyles(colors, isDark);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={cd.screen}>
        {/* Header */}
        <View style={cd.header}>
          <InteractiveButton onPress={() => router.back()} style={cd.backBtn}>
            <IconArrowLeft size={24} color={isDark ? "white" : "black"} />
          </InteractiveButton>
          <Text style={cd.headerTitle}>Confirm Details</Text>
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={[cd.scrollContent, { flexGrow: 1, justifyContent: 'space-between', maxWidth: 600, width: '100%', alignSelf: 'center' }]} showsVerticalScrollIndicator={false}>
          <View style={{ gap: 20 }}>
            {/* Total Amount Card */}
            <View style={cd.totalAmountCard}>
              <Text style={cd.totalAmountLabel}>TOTAL AMOUNT</Text>
              <Text style={cd.totalAmountValue}>₦1,100.00</Text>
              <View style={cd.refPill}>
                <Text style={cd.refText}>Ref: 4WG20QGD KEXDI0D</Text>
                <TouchableOpacity style={cd.copyBtn} activeOpacity={0.7}>
                  <IconCopy />
                </TouchableOpacity>
              </View>
            </View>

            {/* Account Info Card */}
            <View style={cd.accountInfoCard}>
              <View style={cd.cardHeader}>
                <Image source={flashIcon} style={{ width: 14, height: 18, tintColor: '#F70003', marginRight: 8 }} resizeMode="contain" />
                <Text style={cd.cardTitle}>Account Info</Text>
              </View>

              <View style={cd.rowsContainer}>
                <DetailRow label="Account Type" value="PRE-PAID" cd={cd} />
                <DetailRow label="Meter Number" value="45151438822" cd={cd} />
                <DetailRow label="Tariff Type" value="Standard Residential" cd={cd} />
                <DetailRow label="Customer Name" value="ASIN ABIA" cd={cd} />
                <DetailRow label="Email" value="iamfarukdeyemi@gmail.com" cd={cd} />
                <DetailRow label="Phone Number" value="09073808749" cd={cd} />
                <DetailRow label="Address" value="HOUSE 41, 6TH AVENUE GALADIMA. GWARINPA" cd={cd} />
              </View>
            </View>

            {/* Billing Breakdown */}
            <View style={cd.billingBreakdownContainer}>
              <View style={cd.billingHeaderRow}>
                <Text style={cd.billingHeaderLabel}>BILLING BREAKDOWN</Text>
                <Text style={cd.billingHeaderLabel}>TOTAL</Text>
              </View>

              <View style={cd.billingItemRow}>
                <Text style={cd.billingItemLabel}>PREPAID Energy charge</Text>
                <Text style={cd.billingItemValue}>₦925.00</Text>
              </View>
              <View style={cd.billingItemRow}>
                <Text style={cd.billingItemLabel}>VAT @ 7.5%</Text>
                <Text style={cd.billingItemValue}>₦75.00</Text>
              </View>
              <View style={cd.billingItemRow}>
                <Text style={cd.billingItemLabel}>Service Charge</Text>
                <Text style={cd.billingItemValue}>₦100.00</Text>
              </View>

              <View style={cd.dottedDivider} />

              <View style={cd.totalDueRow}>
                <Text style={cd.totalDueLabel}>Total Due</Text>
                <Text style={cd.totalDueValue}>₦1,100.00</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 24 }}>
            <InteractiveButton
              style={cd.submitBtn}
              onPress={() => router.push('/receipt')}
            >
              <Text style={cd.submitText}>Confirm & Pay</Text>
            </InteractiveButton>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const getStyles = (colors: ThemeColors, isDark: boolean) => StyleSheet.create({
  screen: { flex: 1, position: 'relative', overflow: 'hidden' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 24, paddingVertical: 16, zIndex: 10 },
  backBtn: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  headerTitle: { fontFamily: PS_700, fontSize: 20, color: colors.textMain, lineHeight: 32, flex: 1 },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 48, gap: 20 },
  
  // Total Amount Card
  totalAmountCard: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: isDark ? 0.2 : 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  totalAmountLabel: { fontFamily: PS_600, fontSize: 12, color: colors.textSub, letterSpacing: 0.6 },
  totalAmountValue: { fontFamily: PS_700, fontSize: 36, color: '#F70003', lineHeight: 44 },
  refPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: isDark ? '#2E2E2E' : '#F0F1F3',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    gap: 8,
  },
  refText: { fontFamily: PS_600, fontSize: 12, color: colors.textSub },
  copyBtn: { width: 20, height: 20, alignItems: 'center', justifyContent: 'center' },

  // Account Info Card
  accountInfoCard: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    padding: 24,
    gap: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: isDark ? 0.2 : 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  cardTitle: { fontFamily: PS_700, fontSize: 16, color: colors.textMain },
  rowsContainer: { gap: 12 },
  detailRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  detailLabel: { fontFamily: PS_400, fontSize: 13, color: colors.textSub, lineHeight: 20 },
  detailValue: { fontFamily: PS_700, fontSize: 13, color: colors.textMain, lineHeight: 20, textAlign: 'right', flex: 1, paddingLeft: 16 },

  // Billing Breakdown
  billingBreakdownContainer: { paddingHorizontal: 4, marginTop: 8 },
  billingHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  billingHeaderLabel: { fontFamily: PS_600, fontSize: 12, color: colors.textSub, letterSpacing: 0.6 },
  billingItemRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 6 },
  billingItemLabel: { fontFamily: PS_400, fontSize: 14, color: colors.textSub },
  billingItemValue: { fontFamily: PS_600, fontSize: 14, color: colors.textMain },
  dottedDivider: { height: 1, borderTopWidth: 1, borderTopColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(25,28,30,0.12)', borderStyle: 'dashed', marginVertical: 12 },
  totalDueRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  totalDueLabel: { fontFamily: PS_700, fontSize: 16, color: colors.textMain },
  totalDueValue: { fontFamily: PS_700, fontSize: 18, color: '#F70003' },

  // Confirm Button
  submitBtn: { backgroundColor: '#F70003', borderRadius: 32, height: 56, alignItems: 'center', justifyContent: 'center', shadowColor: '#BC0001', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 5 },
  submitText: { fontFamily: PS_600, fontSize: 18, color: '#FFFFFF', lineHeight: 28, textAlign: 'center' },
});
