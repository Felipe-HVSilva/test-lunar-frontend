import { X } from "lucide-react";
import CartItem from "../CartItem";
import { useContext, useMemo } from "react";
import { CartContext } from "../../_contexts/cartContext";
import { priceFormat } from "../../_utils/priceFormat";

const Cart = () => {
  const { cart, isCartOpen, cartClose } = useContext(CartContext);

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [cart]);

  function handleCartClose() {
    cartClose();
  }

  if (!isCartOpen) {
    return;
  }
  return (
    <div className="bg-black/70 w-screen h-screen absolute top-0 overflow-hidden">
      <main className="bg-violet-600 max-w-[500px] ml-auto z-10 px-3 py-4 h-full overflow-hidden flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <h3 className="text-white font-bold text-2xl">Carrinho</h3>
            <button onClick={handleCartClose}>
              <X className="text-white" />
            </button>
          </div>

          {cart.map((cart) => (
            <CartItem key={cart.name} cart={cart} />
          ))}
        </div>

        <div>
          <div>
            <h3 className="font-bold text-white text-4xl">
              Total:{" "}
              <span className="text-2xl">
                {priceFormat(Number(totalPrice))}
              </span>
            </h3>
          </div>
          <button className="w-full px-3 py-3 bg-black font-bold text-xl text-white rounded-md mt-4">
            Comprar
          </button>
        </div>
      </main>
    </div>
  );
};

export default Cart;
