import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserNav from "../../components/UserNav/UserNav";
import "./Timeline.css";

// loader
import Loader from "../../components/Loader";
import ApiCall from "../../ApiCalls/ApiCall";

const Timeline = () => {
  const [articleFeeds, setArticleFeeds] = useState([]);
  const [gifFeeds, setGifFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
        try {
          const response = await ApiCall.get("/feed");
          const { data: { data } } = response;

          setArticleFeeds(data.articles);
          setGifFeeds(data.gifs);
            setLoading(false);
          console.log(data);
        } catch (e) {
          console.error(e);
        }
    })();

  }, []);

  return (
    <div className="container">
      <UserNav />
      <div className="right">
        <div className="headers">
          <h4>Articles</h4> | <h4>Gifs</h4>
        </div>
        <div className="article-container">
          {articleFeeds === null || loading ? (
            <Loader />
          ) : (
            articleFeeds.map((articles, i) => {
              return (
                <div className="articles" key={i}>
                  <div className="article-properties">
                    <Link to="/">
                      <h3 className="article-title">{articles.title}</h3>
                    </Link>
                    <p>{articles.createdon}</p>
                  </div>
                  <article>
                    {articles.article}
                    {/* .length > 200 ?
                                            `${articles.article.substr(0, 200)}...`
                                        } */}
                  </article>
                </div>
              );
            })
          )}
        </div>
        {/* gif area */}
        <div className="gif-container">
          {gifFeeds.map((gifs, i) => {
            return (
              <div className="gifs" key={i}>
                <img src={gifs.image} alt="gif" className="gif-image" />
                <div className="gif-properties">
                  <h3>{gifs.giftitle}</h3>
                  <div>{gifs.gifcreatedon}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
