import { useDispatch } from "react-redux";
import { AlertModal } from "../../components";
import { closeModal } from "../../context/features/modal/modal-slice";
import { clearCart } from "../../context/features/cart/cart-slice";

const CartModal = () => {
  const dispatch = useDispatch();

  return (
    <AlertModal>
      <aside className="flex flex-col gap-6">
        <h4 className="text-lg font-bold font-mono">
          remove all items from your shopping cart?
        </h4>
        <div className="flex justify-end items-center gap-8">
          <button
            className="text-xl font-bold font-mono rounded-lg shadow-lg px-12 py-2 text-white bg-amber-600"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal("cart_remove_modal"));
            }}
          >
            confirm
          </button>
          <button
            className="text-xl font-bold font-mono rounded-lg shadow-lg px-12 py-2 text-white bg-red-700"
            onClick={() => dispatch(closeModal("cart_remove_modal"))}
          >
            cancel
          </button>
        </div>
      </aside>
    </AlertModal>
  );
};
export default CartModal;
