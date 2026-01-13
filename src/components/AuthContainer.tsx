// src/components/AuthContainer.tsx
import React, { ReactNode } from 'react';

interface AuthContainerProps {
  children: ReactNode;
  className?: string;
}

export const AuthContainer: React.FC<AuthContainerProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`auth-page ${className}`}>
      <div className="auth-card">
        {children}
      </div>
    </div>
  );
};