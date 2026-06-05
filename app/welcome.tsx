/**
 * Welcome route — thin wrapper that redirects into the onboarding screen.
 * In this app the welcome view is rendered as an internal state inside
 * onboarding.tsx; this file ensures Expo Router always has a registered
 * `/welcome` route that navigates back to `/onboarding`.
 */
import { Redirect } from 'expo-router';

/** Redirect /welcome back to onboarding. */
export default function WelcomeRoute() {
  return <Redirect href="/onboarding" />;
}
