import bnrImg from "../assets/Banner/bannerImg.png";
import { Button } from "../components/ui/button";

const Banner = () => {
  return (
    <>
      <section className="bg-custom-Cyellow h-[595px]">
        <div className="lg:grid lg:grid-cols-2 h-full md:flex ">
          {/* Text Section */}
          <div className="order-2 pt-28 md:pt-0 flex flex-col justify-center scale-125 items-center lg:items-start text-center lg:text-left space-y-5 lg:pl-20">
            <div className="relative">
              <div className="bg-custom-white absolute w-[275px] h-[65px] -translate-x-5  scale-105 -rotate-[3deg]"></div>
              <h1 className="relative text-4xl font-extrabold uppercase md:text-5xl xl:text-6xl">
                payday
              </h1>
              <h1 className="relative text-4xl font-extrabold uppercase md:text-5xl xl:text-6xl dark:text-white">
                sale now
              </h1>
            </div>
            <p className="max-w-2xl font-semibold text-black md:text-lg lg:text-xl uppercase">
              Spend minimal $100 get 30% off <br /> voucher code for your next
              purchase
            </p>
            <h1 className="text-xl font-bold">1 June - 10 June 2021</h1>
            <p className="font-semibold text-black text-xl">
              *Terms & Conditions apply
            </p>
            <Button className="p-5 bg-black uppercase">Shop Now</Button>
          </div>

          {/* Image Section */}
          <div className=" order-1 hidden md:flex  items-center justify-center ">
            <img
              className="drop-shadow-2xl lg:w-[80%] "
              src={bnrImg}
              alt="Banner"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
