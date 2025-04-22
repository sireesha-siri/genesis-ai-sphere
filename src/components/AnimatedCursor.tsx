
import { useState, useEffect } from 'react';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mouseover', onMouseOver);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.tagName.toLowerCase() === 'a' || 
                    target.tagName.toLowerCase() === 'button' ||
                    target.closest('a') || 
                    target.closest('button');
      setLinkHovered(!!isLink); // Fixed: Convert to boolean with !!
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const cursorClasses = `transition-opacity duration-300 ${hidden ? 'opacity-0' : 'opacity-100'} fixed top-0 left-0 pointer-events-none z-[9999]`;

  return (
    <>
      <style>{`
        body {
          cursor: none;
        }
        a, button, [role="button"] {
          cursor: none;
        }
      `}</style>
      <div
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {/* Inner dot */}
        <div
          className="absolute rounded-full bg-[#3B82F6]"
          style={{
            width: '8px',
            height: '8px',
            transform: 'translate(-50%, -50%)',
            transition: 'transform 0.1s ease'
          }}
        />
        {/* Outer ring */}
        <div
          className="absolute rounded-full border-2 border-[#8B5CF6] bg-transparent"
          style={{
            width: '32px',
            height: '32px',
            opacity: clicked ? 0.4 : 0.6,
            transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1}) ${linkHovered ? 'scale(1.5)' : ''}`,
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out'
          }}
        />
      </div>
    </>
  );
};

export default AnimatedCursor;
