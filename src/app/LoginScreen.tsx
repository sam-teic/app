/**
 * LoginScreen — React Native component.
 * In RN: remove the rnShims import and use react-native primitives directly.
 */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StatusBar, StyleSheet, SW, SH } from "./rnShims";
import { shared } from "./sharedStyles";
import { FormField, IconProfile, IconLock, IconArrowLeft } from "./FormField";

interface LoginScreenProps {
  onLogin?: () => void;
  onSignup?: () => void;
  onBack?: () => void;
}

export default function LoginScreen({ onLogin, onSignup, onBack }: LoginScreenProps) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={ls.screen}>
      <StatusBar />

      {/* Back arrow — absolute so it stays above the scroll */}
      <TouchableOpacity style={ls.backBtn} onPress={onBack} activeOpacity={0.7}>
        <IconArrowLeft size={24} />
      </TouchableOpacity>

      <ScrollView
        style={ls.scroll}
        contentContainerStyle={ls.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={ls.title}>Welcome Back!</Text>

        {/* Form fields */}
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

        {/* Actions */}
        <View style={ls.actions}>
          <TouchableOpacity style={shared.primaryBtn} onPress={onLogin} activeOpacity={0.85}>
            <Text style={shared.primaryBtnText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={shared.authLinkRow} onPress={onSignup} activeOpacity={0.7}>
            <Text style={shared.authLinkNormal}>{"Don't have an account? "}</Text>
            <Text style={shared.authLinkBold}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const ls = StyleSheet.create({
  screen: {
    width: SW,
    height: SH,
    backgroundColor: "#F8F9FA",
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
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 128,
    paddingHorizontal: 24,
    paddingBottom: 48,
  },
  title: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 36,
    color: "#373737",
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
    alignSelf: "flex-end",
  },
  forgotText: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 14,
    color: "#F70003",
  },
  actions: {
    marginTop: 28,
    gap: 20,
    alignItems: "center",
  },
});
