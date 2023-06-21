import { useSelector } from "react-redux";
import { ProductCard } from "../../components";

const ProductList = () => {
  const { productItems } = useSelector((store) => store.product);

  return productItems.map((product) => {
    return <ProductCard product={product} key={product.id} />;
  });
};
export default ProductList;
