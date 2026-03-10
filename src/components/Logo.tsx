import React from 'react';

export function Logo({ className = "w-10 h-10", fill = "currentColor" }: { className?: string, fill?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
      <text x="50%" y="80%" fontFamily="Arial, Helvetica, sans-serif" fontSize="120" fontWeight="bold" textAnchor="middle" fill={fill}>,</text>
    </svg>
  );
}
