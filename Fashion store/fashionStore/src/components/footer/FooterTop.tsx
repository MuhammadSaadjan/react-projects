import { Button } from "../ui/button";

const footerTop = () => {
  return (
    <>
      <div className="pt-10">
        <div className="bg-custom-Cyellow py-16 flex flex-col items-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center uppercase text-white">
            Join Shopping Community To <br /> Get Monthly Promo
          </h1>
          <p className="text-lg text-white text-center">
            Type your email down below and be young wild generation
          </p>
          <form>
            <label
              htmlFor="email"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="block w-96 p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                placeholder="Add Your email here"
                required
              />
              <Button className="text-white bg-black absolute end-2.5 bottom-2.5  uppercase scale-105 px-5 py-3 ">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default footerTop;
