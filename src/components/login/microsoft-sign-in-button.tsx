'use client';

import { useState } from 'react';

interface MicrosoftSignInButtonProps {
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
  className?: string;
}

/**
 * Microsoft sign-in button component
 * Handles Microsoft authentication flow
 */
export function MicrosoftSignInButton({
  onClick,
  disabled = false,
  className = '',
}: MicrosoftSignInButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (disabled || isLoading) return;

    setIsLoading(true);
    try {
      if (onClick) {
        await onClick();
      } else {
        // Future: Implement Microsoft authentication flow
        console.log('Microsoft sign-in clicked');
      }
    } catch (error) {
      console.error('Sign-in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`
        w-full px-5 py-[9px] rounded-login
        bg-login-buttonBg
        flex items-center justify-center gap-2.5
        text-sm font-semibold text-login-buttonText
        hover:opacity-80 active:opacity-70
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-opacity
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        ${className}
      `}
      aria-label="Sign in with Microsoft"
      aria-busy={isLoading}
    >
      <div className="w-4 h-4 shrink-0">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="1" y="1" width="6" height="6" fill="#F25022" />
          <rect x="9" y="1" width="6" height="6" fill="#7FBA00" />
          <rect x="1" y="9" width="6" height="6" fill="#00A4EF" />
          <rect x="9" y="9" width="6" height="6" fill="#FFB900" />
        </svg>
      </div>
      <span>{isLoading ? 'Signing in...' : 'Sign in with Microsoft'}</span>
    </button>
  );
}

