import { useState } from "react";
import Logo from "../../assets/Vector.svg";
import { Button } from "./button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="dark:bg-gray-900 w-full z-20 top-0 start-0">
      <div className="max-w-screen flex flex-wrap justify-between items-center p-10">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="Fashion Logo" />
          <span className="self-center text-2xl whitespace-nowrap dark:text-white uppercase font-black">
            Fashion
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button>Sign UP</Button>
          <button
            onClick={handleMenuToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full  flex-grow flex justify-center text-center md:flex  md:w-auto md:justify-center lg:justify-end md:order-1`}
          id="navbar-sticky"
        >
          <ul className=" flex flex-col p-4 md:p-0 mt-4 space-y-2 md:space-y-0 font-medium rounded-lg md:flex-row md:space-x-10 lg:space-x-20 lg:mx-10 md:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-custom-Cyellow md:p-0  uppercase"
                aria-current="page"
              >
                Catalogue
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-custom-Cyellow md:p-0  uppercase"
              >
                Fashion
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-custom-Cyellow md:p-0  uppercase"
              >
                Favourite
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-custom-Cyellow md:p-0  uppercase"
              >
                LifeStyle
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
