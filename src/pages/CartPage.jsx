import { useSelector } from "react-redux";
import { CartList, CartModal, CartNotFound } from "../parts";

const CartPage = () => {
  const { total_amount } = useSelector((store) => store.cart);
  const { modalId, isOpen } = useSelector((store) => store.modal);

  if (total_amount < 1) {
    return <CartNotFound />;
  }
  return (
    <>
      <CartList />
      {isOpen && modalId === "cart_remove_modal" && <CartModal />}
    </>
  );
};
export default CartPage;
