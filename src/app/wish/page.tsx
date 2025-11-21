'use client';

import { useState } from 'react';
import { Search, ChevronDown, Plus } from 'lucide-react';
import Header from '@/components/wish/header';
import Sidebar from '@/components/wish/sidebar';
import WishCard, { WishItem } from '@/components/wish/wish-card';

type TabType = 'wish' | 'in-progress' | 'achieved';

/**
 * Wish Tracker main page
 * Displays wish list with filtering and management capabilities
 */
export default function WishTrackerPage() {
  const [activeTab, setActiveTab] = useState<TabType>('wish');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const categories = ['All Categories', 'Travel', 'Gadgets', 'Personal', 'Career'];

  // Sample data - in a real app, this would come from a database or API
  const [wishes, setWishes] = useState<WishItem[]>([
    {
      id: '1',
      title: 'Wish list 1',
      status: 'in-progress',
      category: 'Travel',
      createdAt: '2025-11-13',
      remarks: [
        {
          id: 'r1',
          content: 'New remarks',
          createdAt: '2025-11-14T11:24:00',
        },
        {
          id: 'r2',
          content: 'Test remarks',
          createdAt: '2025-11-13T10:33:00',
        },
        {
          id: 'r3',
          content: 'Test remarks',
          createdAt: '2025-11-13T10:33:00',
        },
      ],
    },
    {
      id: '2',
      title: 'Wish list 2',
      status: 'in-progress',
      category: 'Gadgets',
      createdAt: '2025-11-11',
      remarks: [],
    },
  ]);

  // Filter wishes based on active tab and search query
  const filteredWishes = wishes.filter((wish) => {
    const matchesTab = wish.status === activeTab;
    const matchesSearch = wish.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All Categories' || wish.category === selectedCategory;
    return matchesTab && matchesSearch && matchesCategory;
  });

  const handleMoveToAchieved = (wishId: string) => {
    setWishes((prev) =>
      prev.map((wish) =>
        wish.id === wishId ? { ...wish, status: 'achieved' as const } : wish
      )
    );
  };

  const handleDeleteWish = (wishId: string) => {
    setWishes((prev) => prev.filter((wish) => wish.id !== wishId));
  };

  const handleAddRemark = (wishId: string, content: string) => {
    setWishes((prev) =>
      prev.map((wish) =>
        wish.id === wishId
          ? {
              ...wish,
              remarks: [
                ...wish.remarks,
                {
                  id: `r${Date.now()}`,
                  content,
                  createdAt: new Date().toISOString(),
                },
              ],
            }
          : wish
      )
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex gap-8 px-[120px] pt-5">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <div className="flex-1 flex flex-col gap-2.5">
          {/* Page Title */}
          <div className="mb-2">
            <h2 className="text-2xl font-medium text-black mb-0.5">Wish List</h2>
            <p className="text-sm text-[#717182]">
              Track your wishes from idea to achievement
            </p>
          </div>

          {/* Search and Actions Bar */}
          <div className="flex items-center gap-2.5 h-9">
            {/* Search Input */}
            <div className="flex-1 flex items-center gap-2 px-3 py-1 border border-[#e9e9e9] rounded-lg">
              <Search className="w-5 h-5 text-[#717182]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title..."
                className="flex-1 text-sm text-[#717182] placeholder:text-[#717182] outline-none bg-transparent"
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="flex items-center justify-between w-[220px] h-9 px-4 bg-[#f3f3f5] rounded-lg text-sm hover:bg-[#e8e8ec] transition-colors"
              >
                <span>{selectedCategory}</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              {categoryDropdownOpen && (
                <div className="absolute top-full mt-1 w-[220px] bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCategoryDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#f3f3f5] font-medium'
                          : ''
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Add New Wish Button */}
            <button className="flex items-center gap-2 px-3 py-2 bg-[#3744d4] text-white text-sm font-medium rounded-lg hover:bg-[#2d3ab3] transition-colors">
              <Plus className="w-5 h-5" />
              <span>Add New Wish</span>
            </button>
          </div>

          {/* Tabs */}
          <div className="bg-[#f3f3f5] p-1 rounded-2xl flex items-center">
            <button
              onClick={() => setActiveTab('wish')}
              className={`flex-1 px-2.5 py-1 text-sm font-medium rounded-xl transition-colors ${
                activeTab === 'wish'
                  ? 'bg-white text-black'
                  : 'bg-transparent text-black hover:bg-white/50'
              }`}
            >
              Wish
            </button>
            <button
              onClick={() => setActiveTab('in-progress')}
              className={`flex-1 px-2.5 py-1 text-sm font-medium rounded-xl transition-colors ${
                activeTab === 'in-progress'
                  ? 'bg-white text-black'
                  : 'bg-transparent text-black hover:bg-white/50'
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setActiveTab('achieved')}
              className={`flex-1 px-2.5 py-1 text-sm font-medium rounded-xl transition-colors ${
                activeTab === 'achieved'
                  ? 'bg-white text-black'
                  : 'bg-transparent text-black hover:bg-white/50'
              }`}
            >
              Achieved
            </button>
          </div>

          {/* Wish Cards */}
          <div className="flex flex-col gap-2.5">
            {filteredWishes.length === 0 ? (
              <div className="text-center py-12 text-[#717182]">
                <p>No wishes found in this category.</p>
              </div>
            ) : (
              filteredWishes.map((wish) => (
                <WishCard
                  key={wish.id}
                  wish={wish}
                  onMoveToAchieved={() => handleMoveToAchieved(wish.id)}
                  onDelete={() => handleDeleteWish(wish.id)}
                  onAddRemark={(content) => handleAddRemark(wish.id, content)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
