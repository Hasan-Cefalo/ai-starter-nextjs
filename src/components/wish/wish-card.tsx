'use client';

import { MessageSquare, ChevronDown, ChevronRight, Trash2, Send } from 'lucide-react';
import { useState } from 'react';

export interface Remark {
  id: string;
  content: string;
  createdAt: string;
}

export interface WishItem {
  id: string;
  title: string;
  status: 'wish' | 'in-progress' | 'achieved';
  category: string;
  createdAt: string;
  remarks: Remark[];
}

interface WishCardProps {
  wish: WishItem;
  onMoveToAchieved?: () => void;
  onDelete?: () => void;
  onAddRemark?: (content: string) => void;
}

/**
 * WishCard component displays a single wish item with its details
 * Includes collapsible remarks section and action buttons
 */
export default function WishCard({
  wish,
  onMoveToAchieved,
  onDelete,
  onAddRemark,
}: WishCardProps) {
  const [remarksExpanded, setRemarksExpanded] = useState(false);
  const [newRemark, setNewRemark] = useState('');

  const statusLabels = {
    wish: 'Wish',
    'in-progress': 'In Progress',
    achieved: 'Achieved',
  };

  const handleAddRemark = () => {
    if (newRemark.trim() && onAddRemark) {
      onAddRemark(newRemark.trim());
      setNewRemark('');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      {/* Card Header */}
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-base font-medium text-black">{wish.title}</h3>
        <span className="bg-[#f3f3f5] px-3 py-1 rounded-xl text-xs text-black">
          {statusLabels[wish.status]}
        </span>
      </div>

      {/* Category and Date */}
      <div className="flex items-center gap-5 text-sm text-[#717182] mb-4">
        <div className="flex items-center gap-2">
          <span>Category:</span>
          <span>{wish.category}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Created:</span>
          <span>{formatDate(wish.createdAt)}</span>
        </div>
      </div>

      {/* Remarks Toggle Button */}
      <button
        onClick={() => setRemarksExpanded(!remarksExpanded)}
        className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-2xl text-sm font-medium mb-3 hover:bg-gray-50 transition-colors"
      >
        <MessageSquare className="w-5 h-5" />
        <span>Remarks {wish.remarks.length > 0 && `(${wish.remarks.length})`}</span>
        {remarksExpanded ? (
          <ChevronDown className="w-5 h-5" />
        ) : (
          <ChevronRight className="w-5 h-5" />
        )}
      </button>

      {/* Expanded Remarks Section */}
      {remarksExpanded && (
        <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3">
          {/* Remarks List */}
          <div className="space-y-3 mb-3">
            {wish.remarks.map((remark, index) => (
              <div key={remark.id}>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-black">{remark.content}</p>
                  <p className="text-xs text-[#717182]">
                    {formatDateTime(remark.createdAt)}
                  </p>
                </div>
                {index < wish.remarks.length - 1 && (
                  <hr className="mt-3 border-gray-200" />
                )}
              </div>
            ))}
          </div>

          {/* Add Remark Input */}
          <div className="flex items-center gap-2 bg-[#f3f3f5] border border-[#e9e9e9] rounded-lg pl-4 pr-3 py-2">
            <input
              type="text"
              value={newRemark}
              onChange={(e) => setNewRemark(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddRemark()}
              placeholder="Write a remark"
              className="flex-1 bg-transparent text-sm text-black placeholder:text-[#717182] outline-none"
            />
            <button
              onClick={handleAddRemark}
              className="flex items-center justify-center w-[30px] h-[30px] bg-[#3744d4] rounded-full hover:bg-[#2d3ab3] transition-colors"
              disabled={!newRemark.trim()}
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex-1" />
        <div className="flex items-center gap-2.5">
          {wish.status !== 'achieved' && (
            <button
              onClick={onMoveToAchieved}
              className="flex items-center gap-2 px-4 py-2 bg-[#3744d4] text-white text-sm font-medium rounded-full hover:bg-[#2d3ab3] transition-colors"
            >
              <span>Move to Achieved</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={onDelete}
            className="flex items-center justify-center p-2 rounded-2xl hover:bg-gray-100 transition-colors"
          >
            <Trash2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
