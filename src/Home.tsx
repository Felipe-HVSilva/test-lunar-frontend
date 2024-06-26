import { Search } from "lucide-react";
import ProductItem from "./_components/ProductItem";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "./_contexts/productContext";
import Cart from "./_components/Cart";
import Header from "./_components/Header";

interface Product {
  name: string;
  price: number;
  description: string;
  photo: string;
}

export function Home() {
  const { products } = useContext(ProductContext);

  const [productsList, setProductsList] = useState<Product[]>([]);

  function handleSearchProductByName(name: string) {
    const product = products.filter((product) =>
      product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
    setProductsList(product);
  }

  function handleSearchProductByPrice(price: string) {
    if (price === "") {
      setProductsList(products);
    } else {
      const [min, max] = price.split("-").map(Number);
      const filtrados = products.filter(
        (produto) => produto.price >= min && produto.price <= max
      );
      setProductsList(filtrados);
    }
  }

  useEffect(() => {
    setProductsList(products);
  }, [products]);

  return (
    <div className="h-screen relative overflow-hidden">
      <Header />
      <div className="bg-slate-50 w-full h-full flex py-5 px-5 items-start justify-center">
        <main className="max-w-6xl w-full">
          <div className=" flex justify-between gap-3 mb-7 max-sm:flex-col">
            <div className="flex items-center justify-between rounded-lg bg-white px-2 py-3">
              <input
                type="text"
                placeholder="Nome"
                className="bg-inherit focus:outline-none"
                onChange={(event) =>
                  handleSearchProductByName(event.target.value)
                }
              />
              <Search size={21} />
            </div>

            <select
              className="px-2 py-3 rounded-lg"
              onChange={(event) =>
                handleSearchProductByPrice(event.target.value)
              }
            >
              <option value=""></option>
              <option value="1000-6000">R$ 1.000,00 - R$ 6.000,00</option>
              <option value="6001-10000">R$ 6.000,1 - R$ 10.000,00</option>
            </select>
          </div>

          <div className="grid grid-cols-4 grid-rows-2 gap-x-5 gap-y-7 max-md:grid-cols-1 place-items-center ">
            {productsList.map((product) => (
              <ProductItem product={product} />
            ))}
          </div>
        </main>
      </div>
      <Cart />
    </div>
  );
}
