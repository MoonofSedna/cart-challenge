import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { doc, runTransaction } from "firebase/firestore";
// context
import { DrawerContext } from "./drawer-context";
import { ProductContext } from "./product-context";
// firebase
import firebase from "../firebase";
// interfaces
import { CartContextType, Product, WrapperProps } from "@/interfaces";

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export const CartProvider = ({ children }: WrapperProps) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartMessage, setCartMessage] = useState("Cart is empty");
  const [cartLoading, setCartLoading] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState({
    message: "",
    type: "",
  });
  const [subtotal, setSubtotal] = useState(0);
  const [totalBeforeDiscount, setTotalBeforeDiscount] = useState(0);
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [tax, setTax] = useState(0);

  const MAX_ITEMS = 5;
  const TAX_RATE = 0.07;
  const VALID_COUPONS = [
    {
      code: "10%MEOW",
      discount: 0.1,
    },
    {
      code: "20%MEOW",
      discount: 0.2,
    },
  ];

  const { getProducts, category } = useContext(ProductContext);
  const { closeDrawer, openDrawer, isOpen } = useContext(DrawerContext);

  const addCartToLocalStorage = (cart: Product[]) => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };

  const isInCart = (productId: string) => {
    return cart.findIndex(item => item.id === productId);
  };

  const isProductAvailable = (product: Product, index: number) => {
    return (
      cart[index].availability === 0 ||
      cart[index].quantity >= product.availability ||
      cart[index].quantity >= MAX_ITEMS
    );
  };

  const addProduct = (product: Product) => {
    const index = isInCart(product.id);
    const item = cart[index];
    let newCart = [];

    if (item) {
      if (isProductAvailable(product, index)) return;
      newCart = cart.map(item => {
        if (item.id === product.id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }

    if (!isOpen) {
      openDrawer?.();
    }

    setCart(newCart);
    addCartToLocalStorage(newCart);
  };

  const removeProduct = (product: Product) => {
    const newCart = cart.filter(item => item.id !== product.id);
    setCart(newCart);
    addCartToLocalStorage(newCart);
  };

  const getCartFromLocalStorage = () => {
    const cart = window.localStorage.getItem("cart");
    const coupon = window.localStorage.getItem("coupon");
    if (cart) {
      setCart(JSON.parse(cart) as Product[]);
    }

    if (coupon) {
      setDiscountPercent(Number(coupon));
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    const newCart = cart.map(item => {
      if (item.id === productId) {
        item.quantity = quantity;
      }
      return item;
    });
    setCart(newCart);
    addCartToLocalStorage(newCart);
  };

  const checkAvailability = (product: Product) => {
    return product.availability < MAX_ITEMS ? product.availability : MAX_ITEMS;
  };

  const onCouponChange = (coupon: string) => {
    setCoupon(coupon);
  };

  const applyCoupon = () => {
    const couponCode = VALID_COUPONS.find(
      couponCode => couponCode.code === coupon
    );

    if (couponCode) {
      setCartLoading(true);
      setCouponMessage({
        message: "Applying coupon...",
        type: "success",
      });

      window.localStorage.setItem("coupon", couponCode.discount.toString());

      setTimeout(() => {
        setDiscountPercent(couponCode.discount);
        setDiscount(Number((totalBeforeDiscount * discount).toFixed(2)));
        setCartLoading(false);
      }, 4000);
    } else {
      setCouponMessage({
        message: "Invalid coupon",
        type: "error",
      });
    }

    setTimeout(() => {
      setCouponMessage({
        message: "",
        type: "",
      });
    }, 4000);
  };

  const resetCart = () => {
    setCart([]);
    setCoupon("");
    setCouponMessage({
      message: "",
      type: "",
    });
    setDiscount(0);
    setDiscountPercent(0);
    window.localStorage.removeItem("cart");
    window.localStorage.removeItem("coupon");
  };

  const checkout = async () => {
    setCartLoading(true);
    try {
      await Promise.all(
        cart.map(async item => {
          const productRef = doc(firebase.db, "products", item.id);

          await runTransaction(firebase.db, async transaction => {
            const product = (await transaction.get(productRef)).data();
            if (!product) return;
            const newAvailability = product.availability - item.quantity;
            transaction.update(productRef, { availability: newAvailability });
          });
        })
      );

      setCartMessage("Thank you for your purchase!");
      resetCart();

      setTimeout(() => {
        getProducts?.({
          filterValue: category,
        });

        setCartMessage("Cart is empty");

        closeDrawer?.();
      }, 4000);
    } catch (error) {
      console.log(error);
    } finally {
      setCartLoading(false);
    }
  };

  const total = useMemo(() => {
    return totalAfterDiscount > 0
      ? Number(totalAfterDiscount.toFixed(2))
      : Number(totalBeforeDiscount.toFixed(2));
  }, [totalAfterDiscount, totalBeforeDiscount]);

  const isCouponApplied = useMemo(() => {
    return discount > 0;
  }, [discount]);

  const isCartEmpty = useMemo(() => {
    return cart.length === 0;
  }, [cart]);

  useEffect(() => {
    getCartFromLocalStorage();
  }, []);

  useEffect(() => {
    if (discountPercent > 0) {
      const calcTotalAfterDiscount = Number(
        (totalBeforeDiscount * discountPercent).toFixed(2)
      );
      setDiscount(calcTotalAfterDiscount);
    }

    if (discount) {
      const calcTotalAfterDiscount = totalBeforeDiscount - discount;
      setTotalAfterDiscount(calcTotalAfterDiscount);
    }
  }, [discount, discountPercent, totalBeforeDiscount]);

  useEffect(() => {
    const calcSubTotal = cart.reduce((acc, item) => {
      return acc + item.price * (item.quantity || 1);
    }, 0);

    const calcTax = Number((calcSubTotal * TAX_RATE).toFixed(2));

    setSubtotal(calcSubTotal);
    setTax(calcTax);
    setTotalBeforeDiscount(calcSubTotal + calcTax);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartMessage,
        cartLoading,
        coupon,
        subtotal,
        tax,
        total,
        discount,
        discountPercent,
        couponMessage,
        isCartEmpty,
        isCouponApplied,
        onCouponChange,
        checkout,
        checkAvailability,
        updateQuantity,
        addProduct,
        removeProduct,
        isInCart,
        applyCoupon,
      }}>
      {children}
    </CartContext.Provider>
  );
};
