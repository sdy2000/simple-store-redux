import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { product, isLoading } = useSelector((store) => store.product);

  return (
    <div className="container pt-28 mx-auto px-16 ">
      {isLoading ? (
        <div className="text-3xl font-bold text-center py-20">...Loading</div>
      ) : (
        <div className="flex justify-start items-start border-2 rounded-sm shadow-lg overflow-hidden px-6">
          <div className="h-[75vh] w-[50%]">
            <img
              className="w-full h-full object-contain"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="ml-5 pl-5 py-16 border-l h-[75vh] w-[50%]">
            <div className="flex flex-col justify-start items-start gap-5">
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <span className="bg-teal-600 px-10 py-2 rounded-lg shadow-lg text-white text-3xl font-bold">
                ${product.price}
              </span>
              <div className="border border-yellow-800 text-yellow-800 text-lg font-bold bg-orange-100 w-full rounded-lg shadow-lg px-5 py-3">
                {product.category}
              </div>
              <p className="text-gray-700 text-lg flex-wrap">
                {product.description}
              </p>
              <button className="bg-red-500 rounded-sm text-white font-bold text-xl px-8 py-2 hover:scale-105 hover:bg-red-600 duration-500">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetails;
