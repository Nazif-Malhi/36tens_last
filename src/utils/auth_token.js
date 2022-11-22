import axios from "axios";
export const isHandled_AuthToken = (user) => {
  try {
    if (localStorage.getItem("token") !== null) {
      localStorage.clear();
    }
    localStorage.setItem("token", user.token);
    set_authtoken_toHeader(user.token);
    return true;
  } catch (error) {
    console.log(error.response);
    return false;
  }
};

export const set_authtoken_toHeader = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
  } else delete axios.defaults.headers.common["Authorization"];
};
