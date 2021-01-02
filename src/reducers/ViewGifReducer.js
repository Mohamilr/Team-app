export const getAGif = (state = [], action) => {
    switch (action.type) {
      case "VIEW_GIF":
        return (state = action.data);
      default:
        return state;
    }
  };
  
  export const getAGifLoading = (state = true, action) => {
    switch (action.type) {
      case "VIEW_GIF_LOADING":
        return (state = false);
      default:
        return state;
    }
  };