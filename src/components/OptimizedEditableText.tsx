import React, { useState, useCallback, memo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Check, X, Edit2 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface OptimizedEditableTextProps {
  children: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

// Memoized editable text component to prevent unnecessary re-renders
const OptimizedEditableText = memo<OptimizedEditableTextProps>(({
  children,
  value,
  onChange,
  multiline = false,
  className = '',
  as: Component = 'div'
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const { isAdmin } = useAuth();

  const handleSave = useCallback(() => {
    onChange(editValue);
    setIsEditing(false);
  }, [editValue, onChange]);

  const handleCancel = useCallback(() => {
    setEditValue(value);
    setIsEditing(false);
  }, [value]);

  const startEditing = useCallback(() => {
    setEditValue(value);
    setIsEditing(true);
  }, [value]);

  // Non-admin users get static content
  if (!isAdmin) {
    return React.createElement(Component, { className }, children);
  }

  if (isEditing) {
    return (
      <div className={`relative ${className} border-2 border-blue-500 rounded-lg p-2 bg-blue-50`}>
        <div className="text-xs text-blue-600 font-medium mb-2">✏️ Editing Text:</div>
        {multiline ? (
          <Textarea
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="w-full min-h-[100px]"
            autoFocus
          />
        ) : (
          <Input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="w-full"
            autoFocus
          />
        )}
        <div className="flex gap-2 mt-2">
          <Button size="sm" onClick={handleSave} className="bg-green-600 hover:bg-green-700">
            <Check className="h-4 w-4 mr-1" />
            Save
          </Button>
          <Button size="sm" variant="outline" onClick={handleCancel}>
            <X className="h-4 w-4 mr-1" />
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative group ${className} border-2 border-dashed border-yellow-400 hover:border-yellow-500 hover:bg-yellow-50`}>
      {React.createElement(Component, { className: "w-full" }, children)}
      <Button
        size="sm"
        className="absolute -top-2 -right-2 bg-yellow-500 text-black hover:bg-yellow-600 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg"
        onClick={startEditing}
      >
        <Edit2 className="h-3 w-3 mr-1" />
        Edit
      </Button>
    </div>
  );
});

OptimizedEditableText.displayName = 'OptimizedEditableText';

export default OptimizedEditableText;