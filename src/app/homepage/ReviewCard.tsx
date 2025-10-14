'use client';

import { useState } from 'react';
import { clsx } from 'clsx/lite';

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full"
            referrerPolicy="no-referrer"
            src={review.profile_photo_url}
            alt={review.author_name}
          />
          <div>
            <p className="font-semibold text-slate-800">{review.author_name}</p>
            <p className="text-xs text-slate-500">{review.relative_time_description}</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {new Array(review.rating).fill(null).map((_, i) => (
            <span key={`review_${i}`} className="text-amber-400 text-lg">
              ★
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className={clsx('text-slate-700 text-sm leading-relaxed', !isExpanded && 'line-clamp-4')}>
          {review.text}
        </p>
        {review.text.length > 200 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-1 transition-colors"
          >
            {isExpanded ? 'See less' : 'See more'}
          </button>
        )}
      </div>
    </div>
  );
};

type ReviewCardProps = {
  review: Review;
};

type Review = {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
};
