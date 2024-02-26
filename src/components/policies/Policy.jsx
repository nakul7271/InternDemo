

import React from "react";

const Policy = (props) => {
  return (
    <>
      <div className=" py-10">
        <div className="border-r flex px-6 ">
          <div className="mr-4">
            <img src={props.url} alt="freeShipping" />
          </div>
          <div>
            <h4 className="font-semibold pb-2">{props.heading}</h4>
            <p className="text-slate-500 text-sm">{props.para}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;



