// components
import Layout from "./components/Layout";
import Products from "./components/Products";
// context
import { DrawerProvider } from "./context/drawer-context";
import { CartProvider } from "./context/cart-context";
import { ProductProvider } from "./context/product.context";

export default function App() {
  return (
    <DrawerProvider>
      <ProductProvider>
        <CartProvider>
          <Layout>
            <Products />
          </Layout>
        </CartProvider>
      </ProductProvider>
    </DrawerProvider>
  );
}
