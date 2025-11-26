'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Sensa Unity Landing Page Component
 *
 * A login/landing page for Sensa Unity Portal featuring:
 * - Split layout with decorative ocean image and login form
 * - Email input field
 * - Microsoft SSO sign-in button (disabled state)
 */
export default function SensaUnityLanding() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Decorative background shapes */}
      <div className="absolute left-[-348px] top-[50px] h-[1171px] w-[1582px] opacity-20">
        <div
          className="h-full w-full bg-gradient-to-br from-purple-300 to-blue-400"
          style={{
            transform: 'rotate(7deg)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="absolute right-[-435px] top-1/2 h-[1142px] w-[1280px] -translate-y-1/2 opacity-20">
        <div
          className="h-full w-full bg-gradient-to-tl from-pink-300 to-purple-400"
          style={{
            transform: 'rotate(255deg)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Backdrop blur overlay */}
      <div
        className="absolute inset-0 backdrop-blur-[300px]"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
      />

      {/* Main content card */}
      <div className="relative z-10 flex h-[542px] w-[918px] overflow-hidden rounded-[20px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.05)]">
        {/* Left side - Ocean image */}
        <div className="relative h-full w-[418px]">
          <Image
            src="/assets/sensa-landing/ocean-bg.png"
            alt="Decorative ocean background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right side - Login form */}
        <div className="relative flex h-full w-[500px] flex-col items-center bg-white px-[40px]">
          {/* Logo */}
          <div className="mt-[70px] flex flex-col items-center">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-[40px] w-[40px]">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                >
                  <rect x="0" y="16" width="16" height="8" fill="#000000" />
                  <rect x="24" y="16" width="16" height="8" fill="#000000" />
                  <rect x="16" y="0" width="8" height="16" fill="#000000" />
                  <rect x="16" y="24" width="8" height="16" fill="#000000" />
                </svg>
              </div>
            </div>
            <div className="text-center">
              <div className="text-[24px] font-semibold leading-tight text-black">
                Sensa
              </div>
              <div className="text-[10px] leading-tight text-black">
                Trusted data
              </div>
            </div>
          </div>

          {/* Welcome text */}
          <h1 className="mt-[48px] text-center text-[20px] font-semibold leading-[28px] text-[#05050c]">
            Welcome to Sensa Unity Portal
          </h1>

          {/* Email input */}
          <div className="mt-[40px] w-[340px]">
            <div className="flex items-center gap-[8px] rounded-[20px] border border-[#777777] bg-[#f1f1f1] px-[16px] py-[9px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M3.33333 5.83333L10 10.8333L16.6667 5.83333M3.33333 5H16.6667C17.1269 5 17.5 5.3731 17.5 5.83333V14.1667C17.5 14.6269 17.1269 15 16.6667 15H3.33333C2.8731 15 2.5 14.6269 2.5 14.1667V5.83333C2.5 5.3731 2.8731 5 3.33333 5Z"
                  stroke="rgba(5, 5, 12, 0.46)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="email"
                placeholder="Enter your organisation mail"
                className="flex-1 bg-transparent text-[14px] leading-[22px] text-[#05050c] outline-none placeholder:text-[rgba(5,5,12,0.46)]"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              />
            </div>
          </div>

          {/* Microsoft sign-in button (disabled) */}
          <div className="mt-[26px]">
            <button
              disabled
              className="flex items-center gap-[10px] rounded-[20px] bg-[rgba(197,195,201,0.46)] px-[20px] py-[9px] opacity-50 cursor-not-allowed"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="7.5" height="7.5" fill="#F25022" />
                <rect x="8.5" width="7.5" height="7.5" fill="#7FBA00" />
                <rect y="8.5" width="7.5" height="7.5" fill="#00A4EF" />
                <rect x="8.5" y="8.5" width="7.5" height="7.5" fill="#FFB900" />
              </svg>
              <span
                className="text-[14px] font-semibold leading-[22px] text-[rgba(5,5,12,0.16)]"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Sign in with Microsoft
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}