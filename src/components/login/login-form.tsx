'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from '@/lib/validations/login';
import { EmailInput } from './email-input';
import { MicrosoftSignInButton } from './microsoft-sign-in-button';

/**
 * Sensa logo component
 */
function SensaLogo() {
  return (
    <div className="w-[107px] h-[130px] flex flex-col items-center justify-center mb-8">
      <div className="relative w-full h-full">
        {/* Logo SVG - Simplified version based on Figma design */}
        <svg
          width="107"
          height="130"
          viewBox="0 0 107 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Sensa logo"
        >
          {/* Plus/X symbol */}
          <path
            d="M53.5 20L53.5 80M20 53.5L80 53.5M40 40L67 67M67 40L40 67"
            stroke="#05050c"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        {/* Brand name and tagline */}
        <div className="absolute bottom-0 left-0 right-0 text-center">
          <h1 className="text-lg font-bold text-login-headingText">Sensa</h1>
          <p className="text-xs text-text-secondary mt-1">Trusted data</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Login form component
 * Contains the right panel of the login card (white form area)
 */
export function LoginForm() {
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Future: Implement login logic
      console.log('Form submitted:', data);
      // Handle Microsoft authentication flow
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full max-w-[500px] mx-auto px-8 py-10 flex flex-col items-center"
        noValidate
      >
        <SensaLogo />

        <h2 className="text-xl font-semibold text-login-headingText text-center mb-8">
          Welcome to Sensa Unity Portal
        </h2>

        <div className="w-full max-w-[340px] mb-6">
          <EmailInput name="email" />
        </div>

        <div className="w-full max-w-[340px]">
          <MicrosoftSignInButton />
        </div>
      </form>
    </FormProvider>
  );
}

