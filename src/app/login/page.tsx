import type { Metadata } from 'next';
import Image from 'next/image';
import { LoginForm } from '@/components/login/login-form';

export const metadata: Metadata = {
  title: 'Login - Sensa Unity Portal',
  description: 'Sign in to Sensa Unity Portal with your organization email',
};

/**
 * Login page component
 * Features a split-card layout with ocean waves image and login form
 */
export default function LoginPage() {
  // Ocean waves image URL from Figma
  const oceanWavesImage =
    'http://localhost:3845/assets/0c609d47911a99ae4c1d904f6aeed32df7b53ad3.png';

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute left-[-348.3px] top-[49.96px] w-[1581.61px] h-[1171.37px] flex items-center justify-center pointer-events-none">
        <div className="rotate-[7.022deg]">
          <div className="w-[1470.51px] h-[999.104px] opacity-20">
            {/* Decorative vector - can be replaced with actual SVG */}
            <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-400 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      <div className="absolute right-[-434.92px] top-1/2 translate-y-[-50%] w-[1279.84px] h-[1141.59px] flex items-center justify-center pointer-events-none">
        <div className="rotate-[255.088deg]">
          <div className="w-[891.924px] h-[1086.92px] opacity-20">
            {/* Decorative vector - can be replaced with actual SVG */}
            <div className="w-full h-full bg-gradient-to-br from-primary-300 to-primary-500 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Backdrop blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[300px] bg-white/70 pointer-events-none" />

      {/* Main login card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[918px] h-auto md:h-[542px] bg-white rounded-login shadow-[0px_0px_15px_0px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col md:flex-row">
          {/* Left section - Ocean waves image */}
          <div className="relative w-full md:w-[418px] h-[300px] md:h-[542px] shrink-0">
            <Image
              src={oceanWavesImage}
              alt="Ocean waves"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 418px"
            />
          </div>

          {/* Right section - Login form */}
          <div className="w-full md:w-[500px] bg-white flex items-center justify-center min-h-[400px] md:min-h-[542px]">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

