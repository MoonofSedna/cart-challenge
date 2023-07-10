import { useContext } from "react";
// components
import Button from "../Button";
import CartIcon from "../Icons/CartIcon";
// context
import { CartContext } from "@/context/cart-context";
// interface
import { ProductItemProps } from "@/interfaces";
// styles
import * as C from "./styles";
// utils
import { formatCategory, formatPrice, formatUnit } from "@/utils";

export default function ProductCard({ product }: ProductItemProps) {
  const { addProduct } = useContext(CartContext);
  const isOutOfStock = product.availability === 0;

  const cartButton = isOutOfStock ? "Out of stock" : "Add to cart";
  return (
    <C.ProductCard>
      <C.CardImage>
        <img src={product.image} alt={product.name} />
      </C.CardImage>
      <hr />
      <h3>{product.name}</h3>
      <C.CardDetails>
        <span>Category: {formatCategory(product.category)}</span>
        <span>Available: {formatUnit(product.availability)}</span>
      </C.CardDetails>
      <C.CardContent>
        <p>{formatPrice(product.price)}</p>
        <Button
          disabled={isOutOfStock}
          onClick={() => addProduct && addProduct(product)}>
          <>
            <CartIcon />
            {cartButton}
          </>
        </Button>
      </C.CardContent>
    </C.ProductCard>
  );
}
