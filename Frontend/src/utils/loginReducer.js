export const reducer = (state, actions) => {
  switch (actions.type) {
    case "SET_EMAIL":
      return { ...state, email: actions.payload };
    case "SET_PASSWORD":
      return { ...state, password: actions.payload };
  }
};

export const intialState = {
  email: "",
  password: "",
};
