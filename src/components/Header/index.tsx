import { useContext } from "react";
// context
import { CartContext } from "@/context/cart-context";
import { DrawerContext } from "@/context/drawer-context";
// icons
import CartIcon from "../Icons/CartIcon";
import Logo from "@/assets/images/logo.webp";
// styles
import * as C from "./styles";

export default function Header() {
  const { toggleDrawer } = useContext(DrawerContext);
  const { cart, isCartEmpty } = useContext(CartContext);

  return (
    <>
      <C.Navbar>
        <C.NavbarContent>
          <C.NavbarLogo src={Logo} alt="logo" />
          <C.CartIcon onClick={toggleDrawer}>
            {!isCartEmpty && (
              <>
                <span className="animation"></span>
                <C.CartQuantity>{cart.length}</C.CartQuantity>
              </>
            )}
            <CartIcon />
          </C.CartIcon>
        </C.NavbarContent>
      </C.Navbar>
      <C.Header>
        <C.HeroImg />
      </C.Header>
    </>
  );
}
