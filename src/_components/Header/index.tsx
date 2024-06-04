import { ShoppingCart } from "lucide-react";

interface HeaderProps {
  onOpenCart: () => void;
}

const Header = ({ onOpenCart }: HeaderProps) => {
  return (
    <header className="w-full bg-violet-500 flex justify-center py-7 px-5">
      <div className="w-full max-w-6xl flex justify-between items-center">
        <h2 className="font-bold text-4xl text-white max-sm:text-base">
          Lunar Departaments
        </h2>

        <button
          className="bg-slate-200 flex flex-row items-center gap-3 rounded py-1
         px-3 max-sm:px-2"
          onClick={onOpenCart}
        >
          <ShoppingCart />
          <span className="font-semibold text-lg sm: text-base">0</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
