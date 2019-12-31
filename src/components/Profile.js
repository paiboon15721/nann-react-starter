import React from "react";

const Profile = props => {
  console.log("render");
  return (
    <>
      <ul>
        <li>Name: {props.comment.name}</li>
        <li>Age: {props.comment.age}</li>
        <li>Comment: {props.comment.text}</li>
      </ul>
      <button onClick={props.handleBack}>Back</button>
    </>
  );
};

export default Profile;
