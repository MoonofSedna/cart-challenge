import { useContext } from "react";
import * as C from "./styles";
// context
import { CartContext } from "@/context/cart-context";
// icons
import RemoveIcon from "../Icons/RemoveIcon";
// interfaces
import { Product, ProductItemProps } from "@/interfaces";
// utils
import { formatPrice } from "@/utils";

export default function CartItem({ product }: ProductItemProps) {
  const { checkAvailability, updateQuantity, removeProduct } =
    useContext(CartContext);

  const quantity = (item: Product) => {
    return new Array(checkAvailability(item)).fill(null).map((_, i) => i);
  };

  return (
    <C.CartItem key={product.id}>
      <div>
        <img src={product.image} alt={product.name} />
        <div>
          <h4>{product.name}</h4>
          <span>{formatPrice(product.price)}</span>
          <select
            id={product.id}
            value={product.quantity}
            onChange={e => updateQuantity(product.id, Number(e.target.value))}>
            {quantity(product).map(product => (
              <option key={product} value={product + 1}>
                {product + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        aria-label="Remove product"
        onClick={() => removeProduct(product)}>
        <RemoveIcon />
      </button>
    </C.CartItem>
  );
}
