import { Link } from "react-router-dom";
import { BsListUl } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { useSelector } from "react-redux";

const navData = [
  { id: "Home", slug: "/", title: "Home Page" },
  { id: "Product", slug: "/product", title: "Product Page" },
  { id: "Categories", slug: "/category", title: "Categories Page" },
  { id: "About", slug: "/about", title: "About Page" },
  { id: "Contact", slug: "/contact", title: "Contact Page" },
];

const Header = () => {
  const { amount } = useSelector((store) => store.product);

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
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
              <Link
                to={"#"}
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </Link>
              <Link
                to={"#"}
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Get started
              </Link>
            </div>
            <button
              type="button"
              className="relative p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <MdOutlineLocalGroceryStore size={30} />
              <span className="absolute top-0 left-0 w-5 h-5 text-sm font-semibold bg-primary-600 text-white rounded-full flex justify-center items-center">
                {amount}
              </span>
            </button>
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <BsListUl size={30} />
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navData.map((nav) => (
                <li key={nav.id}>
                  <Link
                    to={nav.slug}
                    title={nav.title}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {nav.id}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
