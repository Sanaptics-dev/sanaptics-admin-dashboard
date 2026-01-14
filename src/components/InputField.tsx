// components/InputField.tsx
import React from 'react';

interface InputFieldProps {
  id?: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  disabled = false,
  className = ''
}) => {
  return (
    <div className={`input-field`}>
      {icon && <span className="input-icon">{icon}</span>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`input ${className}`}
        disabled={disabled}
      />
    </div>
  );
};