export function FloatingIngredients() {
  return (
    <div className="pointer-events-none select-none overflow-hidden" aria-hidden="true">
      {/* 1. Albahaca fresca - Superior Izquierda */}
      <div className="absolute top-28 left-4 sm:left-12 z-20 w-16 sm:w-24 opacity-80 animate-float-bob drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]">
        <img
          src="/shapes/shape1.png"
          alt="Ingrediente Flotante"
          className="w-full h-auto transform -rotate-12"
          loading="lazy"
        />
      </div>

      {/* 2. Rodaja de Tomate fresco - Superior Derecha */}
      <div className="absolute top-36 right-4 sm:right-16 z-20 w-20 sm:w-28 opacity-85 animate-float-bob-rev drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]">
        <img
          src="/shapes/shape2.png"
          alt="Ingrediente Flotante"
          className="w-full h-auto transform rotate-45"
          loading="lazy"
        />
      </div>

      {/* 3. Chile rojo picante - Centro Izquierda */}
      <div className="absolute top-[48%] left-2 sm:left-10 z-20 w-16 sm:w-24 opacity-80 animate-float-bob drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]">
        <img
          src="/shapes/shape5.png"
          alt="Ingrediente Flotante"
          className="w-full h-auto transform rotate-12"
          loading="lazy"
        />
      </div>

      {/* 4. Hoja de menta / especia - Centro Derecha */}
      <div className="absolute top-[55%] right-3 sm:right-12 z-20 w-14 sm:w-20 opacity-75 animate-float-bob-rev drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]">
        <img
          src="/shapes/shape3.png"
          alt="Ingrediente Flotante"
          className="w-full h-auto transform -rotate-45"
          loading="lazy"
        />
      </div>

      {/* 5. Condimento / Verdura - Sección Inferior */}
      <div className="absolute bottom-28 right-8 sm:right-24 z-20 w-20 sm:w-28 opacity-75 animate-float-bob drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]">
        <img
          src="/shapes/shape4.png"
          alt="Ingrediente Flotante"
          className="w-full h-auto transform rotate-25"
          loading="lazy"
        />
      </div>
    </div>
  );
}
