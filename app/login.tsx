/**
 * LoginScreen — React Native / Expo Router.
 * Uses real react-native primitives (no rnShims).
 * Navigation via useRouter() instead of callback props.
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FormField, IconArrowLeft, IconProfile, IconLock } from '@/components/FormField';
import { shared } from '@/components/sharedStyles';
import { PS_600, POP_500 } from '@/components/fonts';

/** Login screen with phone/email + password fields. */
export default function LoginScreen() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F9FA' }}>
      <View style={ls.screen}>
        {/* Back arrow */}
        <TouchableOpacity style={ls.backBtn} onPress={() => router.back()} activeOpacity={0.7}>
          <IconArrowLeft size={24} color="#F70003" />
        </TouchableOpacity>

        <ScrollView
          style={ls.scroll}
          contentContainerStyle={[ls.scrollContent, { flexGrow: 1, justifyContent: 'space-between', maxWidth: 600, width: '100%', alignSelf: 'center' }]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <Text style={ls.title}>Welcome Back!</Text>

            <View style={ls.form}>
            <FormField
              icon={<IconProfile />}
              placeholder="Phone Number or Email"
              value={identifier}
              onChangeText={setIdentifier}
              keyboardType="email-address"
            />

            <View style={ls.passwordGroup}>
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
              <TouchableOpacity style={ls.forgotRow} onPress={() => {}} activeOpacity={0.7}>
                <Text style={ls.forgotText}>Forgot Your Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>

          <View style={ls.actions}>
            <TouchableOpacity
              style={[shared.primaryBtn, { alignSelf: 'stretch' }]}
              onPress={() => router.replace('/dashboard')}
              activeOpacity={0.85}
            >
              <Text style={shared.primaryBtnText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={shared.authLinkRow} onPress={() => router.push('/signup')} activeOpacity={0.7}>
              <Text style={shared.authLinkNormal}>{"Don't have an account? "}</Text>
              <Text style={shared.authLinkBold}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const ls = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    position: 'relative',
    overflow: 'hidden',
  },
  backBtn: {
    position: 'absolute',
    left: 24,
    top: 32,
    width: 24,
    height: 24,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: { flex: 1 },
  scrollContent: {
    paddingTop: 80,
    paddingHorizontal: 24,
    paddingBottom: 48,
  },
  title: {
    fontFamily: PS_600,
    fontSize: 36,
    color: '#373737',
    lineHeight: 48,
  },
  form: {
    marginTop: 44,
    gap: 16,
  },
  passwordGroup: {
    gap: 10,
  },
  forgotRow: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    fontFamily: POP_500,
    fontSize: 14,
    color: '#F70003',
  },
  actions: {
    marginTop: 28,
    gap: 20,
    alignItems: 'center',
  },
});
