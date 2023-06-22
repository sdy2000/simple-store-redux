import { useDispatch, useSelector } from "react-redux";
import { HomeSlider, ProductCard } from "../components";
import { getAllProduct } from "../context/features/product/getProduct";
import { useEffect } from "react";

const Category = () => {
  const { productItems, isLoading } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div className="container">
      <HomeSlider
        title={"Electronics"}
        products={productItems.filter((p) => p.category === "electronics")}
      />
      <HomeSlider
        title={"Women's Clothing"}
        products={productItems.filter((p) => p.category === "women's clothing")}
      />
      <HomeSlider
        title={"Jewelry"}
        products={productItems.filter((p) => p.category === "jewelery")}
      />
      <HomeSlider
        title={"Men's Clothing"}
        products={productItems.filter((p) => p.category === "men's clothing")}
      />
    </div>
  );
};
export default Category;
