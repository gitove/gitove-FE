import React, { useRef } from "react";
import { useDispatch } from "react-redux";
// import styled from "styled-components";
import { postBlogCommentDB } from "../../../redux/async/blog.js";
import { useParams } from "react-router-dom";
const CommentAdd = () => {
  const dispatch = useDispatch();
  const commentRefInput = useRef();
  const { id } = useParams();
  //댓글 추가 이벤트

  const addComment = e => {
    e.preventDefault();
    dispatch(
      postBlogCommentDB({
        comment: commentRefInput.current.value,
        id: parseInt(id),
        // id,
      }),
    );
    commentRefInput.current.value = "";
  };

  return (
    <div>
      <input
        type="text"
        ref={commentRefInput}
        placeholder={"20자이하"}
        maxLength="20"
      />

      <button onClick={addComment}>추가하기</button>
    </div>
  );
};

export default CommentAdd;
