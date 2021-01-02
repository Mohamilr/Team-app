import React, { useState } from "react";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import './wysiwyg.css';
// Require Editor CSS files.
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export const WysiwygEditor = ({ editorState, setEditorState, setArticle }) => {

    //

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
    convertContentToHTML();
  }

  const convertContentToHTML = () => {
    let currentContentAsHTML = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setArticle(currentContentAsHTML);
    console.log(currentContentAsHTML)
  }

  return (
    <Editor
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
      editorState={editorState}
      onEditorStateChange={handleEditorChange}
    />
  );
};
