/**
 * Shared form-field component and icon wrappers used by auth screens.
 * Icons are sourced from the central icons.tsx; all web SVG refs removed.
 */
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Animated,
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

import { useTheme } from '@/context/ThemeContext';

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
  const { colors, isDark } = useTheme();
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
    outputRange: [
      isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0,0,0,0.15)',
      colors.primary,
    ],
  });

  const backgroundColor = focusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [
      isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(128,128,128,0.03)',
      isDark ? '#000000' : '#FFFFFF',
    ],
  });

  return (
    <Animated.View style={[shared.inputWrapper, { borderColor, backgroundColor }]}>
      <View style={shared.inputRow}>
        {icon != null && (
          <View style={ff.iconWrap}>{icon}</View>
        )}
        <TextInput
          style={[shared.inputText, { color: colors.textMain }]}
          placeholder={placeholder}
          placeholderTextColor={isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(21,20,20,0.4)'}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={keyboardType ?? 'default'}
          autoCapitalize="none"
          autoCorrect={false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {showToggle && (
          <TouchableOpacity
            onPress={onTogglePassword}
            activeOpacity={0.7}
            style={ff.iconWrap}
            accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <IconEye color={isDark ? '#A0A0A0' : '#94A3B8'} />
            ) : (
              <IconEyeSlash color={colors.primary} />
            )}
          </TouchableOpacity>
        )}
        {rightElement}
      </View>
    </Animated.View>
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

// ─── Interactive pressable button wrapper ──────────────────────────────────────

export function InteractiveButton({
  onPress,
  style,
  children,
  activeScale = 0.96,
}: {
  onPress: () => void;
  style?: any;
  children: React.ReactNode;
  activeScale?: number;
}) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.timing(scale, {
      toValue: activeScale,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const flatStyle = StyleSheet.flatten(style) || {};
  const wrapperStyle: any = { transform: [{ scale }] };
  const innerStyle: any = {};

  Object.keys(flatStyle).forEach((key) => {
    if (
      key === 'position' ||
      key === 'top' ||
      key === 'left' ||
      key === 'right' ||
      key === 'bottom' ||
      key === 'zIndex' ||
      key === 'flex' ||
      key === 'alignSelf'
    ) {
      wrapperStyle[key] = flatStyle[key];
    } else {
      innerStyle[key] = flatStyle[key];
    }
  });

  const defaultAlign: any = {};
  if (!flatStyle.flexDirection) {
    defaultAlign.alignItems = 'center';
    defaultAlign.justifyContent = 'center';
  } else {
    if (flatStyle.alignItems === undefined) {
      defaultAlign.alignItems = 'center';
    }
  }

  return (
    <Animated.View style={wrapperStyle}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
        style={[{ width: '100%' }, defaultAlign, innerStyle]}
      >
        {children}
      </TouchableOpacity>
    </Animated.View>
  );
}
