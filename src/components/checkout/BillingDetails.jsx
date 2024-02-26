import React, { useState } from "react";
import BillingDetailsForm from "./BillingDetailsForm";
import CreateAccountForm from "./CreateAccountForm";

const BillingDetail = () => {
  const [accountCheckbox, setAccountCheckbox] = useState(false);

  const accountCheckboxHandler = () => {
    setAccountCheckbox((prev) => {
      return !prev;
    });
  };

  return (
    <div className="text-slate-600">
      <h3 className="text-2xl text-black font-semibold">Billing Details</h3>

      <BillingDetailsForm />
      <div>
        <input
          onChange={accountCheckboxHandler}
          id="createAccount"
          type="checkbox"
        />
        <label className="ml-2" htmlFor="createAccount">
          Create an account ?
        </label>
      </div>
      {accountCheckbox && <CreateAccountForm />}
    </div>
  );
};

export default BillingDetail;
