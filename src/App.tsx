import { useState, useMemo } from 'react';
import { PRODUCTS } from './data/menuData';
import { Product, ProductCategory } from './types/product';
import { useCart } from './hooks/useCart';

import { Navbar } from './components/layout/Navbar';
import { HeroBanner } from './components/home/HeroBanner';
import { DeliveryChannels } from './components/home/DeliveryChannels';
import { CategoryFilters } from './components/menu/CategoryFilters';
import { ProductCard } from './components/menu/ProductCard';
import { ProductModal } from './components/menu/ProductModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { CheckoutModal } from './components/checkout/CheckoutModal';
import { ExperienceSection } from './components/home/ExperienceSection';
import { LocationsSection } from './components/locations/LocationsSection';
import { Footer } from './components/layout/Footer';

import { CustomCursor } from './components/common/CustomCursor';
import { BackToTop } from './components/common/BackToTop';
import { Toast, ToastMessage } from './components/common/Toast';

export function App() {
  const {
    items,
    isOpen: isCartOpen,
    setIsOpen: setIsCartOpen,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalItems,
    subtotal,
  } = useCart();

  const [activeCategory, setActiveCategory] = useState<ProductCategory>('todos');
  const [customizingProduct, setCustomizingProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  // Filter products by active category
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'todos') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Count items per category
  const productCounts = useMemo(() => {
    const counts: Record<ProductCategory, number> = {
      todos: PRODUCTS.length,
      burgers: 0,
      chicharrones: 0,
      surtidos: 0,
      papas: 0,
      bebidas: 0,
    };
    PRODUCTS.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category] += 1;
      }
    });
    return counts;
  }, []);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuickAdd = (product: Product) => {
    addToCart(product, 1);
    setToast({
      id: `${product.id}_${Date.now()}`,
      title: '¡Agregado a tu Pedido!',
      description: `${product.name} listo en el carrito.`,
      image: product.image,
    });
  };

  const handleCustomizedAdd = (
    product: Product,
    quantity: number,
    selectedExtras: any[],
    notes?: string
  ) => {
    addToCart(product, quantity, selectedExtras, notes);
    setToast({
      id: `${product.id}_${Date.now()}`,
      title: '¡Personalizado y Agregado!',
      description: `${quantity}x ${product.name} con extras listo en el carrito.`,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0c10] text-[#f5f5f7]">
      {/* Custom Interactive Smooth Cursor (Foodies style) */}
      <CustomCursor />

      {/* Header & Sticky Nav with Animated Ticker */}
      <Navbar
        totalItems={totalItems}
        subtotal={subtotal}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Hero Showcase with Floating Badges & Rotating Seal */}
      <HeroBanner onExploreMenu={scrollToMenu} />

      {/* Quick Channels Strip */}
      <DeliveryChannels />

      {/* Menú Principal Section */}
      <main id="menu" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-black tracking-widest uppercase text-[#ff5500]">
            Elige tu Banquete
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            MENÚ CALLEJERO <span className="text-[#ff5500]">XL</span>
          </h2>
          <p className="text-sm text-gray-400">
            Platos preparados al momento con ingredientes frescos. Personaliza tus hamburguesas con extras de queso y tocineta.
          </p>
        </div>

        {/* Filter Bar with Spring Physics */}
        <div className="mb-10">
          <CategoryFilters
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            productCounts={productCounts}
          />
        </div>

        {/* Products Grid with Animated Entry */}
        <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-fade-up">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenCustomize={(p) => setCustomizingProduct(p)}
              onQuickAdd={handleQuickAdd}
            />
          ))}
        </div>
      </main>

      {/* Experiencia & Luces Neón */}
      <ExperienceSection />

      {/* Sucursales & Waze */}
      <LocationsSection />

      {/* Pie de Página */}
      <Footer />

      {/* Back to Top Floating Button */}
      <BackToTop />

      {/* Sonner-Style Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Modals & Drawers with Spring Physics */}
      <ProductModal
        product={customizingProduct}
        onClose={() => setCustomizingProduct(null)}
        onAddToCart={handleCustomizedAdd}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={items}
        subtotal={subtotal}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={items}
        subtotal={subtotal}
        onOrderSuccess={() => {
          clearCart();
        }}
      />
    </div>
  );
}
export default App;
