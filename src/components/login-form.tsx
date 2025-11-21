'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from '@/types/auth';
import { useState } from 'react';

/**
 * LoginForm component
 * Handles user authentication with Microsoft sign-in
 * Includes email validation and Microsoft OAuth integration
 */
export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
    },
  });

  /**
   * Handle Microsoft sign-in
   * Initiates OAuth flow with Microsoft
   */
  const handleMicrosoftSignIn = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement Microsoft OAuth integration
      console.log('Initiating Microsoft sign-in...');
      // Redirect to Microsoft OAuth endpoint
      // window.location.href = '/api/auth/microsoft';
    } catch (error) {
      console.error('Microsoft sign-in failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle form submission
   * Validates email and proceeds with authentication
   */
  const onSubmit = (data: LoginFormData) => {
    console.log('Login form submitted:', data);
    handleMicrosoftSignIn();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full"
    >
      {/* Email Input */}
      <div className="flex flex-col gap-2">
        <div className="relative">
          <div
            className={`
              bg-[#f1f1f1] dark:bg-gray-800
              border border-[#eaeaea] dark:border-gray-700
              rounded-[20px] px-4 py-2.5
              flex items-center gap-2
              transition-all duration-200
              ${errors.email ? 'border-red-500 dark:border-red-400' : ''}
              focus-within:border-[#008dff] dark:focus-within:border-blue-400
            `}
          >
            {/* Envelope Icon */}
            <div className="flex-shrink-0 w-5 h-5">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M3.33333 5.83333C3.33333 5.39131 3.50893 4.96738 3.82149 4.65482C4.13405 4.34226 4.55797 4.16667 5 4.16667H15C15.442 4.16667 15.866 4.34226 16.1785 4.65482C16.4911 4.96738 16.6667 5.39131 16.6667 5.83333V14.1667C16.6667 14.6087 16.4911 15.0326 16.1785 15.3452C15.866 15.6577 15.442 15.8333 15 15.8333H5C4.55797 15.8333 4.13405 15.6577 3.82149 15.3452C3.50893 15.0326 3.33333 14.6087 3.33333 14.1667V5.83333Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500 dark:text-gray-400"
                />
                <path
                  d="M3.33333 5.83333L10 10.8333L16.6667 5.83333"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500 dark:text-gray-400"
                />
              </svg>
            </div>
            {/* Email Input Field */}
            <input
              type="email"
              placeholder="your.email@sensa.com"
              {...register('email')}
              className="
                flex-1 bg-transparent outline-none
                text-[#05050c] dark:text-gray-100
                text-sm font-normal
                placeholder:text-gray-400 dark:placeholder:text-gray-500
              "
              disabled={isLoading}
            />
          </div>
        </div>
        {errors.email && (
          <p className="text-red-500 dark:text-red-400 text-xs px-4">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Microsoft Sign In Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="
          bg-[#008dff] hover:bg-[#0077d9]
          dark:bg-blue-600 dark:hover:bg-blue-700
          text-white font-semibold text-sm
          px-5 py-2.5 rounded-[20px]
          flex items-center justify-center gap-2
          transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          shadow-sm hover:shadow-md
        "
      >
        {/* Microsoft Logo */}
        <div className="w-4 h-4 flex-shrink-0">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <rect width="7.5" height="7.5" fill="white" />
            <rect x="8.5" width="7.5" height="7.5" fill="white" />
            <rect y="8.5" width="7.5" height="7.5" fill="white" />
            <rect x="8.5" y="8.5" width="7.5" height="7.5" fill="white" />
          </svg>
        </div>
        <span>{isLoading ? 'Signing in...' : 'Sign in with Microsoft'}</span>
      </button>
    </form>
  );
}