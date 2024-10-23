import Vector from "../assets/newArrivals/Vector 8.png";
import women1 from "../assets/newArrivals/card1.png";
import women2 from "../assets/newArrivals/card2.png";
import women3 from "../assets/newArrivals/card3.png";

import { IoIosArrowRoundForward } from "react-icons/io";

const NewArrival = () => {
  return (
    <>
      <div className="mt-10 ">
        <div className="ml-16  h-14">
          <h1 className="uppercase font-black text-[35px]  absolute">
            new arrivals
          </h1>
          <img className="ml-[150px] pt-6 w-[130px]" src={Vector} alt="" />
        </div>

        {/* ////////////////////// */}
        <div className="flex items-center justify-center my-14">
          <div className="grid lg:grid-cols-3 gap-x-28 m-10">
            <div className="">
              <div>
                <img src={women1} alt="" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-semibold text-[20px]  text-black cursor-pointer">
                    Hoodies & Sweetshirt
                  </h1>
                  <p className="text-gray-600 cursor-pointer">Explore Now!</p>
                </div>
                <div>
                  <IoIosArrowRoundForward className="size-12 text-gray-500 cursor-pointer" />
                </div>
              </div>
            </div>
            {/* ////////////////////////// */}
            <div className="">
              <div>
                <img src={women2} alt="" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-semibold text-[20px]  text-black cursor-pointer">
                    Coats & Parkas
                  </h1>
                  <p className="text-gray-600 cursor-pointer">Explore Now!</p>
                </div>
                <div>
                  <IoIosArrowRoundForward className="size-12 text-gray-500 cursor-pointer" />
                </div>
              </div>
            </div>
            {/* ////////////////////////////////// */}
            <div className="">
              <div>
                <img src={women3} alt="" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-semibold text-[20px]  text-black cursor-pointer">
                    Tees & T-Shirt
                  </h1>
                  <p className="text-gray-600 cursor-pointer">Explore Now!</p>
                </div>
                <div>
                  <IoIosArrowRoundForward className="size-12 text-gray-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
