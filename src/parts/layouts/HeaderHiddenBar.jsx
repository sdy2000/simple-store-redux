import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../context/features/modal/modal-slice";
import { SocialBox } from "../../components";

const navData = [
  { id: "Home", slug: "/", title: "Home Page" },
  { id: "Product", slug: "/product", title: "Product Page" },
  { id: "Categories", slug: "/category", title: "Categories Page" },
  { id: "About", slug: "/about", title: "About Page" },
  { id: "Contact", slug: "/contact", title: "Contact Page" },
];

const HeaderHiddenBar = () => {
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  return (
    <>
      <nav
        className={`hidden-nav fixed inset-0 bg-gray-100 pb-5 overflow-auto
                     overscroll-contain z-30 xl:hidden scroll-smooth overflow-y-scroll scrollbar-hide
                     ${
                       !isOpen
                         ? "-translate-x-[100%] invisible"
                         : "translate-x-[0] visible"
                     }`}
      >
        <div className="sticky w-full inset-0 bg-p pt-4 z-40">
          <div className="container flex justify-between border-b shadow-xl dark:border-das pb-5">
            <div className="flex justify-start items-center gap-1">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Simple Store Logo"
              />
              <span className="self-center text-xl font-bold whitespace-nowrap">
                Simple Store
              </span>
            </div>

            <button type="button" className="lg:hidden head-icon-btn text-4xl">
              <span className="sr-only">Close main menu</span>
              <IoMdClose
                onClick={() => dispatch(closeModal("header_hidden_bar"))}
              />
            </button>
          </div>
        </div>

        <div className="container flex flex-col">
          <div className="mt-12 border-b pb-8 w-full">
            <ul className="flex flex-col gap-4 ">
              {navData.map((nav) => (
                <li
                  key={nav.slug}
                  className="text-lg font-semibold text-gray-800"
                >
                  <Link to={nav.slug} title={nav.title}>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 w-full flex justify-center">
            <SocialBox styles={"hidden-bar-social"} />
          </div>
        </div>
      </nav>
    </>
  );
};
export default HeaderHiddenBar;
