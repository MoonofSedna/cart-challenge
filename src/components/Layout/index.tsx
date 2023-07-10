// components
import Cart from "../Cart";
import Header from "../Header";
// interfaces
import { WrapperProps } from "@/interfaces";
// styles
import * as C from "./styles";

export default function Layout({ children }: WrapperProps) {
  return (
    <>
      <Header />
      <C.Container>
        <C.Section>{children}</C.Section>
        <Cart />
      </C.Container>
    </>
  );
}
