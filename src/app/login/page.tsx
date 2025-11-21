'use client';

import Image from 'next/image';
import { useState, FormEvent } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleMicrosoftSignIn();
  };

  const handleMicrosoftSignIn = () => {
    // TODO: Implement Microsoft authentication
    console.log('Sign in with Microsoft', { email });
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative background elements - hidden on mobile */}
      <div className="hidden lg:block absolute left-[-348px] top-[50px] w-[1470px] h-[999px] opacity-30">
        <div className="rotate-[7deg]">
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl" />
        </div>
      </div>
      <div className="hidden lg:block absolute right-[-435px] top-[50%] translate-y-[-50%] w-[892px] h-[1087px] opacity-30">
        <div className="rotate-[255deg]">
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl" />
        </div>
      </div>

      {/* Backdrop blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[300px] bg-white/70" />

      {/* Main login card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-[918px] h-auto lg:h-[542px] bg-white rounded-[20px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row">
          {/* Left side - Image - hidden on mobile */}
          <div className="hidden lg:block absolute left-0 top-0 w-[418px] h-full">
            <Image
              src="/images/login/ocean-waves.jpg"
              alt="Ocean waves"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right side - Login form */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 w-full lg:w-[500px] min-h-[542px] lg:h-full bg-white flex flex-col items-center justify-center px-4 sm:px-8 py-12 lg:py-0">
            {/* Logo */}
            <div className="mb-6 lg:mb-8">
              <Image
                src="/images/login/logo.svg"
                alt="Sensa Logo"
                width={107}
                height={130}
                className="w-auto h-[100px] lg:h-[130px]"
                priority
              />
            </div>

            {/* Welcome message */}
            <h1 className="text-lg sm:text-[20px] font-semibold text-[#05050c] text-center mb-6 lg:mb-8 leading-[28px]">
              Welcome to Sensa Unity Portal
            </h1>

            {/* Login form */}
            <form onSubmit={handleSubmit} className="w-full max-w-[340px] flex flex-col items-center">
              {/* Email input */}
              <div className="w-full mb-6">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="bg-[#f1f1f1] border border-[#eaeaea] rounded-[20px] px-4 py-[9px] flex items-center gap-2 focus-within:ring-2 focus-within:ring-[#008dff] focus-within:ring-offset-2 transition-all">
                  <div className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                    <Image
                      src="/images/login/email-icon.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="w-full h-full"
                    />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="williamson@sensa.com"
                    className="flex-1 bg-transparent border-none outline-none text-[14px] text-[#05050c] leading-[22px] placeholder:text-[#05050c]"
                    aria-label="Email address"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Microsoft sign-in button */}
              <button
                type="submit"
                className="w-full bg-[#008dff] hover:bg-[#0073cc] active:bg-[#005fa3] text-white font-semibold text-[14px] leading-[22px] px-5 py-[9px] rounded-[20px] flex items-center justify-center gap-2.5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#008dff] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Sign in with Microsoft"
              >
                <Image
                  src="/images/login/microsoft-icon.png"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                  aria-hidden="true"
                />
                <span>Sign in with Microsoft</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

