export const reducer = (state, actions) => {
  switch (actions.type) {
    case "SET_TITLE":
      return { ...state, title: actions.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: actions.payload };
    case "SET_IMAGEURL":
      return { ...state, imageUrl: actions.payload };
    case "SET_STREET":
      return { ...state, street: actions.payload };
    case "SET_LOCATION":
      return { ...state, location: actions.payload };
  }
};

export const initialState = {
  title: "",
  description: "",
  imageUrl: "",
  street: "",
  location: {
    city: "",
    state: "",
    country: "",
    postalcode: "",
  },
};
