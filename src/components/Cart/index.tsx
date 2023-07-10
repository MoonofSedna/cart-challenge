import { useContext } from "react";
// components
import Amount from "../Amount";
import Button from "../Button";
import CartItem from "../CartItem";
import Coupon from "../Coupon";
import DefaultMessage from "../DefaultMessage";
// context
import { CartContext } from "@/context/cart-context";
import { DrawerContext } from "@/context/drawer-context";
// icons
import CartIcon from "../Icons/CartIcon";
import CloseIcon from "../Icons/CloseIcon";
// styles
import * as C from "./styles";

export default function Cart() {
  const {
    cart,
    cartMessage,
    cartLoading,
    checkout,
    discount,
    discountPercent,
    isCartEmpty,
    subtotal,
    tax,
    total,
  } = useContext(CartContext);

  const { containerClass, isAnimated, closeDrawer } = useContext(DrawerContext);

  return (
    <C.Container className={containerClass}>
      <C.CartContent className={isAnimated}>
        <C.Header>
          <CloseIcon onClick={closeDrawer} />
          <C.Title>Cart</C.Title>
        </C.Header>

        {isCartEmpty ? (
          <DefaultMessage
            className="cart"
            message={cartMessage}
            icon={<CartIcon />}
          />
        ) : (
          <C.CartGrid>
            {cart.map(item => (
              <CartItem product={item} key={item.id} />
            ))}

            <Amount label="Subtotal" amount={subtotal} />
            <Amount label="Tax" amount={tax} />
            {discount > 0 && (
              <Amount
                label={`Discount (${discountPercent * 100}%)`}
                amount={discount}
                operator="-"
              />
            )}
            <Amount label="Total" amount={total} />
            <Coupon />
            <Button disabled={cartLoading} onClick={checkout}>
              Checkout
            </Button>
          </C.CartGrid>
        )}
      </C.CartContent>
    </C.Container>
  );
}
