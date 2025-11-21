import { LoginForm } from '@/components/login-form';
import { ThemeToggle } from '@/components/theme-toggle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Sensa Unity Portal',
  description: 'Sign in to Sensa Unity Portal with your Microsoft account',
};

/**
 * Login Page Component
 * Displays the Sensa Unity Portal login interface
 * Features a split-screen design with decorative imagery and authentication form
 */
export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-gray-900">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Gradient Blob */}
        <div
          className="
            absolute -left-[20%] top-[5%]
            w-[80%] h-[60%]
            bg-gradient-to-br from-blue-200/30 via-purple-200/20 to-transparent
            dark:from-blue-900/20 dark:via-purple-900/10
            blur-3xl
            rotate-[7deg]
          "
        />
        {/* Bottom Right Gradient Blob */}
        <div
          className="
            absolute -right-[25%] bottom-[10%]
            w-[60%] h-[70%]
            bg-gradient-to-tl from-cyan-200/30 via-blue-200/20 to-transparent
            dark:from-cyan-900/20 dark:via-blue-900/10
            blur-3xl
            rotate-[-105deg]
          "
        />
      </div>

      {/* Backdrop Blur Layer */}
      <div className="absolute inset-0 backdrop-blur-[150px] bg-white/70 dark:bg-gray-900/70" />

      {/* Theme Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {/* Login Card */}
        <div
          className="
            w-full max-w-[918px] h-auto md:h-[542px]
            bg-white dark:bg-gray-800
            rounded-[20px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.05)]
            dark:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)]
            overflow-hidden
            flex flex-col md:flex-row
          "
        >
          {/* Left Side - Decorative Image */}
          <div
            className="
              w-full md:w-[418px] h-[200px] md:h-full
              bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500
              dark:from-blue-950 dark:via-blue-800 dark:to-cyan-600
              relative overflow-hidden
              flex-shrink-0
            "
          >
            {/* Ocean Wave Pattern - Decorative */}
            <div className="absolute inset-0 opacity-60">
              <svg
                viewBox="0 0 418 542"
                className="w-full h-full object-cover"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <pattern
                    id="wave-pattern"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M0 50 Q25 25 50 50 T100 50"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                      opacity="0.1"
                    />
                    <path
                      d="M0 60 Q25 35 50 60 T100 60"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                      opacity="0.15"
                    />
                  </pattern>
                </defs>
                <rect width="418" height="542" fill="url(#wave-pattern)" />
              </svg>
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Right Side - Login Form */}
          <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12">
            {/* Sensa Logo */}
            <div className="mb-8 flex flex-col items-center">
              <div className="w-[80px] h-[100px] mb-4 flex items-center justify-center">
                {/* Sensa Logo SVG */}
                <svg
                  viewBox="0 0 107 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Plus Symbol */}
                  <rect
                    x="46"
                    y="20"
                    width="15"
                    height="40"
                    rx="2"
                    fill="currentColor"
                    className="text-gray-900 dark:text-white"
                  />
                  <rect
                    x="34"
                    y="32"
                    width="39"
                    height="15"
                    rx="2"
                    fill="currentColor"
                    className="text-gray-900 dark:text-white"
                  />
                </svg>
              </div>
              {/* Sensa Text Logo */}
              <div className="text-center">
                <h1 className="text-2xl font-bold text-[#05050c] dark:text-white tracking-tight">
                  Sensa
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400 tracking-wide">
                  Trusted data
                </p>
              </div>
            </div>

            {/* Welcome Text */}
            <h2 className="text-xl font-semibold text-[#05050c] dark:text-white text-center mb-8">
              Welcome to Sensa Unity Portal
            </h2>

            {/* Login Form */}
            <div className="w-full max-w-[340px]">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}