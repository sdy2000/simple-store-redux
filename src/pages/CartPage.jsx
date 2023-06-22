import { useSelector } from "react-redux";
import { CartItem } from "../components";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, total_amount, total_price } = useSelector(
    (store) => store.cart
  );

  if (total_amount < 1) {
    return (
      <section className="flex flex-col justify-center items-center text-center gap-8 my-80">
        <h2 className="text-4xl font-bold font-serif">your bag</h2>
        <h4 className="text-xl font-semibold text-gray-700 font-mono">
          is currently empty
        </h4>
        <Link
          to="/"
          className="text-white bg-primary-800 rounded-xl shadow-lg px-10 py-2 text-xl font-bold"
        >
          Go Home
        </Link>
      </section>
    );
  }
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
            //   onClick={() => {
            //     dispatch(openModal());
            //   }}
          >
            clear cart
          </button>
        </div>
      </div>
    </section>
  );
};
export default CartPage;
