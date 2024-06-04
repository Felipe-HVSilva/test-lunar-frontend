import { ReactNode, createContext, useState } from "react";

interface CartProps {
  name: string;
  photo: string;
  quantity: number;
  price: number;
}

interface CartContext {
  cart: CartProps[];
  addItemIntoCart: (cart: CartProps) => void;
  deleteCartItem: (cartItemName: string) => void;
  increaseQuantity: (name: string) => void;
  decreaseQuantity: (name: string) => void;
  isCartOpen: boolean;
  cartClose: () => void;
  cartOpen: () => void;
}

export const CartContext = createContext({} as CartContext);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function cartClose() {
    setIsCartOpen(false);
  }
  function cartOpen() {
    setIsCartOpen(true);
  }

  function addItemIntoCart(item: CartProps) {
    setCart((prev) => {
      const productExistingInCart = prev.findIndex(
        (cartItem) => cartItem.name === item.name
      );

      if (productExistingInCart !== -1) {
        const updatedCart = [...prev];
        updatedCart[productExistingInCart].quantity += 1;
        return updatedCart;
      }

      return [...prev, item];
    });
  }

  function deleteCartItem(cartItemName: string) {
    const updatedCart = cart.filter((product) => product.name !== cartItemName);
    setCart(updatedCart);
  }

  function increaseQuantity(name: string) {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.name === name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  }

  const decreaseQuantity = (name: string) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.name === name
          ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 1) }
          : cartItem
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        addItemIntoCart,
        deleteCartItem,
        increaseQuantity,
        decreaseQuantity,
        cartClose,
        cartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
