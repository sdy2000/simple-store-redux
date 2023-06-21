import { useDispatch } from "react-redux";
import { getProduct } from "../context/features/product/getProduct";
import { ProductList } from "../parts";
import { useEffect } from "react";

const ProductPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center flex-wrap gap-5 pt-16">
      <ProductList />
    </div>
  );
};
export default ProductPage;
