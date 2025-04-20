
import { useEffect, useState, useRef } from 'react';

interface TerminalAnimationProps {
  lines: string[];
  typingSpeed?: number;
  loopDelay?: number;
}

const TerminalAnimation = ({ 
  lines, 
  typingSpeed = 50, 
  loopDelay = 3000 
}: TerminalAnimationProps) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typeChar = () => {
      if (currentLine >= lines.length) {
        // All lines typed, reset after delay
        timeoutRef.current = setTimeout(() => {
          setDisplayedLines([]);
          setCurrentLine(0);
          setCurrentChar(0);
        }, loopDelay);
        return;
      }

      const line = lines[currentLine];
      
      if (currentChar < line.length) {
        // Still typing current line
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (newLines.length <= currentLine) {
            newLines.push(line.substring(0, currentChar + 1));
          } else {
            newLines[currentLine] = line.substring(0, currentChar + 1);
          }
          return newLines;
        });
        setCurrentChar(prev => prev + 1);
        timeoutRef.current = setTimeout(typeChar, typingSpeed);
      } else {
        // Line complete, move to next line
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
        timeoutRef.current = setTimeout(typeChar, typingSpeed * 2);
      }
    };

    timeoutRef.current = setTimeout(typeChar, typingSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentLine, currentChar, lines, typingSpeed, loopDelay]);

  return (
    <div className="font-mono text-xs text-green-400 min-h-[100px] overflow-hidden">
      {displayedLines.map((line, idx) => (
        <p key={idx} className={idx === currentLine ? 'typing-current' : ''}>
          &gt; {line}
          {idx === displayedLines.length - 1 && <span className="animate-pulse">_</span>}
        </p>
      ))}
    </div>
  );
};

export default TerminalAnimation;
