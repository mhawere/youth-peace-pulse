import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  lines?: number;
  height?: string;
  width?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className, 
  variant = 'rectangular',
  lines = 1,
  height,
  width
}) => {
  const baseClasses = "skeleton rounded animate-skeleton";
  
  const variantClasses = {
    text: "h-4 w-full",
    circular: "rounded-full",
    rectangular: "rounded-md",
    card: "rounded-lg"
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={cn("space-y-2", className)}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={cn(
              baseClasses,
              variantClasses.text,
              index === lines - 1 && "w-3/4" // Last line is shorter
            )}
            style={{ height, width: index === lines - 1 ? '75%' : width }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      style={{ height, width }}
    />
  );
};

// Pre-built skeleton components for common use cases
export const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("border rounded-lg p-6 space-y-4", className)}>
    <Skeleton variant="rectangular" className="h-32 w-full" />
    <div className="space-y-2">
      <Skeleton variant="text" className="h-6 w-3/4" />
      <Skeleton variant="text" lines={3} />
    </div>
    <div className="flex space-x-2">
      <Skeleton variant="rectangular" className="h-8 w-16" />
      <Skeleton variant="rectangular" className="h-8 w-20" />
    </div>
  </div>
);

export const SkeletonAvatar: React.FC<{ className?: string }> = ({ className }) => (
  <Skeleton variant="circular" className={cn("h-10 w-10", className)} />
);

export const SkeletonButton: React.FC<{ className?: string }> = ({ className }) => (
  <Skeleton variant="rectangular" className={cn("h-10 w-24 rounded", className)} />
);

export const SkeletonTable: React.FC<{ rows?: number; columns?: number }> = ({ 
  rows = 5, 
  columns = 4 
}) => (
  <div className="space-y-3">
    {/* Header */}
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {Array.from({ length: columns }).map((_, index) => (
        <Skeleton key={`header-${index}`} variant="text" className="h-6" />
      ))}
    </div>
    {/* Rows */}
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div
        key={`row-${rowIndex}`}
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {Array.from({ length: columns }).map((_, colIndex) => (
          <Skeleton key={`cell-${rowIndex}-${colIndex}`} variant="text" className="h-5" />
        ))}
      </div>
    ))}
  </div>
);

export const SkeletonBlog: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("space-y-6", className)}>
    <Skeleton variant="rectangular" className="h-64 w-full rounded-lg" />
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <SkeletonAvatar />
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" className="h-4 w-32" />
          <Skeleton variant="text" className="h-3 w-24" />
        </div>
      </div>
      <Skeleton variant="text" className="h-8 w-3/4" />
      <Skeleton variant="text" lines={4} />
      <div className="flex space-x-2">
        <Skeleton variant="rectangular" className="h-6 w-16 rounded-full" />
        <Skeleton variant="rectangular" className="h-6 w-20 rounded-full" />
        <Skeleton variant="rectangular" className="h-6 w-14 rounded-full" />
      </div>
    </div>
  </div>
);

export default Skeleton;