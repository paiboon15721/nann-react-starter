import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

class App extends React.Component {
  state = {
    comment: "",
    comments: []
  };

  handleTextChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = () => {
    this.setState(state => ({
      comments: [...state.comments, state.comment]
    }));
    this.setState({ comment: "" });
  };

  render() {
    return (
      <>
        <CommentBox
          comment={this.state.comment}
          handleTextChange={this.handleTextChange}
          handleSubmit={this.handleSubmit}
        />
        <CommentList comments={this.state.comments} />
      </>
    );
  }
}

export default App;
