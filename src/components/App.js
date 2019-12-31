import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

class App extends React.PureComponent {
  state = {
    comments: []
  };

  handleSubmit = comment => {
    this.setState(state => ({
      comments: [...state.comments, comment]
    }));
  };

  handleShowProfile = id => {
    this.setState({ currentComment: this.state.comments[id] });
  };

  render() {
    const { comments } = this.state;
    return (
      <>
        <CommentBox handleSubmit={this.handleSubmit} />
        <CommentList
          comments={comments}
          handleShowProfile={this.handleShowProfile}
        />
      </>
    );
  }
}

export default App;
