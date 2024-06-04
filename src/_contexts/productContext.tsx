import { ReactNode, createContext, useEffect, useState } from "react";

interface ProductProps {
  name: string;
  photo: string;
  description: string;
  price: number;
}

interface ProductContext {
  products: ProductProps[];
}

export const ProductContext = createContext({} as ProductContext);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<ProductProps[]>([]);

  async function LoadProduct() {
    const response = await fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
    );

    const data = await response.json();
    console.log(data);

    setProducts(data.products);
  }

  useEffect(() => {
    LoadProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
