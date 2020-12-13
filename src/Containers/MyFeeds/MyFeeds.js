import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { MYFeeds as MyFeed } from "../../actions/FeedsAction";
import { REFRESH } from '../../actions/ActionTypes';
import UserNav from "../../components/UserNav/UserNav";
import ApiCall from "../../ApiCalls/ApiCall";
import "./MyFeeds.css";

// loader
import Loader from "../../components/Loader";

const MyFeeds = () => {
  const articles = useSelector((state) => state.MyArticles);
  const gifs = useSelector((state) => state.MyGifs);
  const loading = useSelector((state) => state.FeedsLoading);
  const refresh = useSelector((state) => state.refresh);

  const dispatch = useDispatch();
console.log(gifs)
  useEffect(() => {
    dispatch(MyFeed());
  }, [refresh]);

  // delete article
  const handleDelete = async (type, id) => {
    try {
      const response = await ApiCall.delete(`/${type}/${id}`);
      console.log(response);
      dispatch({ type: REFRESH, data: true});
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container">
      <UserNav />
      <div className="right">
        <div className="headers">
          <h4>Articles</h4> | <h4>Gifs</h4>
        </div>
        <div className="article-container">
          {loading ? (
            <Loader />
          ) : (
            articles.map((article, i) => (
              <div className="articles" key={i}>
                <div className="article-properties">
                  <Link to="/">
                    <h3>{article.title}</h3>
                  </Link>
                  <p>{article.createdon}</p>
                </div>
                <article>{article.article}</article>
                <div className="options">
                  <button className="btn update">Edit</button>
                  <button
                    className="btn delete"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete("articles", article.articleid);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {/* gif area */}
        <div className="gif-container">
          {gifs ? (
            gifs.map((gif, i) => (
              <div className="gifs" key={i}>
                <img src={gif.image} alt="gif" className="gif-image" />
                <div className="gif-properties">
                  <h3>{gif.giftitle}</h3>
                  <div>{gif.gifcreatedon}</div>
                </div>
                <div className="option">
                  <button
                    className="btn delete"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete("gifs", gif.gifid);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1>no gifs</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyFeeds;
