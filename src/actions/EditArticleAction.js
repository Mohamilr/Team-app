import ApiCall from "../ApiCalls/ApiCall";

export const editArticle = (body, id) => {
  return async (dispatch) => {
    try {
      const response = await ApiCall.patch(`articles/${id}`, body);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };
};