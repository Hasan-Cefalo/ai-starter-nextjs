'use client';

import { List, FolderOpen } from 'lucide-react';
import { useState } from 'react';

/**
 * Sidebar navigation component for the Wish Tracker
 * Allows navigation between Wish List and Categories views
 */
export default function Sidebar() {
  const [activeTab, setActiveTab] = useState<'wishlist' | 'categories'>('wishlist');

  return (
    <div className="w-[220px] bg-[#ececf0] border border-[#e9e9e9] rounded-lg overflow-hidden">
      <button
        onClick={() => setActiveTab('wishlist')}
        className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
          activeTab === 'wishlist'
            ? 'bg-[#f3f3f5] text-black'
            : 'bg-transparent text-black hover:bg-[#f3f3f5]/50'
        }`}
      >
        <List className="w-5 h-5" />
        <span>Wish List</span>
      </button>

      <button
        onClick={() => setActiveTab('categories')}
        className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
          activeTab === 'categories'
            ? 'bg-white text-black'
            : 'bg-transparent text-black hover:bg-white/50'
        }`}
      >
        <FolderOpen className="w-5 h-5" />
        <span>Categories</span>
      </button>
    </div>
  );
}
