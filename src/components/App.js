import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import Profile from "./Profile";

const user = {
  name: "paiboon",
  age: "30"
};
class App extends React.Component {
  state = {
    comments: [],
    currentComment: { name: null }
  };

  handleSubmit = comment => {
    this.setState(state => ({
      comments: [...state.comments, { ...user, text: comment }]
    }));
  };

  handleShowProfile = id => {
    this.setState({ currentComment: this.state.comments[id] });
  };

  render() {
    const { currentComment, comments } = this.state;
    return (
      <>
        <CommentBox handleSubmit={this.handleSubmit} />
        <CommentList
          comments={comments}
          handleShowProfile={this.handleShowProfile}
        />
        {currentComment && (
          <Profile
            comment={currentComment}
            handleBack={() => this.setState({ currentComment: null })}
          />
        )}
      </>
    );
  }
}

export default App;
