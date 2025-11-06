import { Eye } from 'lucide-react';
import { useVisitorCount } from '@/hooks/useVisitorCount';

export const VisitorCounter = () => {
  const { visitorCount, isLoading } = useVisitorCount();

  if (isLoading) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-full shadow-lg">
        <Eye className="h-4 w-4 text-muted-foreground" />
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-medium text-foreground">
            {visitorCount.toLocaleString()}
          </span>
          <span className="text-xs text-muted-foreground">
            {visitorCount === 1 ? 'visitor' : 'visitors'}
          </span>
        </div>
      </div>
    </div>
  );
};