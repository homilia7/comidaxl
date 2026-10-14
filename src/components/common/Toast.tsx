import { useEffect } from 'react';
import { Flame, CheckCircle2 } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  description: string;
  image?: string;
}

interface ToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
}

export function Toast({ toast, onClose }: ToastProps) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 2800);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <div className="bg-[#141822]/95 backdrop-blur-md border border-[#ff5500]/50 shadow-2xl shadow-[#ff5500]/20 rounded-2xl p-3.5 pr-5 flex items-center gap-3.5 animate-toast text-white">
        {toast.image ? (
          <img src={toast.image} alt={toast.title} className="w-11 h-11 rounded-xl object-cover border border-white/10" />
        ) : (
          <div className="w-10 h-10 rounded-xl bg-[#ff5500]/20 border border-[#ff5500] flex items-center justify-center">
            <Flame className="w-5 h-5 text-[#ff5500]" />
          </div>
        )}

        <div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <h5 className="text-xs font-black uppercase tracking-wider text-white">
              {toast.title}
            </h5>
          </div>
          <p className="text-[11px] text-gray-300 font-medium">{toast.description}</p>
        </div>
      </div>
    </div>
  );
}
