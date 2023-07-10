import { useContext } from "react";
// context
import { CartContext } from "@/context/cart-context";
// styles
import * as C from "./styles";

export default function Coupon() {
  const {
    applyCoupon,
    cartLoading,
    coupon,
    couponMessage,
    isCouponApplied,
    onCouponChange,
  } = useContext(CartContext);

  const handleCouponChange = (e: Event): void =>
    onCouponChange((e.target as HTMLInputElement).value);

  return (
    <C.Container>
      <C.Label>Do you have a discount coupon?</C.Label>
      <C.Field>
        {isCouponApplied ? (
          <C.Message className="success">Coupon applied!</C.Message>
        ) : (
          <>
            <C.Input
              id="coupon"
              placeholder="Coupon code"
              value={coupon}
              onChange={handleCouponChange}
            />
            <C.Button disabled={cartLoading} onClick={applyCoupon}>
              Apply
            </C.Button>
          </>
        )}
      </C.Field>

      {couponMessage && (
        <C.Message className={couponMessage.type}>
          {couponMessage.message}
        </C.Message>
      )}
    </C.Container>
  );
}
