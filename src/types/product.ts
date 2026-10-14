export type ProductCategory = 
  | 'todos'
  | 'burgers'
  | 'chicharrones'
  | 'surtidos'
  | 'papas'
  | 'bebidas';

export type BranchId = 'heredia' | 'sanjose';

export interface Branch {
  id: BranchId;
  name: string;
  tagline: string;
  address: string;
  schedule: string;
  wazeUrl: string;
  mapsUrl: string;
  phone: string;
}

export interface ProductExtra {
  id: string;
  name: string;
  price: number; // En colones ₡
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number; // En colones ₡
  image: string;
  badge?: string; // "Más Vendido", "XL Compartir", "Especial del Chef"
  weight?: string; // "750g+", "1.2kg+", "500g"
  availableExtras?: ProductExtra[];
  popular?: boolean;
}
