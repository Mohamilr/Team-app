import { FEEDS, FEEDS_LOADING, MY_ARTICLES, MY_GIFS, REFRESH } from './ActionTypes';
import ApiCall from '../ApiCalls/ApiCall';

export const AllFeeds = () => {
    return async dispatch => {
        try {
            const response = await ApiCall.get("/feed");
            const { data: { data } } = response;
              dispatch({ type: FEEDS, data: data });
              dispatch({ type: FEEDS_LOADING });
            console.log(data);
          } catch (e) {
            console.error(e);
          }

    }
}

export const MYFeeds = () => {
    return async dispatch => {
        try {
            const id = parseInt(localStorage.getItem("id"));
            const response = await ApiCall.get("/feed");
            const {
              data: { data },
            } = response;

            const articles = [];
            const gifs = [];

            data.articles.map((article) => {
              if (article.authorid === id) {
                articles.push(article);
              }
            });

            data.gifs.map((gif) => {
              if (gif.gifauthorid === id) {
                gifs.push(gif);
              }
            });

            dispatch({ type: MY_ARTICLES, data: articles });
            dispatch({ type: MY_GIFS, data: gifs });
            dispatch({ type: FEEDS_LOADING });
            dispatch({ type: REFRESH, data: false});
            console.log(data);
          } catch (e) {
            console.error(e);
          }
    }
}
