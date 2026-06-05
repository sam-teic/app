/**
 * CreateWalletScreen — React Native / Expo Router.
 * borderBottom string shorthands replaced with borderBottomWidth/Color,
 * boxShadow → shadow*, backdropFilter removed, all SVGs replaced.
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
import { IconArrowLeft, IconArrowRight, IconPhone, IconSms, IconEyeSlash, IconEye } from '@/components/icons';
import { PS_400, PS_600, PS_700 } from '@/components/fonts';
import { useTheme } from '@/context/ThemeContext';
import { ThemeColors } from '@/constants/theme';



// ─── Reusable underline field ─────────────────────────────────────────────────

function UnderlineField({ label, value, onChangeText, placeholder, keyboardType, rightIcon, secureTextEntry }: {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  rightIcon?: React.ReactNode;
  secureTextEntry?: boolean;
}) {
  const { colors } = useTheme();
  const cw = getStyles(colors);
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
          keyboardType={keyboardType ?? 'default'}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
        />
        {rightIcon && <View style={cw.fieldRightIcon}>{rightIcon}</View>}
      </View>
    </View>
  );
}

// ─── PIN row ──────────────────────────────────────────────────────────────────

function PinRow({ label, values, showPin, onToggle, onChange }: {
  label: string;
  values: string[];
  showPin: boolean;
  onToggle: () => void;
  onChange: (index: number, value: string) => void;
}) {
  const { colors } = useTheme();
  const cw = getStyles(colors);
  return (
    <View style={cw.pinSection}>
      <View style={cw.pinLabelRow}>
        <Text style={cw.fieldLabel}>{label}</Text>
        <TouchableOpacity onPress={onToggle} activeOpacity={0.7} style={cw.eyeBtn}>
          {showPin ? <IconEye color="#F70003" /> : <IconEyeSlash color="#F70003" />}
        </TouchableOpacity>
      </View>
      <View style={cw.pinBoxRow}>
        {values.map((digit, i) => (
          <View key={i} style={cw.pinBox}>
            <TextInput
              style={cw.pinInput}
              value={showPin ? digit : digit ? '•' : ''}
              onChangeText={(v) => onChange(i, v.replace(/\D/g, '').slice(-1))}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
            />
          </View>
        ))}
      </View>
    </View>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

/** Create Wallet screen. */
export default function CreateWalletScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const cw = getStyles(colors);
  const [deposit, setDeposit] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState(['', '', '', '']);
  const [confirmPin, setConfirmPin] = useState(['', '', '', '']);
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);

  /** Update a single digit in a PIN array. */
  function handlePinChange(arr: string[], setArr: (a: string[]) => void, index: number, digit: string) {
    const next = [...arr];
    next[index] = digit;
    setArr(next);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={cw.screen}>
        <TouchableOpacity style={cw.backBtn} onPress={() => router.back()} activeOpacity={0.7}>
          <IconArrowLeft size={24} color={colors.primary} />
        </TouchableOpacity>

        <ScrollView style={cw.scroll} contentContainerStyle={[cw.scrollContent, { flexGrow: 1, justifyContent: 'space-between', maxWidth: 600, width: '100%', alignSelf: 'center' }]} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <View style={{ gap: 32 }}>
            <Text style={cw.title}>Create Wallet</Text>

            <View style={cw.formCard}>
            {/* Initial deposit */}
            <View style={cw.fieldContainer}>
              <Text style={cw.fieldLabel}>INITIAL DEPOSIT (₦)</Text>
              <View style={cw.fieldRow}>
                <TextInput style={[cw.fieldInput, cw.depositInput]} value={deposit} onChangeText={setDeposit} placeholder="0.00" placeholderTextColor="#D8DADC" keyboardType="numeric" />
                <View style={cw.fieldRightIcon}><Text style={cw.nairaIcon}>₦</Text></View>
              </View>
            </View>

            <UnderlineField label="PHONE NUMBER" value={phone} onChangeText={setPhone} placeholder="080 0000 0000" keyboardType="phone-pad" rightIcon={<IconPhone />} />
            <UnderlineField label="EMAIL ADDRESS" value={email} onChangeText={setEmail} placeholder="user@example.com" keyboardType="email-address" rightIcon={<IconSms />} />

            <PinRow label="SET WALLET PIN" values={pin} showPin={showPin} onToggle={() => setShowPin((v) => !v)} onChange={(i, d) => handlePinChange(pin, setPin, i, d)} />
            <PinRow label="CONFIRM PIN" values={confirmPin} showPin={showConfirmPin} onToggle={() => setShowConfirmPin((v) => !v)} onChange={(i, d) => handlePinChange(confirmPin, setConfirmPin, i, d)} />
          </View>
          </View>

          <TouchableOpacity style={cw.submitBtn} onPress={() => router.replace('/dashboard')} activeOpacity={0.85}>
            <Text style={cw.submitText}>Create Wallet</Text>
            <IconArrowRight size={12} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const getStyles = (colors: ThemeColors) => StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, position: 'relative', overflow: 'hidden' },
  backBtn: { position: 'absolute', left: 24, top: 16, width: 24, height: 24, zIndex: 10, alignItems: 'center', justifyContent: 'center' },
  scroll: { flex: 1 },
  scrollContent: { paddingTop: 64, paddingHorizontal: 24, paddingBottom: 48, gap: 32 },
  title: { fontFamily: PS_700, fontSize: 24, color: colors.primary, lineHeight: 32 },
  formCard: { borderRadius: 32, backgroundColor: colors.surfaceAlt, padding: 25, gap: 32, borderWidth: 1, borderColor: colors.borderLight },
  fieldContainer: { gap: 8 },
  fieldLabel: { fontFamily: PS_600, fontSize: 12, color: colors.textSub, letterSpacing: 0.6, lineHeight: 16, textTransform: 'uppercase', paddingLeft: 4 },
  fieldRow: { flexDirection: 'row', alignItems: 'center', paddingBottom: 9, paddingTop: 8, borderBottomWidth: 1, borderBottomColor: colors.border },
  fieldInput: { flex: 1, fontFamily: PS_400, fontSize: 16, color: colors.textMain, lineHeight: 20 },
  depositInput: { fontFamily: PS_600, fontSize: 20, color: colors.textMain },
  fieldRightIcon: { width: 20, height: 20, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  nairaIcon: { fontFamily: PS_700, fontSize: 16, color: colors.primary },
  pinSection: { gap: 16 },
  pinLabelRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  eyeBtn: { width: 20, height: 20, alignItems: 'center', justifyContent: 'center' },
  pinBoxRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 },
  pinBox: { width: 48, height: 48, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 2, borderBottomColor: colors.border },
  pinInput: { width: 48, height: 48, fontFamily: PS_400, fontSize: 20, color: colors.textMain, textAlign: 'center' },
  submitBtn: { backgroundColor: colors.primary, borderRadius: 32, height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 },
  submitText: { fontFamily: PS_600, fontSize: 18, color: '#FFFFFF', lineHeight: 28, textAlign: 'center' },
});
