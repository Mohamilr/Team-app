export const refresh = (state = false, action) => {
    switch (action.type) {
      case "REFRESH":
        return (state = action.data);
      default:
        return state;
    }
  };

  // export const loading = (state = true, action) => {
  //   switch (action.type) {
  //     case "LOADING":
  //       return (state = false);
  //     default:
  //       return state;
  //   }
  // };