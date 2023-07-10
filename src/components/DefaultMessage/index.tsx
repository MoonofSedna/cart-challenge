// interface
import { DefaultMessageProps } from "@/interfaces";
// styles
import * as C from "./styles";
export default function DefaultMessage({
  message,
  icon,
  className,
}: DefaultMessageProps) {
  return (
    <C.Container className={className}>
      <C.Icon>{icon}</C.Icon>
      <C.Message>{message}</C.Message>
    </C.Container>
  );
}
