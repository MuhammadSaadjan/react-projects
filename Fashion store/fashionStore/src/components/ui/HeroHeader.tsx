import HeroImg from "../../assets/heroWomen.png";
import { Button } from "./button";

const HeroHeader = () => {
  return (
    <>
      <section className="bg-custom-herobg dark:bg-gray-900 mx-20 rounded-[50px]">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto  lg:gap-8 xl:gap-0  lg:grid-cols-12 md:grid-cols-4">
          <div className=" order-1  md:mr-auto place-self-center lg:col-span-5 ">
            <div className=" bg-custom-white absolute w-[275px] h-[65px] -translate-x-5 -rotate-[3deg] "></div>
            <h1 className=" relative max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Let's
            </h1>
            <h1 className="relative max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white uppercase">
              Explore
            </h1>

            <div className=" bg-custom-Cyellow absolute w-[295px] h-[65px] -translate-x-5 -rotate-3 "></div>
            <h1 className="relative max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white uppercase">
              Unique
            </h1>

            <h1 className="relative max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white uppercase">
              Clothes
            </h1>
            <p className="relative max-w-2xl mb-6 font-semibold text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 uppercase">
              Live for Influential and Innovative fashion!
            </p>
            <Button className="p-5 bg-black">Shop Now</Button>
          </div>
          <div className="order-2 hidden md:-mb-5 md:col-span-3 lg:col-span-5 md:flex ">
            <img className="lg:scale-105" src={HeroImg} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHeader;
