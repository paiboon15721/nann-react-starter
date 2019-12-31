import React from "react";

export default props => (
  <ul>
    {props.comments.map((v, k) => (
      <li key={k}>
        <ul>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => props.handleShowProfile(k)}
          >
            <b>{v.name}</b>
          </li>
          <li>{v.text}</li>
        </ul>
      </li>
    ))}
  </ul>
);
