/**
 * Shared form-field component + icon set used by LoginScreen and SignupScreen.
 * Icons are inline SVG for web preview — replace with react-native-svg in RN.
 */
import React from "react";
import { View, TouchableOpacity, TextInput } from "./rnShims";
import { shared } from "./sharedStyles";

// ─── Icon components (web SVG — swap for react-native-svg paths in RN) ────────

export function IconProfile({ color = "#F70003", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="6.5" r="3.5" stroke={color} strokeWidth="1.5" />
      <path d="M3.5 18c0-3.9 3.6-7 6.5-7s6.5 3.1 6.5 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconUser({ color = "#F70003", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="6.5" r="3.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 18c0-3.9 3.6-7 6.5-7s6.5 3.1 6.5 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLock({ color = "#F70003", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M6.5 9V6.5a3.5 3.5 0 017 0V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3.5" y="9" width="13" height="10" rx="2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 13v2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconEye({ color = "#94A3B8", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M2 10S5 4 10 4s8 6 8 6-3 6-8 6-8-6-8-6z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="10" r="2.5" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function IconPhone({ color = "#F70003", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M13.5 14.8c-.9.9-2.1 1.2-3.2.7-1-.4-1.9-1-2.7-1.8L5.4 11.5C4.6 10.7 4 9.8 3.6 8.8c-.5-1-.3-2.2.6-3.1l.9-.9 3.1 3.1-.8.8c-.3.3-.3.7 0 1l1.8 1.8c.3.3.7.3 1 0l.8-.8 3.1 3.1-.6.0z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconSms({ color = "#F70003", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M2.5 4.5h15a1 1 0 011 1v9a1 1 0 01-1 1h-15a1 1 0 01-1-1v-9a1 1 0 011-1z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
      <path d="M2.5 5l7.5 5.5L17.5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
    </svg>
  );
}

export function IconChevronDown({ color = "#94A3B8", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M5 7.5l5 5 5-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
    </svg>
  );
}

export function IconCalculator({ color = "#F70003", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M5 2h10a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 6.5h6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.78 11.67h.01M10 11.67h.01M13.21 11.67h.01M6.78 14.58h.01M10 14.58h.01M13.21 14.58h.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowLeft({ size = 24, color = "#010101" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M19 12H5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19L5 12L12 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── FormField component ──────────────────────────────────────────────────────

interface FormFieldProps {
  icon?: React.ReactNode;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  showToggle?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  rightElement?: React.ReactNode;
  keyboardType?: string;
}

export function FormField({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  showToggle,
  showPassword,
  onTogglePassword,
  rightElement,
  keyboardType,
}: FormFieldProps) {
  return (
    <View style={shared.inputWrapper}>
      <View style={shared.inputRow}>
        {icon != null && (
          <View style={{ width: 20, height: 20, flexShrink: 0, alignItems: "center", justifyContent: "center" }}>
            {icon}
          </View>
        )}
        <TextInput
          style={shared.inputText}
          placeholder={placeholder}
          placeholderTextColor="rgba(21,20,20,0.4)"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={keyboardType}
        />
        {showToggle && (
          <TouchableOpacity
            onPress={onTogglePassword}
            activeOpacity={0.7}
            style={{ width: 20, height: 20, flexShrink: 0, alignItems: "center", justifyContent: "center" }}
          >
            <IconEye />
          </TouchableOpacity>
        )}
        {rightElement}
      </View>
    </View>
  );
}
