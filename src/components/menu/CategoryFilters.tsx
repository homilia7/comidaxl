import { ProductCategory } from '../../types/product';
import { Utensils, Beef, Drumstick, Layers, Sparkles, GlassWater } from 'lucide-react';

interface CategoryFiltersProps {
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  productCounts: Record<ProductCategory, number>;
}

export function CategoryFilters({
  activeCategory,
  onSelectCategory,
  productCounts,
}: CategoryFiltersProps) {
  const categories: { id: ProductCategory; label: string; icon: typeof Utensils }[] = [
    { id: 'todos', label: 'Todo el Menú', icon: Utensils },
    { id: 'burgers', label: 'Shock Burgers', icon: Beef },
    { id: 'chicharrones', label: 'Tablas de Chicharrón', icon: Drumstick },
    { id: 'surtidos', label: 'Surtidos XL', icon: Layers },
    { id: 'papas', label: 'Papas Monumentales', icon: Sparkles },
    { id: 'bebidas', label: 'Bebidas & Frías', icon: GlassWater },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeCategory === cat.id;
        const count = productCounts[cat.id] || 0;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-95 cursor-pointer ${
              isActive
                ? 'bg-[#ff5500] text-white shadow-xl shadow-[#ff5500]/30 scale-[1.03] ring-2 ring-[#ff5500]/50'
                : 'bg-[#151920] text-gray-300 hover:text-white hover:bg-[#1f242d] hover:scale-[1.01] border border-white/5'
            }`}
          >
            <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-white scale-110' : 'text-[#ff5500]'}`} />
            <span>{cat.label}</span>
            <span
              className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                isActive ? 'bg-white/25 text-white' : 'bg-white/5 text-gray-400'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
