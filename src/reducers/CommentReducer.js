export const PostCommentLoading = (state = false, action) => {
    switch (action.type) {
      case "POST_COMMENT_LOADING":
        return (state = action.data);
      default:
        return state;
    }
  };
