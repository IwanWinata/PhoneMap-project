import { MdOutlineAddShoppingCart } from "react-icons/md";
import {BsFillShareFill} from "react-icons/bs"

const CardComp = ({el}) => {
  return (
    <div sm="6" cols="12" className="bg-white w-1/6 rounded-lg shadow-lg">
      <div className="flex align-center">
        <div className="flex justify-space-between flex-wrap flex-col">
          <div className="mx-auto my-2">
            <img
              width="150"
              height="100%"
              src={el.images[0]}
              alt="phone"
            ></img>
          </div>
          <hr className="bg-gray-600" />
          <div className="m-4">
            <p className="text-lg text-gray-500 font-bold">
              {el.title}
            </p>
            <p className="text-sm text-gray-400 my-4">
              {el.description}
            </p>
            <p className="text-gray-500 text-base my-2">
              <span>Price :</span>{" "}
              <span className="font-bold text-gray-600">${el.price}</span>
            </p>
            <div className="flex justify-between mt-4">
              <a href="https://github.com/IwanWinata/PhoneMap-project" className="text-violet-600 flex flex-row font-semibold">
                <MdOutlineAddShoppingCart size={20} className="mr-2"/>
                <span className="text-sm">ADD TO CART</span>
              </a>
              <a href="https://github.com/IwanWinata/PhoneMap-project" className="text-gray-400 font-semibold">
                <BsFillShareFill size={18} className="mr-2"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardComp;
