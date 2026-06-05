/**
 * ChangePasswordScreen — React Native component.
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

interface ChangePasswordScreenProps {
  onBack?: () => void;
  onUpdate?: () => void;
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

function IconCheckCircle({ met = true }: { met?: boolean }) {
  if (met) {
    return (
      <svg width={15} height={15} viewBox="0 0 15 15" fill="none">
        <circle cx="7.5" cy="7.5" r="7.5" fill="#F70003" />
        <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width={15} height={15} viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="7.5" r="7" fill="#C8C6C5" />
    </svg>
  );
}

function PasswordField({
  label,
  value,
  onChangeText,
  showPassword,
  onToggle,
}: {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  showPassword: boolean;
  onToggle: () => void;
}) {
  return (
    <View style={cp.fieldWrap}>
      <Text style={cp.fieldLabel}>{label}</Text>
      <View style={cp.inputRow}>
        <View style={cp.pillInput}>
          <TextInput
            style={cp.pillText}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={!showPassword}
            placeholder="••••••••"
            placeholderTextColor="#6b7280"
          />
        </View>
        <TouchableOpacity style={cp.eyeBtn} onPress={onToggle} activeOpacity={0.7}>
          {showPassword ? <IconEyeOpen /> : <IconEyeSlash />}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function ChangePasswordScreen({ onBack, onUpdate }: ChangePasswordScreenProps) {
  const [current, setCurrent] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const has8Chars = newPwd.length >= 8;
  const hasNumber = /\d/.test(newPwd);
  const hasSpecial = /[!@#$]/.test(newPwd);

  return (
    <View style={cp.screen}>
      <StatusBar />

      {/* Header */}
      <View style={cp.header}>
        <TouchableOpacity onPress={onBack} activeOpacity={0.7} style={cp.backBtn}>
          <IconArrowLeft size={24} color="#F70003" />
        </TouchableOpacity>
        <Text style={cp.headerTitle}>Change Password</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={cp.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Form Section */}
        <View style={cp.formSection}>
          <PasswordField
            label="CURRENT PASSWORD"
            value={current}
            onChangeText={setCurrent}
            showPassword={showCurrent}
            onToggle={() => setShowCurrent((v) => !v)}
          />
          <PasswordField
            label="NEW PASSWORD"
            value={newPwd}
            onChangeText={setNewPwd}
            showPassword={showNew}
            onToggle={() => setShowNew((v) => !v)}
          />
          <View style={cp.fieldWrap}>
            <PasswordField
              label="CONFIRM NEW PASSWORD"
              value={confirm}
              onChangeText={setConfirm}
              showPassword={showConfirm}
              onToggle={() => setShowConfirm((v) => !v)}
            />
          </View>

          {/* Password requirements */}
          <View style={cp.requirements}>
            <Text style={cp.reqHeader}>Your password must include:</Text>
            <View style={cp.reqRow}>
              <IconCheckCircle met={has8Chars} />
              <Text style={[cp.reqText, has8Chars && cp.reqTextMet]}>At least 8 characters</Text>
            </View>
            <View style={cp.reqRow}>
              <IconCheckCircle met={hasNumber} />
              <Text style={[cp.reqText, hasNumber && cp.reqTextMet]}>At least one number (0-9)</Text>
            </View>
            <View style={cp.reqRow}>
              <IconCheckCircle met={hasSpecial} />
              <Text style={[cp.reqText, hasSpecial && cp.reqTextMet]}>One special character (!@#$)</Text>
            </View>
          </View>
        </View>

        {/* Action */}
        <View style={cp.actionSection}>
          <TouchableOpacity style={cp.updateBtn} onPress={onUpdate} activeOpacity={0.85}>
            <View style={cp.updateBtnShadow} />
            <Text style={cp.updateBtnText}>Update Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const cp = StyleSheet.create({
  screen: {
    width: SW,
    height: SH,
    backgroundColor: "#F7F6F8",
    position: "relative",
    overflow: "hidden",
  },
  header: {
    position: "absolute",
    top: 76,
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
    paddingTop: 160,
    paddingHorizontal: 24,
    paddingBottom: 48,
    gap: 32,
  },
  formSection: {
    gap: 16,
  },
  fieldWrap: {
    gap: 8,
    paddingBottom: 24,
  },
  fieldLabel: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#5f5e5e",
    letterSpacing: 0.6,
    lineHeight: 16,
    textTransform: "uppercase",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  pillInput: {
    flex: 1,
    backgroundColor: "#f2f4f6",
    borderRadius: 32,
    paddingLeft: 25,
    paddingRight: 49,
    paddingVertical: 17,
    borderWidth: 1,
    borderColor: "rgba(149,110,103,0.1)",
    overflow: "hidden",
  },
  pillText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#191c1e",
    lineHeight: 24,
  },
  eyeBtn: {
    position: "absolute",
    right: 24,
    top: "50%",
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateY: -10 }],
  },
  requirements: {
    gap: 8,
    paddingTop: 8,
  },
  reqHeader: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#5f5e5e",
    letterSpacing: 0.6,
    lineHeight: 16,
  },
  reqRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  reqText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 14,
    color: "#C8C6C5",
    lineHeight: 20,
  },
  reqTextMet: {
    color: "#191c1e",
  },
  actionSection: {
    paddingVertical: 16,
  },
  updateBtn: {
    backgroundColor: "#F70003",
    borderRadius: 32,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  updateBtnShadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
    borderRadius: 32,
  },
  updateBtnText: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 20,
    color: "#FFFFFF",
    lineHeight: 28,
  },
});
