/**
 * ReceiptScreen — React Native component.
 * In RN: remove rnShims import and use react-native primitives directly.
 */
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  SW,
  SH,
} from "./rnShims";
import { IconArrowLeft } from "./FormField";

interface ReceiptScreenProps {
  onBack?: () => void;
  onShare?: () => void;
  onBackToHome?: () => void;
}

function IconCheck({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M10 21L17 28L30 14" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCopy({ size = 13, color = "#BC0001" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size * 1.18} viewBox="0 0 12.75 15" fill="none">
      <path
        d="M9 1H2a1 1 0 00-1 1v9M4 4h7.5a1 1 0 011 1v8.5a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShare({ size = 18, color = "#FFFBFF" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 18 20" fill="none">
      <path
        d="M14 7a3 3 0 100-6 3 3 0 000 6zM4 12a3 3 0 100-6 3 3 0 000 6zM14 19a3 3 0 100-6 3 3 0 000 6zM6.7 10.7l4.6 2.6M11.3 6.7L6.7 9.3"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ReceiptScreen({ onBack, onShare, onBackToHome }: ReceiptScreenProps) {
  return (
    <View style={rs.screen}>
      <StatusBar />

      {/* Header */}
      <View style={rs.header}>
        <TouchableOpacity onPress={onBack} activeOpacity={0.7} style={rs.backBtn}>
          <IconArrowLeft size={24} color="#F70003" />
        </TouchableOpacity>
        <Text style={rs.headerTitle}>Receipt</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={rs.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Success Hero */}
        <View style={rs.successHero}>
          <View style={rs.checkCircle}>
            <IconCheck size={40} />
          </View>
          <Text style={rs.successTitle}>Payment Successful!</Text>
          <Text style={rs.successSubtitle}>Your transaction has been processed.</Text>
        </View>

        {/* Token Container */}
        <View style={rs.tokenContainer}>
          <View style={rs.tokenBorder} />
          <Text style={rs.tokenLabel}>PREPAID TOKEN</Text>
          <Text style={rs.tokenValue}>{"4512 • 8894 • 0021 • 3564 •\n7781"}</Text>
          <TouchableOpacity style={rs.copyBtn} activeOpacity={0.7}>
            <View style={rs.copyBtnBorder} />
            <IconCopy />
            <Text style={rs.copyBtnText}>Copy Token</Text>
          </TouchableOpacity>
        </View>

        {/* Receipt Card */}
        <View style={rs.receiptCard}>
          <View style={rs.receiptCardBorder} />

          {/* Total amount section */}
          <View style={rs.receiptTotalSection}>
            <Text style={rs.receiptTotalLabel}>TOTAL AMOUNT</Text>
            <Text style={rs.receiptTotalAmount}>₦1,100.00</Text>
          </View>
          <View style={rs.receiptDivider} />

          {/* Body */}
          <View style={rs.receiptBody}>
            {/* Meter Number row */}
            <View style={rs.receiptRow}>
              <View style={rs.receiptRowLeft}>
                <Text style={rs.receiptRowMicroLabel}>METER NUMBER</Text>
                <Text style={rs.receiptRowValue}>45151438822</Text>
              </View>
              <View style={rs.aedcBadge}>
                <Text style={rs.aedcBadgeText}>AEDC</Text>
              </View>
            </View>

            {/* Customer row */}
            <View style={rs.receiptBlockRow}>
              <Text style={rs.receiptRowMicroLabel}>CUSTOMER</Text>
              <Text style={rs.receiptRowValue}>ASIN ABIA</Text>
            </View>

            {/* Address row */}
            <View style={rs.receiptBlockRow}>
              <Text style={rs.receiptRowMicroLabel}>ADDRESS</Text>
              <Text style={rs.receiptRowValue}>{"HOUSE 41, 6TH AVENUE GALADIMA.\nGWARINPA"}</Text>
            </View>

            {/* Date + Reference grid */}
            <View style={rs.receiptGrid}>
              <View style={rs.receiptGridCell}>
                <Text style={rs.receiptRowMicroLabel}>DATE</Text>
                <Text style={rs.receiptRowValue}>May 18, 2026</Text>
                <Text style={rs.receiptRowSubValue}>09:51 AM</Text>
              </View>
              <View style={rs.receiptGridCell}>
                <Text style={rs.receiptRowMicroLabel}>REFERENCE</Text>
                <Text style={[rs.receiptRowValue, { fontWeight: "600", fontSize: 12 }]}>4WG20QGDKEXDI0D</Text>
              </View>
            </View>

            {/* Barcode decoration */}
            <View style={rs.barcodeDecoration}>
              <View style={rs.barcodeDividerLine} />
              <View style={rs.barcodeBarRow}>
                {[4, 12, 4, 4, 16, 8, 4, 12, 4, 4, 20].map((w, i) => (
                  <View key={i} style={[rs.barcodeBar, { width: w }]} />
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Bottom spacer for footer */}
        <View style={{ height: 160 }} />
      </ScrollView>

      {/* Fixed bottom footer */}
      <View style={rs.stickyFooter}>
        <View style={rs.stickyFooterBorder} />
        <View style={rs.footerButtons}>
          <TouchableOpacity style={rs.shareBtn} onPress={onShare} activeOpacity={0.85}>
            <View style={rs.shareBtnShadow} />
            <IconShare />
            <Text style={rs.shareBtnText}>Share Receipt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={rs.homeBtn} onPress={onBackToHome} activeOpacity={0.7}>
            <Text style={rs.homeBtnText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const rs = StyleSheet.create({
  screen: {
    width: SW,
    height: SH,
    backgroundColor: "#F7F6F8",
    position: "relative",
    overflow: "hidden",
  },
  header: {
    position: "absolute",
    top: 72,
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
    paddingTop: 156,
    paddingHorizontal: 24,
    paddingBottom: 24,
    alignItems: "center",
  },
  // Success hero
  successHero: {
    alignItems: "center",
    paddingBottom: 32,
  },
  checkCircle: {
    width: 80,
    height: 80,
    borderRadius: 9999,
    backgroundColor: "#dcfce7",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  successTitle: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 24,
    color: "#191c1e",
    lineHeight: 32,
    textAlign: "center",
  },
  successSubtitle: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#5f5e5e",
    lineHeight: 24,
    textAlign: "center",
    marginTop: 4,
  },
  // Token container
  tokenContainer: {
    backgroundColor: "#f2f4f6",
    borderRadius: 12,
    padding: 25,
    alignItems: "center",
    width: "100%",
    marginBottom: 32,
    position: "relative",
    overflow: "hidden",
  },
  tokenBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 1,
    borderColor: "rgba(234,188,180,0.2)",
    borderRadius: 12,
  },
  tokenLabel: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#5f5e5e",
    letterSpacing: 1.2,
    lineHeight: 16,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  tokenValue: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#191c1e",
    lineHeight: 24,
    letterSpacing: 3.2,
    textAlign: "center",
    marginBottom: 16,
  },
  copyBtn: {
    backgroundColor: "#FFFFFF",
    borderRadius: 9999,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 25,
    paddingVertical: 9,
    position: "relative",
    overflow: "hidden",
  },
  copyBtnBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 1,
    borderColor: "rgba(234,188,180,0.3)",
    borderRadius: 9999,
    boxShadow: "0px 1px 1px rgba(0,0,0,0.05)",
  },
  copyBtnText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#bc0001",
    lineHeight: 24,
  },
  // Receipt card
  receiptCard: {
    backgroundColor: "rgba(255,255,255,0.7)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backdropFilter: "blur(10px)",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },
  receiptCardBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    boxShadow: "0px 10px 40px 0px rgba(247,0,3,0.08)",
  },
  receiptTotalSection: {
    alignItems: "center",
    paddingTop: 25,
    paddingHorizontal: 25,
    paddingBottom: 33,
  },
  receiptTotalLabel: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#5f5e5e",
    letterSpacing: 0.6,
    lineHeight: 16,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  receiptTotalAmount: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 36,
    color: "#191c1e",
    lineHeight: 56,
    letterSpacing: -0.96,
  },
  receiptDivider: {
    height: 1,
    marginHorizontal: 25,
    borderTopWidth: 1,
    borderTopColor: "rgba(234,188,180,0.2)",
    borderStyle: "solid",
  },
  receiptBody: {
    padding: 25,
    gap: 24,
  },
  receiptRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  receiptRowLeft: {
    gap: 4,
    flex: 1,
  },
  receiptBlockRow: {
    gap: 4,
  },
  receiptRowMicroLabel: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 10,
    color: "#5f5e5e",
    letterSpacing: 1,
    lineHeight: 15,
    textTransform: "uppercase",
  },
  receiptRowValue: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#191c1e",
    lineHeight: 24,
  },
  receiptRowSubValue: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 12,
    color: "#5f5e5e",
    lineHeight: 16,
  },
  aedcBadge: {
    backgroundColor: "rgba(255,218,212,0.3)",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexShrink: 0,
  },
  aedcBadgeText: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 10,
    color: "#bc0001",
    letterSpacing: -0.5,
    lineHeight: 15,
  },
  receiptGrid: {
    flexDirection: "row",
    gap: 16,
  },
  receiptGridCell: {
    flex: 1,
    gap: 4,
  },
  barcodeDecoration: {
    position: "relative",
    paddingTop: 25,
  },
  barcodeDividerLine: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(149,110,103,0.3)",
    borderStyle: "dashed",
  },
  barcodeBarRow: {
    flexDirection: "row",
    alignItems: "stretch",
    height: 48,
    gap: 4,
    paddingHorizontal: 8,
    paddingRight: 8,
  },
  barcodeBar: {
    backgroundColor: "#191c1e",
    borderRadius: 9999,
    opacity: 0.08,
    height: "100%",
  },
  // Sticky footer
  stickyFooter: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 37,
    height: 152,
    paddingHorizontal: 24,
    paddingTop: 25,
    paddingBottom: 24,
    backdropFilter: "blur(20px)",
    backgroundColor: "rgba(247,246,248,0.8)",
  },
  stickyFooterBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(234,188,180,0.2)",
  },
  footerButtons: {
    gap: 12,
  },
  shareBtn: {
    backgroundColor: "#eb0003",
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 16,
    position: "relative",
    overflow: "hidden",
  },
  shareBtnShadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    boxShadow: "0px 10px 15px -3px rgba(188,0,1,0.2), 0px 4px 6px -4px rgba(188,0,1,0.2)",
    borderRadius: 32,
  },
  shareBtnText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#FFFBFF",
    lineHeight: 24,
  },
  homeBtn: {
    backgroundColor: "#e6e8ea",
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  homeBtnText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#5f5e5e",
    lineHeight: 24,
  },
});
