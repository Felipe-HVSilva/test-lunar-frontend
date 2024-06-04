import { Trash } from "lucide-react";

interface CartItem {
  name: string;
  photo: string;
  priceTotal: number;
  quantity: number;
}

const CartItem = () => {
  return (
    <div className="bg-white rounded-lg flex flex-row items-center justify-between px-2 py-1 mt-8">
      <div className="flex gap-3 items-center">
        <div className="max-w-[100px] max-h-[115px] m-auto">
          <img
            src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp"
            alt=""
          />
        </div>

        <h4 className="text-lg">Nome</h4>
        <div className="flex gap-2 items-center">
          <button className="px-2 border hover:bg-slate-100">-</button>
          <span>1</span>
          <button className="px-2 border hover:bg-slate-100">+</button>
        </div>
        <h5 className="font-bold">R$ 130</h5>
      </div>
      <button>
        <Trash className="text-red-600" />
      </button>
    </div>
  );
};

export default CartItem;
