// src/components/AuthIllustration.tsx
import React from 'react';

interface AuthIllustrationProps {
  svgSrc?: string;
  imgSrc?: string;
  alt?: string;
  className?: string;
}

export const AuthIllustration: React.FC<AuthIllustrationProps> = ({
  svgSrc,
  imgSrc,
  alt = 'Illustration',
  className = ''
}) => {
  return (
    <div className={`illustration-wrapper ${className}`} aria-hidden="true">
      {svgSrc ? (
        <img src={svgSrc} className="illustration-bg" alt="" />
      ) : (
        <svg className="illustration-bg" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0" stopColor="#60a5fa" />
              <stop offset="1" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)" />
          <g fill="rgba(255,255,255,0.06)">
            <circle cx="120" cy="80" r="60" />
            <circle cx="500" cy="320" r="80" />
          </g>
        </svg>
      )}

      {imgSrc && (
        <img src={imgSrc} className="illustration-foreground" alt={alt} />
      )}
    </div>
  );
};