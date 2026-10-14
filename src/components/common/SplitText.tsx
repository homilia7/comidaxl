import { useMemo } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  staggerDelay?: number; // ms entre cada letra (default: 28ms)
  startDelay?: number; // ms de inicio (default: 50ms)
}

export function SplitText({
  text,
  className = '',
  staggerDelay = 28,
  startDelay = 50,
}: SplitTextProps) {
  const letters = useMemo(() => text.split(''), [text]);

  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {letters.map((char, index) => {
        const isSpace = char === ' ';
        return (
          <span
            key={`${char}-${index}`}
            className="split-char"
            style={{
              animationDelay: `${startDelay + index * staggerDelay}ms`,
            }}
          >
            {isSpace ? '\u00A0' : char}
          </span>
        );
      })}
    </span>
  );
}
