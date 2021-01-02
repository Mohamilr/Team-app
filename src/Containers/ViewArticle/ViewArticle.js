import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAnArticle, postComments } from "../../actions/ViewArticleAction";
// 
import { createMarkup } from '../CreateArticle/CreateArticle';
import Loader from "../../components/Loader";
import "./ViewArticle.css";

const ViewArticle = ({ match }) => {
  const [writeComment, setWriteComment] = useState('');
  const { title } = useSelector((state) => state.getAnArticle);
  const { article } = useSelector((state) => state.getAnArticle);
  const { comment } = useSelector((state) => state.getAnArticle);
  const loading = useSelector((state) => state.getAnArticleLoading);
  const refresh = useSelector((state) => state.refresh);
  const CommentLoading = useSelector((state) => state.PostCommentLoading);
  //
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnArticle(match.params.id));
  }, [refresh]);

  const handleComment = (e) => {
    setWriteComment(e.target.value);
  };

  const handleCommentPost = () => {
      const authorId = parseInt(localStorage.getItem('id'));
      const data = { comment: writeComment, authorId }
    
      dispatch(postComments(data, match.params.id));

  }

  return (
    <div className="view-container">
      <div className="article">
        {/* <Link to='/feeds'>Back to feeds</Link> */}
        <h2>{title}</h2>
        <article>{article}</article>
        <article dangerouslySetInnerHTML={createMarkup(article)}></article>
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
        <div className='comments'>
          {loading ? (
            <Loader />
          ) : comment ? (
            comment.map((comment, i) => (
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

export default ViewArticle;
