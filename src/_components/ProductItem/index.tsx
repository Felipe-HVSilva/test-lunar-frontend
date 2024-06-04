import { useContext } from "react";
import { CartContext } from "../../_contexts/cartContext";
import { Link } from "react-router-dom";

interface ProductProps {
  product: {
    name: string;
    description: string;
    photo: string;
    price: number;
  };
}

const ProductItem = ({ product }: ProductProps) => {
  const { addItemIntoCart } = useContext(CartContext);

  function handleAddProduct() {
    const productItem = { ...product, quantity: 1 };

    addItemIntoCart(productItem);
  }

  return (
    <main>
      <Link
        to={`product/${product.name}`}
        className="max-w-[300px] min-h-[250px] rounded bg-white flex flex-col "
      >
        <div className="max-w-[100px] max-h-[115px] m-auto">
          <img src={product.photo} alt="" />
        </div>

        <div className="flex flex-col px-3 mt-2">
          <div className="flex items-center justify-between">
            <h3 className="font-medium max-w-28 line-clamp-1">
              {product.name}
            </h3>
            <span className="bg-black text-white font-bold px-1 py-2 rounded">
              {Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </span>
          </div>

          <div className="mt-2">
            <p className="font-light text-[10px] line-clamp-3">
              {product.description}
            </p>
          </div>
        </div>
      </Link>

      <button
        className="bg-purple-700 py-1 w-full rounded-b text-white mt-2"
        onClick={handleAddProduct}
      >
        Adicionar
      </button>
    </main>
  );
};

export default ProductItem;
