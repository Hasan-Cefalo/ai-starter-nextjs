import { Metadata } from 'next';
import SensaUnityLanding from '@/components/sensa-landing/sensa-unity-landing';

export const metadata: Metadata = {
  title: 'Sensa Unity Portal - Login',
  description: 'Welcome to Sensa Unity Portal. Sign in with your organisation email or Microsoft account.',
};

/**
 * Sensa Unity Landing Page
 *
 * Route: /sensa-landing
 *
 * This page displays the Sensa Unity Portal login interface
 * with email input and Microsoft SSO integration.
 */
export default function SensaLandingPage() {
  return <SensaUnityLanding />;
}