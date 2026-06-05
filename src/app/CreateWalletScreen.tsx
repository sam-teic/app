/**
 * CreateWalletScreen — React Native component.
 * In RN: remove rnShims import and use react-native primitives directly.
 */
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  SW,
  SH,
} from "./rnShims";
import { IconArrowLeft } from "./FormField";

interface CreateWalletScreenProps {
  onCreate?: () => void;
  onBack?: () => void;
}

// ── Icons (inline SVG for web; swap for react-native-svg in RN) ───────────────

function IconPhone({ color = "#F70003", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M13.5 14.8c-.9.9-2.1 1.2-3.2.7-1-.4-1.9-1-2.7-1.8L5.4 11.5C4.6 10.7 4 9.8 3.6 8.8c-.5-1-.3-2.2.6-3.1l.9-.9 3.1 3.1-.8.8c-.3.3-.3.7 0 1l1.8 1.8c.3.3.7.3 1 0l.8-.8 3.1 3.1z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSms({ color = "#F70003", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M2.5 4.5h15a1 1 0 011 1v9a1 1 0 01-1 1h-15a1 1 0 01-1-1v-9a1 1 0 011-1z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
      <path
        d="M2.5 5l7.5 5.5L17.5 5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

function IconEyeSlash({ color = "#F70003", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M3 3l14 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M8.4 8.4A2.5 2.5 0 0011.6 11.6M10 5C7 5 4.5 7.1 3.5 10c.4 1 1 1.9 1.8 2.7M12.7 12.7C13.9 11.9 14.8 11 15.5 10 14.5 7.1 12 5 10 5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconEyeOpen({ color = "#F70003", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M1.5 10S4.5 4 10 4s8.5 6 8.5 6-3 6-8.5 6-8.5-6-8.5-6z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="10" r="2.5" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function IconArrowRight({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.6} viewBox="0 0 7.4 12" fill="none">
      <path
        d="M1 1l5.5 5.5L1 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Reusable underline field ──────────────────────────────────────────────────

function UnderlineField({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  rightIcon,
  secureTextEntry,
}: {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  keyboardType?: string;
  rightIcon?: React.ReactNode;
  secureTextEntry?: boolean;
}) {
  return (
    <View style={cw.fieldContainer}>
      <Text style={cw.fieldLabel}>{label}</Text>
      <View style={cw.fieldRow}>
        <TextInput
          style={cw.fieldInput}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#D8DADC"
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
        {rightIcon && (
          <View style={cw.fieldRightIcon}>{rightIcon}</View>
        )}
      </View>
    </View>
  );
}

// ── PIN row ───────────────────────────────────────────────────────────────────

function PinRow({
  label,
  values,
  showPin,
  onToggle,
  onChange,
}: {
  label: string;
  values: string[];
  showPin: boolean;
  onToggle: () => void;
  onChange: (index: number, value: string) => void;
}) {
  return (
    <View style={cw.pinSection}>
      <View style={cw.pinLabelRow}>
        <Text style={cw.fieldLabel}>{label}</Text>
        <TouchableOpacity onPress={onToggle} activeOpacity={0.7} style={cw.eyeBtn}>
          {showPin ? <IconEyeOpen /> : <IconEyeSlash />}
        </TouchableOpacity>
      </View>
      <View style={cw.pinBoxRow}>
        {values.map((digit, i) => (
          <View key={i} style={cw.pinBox}>
            <TextInput
              style={cw.pinInput}
              value={showPin ? digit : digit ? "•" : ""}
              onChangeText={(v) => onChange(i, v.replace(/\D/g, "").slice(-1))}
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function CreateWalletScreen({ onCreate, onBack }: CreateWalletScreenProps) {
  const [deposit, setDeposit] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState(["", "", "", ""]);
  const [confirmPin, setConfirmPin] = useState(["", "", "", ""]);
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);

  function handlePinChange(
    arr: string[],
    setArr: (a: string[]) => void,
    index: number,
    digit: string
  ) {
    const next = [...arr];
    next[index] = digit;
    setArr(next);
  }

  return (
    <View style={cw.screen}>
      <StatusBar />

      {/* Back arrow */}
      <TouchableOpacity style={cw.backBtn} onPress={onBack} activeOpacity={0.7}>
        <IconArrowLeft size={24} />
      </TouchableOpacity>

      <ScrollView
        style={cw.scroll}
        contentContainerStyle={cw.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={cw.title}>Create Wallet</Text>

        {/* Glass form card */}
        <View style={cw.formCard}>

          {/* Initial deposit */}
          <View style={cw.fieldContainer}>
            <Text style={cw.fieldLabel}>INITIAL DEPOSIT (₦)</Text>
            <View style={cw.fieldRow}>
              <TextInput
                style={[cw.fieldInput, cw.depositInput]}
                value={deposit}
                onChangeText={setDeposit}
                placeholder="0.00"
                placeholderTextColor="#D8DADC"
                keyboardType="numeric"
              />
              <View style={cw.fieldRightIcon}>
                <Text style={cw.nairaIcon}>₦</Text>
              </View>
            </View>
          </View>

          {/* Phone */}
          <UnderlineField
            label="PHONE NUMBER"
            value={phone}
            onChangeText={setPhone}
            placeholder="080 0000 0000"
            keyboardType="phone-pad"
            rightIcon={<IconPhone />}
          />

          {/* Email */}
          <UnderlineField
            label="EMAIL ADDRESS"
            value={email}
            onChangeText={setEmail}
            placeholder="user@example.com"
            keyboardType="email-address"
            rightIcon={<IconSms />}
          />

          {/* Set PIN */}
          <PinRow
            label="SET WALLET PIN"
            values={pin}
            showPin={showPin}
            onToggle={() => setShowPin((v) => !v)}
            onChange={(i, d) => handlePinChange(pin, setPin, i, d)}
          />

          {/* Confirm PIN */}
          <PinRow
            label="CONFIRM PIN"
            values={confirmPin}
            showPin={showConfirmPin}
            onToggle={() => setShowConfirmPin((v) => !v)}
            onChange={(i, d) => handlePinChange(confirmPin, setConfirmPin, i, d)}
          />

        </View>

        {/* Submit */}
        <TouchableOpacity style={cw.submitBtn} onPress={onCreate} activeOpacity={0.85}>
          <Text style={cw.submitText}>Create Wallet</Text>
          <IconArrowRight size={12} />
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const cw = StyleSheet.create({
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
  scroll: { flex: 1 },
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
  // Glass form card
  formCard: {
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",
    padding: 25,
    gap: 32,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    boxShadow: "0px 30px 60px -15px rgba(247,0,3,0.05)",
  },
  // Underline field
  fieldContainer: {
    gap: 8,
  },
  fieldLabel: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#5f5e5e",
    letterSpacing: 0.6,
    lineHeight: 16,
    textTransform: "uppercase",
    paddingLeft: 4,
  },
  fieldRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 9,
    paddingTop: 8,
    borderBottom: "1px solid #D8DADC",
  },
  fieldInput: {
    flex: 1,
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#191c1e",
    lineHeight: 20,
  },
  depositInput: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 20,
    color: "#191c1e",
  },
  fieldRightIcon: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  nairaIcon: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 16,
    color: "#F70003",
  },
  // PIN section
  pinSection: {
    gap: 16,
  },
  pinLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  eyeBtn: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  pinBoxRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  pinBox: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "2px solid #D8DADC",
  },
  pinInput: {
    width: 48,
    height: 48,
    textAlign: "center",
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 20,
    color: "#191c1e",
  },
  // Submit button
  submitBtn: {
    backgroundColor: "#F70003",
    borderRadius: 32,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    boxShadow: "0px 10px 15px -3px rgba(188,0,1,0.2), 0px 4px 6px -4px rgba(188,0,1,0.2)",
  },
  submitText: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 18,
    color: "#FFFFFF",
    lineHeight: 28,
    textAlign: "center",
  },
});
