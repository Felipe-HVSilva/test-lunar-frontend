import { Search } from "lucide-react";
import Header from "./_components/Header";
import ProductItem from "./_components/ProductItem";
import { useEffect, useState } from "react";

interface Product {
  name: string;
  price: number;
  description: string;
  photo: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
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

  async function LoadProduct() {
    const response = await fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
    );

    const data = await response.json();
    console.log(data);

    setProducts(data.products);
    setProductsList(data.products);
  }

  useEffect(() => {
    LoadProduct();
  }, []);

  return (
    <div className="h-screen">
      <Header />
      <div className="bg-slate-50 w-full h-full flex py-5 px-5 items-start justify-center">
        <main className="max-w-5xl w-full">
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
              <option value="1001-200">R$ 101,00 - R$ 200,00</option>
            </select>
          </div>

          <div className="grid grid-cols-4 grid-rows-2 gap-x-5 gap-y-7 max-md:grid-cols-1 place-items-center ">
            {productsList.map((product) => (
              <ProductItem product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
