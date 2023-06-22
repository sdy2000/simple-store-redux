import { Link } from "react-router-dom";

const CartNotFound = () => {
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
};
export default CartNotFound;
