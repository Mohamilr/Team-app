import React, { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import UserNav from "../../components/UserNav/UserNav";
import "./GifUpload.css";

// loader
// import Loader from '../../components/Loader';

const baseUrl = "https://team-work-api.herokuapp.com/api/v1";

const GifUpload = () => {
  const [gif, setGif] = useState(null);
  const [gifTitle, setGifTile] = useState("");
  const [fileProp, setFileProp] = useState({ name: "", size: "" });
  const [token, setToken] = useState("");

  useEffect(() => {
    const tokens = localStorage.getItem("token");
    setToken(tokens);
    // if (!token) {
    //   window.location = "http://localhost:3000/login";
    // }
  }, []);

  const handleFileUpload = (e) => {
    if (!e.target.files[0]) {
      return console.log("file upload was cancelled");
    }

    let name = e.target.files[0].name.substr(0, 15);
    let size = e.target.files[0].size;

    if (size <= 1000) {
      size = `${size.toFixed(1)} bytes`;
    } else if (size > 1000 && size <= 1000000) {
      size = `${(size / 1000).toFixed(1)} kb`;
    } else if (size > 1000000 && size <= 1000000000) {
      size = `${(size / 1000000).toFixed(1)} mb`;
    }

    setGif(e.target.files[0]);
    setFileProp({
      name: name,
      size: size,
    });
  };

  const handleGifTitle = (e) => {
    setGifTile(e.target.value);
  };

  const handleGifPost = async () => {
    const gifAuthorId = localStorage.getItem("id");

    const data = new FormData();
    data.append("gif", gif);
    data.append("gifTitle", gifTitle);
    data.append("gifAuthorId", gifAuthorId);

    const response = await fetch(`${baseUrl}/gifs`, {
      method: "POST",
      body: data,
      headers: {
        authorization: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));

    // notifications
    if (!response) {
      return NotificationManager.error(
        "check your internet connection",
        "Connection error!",
        3000
      );
    }
    if (response.error === "image upload must be a gif") {
      return NotificationManager.error(
        "image upload must be a gif",
        "Error!",
        3000
      );
    } else if (response.error === "all fields are required") {
      return NotificationManager.error(
        "upload a gif and add a title",
        "Error!",
        3000
      );
    } else {
      return NotificationManager.success(
        "gif image successfully posted",
        "Successful!",
        3000
      );
    }
  };

  const { name, size } = fileProp;

  return (
    <div className="container">
      <UserNav />
      <div className="gif-upload-container">
        <h1 className="header">Upload A Gif</h1>
        <div className="upload-gif">
          <input
            type="file"
            className="input"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => {
              handleFileUpload(e);
            }}
          />
          <label htmlFor="file">
            <i className="fas fa-plus-circle"></i>
          </label>
          <input
            type="text"
            placeholder="Gif title"
            className="title"
            onChange={(e) => handleGifTitle(e)}
          />
          <div className="preview">
            <p>{name ? name : "gif name"}</p>
            <p>{size ? size : "gif size"}</p>
          </div>
          <button className="btn-upload" onClick={(e) => handleGifPost(e)}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default GifUpload;
