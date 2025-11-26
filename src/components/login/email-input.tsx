'use client';

import { useFormContext } from 'react-hook-form';
import type { LoginFormData } from '@/lib/validations/login';

interface EmailInputProps {
  name: keyof LoginFormData;
  label?: string;
  placeholder?: string;
  className?: string;
}

/**
 * Email input component with envelope icon
 * Integrates with React Hook Form
 */
export function EmailInput({
  name,
  label,
  placeholder = 'Enter your organisation mail',
  className,
}: EmailInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginFormData>();

  const error = errors[name];

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-text-primary mb-2"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2.5 5.83333L9.0755 11.0504C9.63533 11.4741 10.3647 11.4741 10.9245 11.0504L17.5 5.83333M3.33333 15.8333H16.6667C17.5871 15.8333 18.3333 15.0871 18.3333 14.1667V5.83333C18.3333 4.91286 17.5871 4.16667 16.6667 4.16667H3.33333C2.41286 4.16667 1.66667 4.91286 1.66667 5.83333V14.1667C1.66667 15.0871 2.41286 15.8333 3.33333 15.8333Z"
              stroke={error ? '#ef4444' : '#777777'}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          id={name}
          type="email"
          placeholder={placeholder}
          aria-label={label || 'Email address'}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`
            w-full pl-12 pr-4 py-[9px] rounded-login
            bg-login-inputBg border border-login-inputBorder
            text-sm text-text-primary placeholder:text-login-placeholderText
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
            transition-colors
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
          `}
          {...register(name)}
        />
      </div>
      {error && (
        <p
          id={`${name}-error`}
          className="mt-1 text-sm text-red-500"
          role="alert"
        >
          {error.message}
        </p>
      )}
    </div>
  );
}

