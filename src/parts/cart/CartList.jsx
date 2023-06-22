import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../../components";
import { openModal } from "../../context/features/modal/modal-slice";

const CartList = () => {
  const { cartItems, total_price } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <section className="container flex flex-col justify-center items-center gap-8 my-32">
      <h2 className="text-4xl font-bold font-serif">your bag</h2>
      <div className="flex flex-col gap-2">
        {cartItems?.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <div className="w-full">
        <hr />
        <div className="flex justify-between items-center mt-4">
          <h4 className="text-lg font-bold">
            total <span>${total_price.toFixed(2)}</span>
          </h4>
          <button
            className="text-white bg-red-800 px-6 py-1 rounded-lg shadow-lg text-lg font-bold"
            onClick={() => {
              dispatch(openModal("cart_remove_modal"));
            }}
          >
            clear cart
          </button>
        </div>
      </div>
    </section>
  );
};
export default CartList;
