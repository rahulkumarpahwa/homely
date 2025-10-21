export const reducer = (state, actions) => {
  switch (actions.type) {
    case "SET_EMAIL":
      return { ...state, email: actions.payload };
    case "SET_PASSWORD":
      return { ...state, password: actions.payload };
    case "SET_FIRSTNAME":
      return { ...state, firstName: actions.payload };
    case "SET_LASTNAME":
      return { ...state, lastName: actions.payload };
    case "SET_MOBILE":
      return { ...state, mobile: actions.payload };
    case "SET_ADDRESS":
      return { ...state, address: actions.payload };
  }
};

export const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  address: "",
  mobile: "",
};
