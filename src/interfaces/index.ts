interface AmountProps {
  amount: number;
  label: string;
  operator?: string;
}

interface DefaultMessageProps {
  message: string;
  icon: JSX.Element;
  type?: string;
  className?: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: number;
  quantity: number;
  availability: number;
}

interface ProductItemProps {
  product: Product;
}

interface CartContextType {
  cart: Product[];
  cartMessage: string;
  cartLoading: boolean;
  coupon: string;
  subtotal: number;
  tax: number;
  total: number;
  discount: number;
  discountPercent: number;
  couponMessage?: {
    message: string;
    type: string;
  };
  checkout: () => Promise<void>;
  isCouponApplied: boolean;
  isCartEmpty: boolean;
  onCouponChange: (coupon: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  checkAvailability: (product: Product) => number;
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  isInCart: (product: string) => number;
  applyCoupon: (coupon: string) => void;
}

interface DrawerContextType {
  isOpen: boolean;
  containerClass: string;
  isAnimated: string;
  openDrawer: () => void;
  toggleDrawer: () => void;
  closeDrawer: () => void;
}

interface QueryParams {
  lastDoc?: string;
  filterValue?: string | number;
}

interface ButtonProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void | Promise<void>;
}

interface ProductContextType {
  products: Product[];
  count: number;
  category?: number;
  loading: boolean;
  onFilterProducts: (filterValue: string) => void;
  getProducts: ({ lastDoc, filterValue }: QueryParams) => Promise<void>;
  onPaginateProducts: ({ lastDoc, filterValue }: QueryParams) => Promise<void>;
}

interface WrapperProps {
  children: React.ReactNode;
}

export type {
  AmountProps,
  ButtonProps,
  CartContextType,
  DefaultMessageProps,
  DrawerContextType,
  ProductItemProps,
  Product,
  ProductContextType,
  QueryParams,
  WrapperProps,
};
