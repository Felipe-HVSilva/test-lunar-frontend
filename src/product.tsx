import { useContext } from "react";
import { ProductContext } from "./_contexts/productContext";
import { useParams } from "react-router-dom";
import { priceFormat } from "./_utils/priceFormat";
import { CartContext } from "./_contexts/cartContext";
import Header from "./_components/Header";

interface Product {
  name: string;
  photo: string;
  description: string;
  price: number;
}

export function Product() {
  const { name } = useParams();

  const { products } = useContext(ProductContext);
  const { addItemIntoCart } = useContext(CartContext);

  const productSelected = products.find((product) => product.name === name);

  function handleAddProduct() {
    const selectedProduct = products.find((product) => product.name === name);

    if (!selectedProduct) {
      return;
    }

    const product = {
      ...selectedProduct,
      quantity: 1,
    };

    console.log(product);

    addItemIntoCart(product);
  }

  if (!productSelected) {
    return;
  }

  return (
    <div className="h-auto relative overflow-hidden">
      <Header />
      <main className="flex h-auto m-auto justify-center flex-col max-w-4xl pb-5 px-2">
        <img src={productSelected.photo} alt="" className="w-[500px] m-auto" />

        <div className="flex  justify-between items-center max-w-md m-auto w-full">
          <h1 className="font-bold text-2xl">{productSelected.name}</h1>
          <span className="font-semibold text-xl">
            {priceFormat(productSelected.price)}
          </span>
        </div>

        <div className="flex flex-col   items-center max-w-md m-auto w-full mt-4">
          <p className="text-center text-xl">{productSelected.description}</p>
          <button
            className="bg-black w-full mt-6 px-3 py-3 rounded text-white font-semibold text-xl"
            onClick={handleAddProduct}
          >
            Carrinho
          </button>
        </div>
      </main>
    </div>
  );
}
