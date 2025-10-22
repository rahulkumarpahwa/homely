export const reducer = (state, actions) => {
  switch (actions.type) {
    case "NEW_TITLE":
      return { ...state, title: actions.payload };
    case "NEW_DESCRIPTION":
      return { ...state, description: actions.payload };
    case "NEW_IMAGEURL":
      return { ...state, imageUrl: actions.payload };
    case "NEW_STREET":
      return { ...state, street: actions.payload };
    case "NEW_LOCATION":
      return { ...state, location: actions.payload };
  }
};
