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
    <article className="flex justify-between gap-8 bg-slate-200 rounded-xl overflow-hidden px-8 py-4">
      <img
        className="w-36 h-28 object-contain rounded-xl"
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-start gap-3 w-[28rem]">
        <h4 className="font-bold ">{title}</h4>
        <h4 className="font-bold">${price}</h4>
        <button
          className="text-white bg-red-600 px-6 py-1 rounded-lg shadow-lg w-32"
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          className="text-xl rounded-full p-2 hover:bg-gray-500 hover:text-white duration-300"
          onClick={() => dispatch(increase(id))}
        >
          <BsChevronUp />
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
          <BsChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
