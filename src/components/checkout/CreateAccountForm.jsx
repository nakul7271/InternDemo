import React, { useState } from "react";
import {
  isEmail,
  isEqualsToOtherValue,
  isPassword,
} from "../../util/validation";

const CreateAccountForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [inputIsInvalidOnSubmission, setInputIsInvalidOnSubmission] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const emailIsInvalid =
    (didEdit.email && !isEmail(enteredValues.email)) ||
    inputIsInvalidOnSubmission.email;
  const passwordIsInvalid =
    (didEdit.password && !isPassword(enteredValues.password)) ||
    inputIsInvalidOnSubmission.password;

  const confirmPasswordIsInvalid =
    (didEdit.confirmPassword &&
      !isEqualsToOtherValue(
        enteredValues.confirmPassword,
        enteredValues.password
      )) ||
    inputIsInvalidOnSubmission.confirmPassword;

  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => {
      return {
        ...prevValues,
        [identifier]: value,
      };
    });
    setDidEdit((prevValues) => {
      if (identifier === "password") {
        return {
          ...prevValues,
          ["confirmPassword"]: false,
          [identifier]: false,
        };
      }
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

  const handleSubmit = (event) => {
    event.preventDefault();

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

    if (!isPassword(enteredValues.password)) {
      check = true;
      setInputIsInvalidOnSubmission((prevValues) => {
        return {
          ...prevValues,
          password: true,
        };
      });
    }

    if (
      !isEqualsToOtherValue(
        enteredValues.confirmPassword,
        enteredValues.password
      )
    ) {
      check = true;
      setInputIsInvalidOnSubmission((prevValues) => {
        return {
          ...prevValues,
          confirmPassword: true,
        };
      });
    }

    if (check === true) {
      return;
    }

    console.log(enteredValues);

    setEnteredValues((prevValues) => {
      return {
        email: "",
        password: "",
        confirmPassword: "",
      };
    });

    setDidEdit((prevValues) => {
      return {
        email: false,
        password: false,
        confirmPassword: false,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-4 animate-fade-in-down origin-top ">
        <label htmlFor="inputEmail">
          Email Address <span className="text-red-600">*</span>
        </label>
        <input
          onBlur={() => {
            handleOnBlur("email");
          }}
          onChange={(e) => {
            handleInputChange("email", e.target.value);
          }}
          value={enteredValues.email}
          className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
          type="email"
          name="email"
          id="inputEmail"
        />
        {emailIsInvalid && (
          <p className="text-red-500">Please enter a valid email</p>
        )}
        <p className="mb-3"></p>
        <label className="" htmlFor="inputPassword">
          Password <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <input
            onBlur={() => {
              handleOnBlur("password");
            }}
            onChange={(e) => {
              handleInputChange("password", e.target.value);
            }}
            value={enteredValues.password}
            className="w-full py-2 px-6 border border-slate-200 outline-none"
            type={passwordVisible ? "text" : "password"}
            name="password"
            id="inputPassword"
          />
          <span
            onClick={togglePasswordVisibility}
            className="absolute top-1/2 right-4 cursor-pointer transform -translate-y-1/2"
          >
            {passwordVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.93 4.93a9 9 0 0112.74 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2 12s3 2.5 5 4m14-4s-3 2.5-5 4"
                ></path>
              </svg>
            )}
          </span>
        </div>

        {passwordIsInvalid && (
          <p className="text-red-500">
            Password is invalid. It must contain at least one digit, one
            lowercase letter, one uppercase letter, and one special character.
            It should be at least 8 characters long.
          </p>
        )}
        <p className="mb-3"></p>
        <label className="" htmlFor="inputPasswordConfirm">
          Confirm Password <span className="text-red-600">*</span>
        </label>
        <input
          onBlur={() => {
            handleOnBlur("confirmPassword");
          }}
          onChange={(e) => {
            handleInputChange("confirmPassword", e.target.value);
          }}
          className=" w-full py-2 px-6 border border-slate-200 outline-none"
          type="password"
          name="confirmPassword"
          id="inputPasswordConfirm"
          value={enteredValues.confirmPassword}
        />
        {confirmPasswordIsInvalid && (
          <p className="text-red-500">Password must match</p>
        )}
        <button
          type="submit"
          className=" rounded-md transition-all duration-500 mt-4 py-2 px-8 bg-blue-500 hover:bg-slate-900 text-white"
        >
          REGISTER
        </button>
      </div>
    </form>
  );
};

export default CreateAccountForm;
