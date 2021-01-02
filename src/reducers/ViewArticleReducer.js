export const getAnArticle = (state = [], action) => {
  switch (action.type) {
    case "VIEW_ARTICLE":
      return (state = action.data);
    default:
      return state;
  }
};

export const getAnArticleLoading = (state = true, action) => {
  switch (action.type) {
    case "VIEW_ARTICLE_LOADING":
      return (state = false);
    default:
      return state;
  }
};
