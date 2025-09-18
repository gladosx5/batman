import React from 'react';
import { Button } from './Button';

interface EmptyStateProps {
  title: string;
  description?: string;
  ctaText: string;
  onCtaClick: () => void;
  illustration?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  ctaText,
  onCtaClick,
  illustration = '/gourde.png'
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <img 
        src={illustration} 
        alt="Empty state" 
        className="w-32 h-32 mb-6 opacity-50"
      />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-gray-600 mb-6 max-w-md">
          {description}
        </p>
      )}
      <Button 
        onClick={onCtaClick}
        className="animate-pulse"
        style={{ animationDuration: '1.6s' }}
      >
        {ctaText}
      </Button>
    </div>
  );
};