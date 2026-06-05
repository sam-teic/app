import React, { useState, useEffect } from "react";

// ─── Asset imports (web — replace with require() in React Native) ─────────────
import logoImg from "@/imports/OnboardingPage/f63515ccfd8aeaadc3275663a9e2183ed31d98fd.png";
import guyImg from "@/imports/OnboardingPage/77aeb35032ad7312b0523f0dc47aef32366cda17.png";
import ladyImg from "@/imports/OnboardingPage/be1b522d1a7b2e2397f17bdcf32ea3484ed113aa.png";
import meterImg from "@/imports/OnboardingPage-1/5538f01415d59652563105dbfe390e3cbc2a7c8f.png";
import aedcImg from "@/imports/OnboardingPage-3/051491720e0a042bb0fdcbe9c1cc5365881d69db.png";
import eedcImg from "@/imports/OnboardingPage-3/be49028bf4b9df2c2a6d932986ce0046e07f290b.png";
import josElecImg from "@/imports/OnboardingPage-3/29b77c46a13453439fef46fdabad6528fdecfedc.png";
import kedcoImg from "@/imports/OnboardingPage-3/4e4ddbbde07b5edc029a99830d34d8e58d49c359.png";
import josPlcImg from "@/imports/OnboardingPage-3/a9f926561d6eee7f93da84906a5ba28872e10c6b.png";
import ibedcImg from "@/imports/OnboardingPage-3/1086a849938b7f30e9cba5ddffd9d87c1e9bc948.png";
import ekodcImg from "@/imports/OnboardingPage-3/e3d1b6ba55dfe36c6a288f484e6ab745ab52bfed.png";

// ─── Shared modules ───────────────────────────────────────────────────────────
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  RNStyle,
  SW,
  SH,
} from "./rnShims";
import { shared } from "./sharedStyles";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import DashboardScreen from "./DashboardScreen";
import CreateWalletScreen from "./CreateWalletScreen";
import MenuScreen from "./MenuScreen";
import QuickMenuScreen from "./QuickMenuScreen";
import ProfileScreen from "./ProfileScreen";
import ChangePasswordScreen from "./ChangePasswordScreen";
import HistoryScreen from "./HistoryScreen";
import PurchaseUnitScreen from "./PurchaseUnitScreen";
import ConfirmDetailsScreen from "./ConfirmDetailsScreen";
import ReceiptScreen from "./ReceiptScreen";

// ─── Lightning bolt icon (web-only; use react-native-svg in RN) ───────────────
function LightningIcon({ color = "#F70003", size = 22 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M13 2L4.5 14H11.5L11 22L19.5 10H12.5L13 2Z" fill={color} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}

// ─── Layout constants (onboarding-specific) ───────────────────────────────────
const CARD_W = Math.round(SW * 1.66);
const CARD_OX = -Math.round((CARD_W - SW) / 2);
const CARD_TOP = 470;
const CONTENT_LX = Math.round((CARD_W - SW) / 2);

// ─── Data ─────────────────────────────────────────────────────────────────────

type StepConfig = {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  image: string;
  dotIndex: number;
  isLast?: boolean;
};

const STEPS: StepConfig[] = [
  {
    titleLine1: "Top Up",
    titleLine2: "Stay Charged",
    subtitle: "Enjoy uninterrupted energy with easy top-ups, available anywhere and at any time.",
    image: guyImg,
    dotIndex: 0,
  },
  {
    titleLine1: "No Stress,",
    titleLine2: "Just Press!",
    subtitle: "Use our seamless app to recharge instantly and keep your lights on without the hassle.",
    image: ladyImg,
    dotIndex: 1,
  },
  {
    titleLine1: "Smart Meter",
    titleLine2: "Smarter Living",
    subtitle: "Choose Access Power NG prepaid meters for a brighter, more controlled future.",
    image: meterImg,
    dotIndex: 2,
    isLast: true,
  },
];

type LogoTile = { src: string; left: number; top: number; imgW: number; imgH: number };

const LOGO_TILES: LogoTile[] = [
  { src: aedcImg,    left: -4,   top: 658, imgW: 100, imgH: 32 },
  { src: eedcImg,    left: 128,  top: 630, imgW: 82,  imgH: 42 },
  { src: josElecImg, left: 260,  top: 602, imgW: 61,  imgH: 48 },
  { src: kedcoImg,   left: 252,  top: 693, imgW: 86,  imgH: 48 },
  { src: josPlcImg,  left: 120,  top: 721, imgW: 58,  imgH: 48 },
  { src: ibedcImg,   left: -12,  top: 749, imgW: 93,  imgH: 48 },
  { src: ekodcImg,   left: 244,  top: 784, imgW: 82,  imgH: 41 },
];

// ─── Onboarding-specific styles ───────────────────────────────────────────────

const styles = StyleSheet.create({
  splash: {
    width: SW,
    height: SH,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  splashLogo: { width: 195, height: 97 },
  screen: {
    width: SW,
    height: SH,
    backgroundColor: "#F8F9FA",
    overflow: "hidden",
    position: "relative",
  },
  bgImage: { position: "absolute", top: 0, left: 0, width: SW, height: CARD_TOP + 80 },
  logoCorner: { position: "absolute", left: 21, top: 78, width: 97, height: 49, zIndex: 10 },
  card: {
    position: "absolute",
    left: CARD_OX,
    top: CARD_TOP,
    width: CARD_W,
    height: SH - CARD_TOP + 120,
    borderRadius: 360,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 100,
    elevation: 8,
  },
  cardInner: {
    position: "absolute",
    left: CONTENT_LX,
    top: 0,
    bottom: 0,
    width: SW,
    alignItems: "center",
  },
  titleLine1: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 32,
    color: "#F70003",
    textAlign: "center",
    marginTop: 68,
    lineHeight: 42,
  },
  titleLine2: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 32,
    color: "#F9943A",
    textAlign: "center",
    lineHeight: 42,
  },
  subtitle: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#1B0000",
    textAlign: "center",
    marginTop: 28,
    width: 260,
    lineHeight: 22,
  },
  navRow: {
    position: "absolute",
    top: 292,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  skipText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "rgba(9,9,9,0.4)",
    textAlign: "center",
    width: 85,
  },
  dotsRow: { flexDirection: "row", alignItems: "center", gap: 7 },
  dot: { width: 10, height: 16, borderRadius: 40, backgroundColor: "#D9D9D9" },
  dotActive: { backgroundColor: "#F70003" },
  nextBtn: {
    backgroundColor: "#F70003",
    borderRadius: 32,
    paddingHorizontal: 22,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
    width: 85,
  },
  nextText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  getStartedRow: {
    position: "absolute",
    top: 295,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  getStartedBtn: {
    backgroundColor: "#F70003",
    borderRadius: 32,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    width: 284,
  },
  getStartedText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  // Welcome screen
  welcome: {
    width: SW,
    height: SH,
    backgroundColor: "#F8F9FA",
    overflow: "hidden",
    position: "relative",
  },
  welcomeLogo: { position: "absolute", left: 23, top: 78, width: 97, height: 49, zIndex: 10 },
  mainContentContainer: {
    flex: 1,
    paddingTop: 140,
    paddingBottom: 260,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
  },
  textBlock: { 
    alignItems: "center",
    marginBottom: 40,
  },
  headline: {
    fontFamily: "Public Sans",
    fontWeight: "600",
    fontSize: 36,
    color: "#373737",
    textAlign: "center",
    width: 313,
    lineHeight: 48,
  },
  easierText: {
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: 36,
    color: "#F70003",
    textAlign: "center",
    fontStyle: "italic",
    textTransform: "uppercase",
    marginTop: 4,
    lineHeight: 48,
  },
  authButtons: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  loginBtn: {
    flex: 1,
    backgroundColor: "#F70003",
    borderRadius: 100,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  signupBtn: {
    flex: 1,
    backgroundColor: "rgba(128,128,128,0.12)",
    borderRadius: 100,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  signupText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "#F70003",
    textAlign: "center",
  },
  notifCapsule: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,231,231,0.7)",
    borderRadius: 24,
    paddingHorizontal: 17,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    width: "100%",
  },
  notifIconWrap: {
    width: 28,
    height: 28,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  notifText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 11,
    color: "#333333",
    lineHeight: 16,
    flex: 1,
  },
  logosContainer: {
    position: "absolute",
    bottom: -10,
    left: 0,
    right: 0,
    height: 260,
    zIndex: 1,
  },
  logoTileWrap: {
    position: "absolute",
    width: 120,
    height: 73,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(215,215,215,0.72)",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    transform: [{ rotate: "-12deg" }],
  },
});

// ─── Splash Screen ────────────────────────────────────────────────────────────

function SplashScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <SafeAreaView style={styles.splash}>
      <StatusBar />
      <Image source={logoImg} style={styles.splashLogo} resizeMode="contain" />
    </SafeAreaView>
  );
}

// ─── Onboarding Screen ────────────────────────────────────────────────────────

function OnboardingScreen({
  step,
  onSkip,
  onNext,
}: {
  step: StepConfig;
  onSkip: () => void;
  onNext: () => void;
}) {
  return (
    <View style={styles.screen}>
      <StatusBar />
      <Image source={step.image} style={styles.bgImage} resizeMode="cover" />
      <Image source={logoImg} style={styles.logoCorner} resizeMode="contain" />
      <View style={styles.card}>
        <View style={styles.cardInner}>
          <Text style={styles.titleLine1}>{step.titleLine1}</Text>
          <Text style={styles.titleLine2}>{step.titleLine2}</Text>
          <Text style={styles.subtitle}>{step.subtitle}</Text>

          {step.isLast ? (
            <View style={styles.getStartedRow}>
              <TouchableOpacity style={styles.getStartedBtn} onPress={onNext} activeOpacity={0.82}>
                <Text style={styles.getStartedText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.navRow}>
              <TouchableOpacity onPress={onSkip} activeOpacity={0.7}>
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
              <View style={styles.dotsRow}>
                {[0, 1, 2].map((i) => (
                  <View key={i} style={[styles.dot, i === step.dotIndex && styles.dotActive]} />
                ))}
              </View>
              <TouchableOpacity style={styles.nextBtn} onPress={onNext} activeOpacity={0.82}>
                <Text style={styles.nextText}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

// ─── Welcome Screen ───────────────────────────────────────────────────────────

function WelcomeScreen({
  onLogin,
  onSignup,
}: {
  onLogin: () => void;
  onSignup: () => void;
}) {
  return (
    <View style={styles.welcome}>
      <StatusBar />

      <Image source={logoImg} style={styles.welcomeLogo} resizeMode="contain" />

      <View style={styles.mainContentContainer}>
        <View style={styles.textBlock}>
          <Text style={styles.headline}>Buying Electricity Tokens just got</Text>
          <Text style={styles.easierText}>EASIER!</Text>
        </View>

        <View style={styles.authButtons}>
          <TouchableOpacity style={styles.loginBtn} onPress={onLogin} activeOpacity={0.85}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupBtn} onPress={onSignup} activeOpacity={0.85}>
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.notifCapsule}>
          <View style={styles.notifIconWrap}>
            <LightningIcon color="#F70003" size={22} />
          </View>
          <Text style={styles.notifText}>
            AEDC {"&"} IBEDC are experiencing temporary network downtime. Token delivery may be delayed.
          </Text>
        </View>
      </View>

      <View style={styles.logosContainer} pointerEvents="none">
        {LOGO_TILES.map((tile, i) => (
          <View
            key={i}
            style={[styles.logoTileWrap, { left: tile.left, top: tile.top - 600 } as RNStyle]}
          >
            <Image
              source={tile.src}
              style={{ width: tile.imgW, height: tile.imgH } as RNStyle}
              resizeMode="contain"
            />
          </View>
        ))}
      </View>
    </View>
  );
}

// ─── OnboardingFlow — root navigation ────────────────────────────────────────

type AppScreen = "splash" | "onboarding" | "welcome" | "login" | "signup" | "dashboard" | "createWallet" | "menu" | "quickMenu" | "profile" | "changePassword" | "history" | "purchaseUnit" | "confirmDetails" | "receipt";

export default function OnboardingFlow() {
  const [screen, setScreen] = useState<AppScreen>("splash");
  const [stepIndex, setStepIndex] = useState(0);

  function handleNext() {
    if (stepIndex < STEPS.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      setScreen("welcome");
    }
  }

  if (screen === "splash") {
    return (
      <SplashScreen onDone={() => { setStepIndex(0); setScreen("onboarding"); }} />
    );
  }

  if (screen === "onboarding") {
    return (
      <OnboardingScreen
        step={STEPS[stepIndex]}
        onSkip={() => setScreen("welcome")}
        onNext={handleNext}
      />
    );
  }

  if (screen === "login") {
    return (
      <LoginScreen
        onLogin={() => setScreen("dashboard")}
        onSignup={() => setScreen("signup")}
        onBack={() => setScreen("welcome")}
      />
    );
  }

  if (screen === "signup") {
    return (
      <SignupScreen
        onSignup={() => setScreen("dashboard")}
        onLogin={() => setScreen("login")}
        onBack={() => setScreen("welcome")}
      />
    );
  }

  if (screen === "dashboard") {
    return (
      <DashboardScreen
        hasWallet={true}
        onMenu={() => setScreen("menu")}
        onCreateWallet={() => setScreen("createWallet")}
        onPurchase={() => setScreen("purchaseUnit")}
      />
    );
  }

  if (screen === "createWallet") {
    return (
      <CreateWalletScreen
        onCreate={() => setScreen("dashboard")}
        onBack={() => setScreen("dashboard")}
      />
    );
  }

  if (screen === "menu") {
    return (
      <MenuScreen
        onClose={() => setScreen("dashboard")}
        onUpdateProfile={() => setScreen("profile")}
        onChangePassword={() => setScreen("changePassword")}
        onReferrals={() => setScreen("history")}
        onPrivacyPolicy={() => setScreen("dashboard")}
        onLogout={() => setScreen("welcome")}
      />
    );
  }

  if (screen === "quickMenu") {
    return (
      <QuickMenuScreen
        onClose={() => setScreen("dashboard")}
        onCreateWallet={() => setScreen("createWallet")}
        onViewTransactions={() => setScreen("history")}
        onPurchaseUnits={() => setScreen("purchaseUnit")}
        onProcessPending={() => setScreen("dashboard")}
      />
    );
  }

  if (screen === "profile") {
    return (
      <ProfileScreen
        onBack={() => setScreen("menu")}
        onSave={() => setScreen("dashboard")}
        onLogout={() => setScreen("welcome")}
      />
    );
  }

  if (screen === "changePassword") {
    return (
      <ChangePasswordScreen
        onBack={() => setScreen("menu")}
        onUpdate={() => setScreen("dashboard")}
      />
    );
  }

  if (screen === "history") {
    return (
      <HistoryScreen
        onBack={() => setScreen("dashboard")}
      />
    );
  }

  if (screen === "purchaseUnit") {
    return (
      <PurchaseUnitScreen
        onBack={() => setScreen("dashboard")}
        onContinue={() => setScreen("confirmDetails")}
      />
    );
  }

  if (screen === "confirmDetails") {
    return (
      <ConfirmDetailsScreen
        onBack={() => setScreen("purchaseUnit")}
        onConfirm={() => setScreen("receipt")}
      />
    );
  }

  if (screen === "receipt") {
    return (
      <ReceiptScreen
        onBack={() => setScreen("confirmDetails")}
        onShare={() => {}}
        onBackToHome={() => setScreen("dashboard")}
      />
    );
  }

  return (
    <WelcomeScreen
      onLogin={() => setScreen("login")}
      onSignup={() => setScreen("signup")}
    />
  );
}
