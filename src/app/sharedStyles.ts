/**
 * Shared React Native styles — imported by onboarding, login, and signup screens.
 * In RN, import StyleSheet from "react-native" instead of "./rnShims".
 */
import { StyleSheet, SW, SH } from "./rnShims";

export const shared = StyleSheet.create({
  // ── Full-screen container ────────────────────────────────────
  screen: {
    width: SW,
    height: SH,
    backgroundColor: "#F8F9FA",
    position: "relative",
  },

  // ── Primary action button (red pill, full-width) ─────────────
  primaryBtn: {
    backgroundColor: "#F70003",
    borderRadius: 32,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtnText: {
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
  },

  // ── Form input field wrapper ─────────────────────────────────
  inputWrapper: {
    height: 56,
    borderRadius: 32,
    backgroundColor: "rgba(128,128,128,0.04)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    overflow: "hidden",
  },
  inputRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 24,
  },
  inputText: {
    flex: 1,
    fontFamily: "Public Sans",
    fontWeight: "400",
    fontSize: 16,
    color: "rgba(21,20,20,0.4)",
  },

  // ── Auth link row (bottom of form) ───────────────────────────
  authLinkRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  authLinkNormal: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 14,
    color: "#64748B",
  },
  authLinkBold: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 14,
    color: "#F70003",
  },
});
