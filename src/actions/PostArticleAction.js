import ApiCall from "../ApiCalls/ApiCall";

export const postArticle = (body) => {
  return async (dispatch) => {
    try {
      const response = await ApiCall.post("articles", body);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };
};
