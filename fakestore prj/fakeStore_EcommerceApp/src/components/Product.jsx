import React, { useContext } from "react";

//import link
import { Link } from "react-router-dom";

//import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";

//import cart context
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  //destructure product
  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className="border border-[#e4e4e4] rounded-lg h-[300px] mb-4 relative overflow-hidden group transition shadow-lg hover:scale-105 ">
        {/* image */}
        <div className="w-full h-full  mx-auto flex justify-center  items-center">
          <div>
            <img
              className="max-h-[160px] group-hover:scale-110  transition duration-300"
              src={image}
              alt={title}
            />
          </div>
        </div>
        {/* Button */}
        <div className="absolute top-6 -right-11 group-hover:right-5  p-2 opacity-0 flex flex-col justify-center items-center gap-y-2 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* Category, Title and Price */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">${price}</div>
      </div>
    </div>
  );
};

export default Product;
