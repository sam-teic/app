import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  Animated,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconArrowLeft, IconArrowRight } from '@/components/icons';
import { PS_400, PS_600, PS_700 } from '@/components/fonts';
import { useTheme } from '@/context/ThemeContext';
import { ThemeColors } from '@/constants/theme';
import { InteractiveButton } from '@/components/FormField';

const logoImg = require('@/imports/PurchaseUnit/f63515ccfd8aeaadc3275663a9e2183ed31d98fd.png') as number;
const darkLogoImg = require('@/assets/icons/darklogo.png') as number;
const marginIcon = require('@/assets/icons/Margin.png') as number;
const callIcon = require('@/assets/icons/call.png') as number;
const smsIcon = require('@/assets/icons/sms.png') as number;

const INPUT_H = 64;
const AMOUNT_PREFIX_TOP = 18;
const AMOUNT_SUFFIX_TOP = 22;

const QUICK_AMOUNTS = ['₦1,000', '₦2,000', '₦5,000', '₦10,000'];

// ─── Extra Meter Field Component ──────────────────────────────────────────────

function ExtraMeterField({ index, value, onChangeText, colors, logoSource }: {
  index: number;
  value: string;
  onChangeText: (t: string) => void;
  colors: ThemeColors;
  logoSource: number;
}) {
  const pu = getStyles(colors);
  const [isFocused, setIsFocused] = useState(false);
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused ? 1 : 0,
      duration: 180,
      useNativeDriver: false,
    }).start();
  }, [isFocused]);

  const borderColor = focusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.border, colors.primary],
  });

  const backgroundColor = focusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.surfaceSolid, colors.background],
  });

  return (
    <View style={pu.fieldContainer}>
      <Text style={pu.fieldLabel}>EXTRA METER {index + 2}</Text>
      <Animated.View style={[pu.amountInputWrap, { borderColor, backgroundColor }]}>
        <TextInput
          style={[pu.amountInput, { left: 24, fontSize: 16, fontFamily: PS_600 }]}
          value={value}
          onChangeText={onChangeText}
          placeholder="Enter meter number"
          placeholderTextColor="#D8DADC"
          keyboardType="numeric"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <View style={[pu.amountSuffix, { top: 12 }]}>
          <Image source={logoSource} style={{ width: 68, height: 40 }} resizeMode="contain" />
        </View>
      </Animated.View>
    </View>
  );
}

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
  const [isFocused, setIsFocused] = useState(false);
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused ? 1 : 0,
      duration: 180,
      useNativeDriver: false,
    }).start();
  }, [isFocused]);

  const borderBottomColor = focusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.border, colors.primary],
  });

  return (
    <View style={pu.fieldContainer}>
      <Text style={pu.fieldLabel}>{label}</Text>
      <Animated.View style={[pu.underlineRow, { borderBottomColor }]}>
        <TextInput style={pu.underlineInput} value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor="#D8DADC" keyboardType={keyboardType ?? 'default'} autoCapitalize="none" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
        {rightIcon && <View style={pu.underlineIcon}>{rightIcon}</View>}
      </Animated.View>
    </View>
  );
}

// ─── Main screen ──────────────────────────────────────────────────────────────

export default function PurchaseUnitScreen() {
  const router = useRouter();
  const { colors, isDark } = useTheme();
  const activeLogo = isDark ? darkLogoImg : logoImg;
  const pu = getStyles(colors);
  const [amount, setAmount] = useState('');
  const [meterNo, setMeterNo] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [extraMeters, setExtraMeters] = useState<string[]>([]);

  const [amountFocused, setAmountFocused] = useState(false);
  const amountFocusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(amountFocusAnim, {
      toValue: amountFocused ? 1 : 0,
      duration: 180,
      useNativeDriver: false,
    }).start();
  }, [amountFocused]);

  const amountBorderColor = amountFocusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.border, colors.primary],
  });

  const amountBackgroundColor = amountFocusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.surfaceSolid, colors.background],
  });

  const [meterFocused, setMeterFocused] = useState(false);
  const meterFocusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(meterFocusAnim, {
      toValue: meterFocused ? 1 : 0,
      duration: 180,
      useNativeDriver: false,
    }).start();
  }, [meterFocused]);

  const meterBorderColor = meterFocusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.border, colors.primary],
  });

  const meterBackgroundColor = meterFocusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.surfaceSolid, colors.background],
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={pu.screen}>
          {/* Back Button Container */}
          <InteractiveButton onPress={() => router.back()} style={pu.backBtnContainer}>
            <IconArrowLeft size={24} color={isDark ? "white" : "black"} />
          </InteractiveButton>

          <ScrollView style={{ flex: 1 }} contentContainerStyle={[pu.scrollContent, { flexGrow: 1, justifyContent: 'space-between', maxWidth: 600, width: '100%', alignSelf: 'center' }]} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
            <View style={{ gap: 24 }}>
              <Text style={pu.screenTitle}>Purchase Units</Text>

              {/* Meter input with rounded border */}
              <View style={pu.fieldContainer}>
                <View style={pu.fieldLabelRow}>
                  <Text style={pu.fieldLabel}>METER/CUSTOMER NUMBER</Text>
                  <InteractiveButton onPress={() => setExtraMeters((v) => [...v, ''])} activeScale={0.96}>
                    <Text style={pu.addAnotherText}>+ Add Another</Text>
                  </InteractiveButton>
                </View>
                <Animated.View style={[pu.amountInputWrap, { borderColor: meterBorderColor, backgroundColor: meterBackgroundColor }]}>
                  <TextInput
                    style={[pu.amountInput, { left: 24, fontSize: 16, fontFamily: PS_600 }]}
                    value={meterNo}
                    onChangeText={setMeterNo}
                    placeholder="Enter meter number"
                    placeholderTextColor="#D8DADC"
                    keyboardType="numeric"
                    onFocus={() => setMeterFocused(true)}
                    onBlur={() => setMeterFocused(false)}
                  />
                  <View style={[pu.amountSuffix, { top: 12 }]}>
                    <Image source={activeLogo} style={{ width: 68, height: 40 }} resizeMode="contain" />
                  </View>
                </Animated.View>
              </View>

              {extraMeters.map((m, i) => (
                <ExtraMeterField
                  key={i}
                  index={i}
                  value={m}
                  onChangeText={(v) => {
                    const next = [...extraMeters];
                    next[i] = v;
                    setExtraMeters(next);
                  }}
                  colors={colors}
                  logoSource={activeLogo}
                />
              ))}

              {/* Amount input */}
              <View style={pu.amountSection}>
                <Text style={pu.amountLabel}>ENTER AMOUNT</Text>
                <Animated.View style={[pu.amountInputWrap, { borderColor: amountBorderColor, backgroundColor: amountBackgroundColor }]}>
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
                    onFocus={() => setAmountFocused(true)}
                    onBlur={() => setAmountFocused(false)}
                  />
                  <View style={[pu.amountSuffix, { top: 20 }]}>
                    <Image source={marginIcon} style={{ width: 24, height: 24, tintColor: '#F70003' }} resizeMode="contain" />
                  </View>
                </Animated.View>

                {/* Quick amounts */}
                <View style={pu.quickAmounts}>
                  {QUICK_AMOUNTS.map((q) => {
                    const numVal = q.replace(/[₦,]/g, '');
                    const isActive = amount === numVal;
                    return (
                      <InteractiveButton
                        key={q}
                        style={[
                          pu.quickBtn,
                          isActive ? pu.quickBtnActive : pu.quickBtnInactive
                        ]}
                        onPress={() => setAmount(numVal)}
                        activeScale={0.94}
                      >
                        <Text style={[
                          pu.quickBtnText,
                          isActive ? pu.quickBtnTextActive : pu.quickBtnTextInactive
                        ]}>{q}</Text>
                      </InteractiveButton>
                    );
                  })}
                </View>
              </View>

              {/* Form card */}
              <View style={pu.formCard}>
                <Text style={pu.receiptTitle}>RECEIPT INFORMATION</Text>

                <UnderlineInput
                  label="PHONE NUMBER"
                  value={phone}
                  onChangeText={setPhone}
                  placeholder="080 0000 0000"
                  keyboardType="phone-pad"
                  rightIcon={<Image source={callIcon} style={{ width: 18, height: 18, tintColor: '#F70003' }} resizeMode="contain" />}
                />
                <UnderlineInput
                  label="EMAIL"
                  value={email}
                  onChangeText={setEmail}
                  placeholder="user@example.com"
                  keyboardType="email-address"
                  rightIcon={<Image source={smsIcon} style={{ width: 18, height: 18, tintColor: '#F70003' }} resizeMode="contain" />}
                />
              </View>
            </View>

            <View style={{ marginTop: 24 }}>
              <InteractiveButton style={pu.submitBtn} onPress={() => router.push('/confirm-details')}>
                <Text style={pu.submitText}>Continue</Text>
                <IconArrowRight size={12} color="white" />
              </InteractiveButton>
              <Text style={pu.footerText}>Your token will be sent to the provided contacts.</Text>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const getStyles = (colors: ThemeColors) => StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, position: 'relative', overflow: 'hidden' },
  backBtnContainer: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center', marginLeft: 16, marginTop: 12 },
  screenTitle: { fontFamily: PS_700, fontSize: 24, color: '#F70003', lineHeight: 32, paddingHorizontal: 4 },
  scrollContent: { paddingHorizontal: 24, paddingTop: 16, paddingBottom: 48, gap: 24 },
  amountSection: { gap: 16 },
  amountLabel: { fontFamily: PS_600, fontSize: 12, color: colors.textSub, letterSpacing: 0.6, lineHeight: 16, textTransform: 'uppercase', paddingLeft: 4 },
  amountInputWrap: { height: INPUT_H, borderRadius: 32, backgroundColor: colors.surfaceSolid, borderWidth: 1, borderColor: colors.border, position: 'relative', overflow: 'hidden' },
  amountPrefix: { position: 'absolute', left: 24 },
  amountPrefixText: { fontFamily: PS_700, fontSize: 24, color: colors.textMain, lineHeight: 28 },
  amountInput: { position: 'absolute', left: 48, right: 56, top: 0, bottom: 0, fontFamily: PS_700, fontSize: 24, color: colors.textMain, textAlign: 'left' },
  amountSuffix: { position: 'absolute', right: 24 },
  quickAmounts: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  quickBtn: { borderRadius: 9999, paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1 },
  quickBtnActive: { borderColor: '#F70003', backgroundColor: 'rgba(247,0,3,0.04)' },
  quickBtnInactive: { borderColor: colors.border, backgroundColor: 'transparent' },
  quickBtnText: { fontFamily: PS_600, fontSize: 13, lineHeight: 16 },
  quickBtnTextActive: { color: '#F70003' },
  quickBtnTextInactive: { color: colors.textSub },
  formCard: { backgroundColor: colors.surfaceAlt, borderRadius: 32, padding: 24, gap: 24, borderWidth: 1, borderColor: colors.borderLight },
  receiptTitle: { fontFamily: PS_700, fontSize: 13, color: '#F70003', letterSpacing: 0.6, lineHeight: 18, textTransform: 'uppercase', marginBottom: 8 },
  fieldContainer: { gap: 8 },
  fieldLabelRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 4 },
  fieldLabel: { fontFamily: PS_600, fontSize: 12, color: colors.textSub, letterSpacing: 0.6, lineHeight: 16, textTransform: 'uppercase' },
  addAnotherText: { fontFamily: PS_600, fontSize: 12, color: '#F70003', lineHeight: 16 },
  underlineRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 9, borderBottomWidth: 1, borderBottomColor: colors.border },
  underlineInput: { flex: 1, fontFamily: PS_400, fontSize: 16, color: colors.textMain, lineHeight: 20 },
  underlineIcon: { width: 20, height: 20, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  submitBtn: { backgroundColor: '#F70003', borderRadius: 32, height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 },
  submitText: { fontFamily: PS_600, fontSize: 18, color: '#FFFFFF', lineHeight: 28, textAlign: 'center' },
  footerText: { fontFamily: PS_400, fontSize: 13, color: colors.textSub, textAlign: 'center', marginTop: 16 },
});
