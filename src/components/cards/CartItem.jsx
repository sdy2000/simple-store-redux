import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  decrease,
  increase,
  removeItem,
} from "../../context/features/cart/cart-slice";

const CartItem = ({ id, title, price, image, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="flex flex-col md:flex-row justify-between gap-8 bg-slate-200 rounded-xl overflow-hidden px-8 py-4">
      <img
        className="w-4/5 h-60 md:w-36 md:h-28 object-contain rounded-xl self-center"
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-start gap-3 md:w-[28rem]">
        <h4 className="font-bold ">{title}</h4>
        <h4 className="font-bold">${price}</h4>
        <button
          className="hidden md:flex text-white bg-red-600 px-6 py-1 rounded-lg shadow-lg w-32"
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
      <div className="flex justify-between items-center">
        <button
          className="md:hidden text-white bg-red-600 px-6 py-1 rounded-lg shadow-lg w-32"
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
        <div className="flex md:flex-col justify-center items-center gap-2">
          <button
            className="text-xl rounded-full p-2 hover:bg-gray-500 hover:text-white duration-300"
            onClick={() => dispatch(increase(id))}
          >
            <span className="hidden md:flex">
              <BsChevronUp />
            </span>
            <span className="md:hidden text-2xl font-extrabold text-white rounded-xl shadow-lg px-4 pb-1 bg-green-800 flex justify-center items-center">
              +
            </span>
          </button>
          <p className="font-bold">{amount}</p>
          <button
            className="text-xl rounded-full p-2 hover:bg-gray-500 hover:text-white duration-300"
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease(id));
            }}
          >
            <span className="hidden md:flex">
              <BsChevronDown />
            </span>
            <span className="md:hidden text-2xl font-extrabold text-white rounded-xl shadow-lg px-4 pb-1 bg-red-700 flex justify-center items-center">
              -
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};
export default CartItem;
