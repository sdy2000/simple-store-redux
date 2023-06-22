import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../context/features/product/getProduct";
import { ProductList } from "../parts";
import { useEffect } from "react";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center flex-wrap gap-5 pt-16 pb-20">
      {isLoading ? (
        <div className="py-52 text-4xl font-bold">Loading ...</div>
      ) : (
        <ProductList />
      )}
    </div>
  );
};
export default ProductPage;
