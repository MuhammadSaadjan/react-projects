import Mobile from "../assets/mobile app/Mobile app.png";
import btn1 from "../assets/mobile app/Rectangle 55.png";
import btn2 from "../assets/mobile app/Rectangle 18.png";
import ellipse1 from "../assets/mobile app/Ellipse 1.png";
import ellipse2 from "../assets/mobile app/Ellipse 2.png";
import ellipse3 from "../assets/mobile app/Ellipse 3.png";

const MobileApp = () => {
  return (
    <>
      <section className=" ">
        <div className="lg:grid lg:grid-cols-2  md:flex ">
          {/* Text Section */}
          <div className=" order-1 pt-28 md:pt-0 flex flex-col justify-center  items-center md:items-start md:ml-28  text-center lg:text-left space-y-5  ">
            <div className="relative">
              <h1 className="relative text-4xl font-bold uppercase md:text-4xl xl:text-5xl">
                download app &
              </h1>
              <h1 className="relative text-4xl font-bold uppercase md:text-4xl xl:text-5xl dark:text-white">
                GET THE VOUCHER!
              </h1>
            </div>
            <p className="max-w-2xl font-semibold text-gray-600 md:text-lg lg:text-xl ">
              Get 30% off for first transaction using <br /> Rondovision mobile
              app for now.
            </p>
            <div className="grid grid-flow-col gap-5">
              <img className="w-40" src={btn1} alt="" />
              <img className="w-40" src={btn2} alt="" />
            </div>
          </div>

          {/* Image Section */}
          <div className=" order-2 hidden md:flex  items-center justify-center relative">
            <img className=" w-[50%] z-10" src={Mobile} alt="Banner" />
            <img className="absolute  w-[450px]" src={ellipse1} alt="" />
            <img className="absolute w-96" src={ellipse2} alt="" />
            <img className="absolute w-80" src={ellipse3} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileApp;
