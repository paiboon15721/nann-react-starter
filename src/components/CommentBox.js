import React from "react";

class CommentBox extends React.PureComponent {
  state = { comment: "" };

  handleTextChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = () => {
    this.props.handleSubmit(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <>
        <textarea
          value={this.state.comment}
          onChange={this.handleTextChange}
          rows="3"
        />
        <button onClick={this.handleSubmit}>Add comment</button>
      </>
    );
  }
}

export default CommentBox;
