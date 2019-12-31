import React from "react";

export default props => (
  <>
    <ul>
      <li>Name: {props.name}</li>
      <li>Age: {props.age}</li>
    </ul>
    <button onClick={props.handleBack}>Back</button>
  </>
);
