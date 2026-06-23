/**
 * SignupScreen — React Native / Expo Router.
 * All web-only imports and shims removed; uses real react-native primitives.
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  FormField,
  IconPhone,
  IconUser,
  IconSms,
  IconChevronDown,
  IconCalculator,
  IconLock,
  IconArrowLeft,
  InteractiveButton,
} from '@/components/FormField';
import { shared } from '@/components/sharedStyles';
import { PS_400, PS_600, POP_400, POP_600 } from '@/components/fonts';
import { useTheme } from '@/context/ThemeContext';

const PROVIDERS = ['AEDC', 'EEDC', 'IBEDC', 'EKEDC', 'KEDCO', 'JEDC', 'BEDC'];

/** Signup screen — creates a new user account. */
export default function SignupScreen() {
  const router = useRouter();
  const { colors, isDark } = useTheme();
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [provider, setProvider] = useState('');
  const [showProviderList, setShowProviderList] = useState(false);
  const [meterNumber, setMeterNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={[ss.screen, { backgroundColor: colors.background }]}>
          <InteractiveButton
            style={ss.backBtn}
            onPress={() => router.back()}
            activeScale={0.9}
          >
            <IconArrowLeft size={24} color={colors.textMain} />
          </InteractiveButton>

          <ScrollView
            style={ss.scroll}
            contentContainerStyle={[
              ss.scrollContent,
              {
                flexGrow: 1,
                justifyContent: "space-between",
                maxWidth: 600,
                width: "100%",
                alignSelf: "center",
              },
            ]}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View>
              <Text style={[ss.title, { color: colors.textMain }]}>Create an Account</Text>

              <View style={ss.form}>
                <FormField
                  icon={<IconPhone />}
                  placeholder="Phone Number"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
                <FormField
                  icon={<IconUser />}
                  placeholder="Full Name"
                  value={fullName}
                  onChangeText={setFullName}
                />
                <FormField
                  icon={<IconSms />}
                  placeholder="Email (optional)"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />

                {/* Provider selector */}
                <View>
                  <TouchableOpacity
                    style={[
                      shared.inputWrapper,
                      {
                        borderColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0,0,0,0.15)',
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(128,128,128,0.03)',
                      }
                    ]}
                    onPress={() => setShowProviderList((v) => !v)}
                    activeOpacity={0.7}
                  >
                    <View style={[shared.inputRow, ss.providerRow]}>
                      <Text
                        style={[
                          shared.inputText,
                          { color: provider ? colors.textMain : (isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(21,20,20,0.4)') }
                        ]}
                      >
                        {provider || "Select Provider"}
                      </Text>
                      <View style={ss.chevronWrap}>
                        <IconChevronDown color={isDark ? '#A0A0A0' : '#94A3B8'} />
                      </View>
                    </View>
                  </TouchableOpacity>

                  {showProviderList && (
                    <View style={[ss.providerList, { backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF', borderColor: colors.border }]}>
                      {PROVIDERS.map((p) => (
                        <TouchableOpacity
                          key={p}
                          style={[ss.providerItem, { borderBottomColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }]}
                          onPress={() => {
                            setProvider(p);
                            setShowProviderList(false);
                          }}
                          activeOpacity={0.7}
                        >
                          <Text style={[ss.providerItemText, { color: colors.textMain }]}>{p}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </View>

                <FormField
                  icon={<IconCalculator />}
                  placeholder="Meter Number"
                  value={meterNumber}
                  onChangeText={setMeterNumber}
                  keyboardType="numeric"
                />
                <FormField
                  icon={<IconLock />}
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  showToggle
                  showPassword={showPassword}
                  onTogglePassword={() => setShowPassword((v) => !v)}
                />
                <FormField
                  icon={<IconLock />}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                  showToggle
                  showPassword={showConfirm}
                  onTogglePassword={() => setShowConfirm((v) => !v)}
                />
              </View>
            </View>

            <View style={ss.actions}>
              <InteractiveButton
                style={[shared.primaryBtn, { alignSelf: "stretch", backgroundColor: colors.primary }]}
                onPress={() => router.replace("/dashboard")}
                activeScale={0.96}
              >
                <Text style={shared.primaryBtnText}>Sign up</Text>
              </InteractiveButton>

              <TouchableOpacity
                style={shared.authLinkRow}
                onPress={() => router.push("/login")}
                activeOpacity={0.7}
              >
                <Text style={[shared.authLinkNormal, { color: colors.textSub }]}>
                  {"Already have an account? "}
                </Text>
                <Text style={[shared.authLinkBold, { color: colors.primary }]}>Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const ss = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F8F9FA', position: 'relative', overflow: 'hidden' },
  backBtn: { position: 'absolute', left: 24, top: 32, width: 24, height: 24, zIndex: 10, alignItems: 'center', justifyContent: 'center' },
  scroll: { flex: 1 },
  scrollContent: { paddingTop: 80, paddingHorizontal: 24, paddingBottom: 48 },
  title: { fontFamily: PS_600, fontSize: 36, color: '#373737', lineHeight: 48 },
  form: { marginTop: 44, gap: 16 },
  providerRow: { justifyContent: 'space-between' },
  chevronWrap: { width: 20, height: 20, flexShrink: 0, alignItems: 'center', justifyContent: 'center' },
  selectedText: { color: 'rgba(21,20,20,1)' },
  providerList: { marginTop: 4, borderRadius: 16, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: 'rgba(0,0,0,0.1)', overflow: 'hidden', zIndex: 20 },
  providerItem: { paddingHorizontal: 20, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.06)' },
  providerItemText: { fontFamily: PS_400, fontSize: 15, color: '#1B0000' },
  actions: { marginTop: 28, gap: 20, alignItems: 'center' },
});
