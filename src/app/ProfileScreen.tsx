/**
 * ProfileScreen — React Native component.
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
import { IconArrowLeft, IconUser, IconSms, IconPhone, IconCalculator } from "./FormField";

interface ProfileScreenProps {
  onBack?: () => void;
  onSave?: () => void;
  onLogout?: () => void;
}

function IconLockFilled({ color = "#F70003", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size * 1.25} viewBox="0 0 16 20" fill="none">
      <path
        d="M14 9H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1v-8a1 1 0 00-1-1zM5.5 9V6a2.5 2.5 0 015 0v3"
        fill={color}
      />
    </svg>
  );
}

function PillField({
  label,
  value,
  onChangeText,
  icon,
  disabled = false,
  helperText,
}: {
  label: string;
  value: string;
  onChangeText?: (t: string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  helperText?: string;
}) {
  return (
    <View style={pf.fieldWrap}>
      <Text style={pf.fieldLabel}>{label}</Text>
      <View style={pf.fieldRow}>
        <View style={[pf.pillInput, disabled && pf.pillInputDisabled]}>
          <TextInput
            style={[pf.pillText, disabled && pf.pillTextDisabled]}
            value={value}
            onChangeText={onChangeText}
            editable={!disabled}
            placeholderTextColor="#D8DADC"
          />
        </View>
        {icon && <View style={pf.pillIcon}>{icon}</View>}
      </View>
      {helperText ? <Text style={pf.helperText}>{helperText}</Text> : null}
    </View>
  );
}

export default function ProfileScreen({ onBack, onSave, onLogout }: ProfileScreenProps) {
  const [fullName, setFullName] = useState("David Abuh");
  const [email, setEmail] = useState("iamfarukdeyemi@gmail.com");
  const [phone, setPhone] = useState("09073808749");

  return (
    <View style={ps.screen}>
      <StatusBar />

      {/* Header */}
      <View style={ps.header}>
        <TouchableOpacity onPress={onBack} activeOpacity={0.7} style={ps.backBtn}>
          <IconArrowLeft size={24} color="#F70003" />
        </TouchableOpacity>
        <Text style={ps.headerTitle}>Manage Profile</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={ps.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Form Section */}
        <View style={ps.formSection}>
          <PillField
            label="FULL NAME"
            value={fullName}
            onChangeText={setFullName}
            icon={<IconUser color="#F70003" size={20} />}
          />
          <PillField
            label="EMAIL ADDRESS"
            value={email}
            onChangeText={setEmail}
            icon={<IconSms color="#F70003" size={20} />}
          />
          <PillField
            label="PHONE NUMBER"
            value={phone}
            onChangeText={setPhone}
            icon={<IconPhone color="#F70003" size={20} />}
          />
          <PillField
            label="METER NUMBER"
            value="4515-1438-822"
            disabled
            icon={<IconCalculator color="#F70003" size={20} />}
            helperText="Meter number is linked to your utility account and cannot be changed."
          />
        </View>

        {/* Action Section */}
        <View style={ps.actionSection}>
          <TouchableOpacity style={ps.saveBtn} onPress={onSave} activeOpacity={0.85}>
            <View style={ps.saveBtnShadow} />
            <Text style={ps.saveBtnText}>Save Changes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ps.logoutBtn} onPress={onLogout} activeOpacity={0.7}>
            <Text style={ps.logoutBtnText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* Security Badge */}
        <View style={ps.securityBadge}>
          <View style={ps.securityIconCircle}>
            <IconLockFilled color="#F70003" size={16} />
          </View>
          <View style={ps.securityText}>
            <Text style={ps.securityTitle}>Data Protection</Text>
            <Text style={ps.securityDesc}>Your profile data is encrypted and secure with Access Power protocols.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const ps = StyleSheet.create({
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
    gap: 20,
  },
  actionSection: {
    gap: 16,
    paddingVertical: 16,
  },
  saveBtn: {
    backgroundColor: "#F70003",
    borderRadius: 32,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  saveBtnShadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
    borderRadius: 32,
  },
  saveBtnText: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 18,
    color: "#FFFFFF",
    lineHeight: 28,
  },
  logoutBtn: {
    borderRadius: 32,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(186,26,26,0.1)",
  },
  logoutBtnText: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 18,
    color: "#F70003",
    lineHeight: 28,
  },
  securityBadge: {
    borderRadius: 32,
    backdropFilter: "blur(10px)",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 9,
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    boxShadow: "0px 4px 30px 0px rgba(247,0,3,0.05)",
  },
  securityIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    backgroundColor: "rgba(188,0,1,0.1)",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  securityText: {
    flex: 1,
    gap: 4,
  },
  securityTitle: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#191c1e",
    letterSpacing: 0.6,
    lineHeight: 16,
  },
  securityDesc: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 14,
    color: "#5f5e5e",
    lineHeight: 20,
  },
});

const pf = StyleSheet.create({
  fieldWrap: {
    gap: 8,
    position: "relative",
  },
  fieldLabel: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 12,
    color: "#5f5e5e",
    letterSpacing: 0.6,
    lineHeight: 16,
    textTransform: "uppercase",
    paddingLeft: 8,
  },
  fieldRow: {
    position: "relative",
  },
  pillInput: {
    backgroundColor: "#f2f4f6",
    borderRadius: 32,
    paddingLeft: 25,
    paddingRight: 49,
    paddingVertical: 17,
    borderWidth: 1,
    borderColor: "rgba(149,110,103,0.1)",
    overflow: "hidden",
  },
  pillInputDisabled: {
    backgroundColor: "#eceef0",
  },
  pillText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#191c1e",
    lineHeight: 24,
  },
  pillTextDisabled: {
    color: "#5f5e5e",
  },
  pillIcon: {
    position: "absolute",
    right: 24,
    top: "50%",
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateY: -10 }],
  },
  helperText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 11,
    color: "rgba(95,94,94,0.6)",
    lineHeight: 16.5,
    paddingLeft: 8,
  },
});
