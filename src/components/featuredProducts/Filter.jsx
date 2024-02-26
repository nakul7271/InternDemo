import Rating from "./Rating";
import { productActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const byRating = useSelector((state) => state.product.byRating);
  const sortByOrder = useSelector((state) => state.product.sortByOrder);
  const byFastDelivery = useSelector((state) => state.product.byFastDelivery);
  const byStock = useSelector((state) => state.product.byStock);

  const dispatch = useDispatch();

  return (
    <div className="border-2 border-gray-200 w-1/4 bg-gray-100">
      <div className="px-4 py-5 text-slate-800">
        <div className="text-2xl font-semibold text-slate-800 py-3">
          Filter Products
        </div>
        <div className="text-lg">
          <div className="my-5">
            <input
              checked={sortByOrder === "LowToHigh" ? true : false}
              onChange={() => {
                dispatch(productActions.sortByOrder("LowToHigh"));
              }}
              type="radio"
              id="input01"
              name="group1"
              className="mr-4"
            />
            <label htmlFor="input01">Prize Low to High</label>
          </div>
          <div className="my-5">
            <input
              checked={sortByOrder === "HighToLow" ? true : false}
              onChange={() => {
                dispatch(productActions.sortByOrder("HighToLow"));
              }}
              type="radio"
              id="input02"
              name="group1"
              className="mr-4"
            />
            <label htmlFor="input02">Prize High to Low</label>
          </div>
          <div className="my-5">
            <input
              checked={byStock}
              onChange={() => {
                dispatch(productActions.byStocks());
              }}
              type="checkbox"
              id="input03"
              name="inStock"
              className="mr-4"
            />
            <label htmlFor="input03">Include Out of Stock</label>
          </div>
          <div className="my-5">
            <input
              checked={byFastDelivery}
              onChange={() => {
                dispatch(productActions.byFastDelivery());
              }}
              type="checkbox"
              id="input04"
              name="fastDelivery"
              className="mr-4"
            />
            <label htmlFor="input04">Fast Delivery Only</label>
          </div>
          <div className="flex items-center my-5">
            <label className="mr-4" htmlFor="input05">
              Rating
            </label>
            <div className="flex mt-1">
              <Rating
                rating={byRating}
                onClick={(i) => {
                  dispatch(productActions.byRating(i));
                }}
              />
            </div>
          </div>
          <div className="py-5">
            <button
              onClick={() => {
                dispatch(productActions.clearAll());
              }}
              className="w-full text-slate-800 py-3 text-center hover:bg-blue-500 hover:text-white bg-slate-200 font-semibold rounded-md transition-all duration-300"
            >
              CLEAR FILTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
