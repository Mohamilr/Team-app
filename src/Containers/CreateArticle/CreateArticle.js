import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import DOMPurify from 'dompurify';
import { WysiwygEditor } from '../../shared/WysiwygEditor';
import { postArticle } from '../../actions/PostArticleAction';
import UserNav from "../../components/UserNav/UserNav";
import "./CreateArticle.css";


// new stuff here
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

export const createMarkup = (html) => {
  return  {
    __html: DOMPurify.sanitize(html)
  }
}

const ArticlePage = () => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");


  // new changes here
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  //
  const dispatch = useDispatch();
  
  const handlePostArticle = () => {
    const authorId = parseInt(localStorage.getItem("id"));
    const body = {
      title,
      article,
      authorId
    }
    dispatch(postArticle(body));
  }

  const handleTitle = (e) => {
      setTitle(e.target.value);
  }

  return (
    <div className="container">
      <UserNav />
      <div className="write-article">
        <h1 className="header">Write Your Article</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          handlePostArticle()
        }}>
          <input
            type="text"
            placeholder="Article Title"
            name="title"
            className="title"
            onChange={(e) => handleTitle(e)}
          />
          <div className="textarea">
            <WysiwygEditor editorState={editorState} setEditorState={setEditorState} setArticle={setArticle} />
          </div>
          <button className="btn-upload">Publish</button>
        </form>
      </div>
    </div>
  );
};

export default ArticlePage;
