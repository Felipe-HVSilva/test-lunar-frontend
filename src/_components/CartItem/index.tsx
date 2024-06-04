import { Trash } from "lucide-react";
import { priceFormat } from "../../_utils/priceFormat";
import { useContext } from "react";
import { CartContext } from "../../_contexts/cartContext";

interface CartItem {
  cart: {
    name: string;
    photo: string;
    price: number;
    quantity: number;
  };
}

const CartItem = ({ cart }: CartItem) => {
  const { deleteCartItem, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  function handleDeleteItemCart() {
    deleteCartItem(cart.name);
  }

  return (
    <div className="bg-white rounded-lg flex flex-row items-center justify-between px-2 py-1 mt-8">
      <div className="flex gap-3 items-center">
        <div className="max-w-[100px] max-h-[115px] m-auto">
          <img src={cart.photo} alt="" />
        </div>

        <h4 className="text-lg w-[90px] line-clamp-2">{cart.name}</h4>
        <div className="flex gap-2 items-center">
          <button
            className="px-2 border hover:bg-slate-100"
            onClick={() => decreaseQuantity(cart.name)}
          >
            -
          </button>
          <span>{cart.quantity}</span>
          <button
            className="px-2 border hover:bg-slate-100"
            onClick={() => increaseQuantity(cart.name)}
          >
            +
          </button>
        </div>
        <h5 className="font-bold">{priceFormat(cart.price)}</h5>
      </div>
      <button onClick={handleDeleteItemCart}>
        <Trash className="text-red-600" />
      </button>
    </div>
  );
};

export default CartItem;
