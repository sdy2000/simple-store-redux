import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../context/features/cart/cart-slice";

const ProductDetails = () => {
  const { product, isLoading } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  console.log(product);
  return (
    <div className="container pt-28 mx-auto px-16 ">
      {isLoading ? (
        <div className="text-3xl font-bold text-center py-20">...Loading</div>
      ) : (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-start border-2 rounded-sm shadow-lg overflow-hidden px-6">
          <div className="h-[75vh] w-full lg:w-[50%]">
            <img
              className="w-full h-full object-contain"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="lg:ml-5 lg:pl-5 py-16 lg:border-l w-full lg:w-[50%]">
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-5">
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
              <button
                onClick={() => dispatch(addToCart(product))}
                className="bg-red-500 rounded-sm text-white font-bold text-xl px-8 py-2 hover:scale-105 hover:bg-red-600 duration-500"
              >
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
