export const loginReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
     return state = true;
    default:
      return state;
  }
};

export const SignupReducer = (state = false, action) => {
    switch (action.type) {
        case "SIGNUP":
         return state = true;
        default:
          return state;
      }
};
