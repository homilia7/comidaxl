export function FloatingIngredients() {
  return (
    <div className="pointer-events-none select-none overflow-hidden" aria-hidden="true">
      {/* 1. Albahaca fresca - Superior Izquierda */}
      <div className="absolute top-28 left-4 sm:left-12 z-20 w-16 sm:w-24 opacity-90 animate-float-bob drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]">
        <img
          src="/shapes/shape1.png"
          alt="Albahaca Flotante"
          className="w-full h-auto transform -rotate-12"
        />
      </div>

      {/* 2. Rodaja de Tomate jugoso HD - Superior Derecha */}
      <div className="absolute top-36 right-4 sm:right-16 z-20 w-20 sm:w-28 opacity-95 animate-float-bob-rev drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]">
        <img
          src="/shapes/shape2.png"
          alt="Tomate Flotante"
          className="w-full h-auto transform rotate-45"
        />
      </div>

      {/* 3. Chile Rojo Picante HD 450x406px (100% nítido, sin blur) - Centro Izquierda */}
      <div className="absolute top-[48%] left-3 sm:left-10 z-20 w-20 sm:w-28 opacity-100 animate-float-bob drop-shadow-[0_18px_20px_rgba(0,0,0,0.7)]">
        <img
          src="/shapes/chili.png"
          alt="Chile Picante Flotante HD"
          className="w-full h-auto transform rotate-12 contrast-110 brightness-105"
        />
      </div>

      {/* 4. Hoja de menta fresca - Centro Derecha */}
      <div className="absolute top-[55%] right-3 sm:right-12 z-20 w-14 sm:w-20 opacity-85 animate-float-bob-rev drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]">
        <img
          src="/shapes/shape3.png"
          alt="Menta Flotante"
          className="w-full h-auto transform -rotate-45"
        />
      </div>

      {/* 5. Condimento / Hongo - Sección Inferior */}
      <div className="absolute bottom-28 right-8 sm:right-24 z-20 w-20 sm:w-28 opacity-90 animate-float-bob drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]">
        <img
          src="/shapes/shape4.png"
          alt="Condimento Flotante"
          className="w-full h-auto transform rotate-25"
        />
      </div>
    </div>
  );
}
