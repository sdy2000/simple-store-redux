import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../parts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "../../context/features/cart/cart-slice";

const HomeLayout = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default HomeLayout;
