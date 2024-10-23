import Vector from "../assets/newArrivals/Vector 8.png";
import women1 from "../assets/fav/fav1.png";
import women2 from "../assets/fav/fav2.png";

import { IoIosArrowRoundForward } from "react-icons/io";

const Youngsfav = () => {
  return (
    <>
      <div className="mt-14 ">
        <div className="ml-16  h-14">
          <h1 className=" font-black text-[35px]  absolute">
            Young's Favourite
          </h1>
          <img className="ml-[190px] pt-7 w-[130px]" src={Vector} alt="" />
        </div>

        {/* ////////////////////// */}
        <div className=" flex items-center justify-center mt-10">
          <div className="grid lg:grid-cols-2 gap-10 m-14">
            <div className="">
              <div>
                <img src={women1} alt="" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-semibold text-[20px]  text-black">
                    Trending on instagram
                  </h1>
                  <p className="text-gray-600">Explore Now!</p>
                </div>
                <div>
                  <IoIosArrowRoundForward className="size-12 text-gray-500" />
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
                  <h1 className="font-semibold text-[20px]  text-black">
                    All Under $40
                  </h1>
                  <p className="text-gray-600">Explore Now!</p>
                </div>
                <div>
                  <IoIosArrowRoundForward className="size-12 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youngsfav;
