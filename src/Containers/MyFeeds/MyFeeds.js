import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import UserNav from "../../components/UserNav/UserNav";
import ApiCall from "../../ApiCalls/ApiCall";
import "./MyFeeds.css";

// loader
import Loader from "../../components/Loader";

const MyFeeds = () => {
  const [myFeeds, setMyFeeds] = useState([]);
  const [myGifs, setMyGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const id = parseInt(localStorage.getItem("id"));

  useEffect(() => {
    (async function () {
      try {
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
          if (gif.authorid === id) {
            articles.push(gif);
          }
        });
        setMyFeeds(articles);
        setMyGifs(gifs);
        setLoading(false);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [refresh]);

  // delete article
  const handleDelete = async (type, id) => {
    try {
      const response = await ApiCall.delete(`/${type}/${id}`);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
    setRefresh(true);
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
            myFeeds.map((articles, i) => (
              <div className="articles" key={i}>
                <div className="article-properties">
                  <Link to="/">
                    <h3>{articles.title}</h3>
                  </Link>
                  <p>{articles.createdon}</p>
                </div>
                <article>{articles.article}</article>
                <div className="options">
                  <button className="btn update">Edit</button>
                  <button
                    className="btn delete"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete("articles", articles.articleid);
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
          {myGifs.map((gifs, i) => (
            <div className="gifs" key={i}>
              <img src={gifs.image} alt="gif" className="gif-image" />
              <div className="gif-properties">
                <h3>{gifs.giftitle}</h3>
                <div>{gifs.gifcreatedon}</div>
              </div>
              <div className="option">
                <button
                  className="btn delete"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete("gifs", gifs.gifid);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyFeeds;
