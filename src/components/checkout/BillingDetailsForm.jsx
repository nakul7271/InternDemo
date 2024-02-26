import { useState } from "react";
import {
  isEmail,
  isNotEmpty,
  isValidMobileNumber,
  isValidPostalCode,
} from "../../util/validation";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store";
import { useNavigate } from "react-router-dom";

const BillingDetailsForm = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [enteredValues, setEnteredValues] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    postCode: "",
  });

  const [inputIsInvalidOnSubmission, setInputIsInvalidOnSubmission] = useState({
    firstName: false,
    mobileNumber: false,
    email: false,
    city: false,
    state: false,
    postCode: false,
  });

  const [didEdit, setDidEdit] = useState({
    firstName: false,
    mobileNumber: false,
    email: false,
    city: false,
    state: false,
    postCode: false,
  });

  const emailIsInvalid =
    (didEdit.email && !isEmail(enteredValues.email)) ||
    inputIsInvalidOnSubmission.email;
  const firstNameIsInvalid =
    (didEdit.firstName && !isNotEmpty(enteredValues.firstName)) ||
    inputIsInvalidOnSubmission.firstName;
  const mobileNumberIsInvalid =
    (didEdit.mobileNumber &&
      !isValidMobileNumber(enteredValues.mobileNumber)) ||
    inputIsInvalidOnSubmission.mobileNumber;
  const cityIsInvalid =
    (didEdit.city && !isNotEmpty(enteredValues.city)) ||
    inputIsInvalidOnSubmission.city;
  const stateIsInvalid =
    (didEdit.state && !isNotEmpty(enteredValues.state)) ||
    inputIsInvalidOnSubmission.state;
  const postCodeIsInvalid =
    (didEdit.postCode && !isValidPostalCode(enteredValues.postCode)) ||
    inputIsInvalidOnSubmission.postCode;

  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => {
      return {
        ...prevValues,
        [identifier]: value,
      };
    });
    setDidEdit((prevValues) => {
      return {
        ...prevValues,
        [identifier]: false,
      };
    });

    setInputIsInvalidOnSubmission((prevValues) => {
      return {
        ...prevValues,
        [identifier]: false,
      };
    });
  };

  const handleOnBlur = (identifier) => {
    setDidEdit((prevValues) => {
      return {
        ...prevValues,
        [identifier]: true,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let check = false;

    if (!isEmail(enteredValues.email)) {
      check = true;
      setInputIsInvalidOnSubmission((prevValues) => {
        return {
          ...prevValues,
          email: true,
        };
      });
    }

    if (!isNotEmpty(enteredValues.firstName)) {
      check = true;
      setInputIsInvalidOnSubmission((prevValues) => {
        return {
          ...prevValues,
          firstName: true,
        };
      });
    }

    if (!isValidMobileNumber(enteredValues.mobileNumber)) {
      check = true;
      setInputIsInvalidOnSubmission((prevValues) => {
        return {
          ...prevValues,
          mobileNumber: true,
        };
      });
    }

    if (!isNotEmpty(enteredValues.city)) {
      check = true;
      setInputIsInvalidOnSubmission((prevValues) => {
        return {
          ...prevValues,
          city: true,
        };
      });
    }

    if (!isNotEmpty(enteredValues.state)) {
      check = true;
      setInputIsInvalidOnSubmission((prevValues) => {
        return {
          ...prevValues,
          state: true,
        };
      });
    }

    if (!isValidPostalCode(enteredValues.postCode)) {
      check = true;
      setInputIsInvalidOnSubmission((prevValues) => {
        return {
          ...prevValues,
          postCode: true,
        };
      });
    }

    if (check === true) {
      return;
    }

    console.log(enteredValues, cart);

    setEnteredValues((prevValues) => {
      return {
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        streetAddress: "",
        city: "",
        state: "",
        postCode: "",
      };
    });

    setDidEdit((prevValues) => {
      return {
        firstName: false,
        mobileNumber: false,
        email: false,
        city: false,
        state: false,
        postCode: false,
      };
    });

    dispatch(cartActions.removeAll());
    // dispatch(showCartNotification.placeOrder(false));
    navigate("/");
  };

  // if (placeOrder) {
  //   handleSubmit();
  // }

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-6">
        <div className="md:flex justify-between">
          <div className="md:w-[48%] w-full  flex flex-col">
            <label htmlFor="inputFNId">
              First Name <span className="text-red-600">*</span>{" "}
            </label>
            <input
              onBlur={() => {
                handleOnBlur("firstName");
              }}
              onChange={(e) => {
                handleInputChange("firstName", e.target.value);
              }}
              className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
              type="text"
              name="firstName"
              id="inputFNId"
              value={enteredValues.firstName}
            />
            {firstNameIsInvalid && (
              <p className="text-red-500">Please enter your First Name</p>
            )}
          </div>
          <div className="md:w-[48%] w-full flex flex-col">
            <label htmlFor="inputLNId">Last Name</label>
            <input
              onChange={(e) => {
                handleInputChange("lastName", e.target.value);
              }}
              className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
              type="text"
              name="lastName"
              id="inputLNId"
              value={enteredValues.lastName}
            />
          </div>
        </div>
        <div className="md:flex justify-between mt-4">
          <div className="md:w-[48%] w-full flex flex-col">
            <label htmlFor="phone">
              Mobile Number <span className="text-red-600">*</span>
            </label>
            <input
              onBlur={() => {
                handleOnBlur("mobileNumber");
              }}
              onChange={(e) => {
                handleInputChange("mobileNumber", e.target.value);
              }}
              className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
              type="number"
              name="mobileNumber"
              id="phone"
              value={enteredValues.mobileNumber}
            />
            {mobileNumberIsInvalid && (
              <p className="text-red-500">Please enter a valid Mobile Number</p>
            )}
          </div>
          <div className="md:w-[48%] w-full flex flex-col">
            <label htmlFor="emailAddress">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              onBlur={() => {
                handleOnBlur("email");
              }}
              onChange={(e) => {
                handleInputChange("email", e.target.value);
              }}
              className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
              type="email"
              name="email"
              id="emailAddress"
              value={enteredValues.email}
            />
            {emailIsInvalid && (
              <p className="text-red-500">Please enter a valid Email</p>
            )}
          </div>
        </div>
        <div className="my-5 w-full flex flex-col">
          <label htmlFor="streetAddress">Street Address</label>
          <input
            onChange={(e) => {
              handleInputChange("streetAddress", e.target.value);
            }}
            className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
            type="text"
            name="streetAddress"
            id="streetAddress"
            placeholder="House number and street name"
            value={enteredValues.streetAddress}
          />
          {/* <input
            className=" w-full py-2 px-6 border mt-3 border-slate-200 outline-none"
            type="text"
            name="streetAddress"
            id="streetAddress"
            placeholder="Apartment, suite, unit etc."
          /> */}
        </div>
        <div className="my-5 w-full flex flex-col">
          <label htmlFor="town">
            Town / City <span className="text-red-600">*</span>
          </label>
          <input
            onBlur={() => {
              handleOnBlur("city");
            }}
            onChange={(e) => {
              handleInputChange("city", e.target.value);
            }}
            className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
            type="text"
            name="city"
            id="town"
            value={enteredValues.city}
          />
          {cityIsInvalid && (
            <p className="text-red-500">Please enter your Town / City</p>
          )}
        </div>
        <div className="md:flex justify-between mt-4">
          <div className="md:w-[48%] w-full flex flex-col">
            <label htmlFor="state">
              State / Country <span className="text-red-600">*</span>
            </label>
            <input
              onBlur={() => {
                handleOnBlur("state");
              }}
              onChange={(e) => {
                handleInputChange("state", e.target.value);
              }}
              className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
              type="text"
              name="state"
              id="state"
              value={enteredValues.state}
            />
            {stateIsInvalid && (
              <p className="text-red-500">Please enter your State / Country</p>
            )}
          </div>
          <div className="md:w-[48%] w-full flex flex-col">
            <label htmlFor="postCode">
              Postcode / ZIP <span className="text-red-600">*</span>
            </label>
            <input
              onBlur={() => {
                handleOnBlur("postCode");
              }}
              onChange={(e) => {
                handleInputChange("postCode", e.target.value);
              }}
              className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
              type="number"
              name="postCode"
              id="postCode"
              value={enteredValues.postCode}
            />
            {postCodeIsInvalid && (
              <p className="text-red-500">
                Please enter a valid Postcode / ZIP
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full font-semibold mt-6 text-white py-3 px-6 rounded-md bg-blue-500 hover:bg-slate-900 transition-all duration-500"
        >
          PLACE ORDER
        </button>
      </div>
    </form>
  );
};

export default BillingDetailsForm;
