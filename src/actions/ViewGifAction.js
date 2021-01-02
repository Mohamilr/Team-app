import { VIEW_GIF, VIEW_GIF_LOADING, POST_COMMENT_LOADING, REFRESH } from "./ActionTypes";
import ApiCall from "../ApiCalls/ApiCall";

export const getAGif = (id) => {
  return async (dispatch) => {
    try {
      const response = await ApiCall.get(`gifs/${id}`);
      const { data: { data }} = response;

      dispatch({ type: VIEW_GIF_LOADING });
      dispatch({ type: REFRESH, data: false});
      dispatch({ type: POST_COMMENT_LOADING, data: false });
      dispatch({ type: VIEW_GIF, data: data });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
};

export const postComments = (body, id) => {
  return async (dispatch) => {
    try {
      const response = await ApiCall.post(`gifs/${id}/comment`, body);
      
      dispatch({ type: REFRESH, data: true });
      dispatch({ type: POST_COMMENT_LOADING, data: true });
      
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };
};
