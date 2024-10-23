import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const FooterBottom = () => {
  return (
    <>
      <footer className="bg-black py-10">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
          <div className="md:flex md:justify-between">
            <div className="flex flex-col lg:items-start items-center  justify-center mb-10 gap-10">
              <a href="#">
                <span className="self-center uppercase text-3xl font-black whitespace-nowrap text-white">
                  Fashion
                </span>
              </a>
              <p className="text-gray-500">
                Complete your style with awesome <br /> clothes from us.
              </p>
              <div className="flex items-center justify-start gap-3">
                <FaFacebookSquare className="text-custom-Cyellow text-3xl " />
                <FaSquareInstagram className="text-custom-Cyellow text-3xl" />
                <FaSquareTwitter className="text-custom-Cyellow text-3xl" />
                <FaLinkedin className="text-custom-Cyellow text-3xl" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold   text-white">
                  Company
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Contact us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold   text-white">
                  Quick Links
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Share Location
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Orders Tracking
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Size Guide
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold   text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterBottom;
