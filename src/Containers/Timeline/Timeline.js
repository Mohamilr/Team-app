import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AllFeeds } from "../../actions/FeedsAction";
//
import { descendingOrder } from "../../Utils/SortData";
import { createMarkup } from "../CreateArticle/CreateArticle";
import { Link } from "react-router-dom";
import UserNav from "../../components/UserNav/UserNav";
import "./Timeline.css";

// loader
import Loader from "../../components/Loader";

const Timeline = () => {
  const { articles } = useSelector((state) => state.feeds);
  const { gifs } = useSelector((state) => state.feeds);
  const loading = useSelector((state) => state.FeedsLoading);

  //
  if (articles) {
    descendingOrder(articles);
  }

  if (gifs) {
    descendingOrder(gifs);
  }

  //
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllFeeds());
  }, []);

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
          ) : articles ? (
            articles.map((article, i) => (
              <div className="articles" key={i}>
                <div className="article-properties">
                  <Link to={`/article/${article.articleid}`}>
                    <h3 className="article-title">{article.title}</h3>
                  </Link>
                  <p>{article.createdon}</p>
                </div>
                <article>{article.article}</article>
                <article style={{display: 'inline-block'}}
                  dangerouslySetInnerHTML={createMarkup(article.article)}
                ></article>
              </div>
            ))
          ) : (
            "no articles"
          )}
        </div>
        {/* gif area */}
        <div className="gif-container">
          {gifs
            ? gifs.map((gif, i) => (
                <div className="gif" key={i}>
                  <img src={gif.image} alt="gif" className="gif-image" />
                  <div className="gif-properties">
                    <Link to={`/gif/${gif.giftitle}`}>
                      <h3>{gif.giftitle}</h3>
                    </Link>
                    <div>{gif.gifcreatedon}</div>
                  </div>
                </div>
              ))
            : "no gifs"}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
