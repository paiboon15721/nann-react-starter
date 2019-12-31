import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import Profile from "./Profile";

const user = {
  name: "paiboon",
  age: "30"
};
class App extends React.PureComponent {
  state = {
    comments: [],
    currentComment: { name: null },
    title: { name: "my app" }
  };

  handleSubmit = comment => {
    this.setState(state => ({
      comments: [...state.comments, { ...user, text: comment }]
    }));
  };

  handleShowProfile = id => {
    this.setState({ currentComment: this.state.comments[id] });
  };

  handleChangeTitle = e => {
    this.setState({ title: { name: e.target.value } });
  };

  render() {
    const { currentComment, comments } = this.state;
    return (
      <>
        <input
          value={this.state.title.name}
          onChange={this.handleChangeTitle}
        />
        <h1>{this.state.title.name}</h1>
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
