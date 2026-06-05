/**
 * PurchaseUnitScreen — React Native / Expo Router.
 * top:"50%" + transform replaced with calculated pixel positions,
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
import {
  IconArrowLeft,
  IconArrowRight,
  IconPlus,
  IconNaira,
  IconPhone,
  IconSms as IconEmail,
  IconBolt,
  IconCalculator,
  IconChevronDown,
} from '@/components/icons';
import { PS_400, PS_600, PS_700 } from '@/components/fonts';
import { useTheme } from '@/context/ThemeContext';
import { ThemeColors } from '@/constants/theme';


const INPUT_H = 64;
// Effective top for amount prefix: INPUT_H / 2 - lineHeight/2 = 32 - 14 = 18
const AMOUNT_PREFIX_TOP = 18;
// Effective top for amount suffix icon: INPUT_H / 2 - iconH/2 = 32 - 10 = 22
const AMOUNT_SUFFIX_TOP = 22;

const DISCO_OPTIONS = ['IBEDC', 'AEDC', 'EEDC', 'EKEDC', 'KEDCO', 'BEDC', 'JEDC'];
const QUICK_AMOUNTS = ['₦1,000', '₦2,000', '₦5,000', '₦10,000'];

// ─── Underline input ──────────────────────────────────────────────────────────

function UnderlineInput({ label, value, onChangeText, placeholder, rightIcon, keyboardType }: {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  rightIcon?: React.ReactNode;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}) {
  const { colors } = useTheme();
  const pu = getStyles(colors);
  return (
    <View style={pu.fieldContainer}>
      <Text style={pu.fieldLabel}>{label}</Text>
      <View style={pu.underlineRow}>
        <TextInput style={pu.underlineInput} value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor="#D8DADC" keyboardType={keyboardType ?? 'default'} autoCapitalize="none" />
        {rightIcon && <View style={pu.underlineIcon}>{rightIcon}</View>}
      </View>
    </View>
  );
}

// ─── Main screen ──────────────────────────────────────────────────────────────

/** Purchase electricity units screen. */
export default function PurchaseUnitScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const pu = getStyles(colors);
  const [amount, setAmount] = useState('');
  const [disco, setDisco] = useState('');
  const [showDiscoList, setShowDiscoList] = useState(false);
  const [meterNo, setMeterNo] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [extraMeters, setExtraMeters] = useState<string[]>([]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={pu.screen}>
        <View style={pu.header}>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7} style={pu.backBtn}>
            <IconArrowLeft size={24} color={colors.primary} />
          </TouchableOpacity>
          <Text style={pu.headerTitle}>Purchase Unit</Text>
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={[pu.scrollContent, { flexGrow: 1, justifyContent: 'space-between', maxWidth: 600, width: '100%', alignSelf: 'center' }]} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <View style={{ gap: 24 }}>
            {/* Amount input */}
            <View style={pu.amountSection}>
            <Text style={pu.amountLabel}>ENTER AMOUNT (₦)</Text>
            <View style={pu.amountInputWrap}>
              {/* Prefix "₦" — top:18 replaces top:"50%" + translateY:-14 */}
              <View style={[pu.amountPrefix, { top: AMOUNT_PREFIX_TOP }]}>
                <Text style={pu.amountPrefixText}>₦</Text>
              </View>
              <TextInput
                style={pu.amountInput}
                value={amount}
                onChangeText={setAmount}
                placeholder="0.00"
                placeholderTextColor="#D8DADC"
                keyboardType="numeric"
              />
              {/* Naira icon suffix — top:22 replaces top:"50%" + translateY:-10 */}
              <View style={[pu.amountSuffix, { top: AMOUNT_SUFFIX_TOP }]}>
                <IconNaira size={20} />
              </View>
            </View>

            {/* Quick amounts */}
            <View style={pu.quickAmounts}>
              {QUICK_AMOUNTS.map((q) => (
                <TouchableOpacity
                  key={q}
                  style={pu.quickBtn}
                  onPress={() => setAmount(q.replace(/[₦,]/g, ''))}
                  activeOpacity={0.7}
                >
                  <Text style={pu.quickBtnText}>{q}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Form card */}
          <View style={pu.formCard}>
            {/* DISCO selector */}
            <View>
              <Text style={pu.fieldLabel}>SELECT DISCO</Text>
              <TouchableOpacity style={pu.discoSelector} onPress={() => setShowDiscoList((v) => !v)} activeOpacity={0.7}>
                <Text style={[pu.underlineInput, !disco && { color: '#D8DADC' }]}>{disco || 'Select power provider'}</Text>
                <IconChevronDown color="#94A3B8" />
              </TouchableOpacity>
              {showDiscoList && (
                <View style={pu.discoList}>
                  {DISCO_OPTIONS.map((d) => (
                    <TouchableOpacity key={d} style={pu.discoItem} onPress={() => { setDisco(d); setShowDiscoList(false); }} activeOpacity={0.7}>
                      <Text style={pu.discoItemText}>{d}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            <UnderlineInput label="METER NUMBER" value={meterNo} onChangeText={setMeterNo} placeholder="Meter number" keyboardType="numeric" rightIcon={<IconCalculator size={20} />} />

            {extraMeters.map((m, i) => (
              <UnderlineInput key={i} label={`EXTRA METER ${i + 2}`} value={m} onChangeText={(v) => { const next = [...extraMeters]; next[i] = v; setExtraMeters(next); }} placeholder="Meter number" keyboardType="numeric" rightIcon={<IconCalculator size={20} />} />
            ))}

            <TouchableOpacity style={pu.addMeterRow} onPress={() => setExtraMeters((v) => [...v, ''])} activeOpacity={0.7}>
              <View style={pu.addIcon}><IconPlus /></View>
              <Text style={pu.addMeterText}>Add Another Meter</Text>
            </TouchableOpacity>

            <UnderlineInput label="PHONE NUMBER" value={phone} onChangeText={setPhone} placeholder="080 0000 0000" keyboardType="phone-pad" rightIcon={<IconPhone size={20} />} />
            <UnderlineInput label="EMAIL ADDRESS" value={email} onChangeText={setEmail} placeholder="user@example.com" keyboardType="email-address" rightIcon={<IconEmail size={20} />} />
          </View>

          {/* Electric icon row */}
          <View style={pu.iconRow}>
            <View style={pu.boltCircle}><IconBolt color="#FFFFFF" size={20} /></View>
          </View>
          </View>

          <TouchableOpacity style={pu.submitBtn} onPress={() => router.push('/confirm-details')} activeOpacity={0.85}>
            <Text style={pu.submitText}>Continue</Text>
            <IconArrowRight size={12} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const getStyles = (colors: ThemeColors) => StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, position: 'relative', overflow: 'hidden' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 24, paddingVertical: 16, zIndex: 10 },
  backBtn: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  headerTitle: { fontFamily: PS_700, fontSize: 20, color: colors.textMain, lineHeight: 32, flex: 1 },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 48, gap: 24 },
  amountSection: { gap: 16 },
  amountLabel: { fontFamily: PS_600, fontSize: 12, color: colors.textSub, letterSpacing: 0.6, lineHeight: 16, textTransform: 'uppercase' },
  amountInputWrap: { height: INPUT_H, borderRadius: 32, backgroundColor: colors.surfaceSolid, borderWidth: 1, borderColor: colors.border, position: 'relative', overflow: 'hidden' },
  amountPrefix: { position: 'absolute', left: 24 },
  amountPrefixText: { fontFamily: PS_700, fontSize: 28, color: colors.textSub, lineHeight: 28 },
  amountInput: { position: 'absolute', left: 48, right: 56, top: 0, bottom: 0, fontFamily: PS_700, fontSize: 28, color: colors.textMain, textAlign: 'center' },
  amountSuffix: { position: 'absolute', right: 24 },
  quickAmounts: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  quickBtn: { backgroundColor: colors.iconBgSubtle, borderRadius: 9999, paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderColor: colors.borderLight },
  quickBtnText: { fontFamily: PS_600, fontSize: 13, color: colors.primary, lineHeight: 16 },
  formCard: { backgroundColor: colors.surfaceAlt, borderRadius: 32, padding: 25, gap: 24, borderWidth: 1, borderColor: colors.borderLight },
  fieldContainer: { gap: 8 },
  fieldLabel: { fontFamily: PS_600, fontSize: 12, color: colors.textSub, letterSpacing: 0.6, lineHeight: 16, textTransform: 'uppercase', paddingLeft: 4 },
  discoSelector: { flexDirection: 'row', alignItems: 'center', paddingVertical: 9, borderBottomWidth: 1, borderBottomColor: colors.border },
  discoList: { borderRadius: 12, backgroundColor: colors.surfaceSolid, borderWidth: 1, borderColor: colors.border, overflow: 'hidden', marginTop: 4, zIndex: 20 },
  discoItem: { paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: colors.border },
  discoItemText: { fontFamily: PS_400, fontSize: 15, color: colors.textMain },
  underlineRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 9, borderBottomWidth: 1, borderBottomColor: colors.border },
  underlineInput: { flex: 1, fontFamily: PS_400, fontSize: 16, color: colors.textMain, lineHeight: 20 },
  underlineIcon: { width: 20, height: 20, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  addMeterRow: { flexDirection: 'row', alignItems: 'center', gap: 12, alignSelf: 'flex-end' },
  addIcon: { width: 20, height: 20, borderRadius: 9999, borderWidth: 1.5, borderColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  addMeterText: { fontFamily: PS_600, fontSize: 13, color: colors.primary, lineHeight: 16 },
  iconRow: { alignItems: 'center' },
  boltCircle: { width: 48, height: 48, borderRadius: 9999, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  submitBtn: { backgroundColor: colors.primary, borderRadius: 32, height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 },
  submitText: { fontFamily: PS_600, fontSize: 18, color: '#FFFFFF', lineHeight: 28, textAlign: 'center' },
});
