/**
 * Onboarding screen — three-step animated intro flow.
 * Manages step state locally; on completion navigates to /welcome.
 * Converted from web to React Native: all SVG icons use react-native-svg,
 * all styles use React Native StyleSheet (no Tailwind / web-only CSS).
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { PS_400, PS_600, PS_700 } from '@/components/fonts';
import { IconBolt } from '@/components/icons';
import { useTheme } from '@/context/ThemeContext';
import { ThemeColors } from '@/constants/theme';
import AccessPowerLogoDark from '@/components/AccessPowerLogoDark';

// ─── Image assets ─────────────────────────────────────────────────────────────
const logoImg = require('@/imports/OnboardingPage/f63515ccfd8aeaadc3275663a9e2183ed31d98fd.png') as number;
const guyImg = require('@/imports/OnboardingPage/77aeb35032ad7312b0523f0dc47aef32366cda17.png') as number;
const ladyImg = require('@/imports/OnboardingPage/be1b522d1a7b2e2397f17bdcf32ea3484ed113aa.png') as number;
const meterImg = require('@/imports/OnboardingPage-1/5538f01415d59652563105dbfe390e3cbc2a7c8f.png') as number;
const aedcImg = require('@/imports/OnboardingPage-3/051491720e0a042bb0fdcbe9c1cc5365881d69db.png') as number;
const eedcImg = require('@/imports/OnboardingPage-3/be49028bf4b9df2c2a6d932986ce0046e07f290b.png') as number;
const josElecImg = require('@/imports/OnboardingPage-3/29b77c46a13453439fef46fdabad6528fdecfedc.png') as number;
const kedcoImg = require('@/imports/OnboardingPage-3/4e4ddbbde07b5edc029a99830d34d8e58d49c359.png') as number;
const josPlcImg = require('@/imports/OnboardingPage-3/a9f926561d6eee7f93da84906a5ba28872e10c6b.png') as number;
const ibedcImg = require('@/imports/OnboardingPage-3/1086a849938b7f30e9cba5ddffd9d87c1e9bc948.png') as number;
const ekodcImg = require('@/imports/OnboardingPage-3/e3d1b6ba55dfe36c6a288f484e6ab745ab52bfed.png') as number;

// ─── Layout constants removed (now using useWindowDimensions) ──────────────

// ─── Step data ────────────────────────────────────────────────────────────────
type StepConfig = {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  image: number;
  dotIndex: number;
  isLast?: boolean;
};

const STEPS: StepConfig[] = [
  {
    titleLine1: 'Top Up',
    titleLine2: 'Stay Charged',
    subtitle: 'Enjoy uninterrupted energy with easy top-ups, available anywhere and at any time.',
    image: guyImg,
    dotIndex: 0,
  },
  {
    titleLine1: 'No Stress,',
    titleLine2: 'Just Press!',
    subtitle: 'Use our seamless app to recharge instantly and keep your lights on without the hassle.',
    image: ladyImg,
    dotIndex: 1,
  },
  {
    titleLine1: 'Smart Meter',
    titleLine2: 'Smarter Living',
    subtitle: 'Choose Access Power NG prepaid meters for a brighter, more controlled future.',
    image: meterImg,
    dotIndex: 2,
    isLast: true,
  },
];

type LogoTile = { src: number; left: number; top: number; imgW: number; imgH: number };

const LOGO_TILES: LogoTile[] = [
  { src: aedcImg, left: -4, top: 658, imgW: 100, imgH: 32 },
  { src: eedcImg, left: 128, top: 630, imgW: 82, imgH: 42 },
  { src: josElecImg, left: 260, top: 602, imgW: 61, imgH: 48 },
  { src: kedcoImg, left: 252, top: 693, imgW: 86, imgH: 48 },
  { src: josPlcImg, left: 120, top: 721, imgW: 58, imgH: 48 },
  { src: ibedcImg, left: -12, top: 749, imgW: 93, imgH: 48 },
  { src: ekodcImg, left: 244, top: 784, imgW: 82, imgH: 41 },
];

// ─── Onboarding step screen ───────────────────────────────────────────────────
import { SafeAreaView } from 'react-native-safe-area-context';

function OnboardingStep({
  step,
  onSkip,
  onNext,
}: {
  step: StepConfig;
  onSkip: () => void;
  onNext: () => void;
}) {
  const { width } = useWindowDimensions();
  const cardWidth = Math.round(width * 1.66);
  const { mode: theme, isDark, colors } = useTheme();
  const s = getStyles(colors);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={s.screen}>
        <Image source={step.image} style={s.bgImage} resizeMode="cover" />
        {theme === 'dark' || (theme === 'system' && isDark) ? (
          <View style={s.logoCorner}>
            <AccessPowerLogoDark width={97} height={49} />
          </View>
        ) : (
          <Image source={logoImg} style={s.logoCorner} resizeMode="contain" />
        )}
        
        <View style={s.spacer} />

        <View style={[s.card, { width: cardWidth }]}>
          <View style={[s.cardInner, { width }]}>
            <View style={s.textContainer}>
              <Text style={s.titleLine1}>{step.titleLine1}</Text>
              <Text style={s.titleLine2}>{step.titleLine2}</Text>
              <Text style={s.subtitle}>{step.subtitle}</Text>
            </View>

            <View style={s.bottomActions}>
              {step.isLast ? (
                <View style={s.getStartedRow}>
                  <TouchableOpacity style={s.getStartedBtn} onPress={onNext} activeOpacity={0.82}>
                    <Text style={s.getStartedText}>Get Started</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={s.navRow}>
                  <TouchableOpacity onPress={onSkip} activeOpacity={0.7}>
                    <Text style={s.skipText}>Skip</Text>
                  </TouchableOpacity>
                  <View style={s.dotsRow}>
                    {[0, 1, 2].map((i) => (
                      <View key={i} style={[s.dot, i === step.dotIndex && s.dotActive]} />
                    ))}
                  </View>
                  <TouchableOpacity style={s.nextBtn} onPress={onNext} activeOpacity={0.82}>
                    <Text style={s.nextText}>Next</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

// ─── Welcome screen ───────────────────────────────────────────────────────────

function WelcomeScreen({
  onLogin,
  onSignup,
}: {
  onLogin: () => void;
  onSignup: () => void;
}) {
  const { mode: theme, isDark, colors } = useTheme();
  const s = getStyles(colors);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={s.welcome}>
        {theme === 'dark' || (theme === 'system' && isDark) ? (
          <View style={s.welcomeLogo}>
            <AccessPowerLogoDark width={97} height={49} />
          </View>
        ) : (
          <Image source={logoImg} style={s.welcomeLogo} resizeMode="contain" />
        )}

        <View style={s.welcomeContent}>
          <View style={s.textBlock}>
            <Text style={s.headline}>Buying Electricity Tokens just got</Text>
            <Text style={s.easierText}>EASIER!</Text>
          </View>

          <View style={s.welcomeBottomActions}>
            <View style={s.authButtons}>
              <TouchableOpacity style={s.loginBtn} onPress={onLogin} activeOpacity={0.85}>
                <Text style={s.loginText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={s.signupBtn} onPress={onSignup} activeOpacity={0.85}>
                <Text style={s.signupText}>Signup</Text>
              </TouchableOpacity>
            </View>

            <View style={s.notifCapsule}>
              <View style={s.notifIconWrap}>
                <IconBolt color="#F70003" size={22} />
              </View>
              <Text style={s.notifText}>
                AEDC {'&'} IBEDC are experiencing temporary network downtime. Token delivery may be delayed.
              </Text>
            </View>
          </View>
        </View>

        <View style={s.logoBackgroundContainer} pointerEvents="none">
          {LOGO_TILES.map((tile, i) => (
            <View
              key={i}
              style={[s.logoTileWrap, { left: tile.left, top: tile.top - 600 }]}
            >
              <Image
                source={tile.src}
                style={{ width: tile.imgW, height: tile.imgH }}
                resizeMode="contain"
              />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

// ─── Root component ───────────────────────────────────────────────────────────

/** Onboarding flow: three step cards → welcome screen. */
export default function OnboardingScreen() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  /** Advance to the next step or transition to the welcome view. */
  function handleNext() {
    if (stepIndex < STEPS.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      setShowWelcome(true);
    }
  }

  if (showWelcome) {
    return (
      <WelcomeScreen
        onLogin={() => router.push('/login')}
        onSignup={() => router.push('/signup')}
      />
    );
  }

  return (
    <OnboardingStep
      step={STEPS[stepIndex]}
      onSkip={() => setShowWelcome(true)}
      onNext={handleNext}
    />
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const getStyles = (colors: ThemeColors) => StyleSheet.create({
  // Onboarding step
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  spacer: {
    flex: 1,
  },
  bgImage: { position: 'absolute', top: 0, left: 0, width: '100%', height: '65%' },
  logoCorner: { position: 'absolute', left: 21, top: 20, width: 97, height: 49, zIndex: 10 },
  card: {
    alignSelf: 'center',
    flex: 0.85,
    borderRadius: 360,
    backgroundColor: colors.surfaceSolid,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 50,
    elevation: 8,
    marginBottom: -100, // keep the curve extending below screen
  },
  cardInner: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 130, // account for the marginBottom shift
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 68,
  },
  titleLine1: {
    fontFamily: PS_700,
    fontSize: 32,
    color: colors.primary,
    textAlign: 'center',
    lineHeight: 42,
  },
  titleLine2: {
    fontFamily: PS_700,
    fontSize: 32,
    color: '#F9943A',
    textAlign: 'center',
    lineHeight: 42,
  },
  subtitle: {
    fontFamily: PS_400,
    fontSize: 16,
    color: colors.textMain,
    textAlign: 'center',
    marginTop: 20,
    width: 260,
    lineHeight: 22,
  },
  bottomActions: {
    width: '100%',
    paddingHorizontal: 20,
  },
  navRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  skipText: {
    fontFamily: PS_400,
    fontSize: 16,
    color: colors.textSub,
    textAlign: 'center',
    width: 85,
  },
  dotsRow: { flexDirection: 'row', alignItems: 'center', gap: 7 },
  dot: { width: 10, height: 16, borderRadius: 40, backgroundColor: colors.borderLight },
  dotActive: { backgroundColor: colors.primary },
  nextBtn: {
    backgroundColor: colors.primary,
    borderRadius: 32,
    paddingHorizontal: 22,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
  },
  nextText: {
    fontFamily: PS_400,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  getStartedRow: {
    alignItems: 'center',
  },
  getStartedBtn: {
    backgroundColor: colors.primary,
    borderRadius: 32,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: 284,
  },
  getStartedText: {
    fontFamily: PS_400,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  // Welcome
  welcome: {
    flex: 1,
    backgroundColor: colors.background,
    overflow: 'hidden',
  },
  welcomeLogo: { position: 'absolute', left: 23, top: 20, width: 97, height: 49, zIndex: 10 },
  logoBackgroundContainer: {
    position: 'absolute',
    bottom: -10,
    left: 0,
    right: 0,
    height: 260,
    zIndex: 1,
  },
  welcomeContent: {
    flex: 1,
    paddingTop: 100,
    paddingBottom: 260,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
  },
  textBlock: { 
    alignItems: 'center',
    marginBottom: 40,
  },
  headline: {
    fontFamily: PS_600,
    fontSize: 36,
    color: colors.textMain,
    textAlign: 'center',
    width: 313,
    lineHeight: 48,
  },
  easierText: {
    fontFamily: PS_700,
    fontSize: 36,
    color: colors.primary,
    textAlign: 'center',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    marginTop: 4,
    lineHeight: 48,
  },
  welcomeBottomActions: {
    width: '100%',
    paddingHorizontal: 6,
    gap: 32,
  },
  authButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  loginBtn: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 100,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontFamily: PS_400,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  signupBtn: {
    flex: 1,
    backgroundColor: colors.iconBgWhite,
    borderRadius: 100,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    fontFamily: PS_400,
    fontSize: 16,
    color: colors.primary,
    textAlign: 'center',
  },
  notifCapsule: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceAlt,
    borderRadius: 24,
    paddingHorizontal: 17,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  notifIconWrap: {
    width: 28,
    height: 28,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifText: {
    fontFamily: PS_400,
    fontSize: 11,
    color: colors.textMain,
    lineHeight: 16,
    flex: 1,
  },
  logoTileWrap: {
    position: 'absolute',
    width: 120,
    height: 73,
    borderRadius: 10,
    backgroundColor: colors.surfaceSolid,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    transform: [{ rotate: '-12deg' }],
  },
});

