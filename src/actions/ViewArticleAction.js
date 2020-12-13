import { VIEW_ARTICLE, VIEW_ARTICLE_LOADING, POST_COMMENT_LOADING, REFRESH } from "./ActionTypes";
import ApiCall from "../ApiCalls/ApiCall";

export const getAnArticle = (id) => {
  return async (dispatch) => {
    try {
      const response = await ApiCall.get(`articles/${id}`);
      const { data: { data }} = response;

      dispatch({ type: VIEW_ARTICLE_LOADING });
      dispatch({ type: REFRESH, data: false});
      dispatch({ type: POST_COMMENT_LOADING, data: false });
      dispatch({ type: VIEW_ARTICLE, data: data });
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };
};

export const PostComments = (body, id) => {
  return async (dispatch) => {
    try {
      const response = await ApiCall.post(`articles/${id}/comment`, body);
      
      dispatch({ type: REFRESH, data: true });
      dispatch({ type: POST_COMMENT_LOADING, data: true });
      
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };
};
