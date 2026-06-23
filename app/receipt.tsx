import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Share,
  Clipboard,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconArrowLeft } from '@/components/icons';
import { PS_400, PS_600, PS_700 } from '@/components/fonts';
import { useTheme } from '@/context/ThemeContext';
import { ThemeColors } from '@/constants/theme';
import { InteractiveButton } from '@/components/FormField';
import Svg, { Rect, Path } from 'react-native-svg';

// ─── Custom Icons ─────────────────────────────────────────────────────────────

function IconCopy({ color = '#F70003', size = 14 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x="9" y="9" width="12" height="12" rx="2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function IconShare({ color = 'white', size = 16 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="none" />
      <Path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </Svg>
  );
}

function IconCheck({ color = 'white', size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M20 6L9 17l-5-5" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

// ─── Main screen ──────────────────────────────────────────────────────────────

export default function ReceiptScreen() {
  const router = useRouter();
  const { colors, isDark } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    try {
      if (Clipboard && Clipboard.setString) {
        Clipboard.setString('4512 8894 0021 3564 7781');
      }
    } catch (e) {
      console.log('Clipboard error:', e);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Access Power Receipt\n\nPrepaid Token: 4512 8894 0021 3564 7781\nTotal Amount: ₦1,100.00\nMeter Number: 45151438822 (AEDC)\nCustomer: ASIN ABIA\nAddress: HOUSE 41, 6TH AVENUE GALADIMA. GWARINPA\nReference: 4WG20QGDKEXDI0D\nDate: May 18, 2026 09:51 AM`,
      });
    } catch (error) {
      console.log('Share error:', error);
    }
  };

  const styles = getStyles(colors, isDark);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.screen}>
        {/* Header */}
        <View style={styles.header}>
          <InteractiveButton onPress={() => router.back()} style={styles.backBtn}>
            <IconArrowLeft size={24} color={isDark ? "white" : "black"} />
          </InteractiveButton>
          <Text style={styles.headerTitle}>Receipt</Text>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={[
            styles.scrollContent,
            { flexGrow: 1, justifyContent: 'space-between', maxWidth: 600, width: '100%', alignSelf: 'center' }
          ]}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ gap: 24, width: '100%', alignItems: 'center' }}>
            {/* Success Hero */}
            <View style={styles.hero}>
              <View style={styles.successRing}>
                <View style={styles.successCircle}>
                  <IconCheck size={18} color="white" />
                </View>
              </View>
              <Text style={styles.heroTitle}>Payment Successful!</Text>
              <Text style={styles.heroSub}>Your transaction has been processed.</Text>
            </View>

            {/* Prepaid Token Card */}
            <View style={styles.tokenCard}>
              <Text style={styles.tokenLabel}>PREPAID TOKEN</Text>
              <Text style={styles.tokenCode}>4512 · 8894 · 0021 · 3564 · 7781</Text>
              <InteractiveButton
                style={[
                  styles.copyBtn,
                  copied && { borderColor: 'rgba(34,197,94,0.4)' }
                ]}
                onPress={handleCopy}
                activeScale={0.96}
              >
                {copied ? (
                  <IconCheck size={13} color="#22C55E" />
                ) : (
                  <IconCopy size={13} />
                )}
                <Text style={[styles.copyBtnText, copied && { color: '#22C55E' }]}>
                  {copied ? 'Copied!' : 'Copy Token'}
                </Text>
              </InteractiveButton>
            </View>

            {/* Receipt Details Card */}
            <View style={styles.detailCard}>
              <Text style={styles.totalAmountLabel}>TOTAL AMOUNT</Text>
              <Text style={styles.totalAmountValue}>₦1,100.00</Text>
              
              <View style={styles.sep} />

              <View style={styles.rowsContainer}>
                <View style={styles.detailItemRow}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <Text style={styles.detailLabel}>METER NUMBER</Text>
                    <View style={styles.discoPill}>
                      <Text style={styles.discoPillText}>AEDC</Text>
                    </View>
                  </View>
                  <Text style={styles.detailValueLeft}>45151438822</Text>
                </View>

                <View style={styles.detailItemRow}>
                  <Text style={styles.detailLabel}>CUSTOMER</Text>
                  <Text style={styles.detailValueLeft}>ASIN ABIA</Text>
                </View>

                <View style={styles.detailItemRow}>
                  <Text style={styles.detailLabel}>ADDRESS</Text>
                  <Text style={[styles.detailValueLeft, { lineHeight: 20 }]}>
                    HOUSE 41, 6TH AVENUE GALADIMA. GWARINPA
                  </Text>
                </View>

                <View style={[styles.detailItemRow, { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 0 }]}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.detailLabel}>DATE</Text>
                    <Text style={styles.detailValueLeft}>May 18, 2026</Text>
                    <Text style={styles.dateSubtext}>09:51 AM</Text>
                  </View>
                  <View style={{ flex: 1, paddingLeft: 16 }}>
                    <Text style={styles.detailLabel}>REFERENCE</Text>
                    <Text style={styles.detailValueLeft}>4WG20QGDKEXDI0D</Text>
                  </View>
                </View>
              </View>

              <View style={styles.dottedDivider} />

              {/* Barcode bars */}
              <View style={styles.barcodeBarRow}>
                {[6, 14, 6, 6, 14, 6, 6, 14, 6, 6, 14].map((w, i) => (
                  <View key={i} style={[styles.barcodeBar, { width: w }]} />
                ))}
              </View>
            </View>
          </View>

          <View style={{ gap: 16, marginTop: 32, width: '100%' }}>
            <InteractiveButton style={styles.submitBtn} onPress={handleShare}>
              <IconShare color="white" size={16} />
              <Text style={styles.submitText}>Share Receipt</Text>
            </InteractiveButton>

            <InteractiveButton style={styles.backHomeBtn} onPress={() => router.replace('/dashboard')}>
              <Text style={styles.backHomeBtnText}>Back to Home</Text>
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
  scrollContent: { paddingHorizontal: 24, paddingBottom: 48, alignItems: 'center' },
  
  // Success Hero
  hero: { alignItems: 'center', gap: 8, marginTop: 8 },
  successRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: isDark ? 'rgba(34,197,94,0.15)' : '#E8F8EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: { fontFamily: PS_700, fontSize: 22, color: colors.textMain, lineHeight: 30, textAlign: 'center' },
  heroSub: { fontFamily: PS_400, fontSize: 14, color: colors.textSub, lineHeight: 20, textAlign: 'center' },

  // Prepaid Token Card
  tokenCard: {
    width: '100%',
    backgroundColor: isDark ? colors.surface : '#F5F6F8',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(25,28,30,0.04)',
  },
  tokenLabel: { fontFamily: PS_600, fontSize: 11, color: colors.textSub, letterSpacing: 1, textTransform: 'uppercase' },
  tokenCode: { fontFamily: PS_700, fontSize: 20, color: colors.textMain, letterSpacing: 1.5, lineHeight: 28, textAlign: 'center' },
  copyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: isDark ? '#2E2E2E' : '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(25,28,30,0.08)',
  },
  copyBtnText: { fontFamily: PS_600, fontSize: 13, color: '#F70003', lineHeight: 18 },

  // Detail Card
  detailCard: {
    width: '100%',
    backgroundColor: colors.surface,
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(25,28,30,0.06)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: isDark ? 0.2 : 0.03,
    shadowRadius: 12,
    elevation: 3,
  },
  totalAmountLabel: { fontFamily: PS_600, fontSize: 11, color: colors.textSub, letterSpacing: 1, textAlign: 'center', marginBottom: 6, textTransform: 'uppercase' },
  totalAmountValue: { fontFamily: PS_700, fontSize: 36, color: colors.textMain, lineHeight: 44, textAlign: 'center' },
  sep: { height: 1, backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(25,28,30,0.06)', marginVertical: 20 },
  rowsContainer: { gap: 20 },
  detailItemRow: { width: '100%' },
  detailLabel: { fontFamily: PS_600, fontSize: 10, color: colors.textSub, letterSpacing: 1, marginBottom: 4, textTransform: 'uppercase' },
  detailValueLeft: { fontFamily: PS_700, fontSize: 15, color: colors.textMain, lineHeight: 22 },
  dateSubtext: { fontFamily: PS_400, fontSize: 11, color: colors.textSub, marginTop: 2 },
  discoPill: { backgroundColor: isDark ? 'rgba(247,0,3,0.15)' : '#FDE8E8', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 4 },
  discoPillText: { fontFamily: PS_700, fontSize: 10, color: '#F70003', letterSpacing: 0.5 },
  dottedDivider: { height: 1, borderTopWidth: 1.5, borderTopColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(25,28,30,0.12)', borderStyle: 'dashed', marginVertical: 24 },
  barcodeBarRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, height: 44, marginTop: 8 },
  barcodeBar: { height: 44, backgroundColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(25,28,30,0.1)', borderRadius: 5 },

  // Actions Buttons
  submitBtn: { backgroundColor: '#F70003', borderRadius: 28, height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, shadowColor: '#BC0001', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 5 },
  submitText: { fontFamily: PS_600, fontSize: 16, color: '#FFFFFF', lineHeight: 24, textAlign: 'center' },
  backHomeBtn: { backgroundColor: isDark ? '#2E2E2E' : '#EAE8EB', borderRadius: 28, height: 56, alignItems: 'center', justifyContent: 'center' },
  backHomeBtnText: { fontFamily: PS_600, fontSize: 16, color: isDark ? '#E5E7EB' : '#5f5e5e', lineHeight: 24 },
});

