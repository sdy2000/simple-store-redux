import { Link } from "react-router-dom";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const footerButtonData = [
  { title: "Terms & Conditions", slug: "/term" },
  { title: "Privacy Policy", slug: "/policy" },
  { title: "Cookies", slug: "/cookies" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 lg:grid lg:grid-cols-5 mt-20">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-gray-400 font-semibold">
                Call us
              </span>

              <a
                href="#"
                className="block text-2xl font-medium text-gray-100 hover:opacity-75 sm:text-3xl"
              >
                0123456789
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-300">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-300 transition hover:opacity-75 text-2xl duration-300"
                >
                  <span className="sr-only">Facebook</span>

                  <BsFacebook />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-300 transition hover:opacity-75 text-2xl duration-300"
                >
                  <span className="sr-only">Instagram</span>

                  <BsInstagram />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-300 transition hover:opacity-75 text-2xl duration-300"
                >
                  <span className="sr-only">Twitter</span>

                  <BsTwitter />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-300 transition hover:opacity-75 text-2xl duration-300"
                >
                  <span className="sr-only">GitHub</span>

                  <BsGithub />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-300 transition hover:opacity-75 text-2xl duration-300"
                >
                  <span className="sr-only">Dribbble</span>

                  <BsDribbble />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-gray-100 text-lg font-bold">
                Services
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    1on1 Coaching
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    Company Review
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    Accounts Review
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    HR Consulting
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    SEO Optimisation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-100 text-lg font-bold">
                Company
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    Accounts Review
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              {footerButtonData.map((data) => (
                <li key={data.slug}>
                  <Link
                    to={data.slug}
                    title={data.title}
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; 2023. Simple Store. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
