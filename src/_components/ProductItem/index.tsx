interface ProductProps {
  product: {
    name: string;
    description: string;
    photo: string;
    price: number;
  };
}

const ProductItem = ({ product }: ProductProps) => {
  return (
    <div className="max-w-[300px] max-h-[285px] rounded bg-white flex flex-col ">
      <div className="max-w-[100px] max-h-[115px] m-auto">
        <img src={product.photo} alt="" />
      </div>

      <div className="flex flex-col px-3 mt-2">
        <div className="flex items-center justify-between">
          <h3 className="font-medium max-w-28">{product.name}</h3>
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

      <button className="bg-purple-700 py-1 w-full rounded-b text-white mt-2">
        Adicionar
      </button>
    </div>
  );
};

export default ProductItem;
