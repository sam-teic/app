/**
 * PurchaseUnitScreen — React Native component.
 * In RN: remove rnShims import and use react-native primitives directly.
 */
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  SW,
  SH,
} from "./rnShims";
import { IconArrowLeft } from "./FormField";
import logoImg from "@/imports/PurchaseUnit/f63515ccfd8aeaadc3275663a9e2183ed31d98fd.png";

interface PurchaseUnitScreenProps {
  onBack?: () => void;
  onContinue?: () => void;
}

function IconPlus({ size = 9, color = "#F70003" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 9 9" fill="none">
      <path d="M4.5 1v7M1 4.5h7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconNaira({ size = 22, color = "#F70003" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size * 0.73} viewBox="0 0 22 16" fill="none">
      <path
        d="M3 2h3.5L16 14H19M3 14h3.5L16 2H19M1 6.5h20M1 9.5h20"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPhone({ size = 18, color = "#F70003" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path
        d="M12.5 13.8c-.9.9-2.1 1.2-3.2.7-1-.4-1.9-1-2.7-1.8L4.4 10.5C3.6 9.7 3 8.8 2.6 7.8c-.5-1-.3-2.2.6-3.1l.9-.9 3.1 3.1-.8.8c-.3.3-.3.7 0 1l1.8 1.8c.3.3.7.3 1 0l.8-.8 3.1 3.1z"
        fill={color}
      />
    </svg>
  );
}

function IconEmail({ size = 20, color = "#F70003" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 20 16" fill="none">
      <path
        d="M2.5 0.5h15a1 1 0 011 1v13a1 1 0 01-1 1h-15a1 1 0 01-1-1v-13a1 1 0 011-1z"
        fill={color}
      />
      <path d="M2.5 1L10 7 17.5 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconArrowRight({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.6} viewBox="0 0 7.4 12" fill="none">
      <path d="M1 1l5.5 5.5L1 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const QUICK_AMOUNTS = ["₦1,000", "₦2,000", "₦5,000", "₦10,000"];

export default function PurchaseUnitScreen({ onBack, onContinue }: PurchaseUnitScreenProps) {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("09073808749");
  const [email, setEmail] = useState("iamfarukdeyemi@gmail.com");
  const [selectedChip, setSelectedChip] = useState(0);

  function handleChipPress(index: number, value: string) {
    setSelectedChip(index);
    setAmount(value.replace("₦", "").replace(",", ""));
  }

  return (
    <View style={pu.screen}>
      <StatusBar />

      {/* Back arrow (black) */}
      <TouchableOpacity style={pu.backBtn} onPress={onBack} activeOpacity={0.7}>
        <IconArrowLeft size={24} />
      </TouchableOpacity>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={pu.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={pu.title}>Purchase Units</Text>

        {/* Meter Number section */}
        <View style={pu.section}>
          {/* Label row */}
          <View style={pu.labelRow}>
            <Text style={pu.sectionLabel}>METER/CUSTOMER NUMBER</Text>
            <TouchableOpacity style={pu.addAnotherBtn} activeOpacity={0.7}>
              <IconPlus />
              <Text style={pu.addAnotherText}>Add Another</Text>
            </TouchableOpacity>
          </View>
          {/* Meter input */}
          <View style={pu.meterInputWrap}>
            <View style={pu.meterInput}>
              <TextInput
                style={pu.meterInputText}
                value="45151438822"
                editable={false}
                placeholderTextColor="#D8DADC"
              />
            </View>
            <View style={pu.meterLogoWrap}>
              <View style={pu.meterLogoDivider} />
              <Image source={logoImg} style={pu.meterLogo} resizeMode="contain" />
            </View>
          </View>
        </View>

        {/* Amount section */}
        <View style={pu.section}>
          <Text style={pu.sectionLabel}>ENTER AMOUNT</Text>
          <View style={pu.amountInputWrap}>
            <View style={pu.amountInput}>
              <TextInput
                style={pu.amountInputText}
                value={amount}
                onChangeText={setAmount}
                placeholder="0.00"
                placeholderTextColor="#6b7280"
                keyboardType="numeric"
              />
            </View>
            <Text style={pu.amountPrefix}>₦</Text>
            <View style={pu.amountSuffix}>
              <IconNaira />
            </View>
          </View>
          {/* Quick chips */}
          <View style={pu.chipRow}>
            {QUICK_AMOUNTS.map((chip, i) => (
              <TouchableOpacity
                key={chip}
                style={[pu.chip, selectedChip === i && pu.chipActive]}
                onPress={() => handleChipPress(i, chip)}
                activeOpacity={0.7}
              >
                <Text style={[pu.chipText, selectedChip === i && pu.chipTextActive]}>{chip}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Receipt Info glass card */}
        <View style={pu.receiptCard}>
          <View style={pu.receiptCardBorder} />
          <Text style={pu.receiptCardTitle}>RECEIPT INFORMATION</Text>

          {/* Phone field */}
          <View style={pu.receiptField}>
            <Text style={pu.receiptFieldLabel}>PHONE NUMBER</Text>
            <View style={pu.receiptFieldRow}>
              <TextInput
                style={pu.receiptFieldInput}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholderTextColor="#D8DADC"
              />
              <View style={pu.receiptFieldIcon}>
                <IconPhone />
              </View>
            </View>
          </View>

          {/* Email field */}
          <View style={pu.receiptField}>
            <Text style={pu.receiptFieldLabel}>EMAIL</Text>
            <View style={pu.receiptFieldRow}>
              <TextInput
                style={pu.receiptFieldInput}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholderTextColor="#D8DADC"
              />
              <View style={pu.receiptFieldIcon}>
                <IconEmail />
              </View>
            </View>
          </View>
        </View>

        {/* Continue button */}
        <View style={pu.primaryAction}>
          <TouchableOpacity style={pu.continueBtn} onPress={onContinue} activeOpacity={0.85}>
            <View style={pu.continueBtnShadow} />
            <Text style={pu.continueBtnText}>Continue</Text>
            <IconArrowRight />
          </TouchableOpacity>
          <Text style={pu.helperText}>Your token will be sent to the provided contacts.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const pu = StyleSheet.create({
  screen: {
    width: SW,
    height: SH,
    backgroundColor: "#F7F6F8",
    position: "relative",
    overflow: "hidden",
  },
  backBtn: {
    position: "absolute",
    left: 24,
    top: 84,
    width: 24,
    height: 24,
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContent: {
    paddingTop: 128,
    paddingHorizontal: 24,
    paddingBottom: 48,
    gap: 32,
  },
  title: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 24,
    color: "#F70003",
    lineHeight: 32,
  },
  section: {
    gap: 8,
  },
  sectionLabel: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#5f3e39",
    letterSpacing: 0.6,
    lineHeight: 16,
    textTransform: "uppercase",
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  addAnotherBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  addAnotherText: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#F70003",
    letterSpacing: 0.6,
    lineHeight: 16,
  },
  meterInputWrap: {
    position: "relative",
  },
  meterInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 32,
    paddingHorizontal: 17,
    paddingVertical: 17,
    borderWidth: 1,
    borderColor: "rgba(149,110,103,0.2)",
  },
  meterInputText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#191c1e",
    lineHeight: 24,
    paddingRight: 80,
  },
  meterLogoWrap: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 13,
  },
  meterLogoDivider: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    borderLeftWidth: 1,
    borderLeftColor: "rgba(149,110,103,0.2)",
  },
  meterLogo: {
    width: 64,
    height: 32,
    marginRight: 17,
  },
  amountInputWrap: {
    position: "relative",
  },
  amountInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 32,
    height: 64,
    paddingLeft: 41,
    paddingRight: 49,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    justifyContent: "center",
  },
  amountInputText: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 24,
    color: "#191c1e",
    lineHeight: 28,
  },
  amountPrefix: {
    position: "absolute",
    left: 16,
    top: "50%",
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 20,
    color: "#191c1e",
    lineHeight: 28,
    transform: [{ translateY: -14 }],
  },
  amountSuffix: {
    position: "absolute",
    right: 24,
    top: "50%",
    transform: [{ translateY: -8 }],
  },
  chipRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chip: {
    borderRadius: 9999,
    paddingHorizontal: 21,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: "#D8DADC",
  },
  chipActive: {
    backgroundColor: "rgba(188,0,1,0.05)",
    borderColor: "#F70003",
  },
  chipText: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#5f5e5e",
    letterSpacing: 0.6,
    lineHeight: 16,
  },
  chipTextActive: {
    color: "#F70003",
  },
  receiptCard: {
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 24,
    backdropFilter: "blur(10px)",
    padding: 25,
    gap: 20,
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
    borderColor: "rgba(234,188,180,0.3)",
    borderRadius: 24,
    boxShadow: "0px 10px 30px 0px rgba(247,0,3,0.05)",
  },
  receiptCardTitle: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#F70003",
    letterSpacing: 0.6,
    lineHeight: 16,
    textTransform: "uppercase",
  },
  receiptField: {
    gap: 4,
    paddingBottom: 9,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(234,188,180,0.3)",
  },
  receiptFieldLabel: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#5f3e39",
    letterSpacing: 0.6,
    lineHeight: 16,
    textTransform: "uppercase",
  },
  receiptFieldRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  receiptFieldInput: {
    flex: 1,
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#191c1e",
    lineHeight: 24,
  },
  receiptFieldIcon: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  primaryAction: {
    gap: 16,
    paddingTop: 16,
  },
  continueBtn: {
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
  continueBtnShadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    boxShadow: "0px 10px 15px -3px rgba(188,0,1,0.2), 0px 4px 6px -4px rgba(188,0,1,0.2)",
    borderRadius: 32,
  },
  continueBtnText: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 18,
    color: "#FFFFFF",
    lineHeight: 28,
  },
  helperText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 14,
    color: "#5f3e39",
    lineHeight: 24,
    textAlign: "center",
  },
});
