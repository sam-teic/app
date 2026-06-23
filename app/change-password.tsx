import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconArrowLeft, IconEye, IconEyeSlash, IconCheckCircle } from '@/components/icons';
import { PS_400, PS_600 } from '@/components/fonts';
import { useTheme } from '@/context/ThemeContext';
import { ThemeColors } from '@/constants/theme';
import { InteractiveButton } from '@/components/FormField';

// ─── Password field ───────────────────────────────────────────────────────────

/**
 * Labelled password input with eye toggle.
 * Eye button positioned at top:19 (= (58px pillInput - 20px icon) / 2)
 * instead of top:"50%" + translateY:-10.
 */
function PasswordField({ label, value, onChangeText, showPassword, onToggle }: {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  showPassword: boolean;
  onToggle: () => void;
}) {
  const { colors } = useTheme();
  const cp = getStyles(colors);
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
    <View style={cp.fieldWrap}>
      <Text style={cp.fieldLabel}>{label}</Text>
      <View style={cp.inputRow}>
        <Animated.View style={[cp.pillInput, { borderColor, backgroundColor }]}>
          <TextInput
            style={cp.pillText}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={!showPassword}
            placeholder="••••••••"
            placeholderTextColor="#6b7280"
            autoCapitalize="none"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </Animated.View>
        <TouchableOpacity style={cp.eyeBtn} onPress={onToggle} activeOpacity={0.7} accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}>
          {showPassword ? <IconEye color={colors.primary} /> : <IconEyeSlash color={colors.primary} />}
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ─── Main screen ──────────────────────────────────────────────────────────────

/** Change password screen with live requirement validation. */
export default function ChangePasswordScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const cp = getStyles(colors);
  const [current, setCurrent] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const has8Chars = newPwd.length >= 8;
  const hasNumber = /\d/.test(newPwd);
  const hasSpecial = /[!@#$]/.test(newPwd);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={cp.screen}>
        <View style={cp.header}>
          <InteractiveButton onPress={() => router.back()} style={cp.backBtn}>
            <IconArrowLeft size={24} color={colors.primary} />
          </InteractiveButton>
          <Text style={cp.headerTitle}>Change Password</Text>
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={[cp.scrollContent, { flexGrow: 1, justifyContent: 'space-between', maxWidth: 600, width: '100%', alignSelf: 'center' }]} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <View>
            <View style={cp.formSection}>
            <PasswordField label="CURRENT PASSWORD" value={current} onChangeText={setCurrent} showPassword={showCurrent} onToggle={() => setShowCurrent((v) => !v)} />
            <PasswordField label="NEW PASSWORD" value={newPwd} onChangeText={setNewPwd} showPassword={showNew} onToggle={() => setShowNew((v) => !v)} />
            <View style={cp.fieldWrap}>
              <PasswordField label="CONFIRM NEW PASSWORD" value={confirm} onChangeText={setConfirm} showPassword={showConfirm} onToggle={() => setShowConfirm((v) => !v)} />
            </View>

            {/* Requirements */}
            <View style={cp.requirements}>
              <Text style={cp.reqHeader}>Your password must include:</Text>
              <View style={cp.reqRow}><IconCheckCircle met={has8Chars} /><Text style={[cp.reqText, has8Chars && cp.reqTextMet]}>At least 8 characters</Text></View>
              <View style={cp.reqRow}><IconCheckCircle met={hasNumber} /><Text style={[cp.reqText, hasNumber && cp.reqTextMet]}>At least one number (0-9)</Text></View>
              <View style={cp.reqRow}><IconCheckCircle met={hasSpecial} /><Text style={[cp.reqText, hasSpecial && cp.reqTextMet]}>One special character (!@#$)</Text></View>
            </View>
          </View>
          </View>

          <View style={cp.actionSection}>
            <InteractiveButton style={cp.updateBtn} onPress={() => router.replace('/dashboard')}>
              <View style={cp.updateBtnShadow} />
              <Text style={cp.updateBtnText}>Update Password</Text>
            </InteractiveButton>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const getStyles = (colors: ThemeColors) => StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, position: 'relative', overflow: 'hidden' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 24, paddingVertical: 16, zIndex: 10 },
  backBtn: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  headerTitle: { fontFamily: PS_600, fontSize: 20, color: colors.textMain, lineHeight: 32, flex: 1 },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 48, gap: 32 },
  formSection: { gap: 16 },
  fieldWrap: { gap: 8, paddingBottom: 24 },
  fieldLabel: { fontFamily: PS_600, fontSize: 12, color: colors.textSub, letterSpacing: 0.6, lineHeight: 16, textTransform: 'uppercase' },
  inputRow: { flexDirection: 'row', alignItems: 'center', position: 'relative' },
  pillInput: { flex: 1, backgroundColor: colors.surfaceSolid, borderRadius: 32, paddingLeft: 25, paddingRight: 49, paddingVertical: 17, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  pillText: { fontFamily: PS_400, fontSize: 16, color: colors.textMain, lineHeight: 24 },
  eyeBtn: { position: 'absolute', right: 24, top: 19, width: 20, height: 20, alignItems: 'center', justifyContent: 'center' },
  requirements: { gap: 8, paddingTop: 8 },
  reqHeader: { fontFamily: PS_600, fontSize: 12, color: colors.textSub, letterSpacing: 0.6, lineHeight: 16 },
  reqRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  reqText: { fontFamily: PS_400, fontSize: 14, color: colors.textSub, lineHeight: 20 },
  reqTextMet: { color: colors.textMain },
  actionSection: { paddingVertical: 16 },
  updateBtn: { backgroundColor: colors.primary, borderRadius: 32, height: 54, alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' },
  updateBtnShadow: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: 32 },
  updateBtnText: { fontFamily: PS_600, fontSize: 20, color: '#FFFFFF', lineHeight: 28 },
});
