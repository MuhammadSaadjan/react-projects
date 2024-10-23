import Amazon from "../../assets/heroFooter/amazon.png";
import HM from "../../assets/heroFooter/HM.png";
import Lacoste from "../../assets/heroFooter/lacoste.png";
import shopify from "../../assets/heroFooter/shopify.png";
import Obey from "../../assets/heroFooter/0bey.png";
import Levis from "../../assets/heroFooter/levis.png";

const HeroFooter = () => {
  return (
    <>
      <div className="bg-custom-Cyellow mt-14">
        <ul className=" mx-14 py-5 flex items-center justify-between">
          <li className="w-24  object-contain">
            <a href="#">
              <img src={HM} alt="" />
            </a>
          </li>
          <li className="w-24 object-contain">
            <a href="#">
              <img src={Obey} alt="" />
            </a>
          </li>
          <li className="w-24 object-contain">
            <a href="#">
              <img src={shopify} alt="" />
            </a>
          </li>
          <li className="w-24 object-contain">
            <a href="#">
              <img src={Lacoste} alt="" />
            </a>
          </li>
          <li className="w-24 object-contain">
            <a href="#">
              <img src={Levis} alt="" />
            </a>
          </li>
          <li className="w-24 object-contain">
            <a href="#">
              <img src={Amazon} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeroFooter;
