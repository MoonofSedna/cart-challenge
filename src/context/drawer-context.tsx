import { createContext, useMemo, useState } from "react";
// utils
import { DrawerContextType, WrapperProps } from "@/interfaces";

export const DrawerContext = createContext<DrawerContextType>(
  {} as DrawerContextType
);

export const DrawerProvider = ({ children }: WrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(false);

  const toggleDrawer = () => {
    if (isOpen) {
      closeDrawer();
    } else {
      setIsOpen(true);
      setTimeout(() => {
        setAnimation(true);
      }, 300);
    }
  };

  const closeDrawer = () => {
    setAnimation(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const openDrawer = () => {
    setIsOpen(true);
    setTimeout(() => {
      setAnimation(true);
    }, 300);
  };

  const containerClass = useMemo(
    () => (isOpen ? "showCart" : "hideCart"),
    [isOpen]
  );

  const isAnimated = useMemo(() => (animation ? "animate" : ""), [animation]);

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        containerClass,
        isAnimated,
        openDrawer,
        toggleDrawer,
        closeDrawer,
      }}>
      {children}
    </DrawerContext.Provider>
  );
};
