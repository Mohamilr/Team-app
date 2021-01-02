import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PostGif } from "../../actions/PostGifAction";
import { GIF_UPLOADING } from "../../actions/ActionTypes";
import { NotificationManager } from "react-notifications";
import UserNav from "../../components/UserNav/UserNav";
import "./GifUpload.css";

// loader
import Loader from "../../components/Loader";

const GifUpload = () => {
  const [gif, setGif] = useState(null);
  const [gifTitle, setGifTile] = useState("");
  const [fileProp, setFileProp] = useState({ name: "", size: "" });
  const gifLoading = useSelector((state) => state.gifUploading);
  
  //
  const dispatch = useDispatch();

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

  const handleGifPost = () => {
    const gifAuthorId = parseInt(localStorage.getItem("id"));

    const data = new FormData();
    data.append("gif", gif);
    data.append("gifTitle", gifTitle);
    data.append("gifAuthorId", gifAuthorId);

    dispatch({ type: GIF_UPLOADING, data: true });

    dispatch(PostGif(data));
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
          <div>
            {gifLoading ? (
              <Loader />
            ) : (
              <div>
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
                <button
                  className="btn-upload"
                  onClick={(e) => handleGifPost(e)}
                >
                  Upload
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GifUpload;
