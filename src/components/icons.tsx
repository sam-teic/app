/**
 * Centralised icon components using react-native-svg.
 * Every inline <svg> from the web prototype is represented here.
 * Each component accepts optional `color` and `size` props so they
 * can be used across all screens without duplication.
 */
import React from 'react';
import { Image } from 'react-native';

const walletPng = require('@/assets/icons/wallet.png');
const cartPng = require('@/assets/icons/cart.png');
const createwalletPng = require('@/assets/icons/createwallet.png');
const flashPng = require('@/assets/icons/flash.png');
const sparkPng = require('@/assets/icons/spark.png');
const activePng = require('@/assets/icons/active.png');
import Svg, {
  Path,
  Circle,
  Rect,
  G,
  Line,
  Defs,
  RadialGradient,
  Stop,
} from 'react-native-svg';

// ─── Auth / form icons ────────────────────────────────────────────────────────

/** Person silhouette — used in login/signup identifier field. */
export function IconProfile({ color = '#F70003', size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Circle cx="10" cy="6.5" r="3.5" stroke={color} strokeWidth="1.5" />
      <Path d="M3.5 18c0-3.9 3.6-7 6.5-7s6.5 3.1 6.5 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  );
}

/** Person with round-corner strokes — used in signup full-name field. */
export function IconUser({ color = '#F70003', size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Circle cx="10" cy="6.5" r="3.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M3.5 18c0-3.9 3.6-7 6.5-7s6.5 3.1 6.5 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** Padlock outline — used in password fields. */
export function IconLock({ color = '#F70003', size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path d="M6.5 9V6.5a3.5 3.5 0 017 0V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Rect x="3.5" y="9" width="13" height="10" rx="2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M10 13v2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  );
}

/** Padlock filled — used in profile & confirm details. */
export function IconLockFilled({ color = '#F70003', size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size * 1.25} viewBox="0 0 16 20" fill="none">
      <Path
        d="M14 9H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1v-8a1 1 0 00-1-1zM5.5 9V6a2.5 2.5 0 015 0v3"
        fill={color}
      />
    </Svg>
  );
}

/** Small padlock filled — used inline in confirm-details. */
export function IconLockSmall({ color = '#F70003', size = 13 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size * 1.25} viewBox="0 0 13.33 16.67" fill="none">
      <Path
        d="M11.33 7.33H2a.67.67 0 00-.67.67v7.33a.67.67 0 00.67.67h9.33a.67.67 0 00.67-.67V8a.67.67 0 00-.67-.67zM4.33 7.33V5a2.67 2.67 0 015.34 0v2.33"
        fill={color}
      />
    </Svg>
  );
}

/** Open eye — show password. */
export function IconEye({ color = '#94A3B8', size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path d="M1.5 10S4.5 4 10 4s8.5 6 8.5 6-3 6-8.5 6-8.5-6-8.5-6z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Circle cx="10" cy="10" r="2.5" stroke={color} strokeWidth="1.5" />
    </Svg>
  );
}

/** Slashed eye — hide password. */
export function IconEyeSlash({ color = '#F70003', size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path d="M3 3l14 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <Path
        d="M8.4 8.4A2.5 2.5 0 0011.6 11.6M10 5C7 5 4.5 7.1 3.5 10c.4 1 1 1.9 1.8 2.7M12.7 12.7C13.9 11.9 14.8 11 15.5 10 14.5 7.1 12 5 10 5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/** Phone handset — phone number fields. */
export function IconPhone({ color = '#F70003', size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M13.5 14.8c-.9.9-2.1 1.2-3.2.7-1-.4-1.9-1-2.7-1.8L5.4 11.5C4.6 10.7 4 9.8 3.6 8.8c-.5-1-.3-2.2.6-3.1l.9-.9 3.1 3.1-.8.8c-.3.3-.3.7 0 1l1.8 1.8c.3.3.7.3 1 0l.8-.8 3.1 3.1-.6.6z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </Svg>
  );
}

/** Envelope / email icon. */
export function IconSms({ color = '#F70003', size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path d="M2.5 4.5h15a1 1 0 011 1v9a1 1 0 01-1 1h-15a1 1 0 01-1-1v-9a1 1 0 011-1z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
      <Path d="M2.5 5l7.5 5.5L17.5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
    </Svg>
  );
}

/** Filled envelope — used in purchase-unit email icon. */
export function IconEmailFilled({ color = '#F70003', size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size * 0.8} viewBox="0 0 20 16" fill="none">
      <Path d="M2.5 0.5h15a1 1 0 011 1v13a1 1 0 01-1 1h-15a1 1 0 01-1-1v-13a1 1 0 011-1z" fill={color} />
      <Path d="M2.5 1L10 7 17.5 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** Chevron pointing down — dropdown selectors. */
export function IconChevronDown({ color = '#94A3B8', size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path d="M5 7.5l5 5 5-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
    </Svg>
  );
}

/** Calculator / meter — meter-number fields. */
export function IconCalculator({ color = '#F70003', size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path d="M5 2h10a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M7 6.5h6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M6.78 11.67h.01M10 11.67h.01M13.21 11.67h.01M6.78 14.58h.01M10 14.58h.01M13.21 14.58h.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** Left arrow — back buttons. */
export function IconArrowLeft({ size = 24, color = '#010101' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M19 12H5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M12 19L5 12L12 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** Right arrow — continue / submit buttons. */
export function IconArrowRight({ size = 12, color = 'white' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size * 1.6} viewBox="0 0 7.4 12" fill="none">
      <Path d="M1 1l5.5 5.5L1 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** Arrow pointing up — wallet top-up indicator. */
export function IconArrowUp({ color = '#F70003', size = 14 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path d="M7 11V3M3 7l4-4 4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

// ─── Navigation & layout icons ────────────────────────────────────────────────

/** Three horizontal bars — hamburger menu button. */
export function IconHamburger({ color = '#F70003' }: { color?: string }) {
  return (
    <Svg width={18} height={12} viewBox="0 0 18 12" fill="none">
      <Path d="M1 1h16M1 6h16M1 11h16" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}

/** X close button — quick-menu dismiss. */
export function IconX({ color = '#F70003' }: { color?: string }) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <Path d="M8 24L24 8M8 8L24 24" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
    </Svg>
  );
}

/** Plus sign — "add another" button. */
export function IconPlus({ size = 9, color = '#F70003' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 9 9" fill="none">
      <Path d="M4.5 1v7M1 4.5h7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  );
}

// ─── Financial / energy icons ─────────────────────────────────────────────────

/** Lightning bolt — electricity / purchase units. */
export function IconBolt({ color = '#FFFFFF', size = 20 }: { color?: string; size?: number }) {
  return (
    <Image
      source={flashPng}
      style={{ width: size, height: size, tintColor: color }}
      resizeMode="contain"
    />
  );
}

/** Naira currency symbol — amount input. */
export function IconNaira({ size = 22, color = '#F70003' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size * 0.73} viewBox="0 0 22 16" fill="none">
      <Path
        d="M3 2h3.5L16 14H19M3 14h3.5L16 2H19M1 6.5h20M1 9.5h20"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/** Wallet icon. */
export function IconWallet({ color = '#F70003', size = 22 }: { color?: string; size?: number }) {
  return (
    <Image
      source={walletPng}
      style={{ width: size, height: size, tintColor: color }}
      resizeMode="contain"
    />
  );
}

/** Small wallet — transaction history list. */
export function IconWalletSmall({ color = '#F70003', size = 14 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path d="M12 4H2a.67.67 0 00-.67.67v7.33A.67.67 0 002 12.67h10a.67.67 0 00.67-.67V4.67A.67.67 0 0012 4zM1.33 6.67H12.67M9.33 9.33h1.34" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M3.67 1.33H10" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </Svg>
  );
}

// ─── Menu / settings icons ────────────────────────────────────────────────────

/** Filled person icon — update profile menu item. */
export function IconUpdateProfile({ color = '#F70003' }: { color?: string }) {
  return (
    <Svg width={22} height={16} viewBox="0 0 22 16" fill="none">
      <Path d="M1 15c0-3.87 4.03-7 9-7s9 3.13 9 7M11 8a4 4 0 100-8 4 4 0 000 8z" fill={color} />
    </Svg>
  );
}

/** Padlock — change password menu item. */
export function IconChangePassword({ color = '#F70003' }: { color?: string }) {
  return (
    <Svg width={22} height={20} viewBox="0 0 22 20" fill="none">
      <Path
        d="M7 9V5.5a4 4 0 018 0V9M3 9h16a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8a1 1 0 011-1zM11 14v2"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/** Two people — referrals menu item. */
export function IconReferrals({ color = '#F70003' }: { color?: string }) {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      <Circle cx="8" cy="6" r="3.5" stroke={color} strokeWidth="1.8" />
      <Path d="M1.5 19c0-3.6 3-6.5 6.5-6.5s6.5 2.9 6.5 6.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <Circle cx="17" cy="5" r="2.5" stroke={color} strokeWidth="1.8" />
      <Path d="M14 14.5c.8-.3 1.9-.5 3-.5 2.5 0 4.5 1.8 4.5 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

/** Shield — privacy policy menu item. */
export function IconPrivacyPolicy({ color = '#F70003' }: { color?: string }) {
  return (
    <Svg width={22} height={20} viewBox="0 0 22 20" fill="none">
      <Path d="M11 1L2 5v5c0 5.25 3.8 10.15 9 11 5.2-.85 9-5.75 9-11V5L11 1z" fill={color} />
    </Svg>
  );
}

/** Door with arrow — logout. */
export function IconLogout({ color = '#F70003' }: { color?: string }) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
      <Path
        d="M7 17H3a2 2 0 01-2-2V3a2 2 0 012-2h4M12 13l4-4-4-4M16 9H7"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/** Sun — light theme selector. */
export function IconSun({ color = '#F70003' }: { color?: string }) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16.5 16.5" fill="none">
      <Circle cx="8.25" cy="8.25" r="3" fill={color} />
      <Path
        d="M8.25 1v1.5M8.25 14v1.5M1 8.25h1.5M14 8.25h1.5M3.2 3.2l1.06 1.06M11.24 11.24l1.06 1.06M3.2 13.3l1.06-1.06M11.24 5.26l1.06-1.06"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
}

/** Crescent moon — dark theme selector. */
export function IconMoon({ color = '#5F5E5E' }: { color?: string }) {
  return (
    <Svg width={13} height={13} viewBox="0 0 13.5 13.5" fill="none">
      <Path d="M12 8.5A6.5 6.5 0 015 1.5a6.5 6.5 0 100 11.5A6.5 6.5 0 0012 8.5z" fill={color} />
    </Svg>
  );
}

/** Monitor — system theme selector. */
export function IconSystem({ color = '#5F5E5E' }: { color?: string }) {
  return (
    <Svg width={15} height={12} viewBox="0 0 15 12" fill="none">
      <Rect x="1" y="1" width="13" height="9" rx="1.5" fill={color} />
      <Path d="M5 11h5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  );
}

// ─── Transaction & history icons ──────────────────────────────────────────────

/** Magnifying glass — search input. */
export function IconSearch({ color = '#F70003', size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Circle cx="9" cy="9" r="6" stroke={color} strokeWidth="1.5" />
      <Path d="M13.5 13.5L17 17" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  );
}

/** Horizontal lines descending — sort button. */
export function IconSort({ color = 'white', size = 16 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path d="M2 4.67H14M4 8h8M6.67 11.33H9.33" stroke={color} strokeLinecap="round" strokeWidth="1.2" />
    </Svg>
  );
}

/** Funnel — filter button. */
export function IconFilter({ color = 'white', size = 16 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path d="M2 3h12M4 8h8M6 13h4" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </Svg>
  );
}

/** Clock circle — transaction history in quick-menu. */
export function IconHistory({ color = 'white', size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Circle cx="10" cy="10" r="8" stroke={color} strokeWidth="1.67" />
      <Path d="M10 6v4l3 2" stroke={color} strokeWidth="1.67" strokeLinecap="round" />
    </Svg>
  );
}

/** Circular arrow — refresh / process pending. */
export function IconRefresh({ color = 'white', size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path d="M3.3 10A6.7 6.7 0 0010 16.7a6.7 6.7 0 006.7-6.7 6.7 6.7 0 00-6.7-6.7c-2 0-3.8.9-5 2.3" stroke={color} strokeWidth="1.67" strokeLinecap="round" />
      <Path d="M3 6.5V3.5h3" stroke={color} strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

// ─── Receipt / payment icons ──────────────────────────────────────────────────

/** Tick / checkmark in circle — success hero. */
export function IconCheck({ size = 40 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <Path d="M10 21L17 28L30 14" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** Two overlapping squares — copy token. */
export function IconCopy({ size = 13, color = '#BC0001' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size * 1.18} viewBox="0 0 12.75 15" fill="none">
      <Path
        d="M9 1H2a1 1 0 00-1 1v9M4 4h7.5a1 1 0 011 1v8.5a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/** Three nodes / share icon — share receipt. */
export function IconShare({ size = 18, color = '#FFFBFF' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size * 1.1} viewBox="0 0 18 20" fill="none">
      <Path
        d="M14 7a3 3 0 100-6 3 3 0 000 6zM4 12a3 3 0 100-6 3 3 0 000 6zM14 19a3 3 0 100-6 3 3 0 000 6zM6.7 10.7l4.6 2.6M11.3 6.7L6.7 9.3"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/** Filled circle with checkmark — password requirement met indicator. */
export function IconCheckCircle({ met = true }: { met?: boolean }) {
  if (met) {
    return (
      <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
        <Circle cx="7.5" cy="7.5" r="7.5" fill="#F70003" />
        <Path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    );
  }
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
      <Circle cx="7.5" cy="7.5" r="7" fill="#C8C6C5" />
    </Svg>
  );
}

/** Lightning bolt for onboarding notification capsule. */
export function IconLightning({ color = '#F70003', size = 22 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M13 2L4.5 14H11.5L11 22L19.5 10H12.5L13 2Z" fill={color} fillRule="evenodd" clipRule="evenodd" />
    </Svg>
  );
}

export function IconShieldCheck({ color = '#F70003', size = 20 }: { color?: string; size?: number }) {
  return (
    <Image
      source={activePng}
      style={{ width: size, height: size, tintColor: color }}
      resizeMode="contain"
    />
  );
}

export function IconCart({ color = '#F70003', size = 20 }: { color?: string; size?: number }) {
  return (
    <Image
      source={cartPng}
      style={{ width: size, height: size, tintColor: color }}
      resizeMode="contain"
    />
  );
}

export function IconWalletPlus({ color = '#F70003', size = 22 }: { color?: string; size?: number }) {
  return (
    <Image
      source={createwalletPng}
      style={{ width: size, height: size, tintColor: color }}
      resizeMode="contain"
    />
  );
}

export function IconSpark({ color, size = 20 }: { color?: string; size?: number }) {
  return (
    <Image
      source={sparkPng}
      style={[
        { width: size, height: size },
        color ? { tintColor: color } : {}
      ]}
      resizeMode="contain"
    />
  );
}

export function IconWalletGlow({ color = '#F70003', size = 141 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 141 141">
      <Defs>
        <RadialGradient id="walletGlowGrad" cx="50%" cy="50%" rx="50%" ry="50%">
          <Stop offset="0%" stopColor={color} stopOpacity={0.12} />
          <Stop offset="50%" stopColor={color} stopOpacity={0.04} />
          <Stop offset="100%" stopColor={color} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <Circle cx="70.5" cy="70.5" r="70.5" fill="url(#walletGlowGrad)" />
    </Svg>
  );
}

