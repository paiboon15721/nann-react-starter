import React from "react";

export default props => (
  <>
    <textarea
      value={props.comment}
      onChange={props.handleTextChange}
      rows="3"
    />
    <button onClick={props.handleSubmit}>Add comment</button>
  </>
);
