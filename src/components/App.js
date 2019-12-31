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
    currentComment: null
  };

  handleSubmit = comment => {
    this.setState(state => ({
      comments: [...state.comments, { ...user, text: comment }]
    }));
  };

  handleShowProfile = id => {
    this.setState({ currentComment: this.state.comments[id] });
  };

  renderPage() {
    if (this.state.currentComment) {
      return (
        <Profile
          name={this.state.currentComment.name}
          age={this.state.currentComment.age}
          handleBack={() => this.setState({ currentComment: null })}
        />
      );
    }
    return (
      <>
        <CommentBox handleSubmit={this.handleSubmit} user={this.state.user} />
        <CommentList
          comments={this.state.comments}
          handleShowProfile={this.handleShowProfile}
        />
      </>
    );
  }

  render() {
    return this.renderPage();
  }
}

export default App;
