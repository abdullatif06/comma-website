import React from 'react';

export function Logo({ className = "", fill = "currentColor" }: { className?: string, fill?: string }) {
  return (
    <span className={`font-serif text-2xl font-bold tracking-widest ${className}`} style={{ color: fill }}>
      COMMA
    </span>
  );
}
