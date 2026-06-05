/**
 * ConfirmDetailsScreen — React Native component.
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

interface ConfirmDetailsScreenProps {
  onBack?: () => void;
  onConfirm?: () => void;
}

function IconLockSmall({ color = "#F70003", size = 13 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size * 1.25} viewBox="0 0 13.33 16.67" fill="none">
      <path
        d="M11.33 7.33H2a.67.67 0 00-.67.67v7.33a.67.67 0 00.67.67h9.33a.67.67 0 00.67-.67V8a.67.67 0 00-.67-.67zM4.33 7.33V5a2.67 2.67 0 015.34 0v2.33"
        fill={color}
      />
    </svg>
  );
}

function InfoRow({ label, value, multiline = false }: { label: string; value: string; multiline?: boolean }) {
  return (
    <View style={cd.infoRow}>
      <Text style={cd.infoLabel}>{label}</Text>
      <Text style={[cd.infoValue, multiline && { textAlign: "right", maxWidth: 220 }]}>{value}</Text>
    </View>
  );
}

function BillingRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={cd.billingRow}>
      <Text style={cd.billingLabel}>{label}</Text>
      <Text style={cd.billingValue}>{value}</Text>
    </View>
  );
}

export default function ConfirmDetailsScreen({ onBack, onConfirm }: ConfirmDetailsScreenProps) {
  return (
    <View style={cd.screen}>
      <StatusBar />

      {/* Header */}
      <View style={cd.header}>
        <TouchableOpacity onPress={onBack} activeOpacity={0.7} style={cd.backBtn}>
          <IconArrowLeft size={24} color="#F70003" />
        </TouchableOpacity>
        <Text style={cd.headerTitle}>Confirm Details</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={cd.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Summary Highlight Card */}
        <View style={cd.summaryCard}>
          <View style={cd.summaryCardBorder} />
          <View style={cd.summaryContent}>
            <Text style={cd.totalLabel}>TOTAL AMOUNT</Text>
            <Text style={cd.totalAmount}>₦1,100.00</Text>
          </View>
          <View style={cd.refPill}>
            <Text style={cd.refText}>Ref: 4WG20QGD KEXDI0D</Text>
            <IconLockSmall />
          </View>
        </View>

        {/* Account Info Card */}
        <View style={cd.accountCard}>
          <View style={cd.accountCardBorder} />
          {/* Card header */}
          <View style={cd.accountHeaderRow}>
            <IconLockSmall />
            <Text style={cd.accountTitle}>Account Info</Text>
          </View>
          <View style={cd.infoRows}>
            <InfoRow label="Account Type" value="PRE-PAID" />
            <InfoRow label="Meter Number" value="45151438822" />
            <InfoRow label="Tariff Type" value="Standard Residential" />
            <InfoRow label="Customer Name" value="ASIN ABIA" />
            <InfoRow label="Email" value="iamfarukdeyemi@gmail.com" />
            <InfoRow label="Phone Number" value="09073808749" />
            <InfoRow label="Address" value={"HOUSE 41, 6TH AVENUE\nGALADIMA. GWARINPA"} multiline />
          </View>
        </View>

        {/* Billing Breakdown */}
        <View style={cd.billingSection}>
          <View style={cd.billingHeader}>
            <Text style={cd.billingTitle}>BILLING BREAKDOWN</Text>
            <Text style={cd.billingTotalHeader}>Total</Text>
          </View>
          <View style={cd.billingRows}>
            <BillingRow label="PREPAID Energy charge" value="₦925.00" />
            <BillingRow label="VAT @ 7.5%" value="₦75.00" />
            <BillingRow label="Service Charge" value="₦100.00" />
          </View>
          <View style={cd.billingDivider} />
          <View style={cd.totalDueRow}>
            <Text style={cd.totalDueLabel}>Total Due</Text>
            <Text style={cd.totalDueValue}>₦1,100.00</Text>
          </View>
        </View>

        {/* Spacer for fixed bottom bar */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Fixed bottom action bar */}
      <View style={cd.fixedBottom}>
        <View style={cd.fixedBottomBorder} />
        <TouchableOpacity style={cd.confirmBtn} onPress={onConfirm} activeOpacity={0.85}>
          <View style={cd.confirmBtnShadow} />
          <Text style={cd.confirmBtnText}>Confirm &amp; Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const cd = StyleSheet.create({
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
    gap: 24,
  },
  // Summary Card
  summaryCard: {
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 24,
    backdropFilter: "blur(10px)",
    padding: 25,
    alignItems: "center",
    gap: 16,
    position: "relative",
    overflow: "hidden",
  },
  summaryCardBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.8)",
    borderRadius: 24,
    boxShadow: "0px 4px 30px 0px rgba(247,0,3,0.05)",
  },
  summaryContent: {
    alignItems: "center",
    gap: 4,
  },
  totalLabel: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#5f5e5e",
    letterSpacing: 1.2,
    lineHeight: 16,
    textTransform: "uppercase",
    textAlign: "center",
  },
  totalAmount: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 36,
    color: "#F70003",
    lineHeight: 56,
    letterSpacing: -0.96,
    textAlign: "center",
  },
  refPill: {
    backgroundColor: "#eceef0",
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  refText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 14,
    color: "#5f3e39",
    lineHeight: 20,
  },
  // Account Info Card
  accountCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 25,
    gap: 16,
    position: "relative",
    overflow: "hidden",
    filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.05))",
  },
  accountCardBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 1,
    borderColor: "rgba(234,188,180,0.1)",
    borderRadius: 24,
  },
  accountHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  accountTitle: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 20,
    color: "#191c1e",
    lineHeight: 28,
  },
  infoRows: {
    gap: 16,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  infoLabel: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 14,
    color: "#5f5e5e",
    lineHeight: 20,
  },
  infoValue: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 14,
    color: "#191c1e",
    lineHeight: 20,
  },
  // Billing breakdown
  billingSection: {
    gap: 8,
    paddingHorizontal: 8,
  },
  billingHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  billingTitle: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#191c1e",
    letterSpacing: 1.2,
    lineHeight: 16,
    textTransform: "uppercase",
  },
  billingTotalHeader: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#191c1e",
    letterSpacing: 1.2,
    lineHeight: 16,
  },
  billingRows: {
    gap: 8,
    paddingBottom: 8,
  },
  billingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  billingLabel: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 14,
    color: "#5f5e5e",
    lineHeight: 24,
  },
  billingValue: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 14,
    color: "#191c1e",
    lineHeight: 24,
  },
  billingDivider: {
    height: 1,
    borderTopWidth: 1,
    borderTopColor: "rgba(234,188,180,0.4)",
    borderStyle: "dashed",
  },
  totalDueRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
  },
  totalDueLabel: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 20,
    color: "#191c1e",
    lineHeight: 28,
  },
  totalDueValue: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 20,
    color: "#F70003",
    lineHeight: 28,
  },
  // Fixed bottom
  fixedBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
    paddingTop: 25,
    paddingBottom: 24,
    backdropFilter: "blur(12px)",
    backgroundColor: "rgba(247,246,248,0.8)",
  },
  fixedBottomBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(234,188,180,0.1)",
  },
  confirmBtn: {
    backgroundColor: "#F70003",
    borderRadius: 32,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    position: "relative",
    overflow: "hidden",
  },
  confirmBtnShadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    boxShadow: "0px 10px 15px -3px rgba(188,0,1,0.2), 0px 4px 6px -4px rgba(188,0,1,0.2)",
    borderRadius: 32,
  },
  confirmBtnText: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 18,
    color: "#FFFFFF",
    lineHeight: 28,
  },
});
