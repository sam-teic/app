/**
 * Shared form-field component and icon wrappers used by auth screens.
 * Icons are sourced from the central icons.tsx; all web SVG refs removed.
 */
import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { shared } from './sharedStyles';
import {
  IconProfile,
  IconUser,
  IconLock,
  IconEye,
  IconEyeSlash,
  IconPhone,
  IconSms,
  IconChevronDown,
  IconCalculator,
  IconArrowLeft,
} from './icons';

// Re-export all icons so existing import sites keep working.
export {
  IconProfile,
  IconUser,
  IconLock,
  IconPhone,
  IconSms,
  IconChevronDown,
  IconCalculator,
  IconArrowLeft,
};

// ─── FormField component ──────────────────────────────────────────────────────

interface FormFieldProps {
  /** Leading icon rendered on the left of the input. */
  icon?: React.ReactNode;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  /** When true, an eye-toggle button is shown on the right. */
  showToggle?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  rightElement?: React.ReactNode;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

/**
 * Reusable pill-shaped form input with optional leading icon and
 * password visibility toggle.
 */
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
          <View style={ff.iconWrap}>{icon}</View>
        )}
        <TextInput
          style={shared.inputText}
          placeholder={placeholder}
          placeholderTextColor="rgba(21,20,20,0.4)"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={keyboardType ?? 'default'}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {showToggle && (
          <TouchableOpacity
            onPress={onTogglePassword}
            activeOpacity={0.7}
            style={ff.iconWrap}
            accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <IconEye /> : <IconEyeSlash />}
          </TouchableOpacity>
        )}
        {rightElement}
      </View>
    </View>
  );
}

const ff = StyleSheet.create({
  iconWrap: {
    width: 20,
    height: 20,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
