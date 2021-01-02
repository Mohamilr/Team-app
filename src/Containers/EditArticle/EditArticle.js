import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EditorState, convertFromHTML, ContentState } from "draft-js";
import { editArticle } from "../../actions/EditArticleAction";
import { getAnArticle } from "../../actions/ViewArticleAction";
import { WysiwygEditor } from "../../shared/WysiwygEditor";
import UserNav from "../../components/UserNav/UserNav";
import "../CreateArticle/CreateArticle.css";

const EditArticle = ({ match }) => {
  const { title } = useSelector((state) => state.getAnArticle);
  const { article } = useSelector((state) => state.getAnArticle);
  //
  const [editedTitle, setEditedTitle] = useState("");
  const [editedArticle, setEditedArticle] = useState("");

  //
  const dispatch = useDispatch();

  const [editorState, setEditorState] = React.useState(null);

  useEffect(() => {
    setEditorState(
      EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(!article ? "<p></p>" : article)
        )
      )
    );
  }, [article]);

  useEffect(() => {
    dispatch(getAnArticle(match.params.id));
  }, []);

  const handleEditArticle = () => {
    const authorId = parseInt(localStorage.getItem("id"));
    const body = {
      title: editedTitle,
      article: editedArticle,
      authorId,
    };
    dispatch(editArticle(body, match.params.id));
  };

  const handleTitle = (e) => {
      setEditedTitle(e.target.value);
  }

  return (
    <div className="container">
      <UserNav />
      <div className="write-article">
        <h1 className="header">Edit Article</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEditArticle();
          }}
        >
          <input
            type="text"
            placeholder="Article Title"
            name="title"
            className="title"
            value={title}
            onChange={(e) => handleTitle(e)}
          />
          <div className="textarea">
            <WysiwygEditor
              editorState={editorState}
              setEditorState={setEditorState}
              setArticle={setEditedArticle}
            />
          </div>
          <button className="btn-upload">Publish</button>
        </form>
      </div>
    </div>
  );
};

export default EditArticle;
