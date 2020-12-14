import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAGif, postComments } from "../../actions/ViewGifAction";
import Loader from "../../components/Loader";
import "./ViewGif.css";

const ViewGif = ({ match }) => {
  const [writeComment, setWriteComment] = useState("");
  const { title } = useSelector((state) => state.getAGif);
  const { url } = useSelector((state) => state.getAGif);
  const { comments } = useSelector((state) => state.getAGif);
  const loading = useSelector((state) => state.getAGifLoading);
  const refresh = useSelector((state) => state.refresh);
  const CommentLoading = useSelector((state) => state.PostCommentLoading);

  //
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAGif(match.params.id));
  }, [refresh]);

  const handleComment = (e) => {
    e.preventDefault();
    setWriteComment(e.target.value);
  };

  const handleCommentPost = () => {
    const authorId = parseInt(localStorage.getItem("id"));
    const data = { comment: writeComment, authorId };

    dispatch(postComments(data, match.params.id));
  };

  return (
    <div className="view-container">
      <div className="view-gif">
        {/* <Link to='/feeds'>Back to feeds</Link> */}
        <h2>{title}</h2>
        <div>
          <img src={url} alt="gif" style={{ width: "20em" }} />
        </div>
      </div>
      <hr />
      <div className="comment-section">
        <div>
          <form className="comment-form">
            <input
              placeholder="Comment"
              className="comment-field"
              onChange={(e) => handleComment(e)}
            />
            <br />
            {CommentLoading ? (
              <Loader />
            ) : (
              <button
                className="btn-comment"
                onClick={(e) => {
                  e.preventDefault();
                    handleCommentPost();
                }}
              >
                Comment
              </button>
            )}
          </form>
        </div>
        <div className="comments">
         
          {loading ? (
            <Loader />
          ) : comments ? (
            comments.map((comment, i) => (
              <div className="comment" key={i}>
                {/* <div className='article-properties'>
            <p>time</p>
        </div> */}
                <article>{comment.comment}</article>
              </div>
            ))
          ) : (
            "no comments"
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewGif;
