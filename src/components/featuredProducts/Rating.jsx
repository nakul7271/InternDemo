import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span className="mr-1" key={i} onClick={() => onClick(i + 1)}>
          {rating > i ? (
            <AiFillStar
              fontSize="20px"
              style={{ color: "yellow", cursor: "pointer" }}
            />
          ) : (
            <AiOutlineStar fontSize="20px" style={{ cursor: "pointer" }} />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
