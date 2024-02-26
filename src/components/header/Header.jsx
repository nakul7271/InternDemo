import React from "react";
import { useDispatch } from "react-redux";
import CartAndWishlist from "../cart/CartAndWishlist";
import { Link } from "react-router-dom";
import { productActions } from "../../store";

const Header = () => {

  const dispatch = useDispatch();


  return (
    <header className="py-2 bg-gray-100">
      <div className="mx-[5%] md:mx-[12%] md:px-[12px] lg:mx-[1.5%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img
                className="w-44 size-fit"
                src="images02/logo.png"
                alt="companyLogo"
              />
            </Link>
          </div>
          <div>
            <input
              onChange={(e)=>{dispatch(productActions.searchQuery(e.target.value))}}
              className="border-[1px] rounded-md outline-none py-2 px-6 md:w-[400px] lg:w-[500px] xl:w-[600px]"
              name="searched"
              type="search"
              placeholder="Search a product"
            />
          </div>
          <div>
            <CartAndWishlist />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
