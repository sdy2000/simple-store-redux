import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../context/features/product/getProduct";
import { ProductDetails } from "../parts";
import { clearProduct } from "../context/features/product/product-slice";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(slug));

    return () => {
      dispatch(clearProduct());
    };
  }, [dispatch]);
  return <ProductDetails />;
};
export default ProductDetailPage;
