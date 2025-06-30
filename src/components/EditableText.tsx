
import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Check, X, Edit2 } from 'lucide-react';

interface EditableTextProps {
  children: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const EditableText: React.FC<EditableTextProps> = ({
  children,
  value,
  onChange,
  multiline = false,
  className = '',
  as: Component = 'div'
}) => {
  const { isEditMode } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleSave = () => {
    onChange(editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  if (!isEditMode) {
    return <Component className={className}>{children}</Component>;
  }

  if (isEditing) {
    return (
      <div className={`relative ${className}`}>
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
          <Button size="sm" onClick={handleSave}>
            <Check className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline" onClick={handleCancel}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      <Component className="w-full">{children}</Component>
      {isEditMode && (
        <Button
          size="sm"
          variant="ghost"
          className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => setIsEditing(true)}
        >
          <Edit2 className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
};

export default EditableText;
