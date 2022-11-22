import validator from "validator";

export const is_emailValid = (email) => {
  if (validator.isEmail(email)) {
    return true;
  } else {
    return false;
  }
};
