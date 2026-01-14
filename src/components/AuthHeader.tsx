// src/components/AuthHeader.tsx
import React from 'react';

interface AuthHeaderProps {
  title: string;
  subtitle: React.ReactNode;
  className?: string;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({ 
  title, 
  subtitle, 
  className = '' 
}) => {
  return (
    <div className={`auth-header ${className}`}>
      <h1 className="auth-title">{title}</h1>
      <div className="auth-subtitle">{subtitle}</div>
    </div>
  );
};