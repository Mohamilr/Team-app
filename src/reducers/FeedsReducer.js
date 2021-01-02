export const Feeds = (state = [], action) => {
  switch (action.type) {
    case 'FEEDS':
      return state = action.data;
    default:
      return state;
  }
};


export const FeedsLoading = (state = true, action) => {
  switch (action.type) {
    case 'FEEDS_LOADING':
      return state = false;
    default:
      return state;
  }
};

export const MyArticles = (state = [], action) => {
  switch (action.type) {
    case 'MY_ARTICLES':
      return state = action.data;
    default:
      return state;
  }
}

export const MyGifs = (state = [], action) => {
  switch (action.type) {
    case 'MY_GIFS':
      return state = action.data;
    default:
      return state;
  }
}