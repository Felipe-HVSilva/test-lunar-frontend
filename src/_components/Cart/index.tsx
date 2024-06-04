import { X } from "lucide-react";
import CartItem from "../CartItem";

interface CartProps {
  isCartOpen: boolean;
  onCartClose: () => void;
}

const Cart = ({ isCartOpen, onCartClose }: CartProps) => {
  if (!isCartOpen) {
    return;
  }
  return (
    <div className="bg-black/70 w-screen h-screen absolute top-0 overflow-x-auto">
      <main className="bg-violet-600 w-[468px] ml-auto z-10 px-3 py-4 h-full overflow-hidden flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <h3 className="text-white font-bold text-2xl">Carrinho</h3>
            <button onClick={onCartClose}>
              <X className="text-white" />
            </button>
          </div>

          <CartItem />
        </div>

        <div>
          <div>
            <h3 className="font-bold text-white text-4xl">
              Total: <span className="text-2xl">R$ 300</span>
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
