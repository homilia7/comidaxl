import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [outerPos, setOuterPos] = useState({ x: -100, y: -100 });
  const [isHover, setIsHover] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let targetX = -100;
    let targetY = -100;
    let currentOuterX = -100;
    let currentOuterY = -100;
    let frameId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
      if (!active) setActive(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest('a') ||
        target?.closest('button') ||
        target?.closest('input') ||
        target?.closest('textarea') ||
        target?.closest('.cursor-pointer') ||
        target?.closest('.group')
      ) {
        setIsHover(true);
      } else {
        setIsHover(false);
      }
    };

    const onMouseLeave = () => {
      setActive(false);
    };

    const loop = () => {
      currentOuterX += (targetX - currentOuterX) * 0.16;
      currentOuterY += (targetY - currentOuterY) * 0.16;
      setOuterPos({ x: currentOuterX, y: currentOuterY });
      frameId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    frameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(frameId);
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      <div
        className="mouse-cursor-inner"
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      />
      <div
        className={`mouse-cursor-outer ${isHover ? 'cursor-hover' : ''}`}
        style={{ transform: `translate3d(${outerPos.x}px, ${outerPos.y}px, 0)` }}
      />
    </>
  );
}
