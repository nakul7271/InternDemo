
import React from "react";
import Policy from "./Policy";

const Policies = () => {
  return (
    <>
      <div className="mx-[5%] md:mx-[12%] md:px-[12px] lg:mx-[1.5%] lg:px-[17px] xl:mx-[7%] xl:px-[20px] my-[50px] ">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 border border-slate-200">
          <Policy
            url="policies/policiesImg01.png"
            heading="Free Shipping"
            para="On all orders over $75.00"
          />

          <Policy
            url="policies/policiesImg02.png"
            heading="Free Returns"
            para="Returns are free within 9 days"
          />
          <Policy
            url="policies/policiesImg03.png"
            heading="100% Payment Secure"
            para="Your payment are safe with us."
          />
          <Policy
            url="policies/policiesImg04.png"
            heading="Support 24/7"
            para="Contact us 24 hours a day"
          />
        </div>
      </div>
    </>
  );
};

export default Policies;

