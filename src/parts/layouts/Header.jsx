import { Link } from "react-router-dom";
import { BsListUl } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../context/features/modal/modal-slice";
import { HeaderHiddenBar } from "..";
import { ForgotPassword, Login, SingUp } from "../../pages";

const navData = [
  { id: "Home", slug: "/", title: "Home Page" },
  { id: "Product", slug: "/product", title: "Product Page" },
  { id: "Categories", slug: "/category", title: "Categories Page" },
  { id: "About", slug: "/about", title: "About Page" },
  { id: "Contact", slug: "/contact", title: "Contact Page" },
];

const Header = () => {
  const { total_amount } = useSelector((store) => store.cart);
  const { isOpen, modalId } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-full flex justify-between items-center py-6 bg-stone-800">
        <div className="container">
          <Link
            className="head-account-btn bg-blue-700 text-white text-lg"
            to="/admin"
          >
            Admin panel
          </Link>
        </div>
      </div>
      <header>
        <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="container flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Simple Store Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Simple Store
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <div className="hidden sm:flex justify-between items-center w-full">
                <button
                  onClick={() => dispatch(openModal("login_modal"))}
                  className="text-white hover:text-black hover:bg-gray-50 head-account-btn"
                >
                  Log in
                </button>
                <button
                  onClick={() => dispatch(openModal("sing_up_modal"))}
                  className="text-white bg-primary-700 hover:bg-primary-800 head-account-btn"
                >
                  Get started
                </button>
              </div>
              <Link to="/cart" className="relative head-icon-btn">
                <MdOutlineLocalGroceryStore size={30} />
                <span className="absolute -top-2 -left-1 w-5 h-5 text-sm font-semibold bg-primary-600 text-white rounded-full flex justify-center items-center">
                  {total_amount}
                </span>
              </Link>
              <button
                onClick={() => dispatch(openModal("header_hidden_bar"))}
                type="button"
                className="lg:hidden head-icon-btn"
              >
                <span className="sr-only">Open main menu</span>
                <BsListUl size={30} />
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="head-nav-list">
                {navData.map((nav) => (
                  <li key={nav.id}>
                    <Link to={nav.slug} title={nav.title}>
                      {nav.id}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        {isOpen && modalId === "header_hidden_bar" && <HeaderHiddenBar />}
      </header>
      {isOpen && modalId === "login_modal" && <Login />}
      {isOpen && modalId === "forgot_password" && <ForgotPassword />}
      {isOpen && modalId === "sing_up_modal" && <SingUp />}
    </>
  );
};
export default Header;
