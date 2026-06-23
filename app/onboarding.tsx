/**
 * Onboarding screen — three-step animated intro flow.
 */
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  Animated,
  Easing,
} from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PS_400, PS_600, PS_700 } from "@/components/fonts";
import { IconBolt } from "@/components/icons";
import { useTheme } from "@/context/ThemeContext";
import { ThemeColors } from "@/constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// ─── Image assets ─────────────────────────────────────────────────────────────
const logoImg =
  require("@/imports/OnboardingPage/f63515ccfd8aeaadc3275663a9e2183ed31d98fd.png") as number;
const darkLogoImg = require("@/assets/icons/darklogo.png") as number;
const guyImg =
  require("@/imports/OnboardingPage/77aeb35032ad7312b0523f0dc47aef32366cda17.png") as number;
const ladyImg =
  require("@/imports/OnboardingPage/be1b522d1a7b2e2397f17bdcf32ea3484ed113aa.png") as number;
const meterImg =
  require("@/imports/OnboardingPage-1/5538f01415d59652563105dbfe390e3cbc2a7c8f.png") as number;
const aedcImg =
  require("@/imports/OnboardingPage-3/051491720e0a042bb0fdcbe9c1cc5365881d69db.png") as number;
const eedcImg =
  require("@/imports/OnboardingPage-3/be49028bf4b9df2c2a6d932986ce0046e07f290b.png") as number;
const josElecImg =
  require("@/imports/OnboardingPage-3/29b77c46a13453439fef46fdabad6528fdecfedc.png") as number;
const kedcoImg =
  require("@/imports/OnboardingPage-3/4e4ddbbde07b5edc029a99830d34d8e58d49c359.png") as number;
const josPlcImg =
  require("@/imports/OnboardingPage-3/a9f926561d6eee7f93da84906a5ba28872e10c6b.png") as number;
const ibedcImg =
  require("@/imports/OnboardingPage-3/1086a849938b7f30e9cba5ddffd9d87c1e9bc948.png") as number;
const ekodcImg =
  require("@/imports/OnboardingPage-3/e3d1b6ba55dfe36c6a288f484e6ab745ab52bfed.png") as number;

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
    titleLine1: "Top Up",
    titleLine2: "Stay Charged",
    subtitle:
      "Enjoy uninterrupted energy with easy top-ups, available anywhere and at any time.",
    image: guyImg,
    dotIndex: 0,
  },
  {
    titleLine1: "No Stress,",
    titleLine2: "Just Press!",
    subtitle:
      "Use our seamless app to recharge instantly and keep your lights on without the hassle.",
    image: ladyImg,
    dotIndex: 1,
  },
  {
    titleLine1: "Smart Meter",
    titleLine2: "Smarter Living",
    subtitle:
      "Choose Access Power NG prepaid meters for a brighter, more controlled future.",
    image: meterImg,
    dotIndex: 2,
    isLast: true,
  },
];

const ROTATING_WORDS = ["EASIER!", "BETTER!", "FASTER!"];

type LogoItem = {
  src: number;
  imgW: number;
  imgH: number;
};

const ROW1_LOGOS: LogoItem[] = [
  { src: aedcImg, imgW: 100, imgH: 32 },
  { src: eedcImg, imgW: 82, imgH: 42 },
  { src: josElecImg, imgW: 61, imgH: 48 },
];

const ROW2_LOGOS: LogoItem[] = [
  { src: ibedcImg, imgW: 93, imgH: 48 },
  { src: josPlcImg, imgW: 58, imgH: 48 },
  { src: kedcoImg, imgW: 86, imgH: 48 },
];

const ROW3_LOGOS: LogoItem[] = [
  { src: ekodcImg, imgW: 82, imgH: 41 },
];

// ─── Rotating word ────────────────────────────────────────────────────────────

function RotatingWord({ colors }: { colors: ThemeColors }) {
  const containerWidth = 220;
  const duplicatedWords = [...ROTATING_WORDS, ROTATING_WORDS[0]];
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let isActive = true;
    
    const runAnimation = () => {
      if (!isActive) return;
      scrollX.setValue(0);

      Animated.sequence([
        Animated.delay(1800),
        Animated.timing(scrollX, {
          toValue: -containerWidth,
          duration: 450,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.delay(1800),
        Animated.timing(scrollX, {
          toValue: -2 * containerWidth,
          duration: 450,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.delay(1800),
        Animated.timing(scrollX, {
          toValue: -3 * containerWidth,
          duration: 450,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start((result) => {
        if (result.finished && isActive) {
          runAnimation();
        }
      });
    };

    runAnimation();

    return () => {
      isActive = false;
      scrollX.stopAnimation();
    };
  }, []);

  return (
    <View
      style={{
        height: 52,
        width: containerWidth,
        overflow: "hidden",
        alignSelf: "center",
      }}
    >
      <Animated.View
        style={{
          flexDirection: "row",
          width: containerWidth * duplicatedWords.length,
          transform: [{ translateX: scrollX }],
        }}
      >
        {duplicatedWords.map((word, index) => (
          <View
            key={index}
            style={{
              width: containerWidth,
              height: 52,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: PS_700,
                fontSize: 36,
                color: colors.primary,
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              {word}
            </Text>
          </View>
        ))}
      </Animated.View>
    </View>
  );
}

// ─── Onboarding step ──────────────────────────────────────────────────────────

function OnboardingStep({
  step,
  stepIndex,
  onSkip,
  onNext,
}: {
  step: StepConfig;
  stepIndex: number;
  onSkip: () => void;
  onNext: () => void;
}) {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const { mode: theme, isDark, colors } = useTheme();

  const cardHeight = Math.round(height * 0.44);
  const overflowWidth = width * 1.5;
  const sideOffset = (overflowWidth - width) / 2;

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1.08)).current;
  const contentFade = useRef(new Animated.Value(0)).current;
  const contentSlide = useRef(new Animated.Value(16)).current;

  useEffect(() => {
    fadeAnim.setValue(0);
    scaleAnim.setValue(1.08);
    contentFade.setValue(0);
    contentSlide.setValue(16);

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.delay(180),
        Animated.parallel([
          Animated.timing(contentFade, {
            toValue: 1,
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(contentSlide, {
            toValue: 0,
            duration: 350,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ]).start();
  }, [stepIndex]);

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar style="light" />
      {STEPS.map((s, idx) => {
        const isActive = idx === step.dotIndex;
        return (
          <Animated.Image
            key={idx}
            source={s.image}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width,
              height: height * 0.75,
              opacity: isActive ? fadeAnim : 0,
              transform: [{ scale: isActive ? scaleAnim : 1.08 }],
            }}
            resizeMode="cover"
          />
        );
      })}

      <View
        style={{
          position: "absolute",
          top: insets.top + 12,
          left: 21,
          zIndex: 10,
        }}
      >
        {theme === "dark" || (theme === "system" && isDark) ? (
          <Image
            source={darkLogoImg}
            style={{ width: 97, height: 49 }}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={logoImg}
            style={{ width: 97, height: 49 }}
            resizeMode="contain"
          />
        )}
      </View>

      {/* Card background */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width,
          height: cardHeight,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: -sideOffset,
            width: overflowWidth,
            height: cardHeight,
            backgroundColor: isDark ? "#0F0F11" : "#FFF",
            borderTopLeftRadius: overflowWidth,
            borderTopRightRadius: overflowWidth,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.08,
            shadowRadius: 16,
            elevation: 12,
          }}
        />
      </View>

      {/* Card content */}
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width,
          height: cardHeight,
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 64,
          paddingBottom: insets.bottom > 0 ? insets.bottom + 8 : 24,
          paddingHorizontal: 24,
          zIndex: 5,
          opacity: contentFade,
          transform: [{ translateY: contentSlide }],
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontFamily: PS_700,
              fontSize: 36,
              color: colors.primary,
              textAlign: "center",
              lineHeight: 42,
            }}
          >
            {step.titleLine1}
          </Text>
          <Text
            style={{
              fontFamily: PS_700,
              fontSize: 36,
              color: "#F9943A",
              textAlign: "center",
              lineHeight: 52,
            }}
          >
            {step.titleLine2}
          </Text>
          <Text
            style={{
              fontFamily: PS_400,
              fontSize: 18,
              color: colors.textMain,
              textAlign: "center",
              marginTop: 26,
              lineHeight: 22,
              maxWidth: 300,
            }}
          >
            {step.subtitle}
          </Text>
        </View>

        {step.isLast ? (
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              borderRadius: 32,
              paddingVertical: 16,
              alignItems: "center",
              justifyContent: "center",
              width: 284,
            }}
            onPress={onNext}
            activeOpacity={0.82}
          >
            <Text
              style={{
                fontFamily: PS_400,
                fontSize: 18,
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={onSkip}
              activeOpacity={0.7}
              style={{ width: 85 }}
            >
              <Text
                style={{
                  fontFamily: PS_400,
                  fontSize: 18,
                  color: colors.textSub,
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              {[0, 1, 2].map((i) => (
                <View
                  key={i}
                  style={
                    i === step.dotIndex
                      ? {
                          width: 10,
                          height: 18,
                          borderRadius: 40,
                          backgroundColor: colors.primary,
                        }
                      : {
                          width: 10,
                          height: 10,
                          borderRadius: 40,
                          backgroundColor: isDark ? "rgba(255,255,255,0.24)" : "#C0C0C0",
                        }
                  }
                />
              ))}
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                borderRadius: 32,
                paddingHorizontal: 22,
                paddingVertical: 13,
                alignItems: "center",
                justifyContent: "center",
                width: 85,
              }}
              onPress={onNext}
              activeOpacity={0.82}
            >
              <Text
                style={{
                  fontFamily: PS_400,
                  fontSize: 18,
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </View>
  );
}
// ─── Welcome screen Static Grid components ────────────────────────────────────

function LogoRow({
  items,
  colors,
}: {
  items: LogoItem[];
  colors: ThemeColors;
}) {
  const cardWidth = 120;
  const cardHeight = 72;
  const cardGap = 12;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: cardGap,
        width: "100%",
      }}
    >
      {items.map((tile, i) => (
        <View
          key={i}
          style={{
            width: cardWidth,
            height: cardHeight,
            borderRadius: 10,
            backgroundColor: colors.surfaceSolid,
            borderWidth: 1,
            borderColor: colors.border,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.03,
            shadowRadius: 4,
            elevation: 1,
          }}
        >
          <Image
            source={tile.src}
            style={{ width: tile.imgW, height: tile.imgH }}
            resizeMode="contain"
          />
        </View>
      ))}
    </View>
  );
}

function FadeOverlay({ height = 70, colors }: { height?: number; colors: ThemeColors }) {
  const steps = 12;
  const stepHeight = height / steps;
  return (
    <View
      pointerEvents="none"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height,
        zIndex: 2,
      }}
    >
      {Array.from({ length: steps }).map((_, i) => {
        const opacity = 1 - (i / steps);
        return (
          <View
            key={i}
            style={{
              position: "absolute",
              top: i * stepHeight,
              left: 0,
              right: 0,
              height: stepHeight,
              backgroundColor: colors.background,
              opacity,
            }}
          />
        );
      })}
    </View>
  );
}

function StaticLogoGrid({ colors }: { colors: ThemeColors }) {
  return (
    <View
      style={{
        width: "120%",
        alignSelf: "center",
        transform: [{ rotate: "-10deg" }, { scale: 1.15 }],
        marginVertical: 6,
        gap: 10,
      }}
    >
      <LogoRow items={ROW1_LOGOS} colors={colors} />
      <LogoRow items={ROW2_LOGOS} colors={colors} />
      <LogoRow items={ROW3_LOGOS} colors={colors} />
    </View>
  );
}

// ─── Interactive pressable button wrapper ──────────────────────────────────────

function InteractiveButton({
  onPress,
  style,
  children,
}: {
  onPress: () => void;
  style: any;
  children: React.ReactNode;
}) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.timing(scale, {
      toValue: 0.95,
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

  return (
    <Animated.View style={{ flex: 1, transform: [{ scale }] }}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
        style={style}
      >
        {children}
      </TouchableOpacity>
    </Animated.View>
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
  const insets = useSafeAreaInsets();
  const { mode: theme, isDark, colors } = useTheme();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 450,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 450,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const isDarkTheme = theme === "dark" || (theme === "system" && isDark);
  const warningBg = isDarkTheme ? "rgba(247, 0, 3, 0.1)" : "#FFF5F5";
  const warningBorder = isDarkTheme ? "rgba(247, 0, 3, 0.2)" : "#FFE3E3";
  const warningText = isDarkTheme ? "#FF5E62" : "#D32F2F";

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Ticker at the absolute bottom, behind everything */}
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 210,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <FadeOverlay colors={colors} height={70} />
        <View style={{ flex: 1, justifyContent: "flex-start", paddingTop: 5 }}>
          <StaticLogoGrid colors={colors} />
        </View>
      </View>

      {/* LOGO top left */}
      <View
        style={{
          position: "absolute",
          top: insets.top + 12,
          left: 23,
          zIndex: 10,
        }}
      >
        {theme === "dark" || (theme === "system" && isDark) ? (
          <Image
            source={darkLogoImg}
            style={{ width: 97, height: 49 }}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={logoImg}
            style={{ width: 97, height: 49 }}
            resizeMode="contain"
          />
        )}
      </View>

      {/* CONTENT — single centered column, everything together */}
      <Animated.View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 24,
          paddingTop: insets.top + 60,
          paddingBottom: insets.bottom > 0 ? insets.bottom + 260 : 230,
          zIndex: 5,
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        }}
      >
        {/* Headline */}
        <Text
          style={{
            fontFamily: PS_600,
            fontSize: 36,
            color: colors.textMain,
            textAlign: "center",
            lineHeight: 48,
            marginTop: 90,
          }}
        >
          Buying Electricity{"\n"}Tokens just got
        </Text>

        {/* Rotating word directly below headline */}
        <RotatingWord colors={colors} />

        {/* Spacer that pushes buttons down but keeps them close */}
        <View style={{ flex: 1 }} />

        {/* Buttons */}
        <View style={{ width: "100%", gap: 16 }}>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <InteractiveButton
              onPress={onLogin}
              style={{
                backgroundColor: colors.primary,
                borderRadius: 100,
                paddingVertical: 16,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontFamily: PS_400,
                  fontSize: 16,
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                Login
              </Text>
            </InteractiveButton>

            <InteractiveButton
              onPress={onSignup}
              style={{
                backgroundColor: isDarkTheme ? "#27272A" : "#E4E4E7",
                borderRadius: 100,
                paddingVertical: 16,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontFamily: PS_400,
                  fontSize: 16,
                  color: isDarkTheme ? "#FFFFFF" : colors.primary,
                  textAlign: "center",
                }}
              >
                Signup
              </Text>
            </InteractiveButton>
          </View>

          {/* Notification capsule */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: warningBg,
              borderRadius: 24,
              paddingHorizontal: 14,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: warningBorder,
              gap: 10,
            }}
          >
            <View
              style={{
                width: 28,
                height: 28,
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <IconBolt color="#F70003" size={28} />
            </View>
            <Text
              style={{
                fontFamily: PS_400,
                fontSize: 11,
                color: warningText,
                lineHeight: 16,
                flex: 1,
              }}
            >
              AEDC {"&"} IBEDC are experiencing temporary network downtime.
              Token delivery may be delayed.
            </Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

// ─── Root component ───────────────────────────────────────────────────────────

export default function OnboardingScreen() {
  const router = useRouter();
  const { isDark, colors } = useTheme();
  const [stepIndex, setStepIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  function handleNext() {
    if (stepIndex < STEPS.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      setShowWelcome(true);
    }
  }

  if (!ready) return null;

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Hidden preloader container to load onboarding assets and partner logos in background */}
      <View style={{ width: 0, height: 0, opacity: 0, position: "absolute" }} pointerEvents="none">
        <Image source={logoImg} />
        <Image source={darkLogoImg} />
        <Image source={guyImg} />
        <Image source={ladyImg} />
        <Image source={meterImg} />
        <Image source={aedcImg} />
        <Image source={eedcImg} />
        <Image source={josElecImg} />
        <Image source={ibedcImg} />
        <Image source={josPlcImg} />
        <Image source={kedcoImg} />
        <Image source={ekodcImg} />
      </View>

      {showWelcome ? (
        <WelcomeScreen
          onLogin={() => router.push("/login")}
          onSignup={() => router.push("/signup")}
        />
      ) : (
        <OnboardingStep
          step={STEPS[stepIndex]}
          stepIndex={stepIndex}
          onSkip={() => setShowWelcome(true)}
          onNext={handleNext}
        />
      )}
    </View>
  );
}
