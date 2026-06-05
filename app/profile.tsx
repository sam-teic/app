/**
 * ProfileScreen — React Native / Expo Router.
 * top:"50%" + transform replaced with calculated pixel position.
 * boxShadow → shadow*, backdropFilter removed, SVGs via react-native-svg.
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconArrowLeft, IconUser, IconSms, IconPhone, IconCalculator } from '@/components/FormField';
import { IconShieldCheck } from '@/components/icons';
import { PS_400, PS_600 } from '@/components/fonts';
import { useTheme } from '@/context/ThemeContext';
import { ThemeColors } from '@/constants/theme';

// ─── Pill field ───────────────────────────────────────────────────────────────

/**
 * Labelled pill input field with optional right icon.
 * Pill container height ≈ 58px (paddingVertical: 17 × 2 + lineHeight: 24).
 * Icon is absolutely positioned at top: 19 (≈ (58 - 20) / 2) instead of top:"50%".
 */
function PillField({ label, value, onChangeText, icon, disabled = false, helperText }: {
  label: string;
  value: string;
  onChangeText?: (t: string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  helperText?: string;
}) {
  const { colors } = useTheme();
  const pf = getPillStyles(colors);
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

// ─── Main screen ──────────────────────────────────────────────────────────────

/** Profile management screen. */
export default function ProfileScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const ps = getStyles(colors);
  const [fullName, setFullName] = useState('David Abuh');
  const [email, setEmail] = useState('iamfarukdeyemi@gmail.com');
  const [phone, setPhone] = useState('09073808749');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={ps.screen}>
        <View style={ps.header}>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7} style={ps.backBtn}>
            <IconArrowLeft size={24} color={colors.primary} />
          </TouchableOpacity>
          <Text style={ps.headerTitle}>Manage Profile</Text>
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={[ps.scrollContent, { flexGrow: 1, justifyContent: 'space-between', maxWidth: 600, width: '100%', alignSelf: 'center' }]} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <View>
            <View style={ps.formSection}>
            <PillField label="FULL NAME" value={fullName} onChangeText={setFullName} icon={<IconUser color={colors.primary} size={20} />} />
            <PillField label="EMAIL ADDRESS" value={email} onChangeText={setEmail} icon={<IconSms color={colors.primary} size={20} />} />
            <PillField label="PHONE NUMBER" value={phone} onChangeText={setPhone} icon={<IconPhone color={colors.primary} size={20} />} />
            <PillField label="METER NUMBER" value="4515-1438-822" disabled icon={<IconCalculator color={colors.primary} size={20} />} helperText="Meter number is linked to your utility account and cannot be changed." />
          </View>
          </View>

          <View style={{ gap: 16 }}>
            <View style={ps.actionSection}>
            <TouchableOpacity style={ps.saveBtn} onPress={() => router.replace('/dashboard')} activeOpacity={0.85}>
              <View style={ps.saveBtnShadow} />
              <Text style={ps.saveBtnText}>Save Changes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ps.logoutBtn} onPress={() => router.replace('/welcome')} activeOpacity={0.7}>
              <Text style={ps.logoutBtnText}>Log Out</Text>
            </TouchableOpacity>
          </View>

            <View style={ps.securityBadge}>
              <View style={ps.securityIconCircle}>
                <IconShieldCheck color={colors.primary} size={16} />
              </View>
              <View style={ps.securityText}>
                <Text style={ps.securityTitle}>Data Protection</Text>
                <Text style={ps.securityDesc}>Your profile data is encrypted and secure with Access Power protocols.</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const getStyles = (colors: ThemeColors) => StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, position: 'relative', overflow: 'hidden' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 24, paddingVertical: 16, zIndex: 10 },
  backBtn: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  headerTitle: { fontFamily: PS_600, fontSize: 20, color: colors.textMain, lineHeight: 32, flex: 1 },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 48, gap: 32 },
  formSection: { gap: 20 },
  actionSection: { gap: 16, paddingVertical: 16 },
  saveBtn: { backgroundColor: colors.primary, borderRadius: 32, height: 54, alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' },
  saveBtnShadow: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: 32 },
  saveBtnText: { fontFamily: PS_600, fontSize: 18, color: '#FFFFFF', lineHeight: 28 },
  logoutBtn: { borderRadius: 32, height: 54, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.borderLight },
  logoutBtnText: { fontFamily: PS_600, fontSize: 18, color: colors.primary, lineHeight: 28 },
  securityBadge: { flexDirection: 'row', alignItems: 'center', gap: 16, paddingHorizontal: 4 },
  securityIconCircle: { width: 44, height: 44, borderRadius: 9999, backgroundColor: colors.iconBgSubtle, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  securityText: { flex: 1, gap: 4 },
  securityTitle: { fontFamily: PS_600, fontSize: 12, color: colors.textMain, letterSpacing: 0.6, lineHeight: 16 },
  securityDesc: { fontFamily: PS_400, fontSize: 14, color: colors.textSub, lineHeight: 20 },
});

const getPillStyles = (colors: ThemeColors) => StyleSheet.create({
  fieldWrap: { gap: 8, position: 'relative' },
  fieldLabel: { fontFamily: PS_600, fontSize: 12, color: colors.textSub, letterSpacing: 0.6, lineHeight: 16, textTransform: 'uppercase', paddingLeft: 8 },
  fieldRow: { position: 'relative' },
  pillInput: { backgroundColor: colors.surfaceSolid, borderRadius: 32, paddingLeft: 25, paddingRight: 49, height: 54, justifyContent: 'center', borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  pillInputDisabled: { backgroundColor: colors.surfaceAlt },
  pillText: { fontFamily: PS_400, fontSize: 16, color: colors.textMain, lineHeight: 24 },
  pillTextDisabled: { color: colors.textSub },
  pillIcon: { position: 'absolute', right: 24, top: 17, width: 20, height: 20, alignItems: 'center', justifyContent: 'center' },
  helperText: { fontFamily: PS_400, fontSize: 11, color: colors.textSub, lineHeight: 16.5, paddingLeft: 8 },
});
