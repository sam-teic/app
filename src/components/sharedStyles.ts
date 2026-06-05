/**
 * Shared React Native styles imported by multiple screens.
 * All web-only CSS properties (backdropFilter, boxShadow, borderBottom shorthands)
 * have been replaced with React Native equivalents.
 */
import { StyleSheet } from 'react-native';
import { PS_400, PS_600, POP_400, POP_600 } from './fonts';

export const shared = StyleSheet.create({
  // ── Full-screen container ────────────────────────────────────
  screen: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    position: 'relative',
  },

  // ── Primary action button (red pill, full-width) ─────────────
  primaryBtn: {
    backgroundColor: '#F70003',
    borderRadius: 32,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#BC0001',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  primaryBtnText: {
    fontFamily: PS_400,
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  // ── Form input field wrapper ─────────────────────────────────
  inputWrapper: {
    height: 56,
    borderRadius: 32,
    backgroundColor: 'rgba(128,128,128,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    overflow: 'hidden',
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 24,
  },
  inputText: {
    flex: 1,
    fontFamily: PS_400,
    fontSize: 16,
    color: 'rgba(21,20,20,0.4)',
  },

  // ── Auth link row (bottom of form) ───────────────────────────
  authLinkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authLinkNormal: {
    fontFamily: POP_400,
    fontSize: 14,
    color: '#64748B',
  },
  authLinkBold: {
    fontFamily: POP_600,
    fontSize: 14,
    color: '#F70003',
  },
});
