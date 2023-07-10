// styles
import * as C from "./styles";
// interface
import { ButtonProps } from "@/interfaces";

export default function Button({
  children = "",
  className = "",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <C.Button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </C.Button>
  );
}
