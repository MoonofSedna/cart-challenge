import { memo } from "react";
// interface
import { AmountProps } from "@/interfaces";
// styles
import * as C from "./styles";
// utils
import { formatPrice } from "../../utils";

const Amount = memo(function Amount({ amount, label, operator }: AmountProps) {
  return (
    <C.Amount>
      <span>{label}</span>
      <span>{`${operator ? operator : ""} ${formatPrice(amount)}`}</span>
    </C.Amount>
  );
});

export default Amount;
