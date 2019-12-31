import React from "react";

export default props => (
  <>
    <ul>
      <li>Name: {props.comment.name}</li>
      <li>Age: {props.comment.age}</li>
      <li>Comment: {props.comment.text}</li>
    </ul>
    <button onClick={props.handleBack}>Back</button>
  </>
);
