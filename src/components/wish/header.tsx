import { Sparkles, User } from 'lucide-react';

/**
 * Header component for the Wish Tracker application
 * Displays the app logo, title, and user profile
 */
export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-[120px] py-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-6 h-6">
            <Sparkles className="w-6 h-6 text-[#3744d4]" />
          </div>
          <h1 className="text-[22px] font-bold text-[#3744d4]" style={{ fontFamily: 'serif' }}>
            Wish Tracker
          </h1>
        </div>

        {/* User Profile */}
        <div className="flex items-center justify-center w-[30px] h-[30px] bg-gray-300 rounded-full overflow-hidden">
          <User className="w-5 h-5 text-gray-600" />
        </div>
      </div>
    </header>
  );
}
