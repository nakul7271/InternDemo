
export function isEmail(value) {
    const rgExp = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
    return rgExp.test(value);
  }
  
  export function isNotEmpty(value) {
    return value.trim() !== "";
  }
  
  export function isPassword(value) {
    const rgExp =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
    return rgExp.test(value);
  }
  
  export function isEqualsToOtherValue(value, otherValue) {
    return value === otherValue;
  }
  
  export function isValidMobileNumber(mobileNumber) {
    // Remove spaces and dashes for more flexible input
    const cleanedNumber = mobileNumber.replace(/[\s-]/g, '');
  
    // Check if the cleaned number contains only digits and has a valid length
    const isValidFormat = /^\d{10}$/.test(cleanedNumber);
  
    return isValidFormat;
}
  
export function isValidPostalCode(postalCode) {
  // Remove spaces for more flexible input
  const cleanedPostalCode = postalCode.replace(/\s/g, '');

  // Check if the cleaned postal code is alphanumeric and has a valid length
  const isValidFormat = /^[a-zA-Z0-9]{5,10}$/.test(cleanedPostalCode);

  return isValidFormat;
}

