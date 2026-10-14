import { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 950);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#0b0c10] transition-all duration-500 ease-out ${
        fadeOut ? 'opacity-0 -translate-y-6 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer rotating neon ring */}
        <div className="w-24 h-24 rounded-full border-2 border-transparent border-t-[#ff5500] border-r-[#ff8800] animate-spin" />
        
        {/* Inner pulsing flame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#ff3c00] to-[#ff8c00] p-0.5 shadow-xl shadow-[#ff5500]/30 animate-pulse">
            <div className="w-full h-full bg-[#121418] rounded-[14px] flex items-center justify-center">
              <Flame className="w-8 h-8 text-[#ff5500]" />
            </div>
          </div>
        </div>
      </div>

      {/* Brand title loading */}
      <div className="mt-6 text-center">
        <h3 className="font-heading text-2xl tracking-widest text-white uppercase">
          COMIDA CALLEJERA <span className="text-[#ff5500]">XL</span>
        </h3>
        <p className="text-[11px] text-gray-400 tracking-widest uppercase mt-1 animate-pulse">
          Cargando Sabor Monumental...
        </p>
      </div>
    </div>
  );
}
