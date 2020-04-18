import React, { useState } from "react";

const AddCommentForm = ({ articleInfo, parent }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    console.log("button clicked");

    await fetch(`/api/articles/${articleInfo.name}/add-comment`, {
      method: "post",
      body: JSON.stringify({
        username,
        text: commentText,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => parent.setState({ articleInfo: data }));
    setCommentText("");
    setUsername("");
  };

  return (
    <div id="add-comment-form">
      <h3>Add a Comment:</h3>
      <label>
        Name:
        <input
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </label>
      <label>
        Comment:
        <textarea
          rows="4"
          cols="50"
          value={commentText}
          onChange={(event) => {
            setCommentText(event.target.value);
          }}
        />
      </label>
      <button onClick={() => addComment()}>Submit</button>
    </div>
  );
};

export default AddCommentForm;
