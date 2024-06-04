import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../_contexts/cartContext";

const Header = () => {
  const { cart, cartOpen } = useContext(CartContext);

  function handleCartOpen() {
    cartOpen();
  }

  return (
    <header className="w-full bg-violet-500 flex justify-center py-7 px-5">
      <div className="w-full max-w-6xl flex justify-between items-center">
        <h2 className="font-bold text-4xl text-white max-sm:text-base">
          Lunar Departaments
        </h2>

        <button
          className="bg-slate-200 flex flex-row items-center gap-3 rounded py-1
         px-3 max-sm:px-2"
          onClick={handleCartOpen}
        >
          <ShoppingCart />
          <span className="font-semibold text-lg sm: text-base">
            {cart.length}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
